import {useState, useEffect, useRef} from 'react';

export function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef();

    function mouseEnterHandler() {
        setHovered(true);
    }

    function mouseLeaveHandler() {
        setHovered(false);
    }

    useEffect(() => {
        ref.current.addEventListener('mouseenter', mouseEnterHandler)
        ref.current.addEventListener('mouseleave', mouseLeaveHandler)

        return () => {
            ref.current.removeEventListener('mouseenter', mouseLeaveHandler)
            ref.current.removeEventListener('mouseleave', mouseLeaveHandler)
        }
    }, [])

    return {hovered, ref}
}
