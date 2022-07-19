// useLocalStorage.js

import { useState, useEffect } from "react";

//https://www.daleseo.com/react-hooks-use-web-storage/
function useLocalStorage(key: string, initialState: any) {
  const [state, setState] = useState(() =>
    JSON.parse(window.localStorage.getItem(key) || initialState)
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
