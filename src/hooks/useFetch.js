import {useState, useEffect, useCallback} from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const refetch = useCallback(({params}) => {
        let resultUrl = url;

        if (params) {
            resultUrl += '?' + Object.entries(params)
                .map(([key, value]) => {
                    return `${encodeURI(key)}=${encodeURI(value)}`;
                })
                .join('&');
        }

        fetchWrapper(resultUrl);
    }, [url])

    function fetchWrapper(url) {
        setError(null);
        setIsLoading(true);

        return fetch(url)
            .finally(() => {
                setIsLoading(false)
            })
            .then(res => res.json())
            .then(setData)
            .catch(setError);
    }

    useEffect(() => {
        fetchWrapper(url)
    }, [url]);

    return {
        data,
        error,
        isLoading,
        refetch,
    }
}
