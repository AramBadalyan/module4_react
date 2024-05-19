import { useState } from "react";

export function useLocalStorage(initial) {
  const [token, setToken] = useState(initial)

  return [token, {
    setItem: (newToken) => setToken(newToken),
    removeItem: () => setToken(null),
  }];
}
