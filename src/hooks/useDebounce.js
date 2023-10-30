import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    //delay가 지나면 value의 state를 변경해준다.
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
        //delay가 다 지나기 전에 타이핑이 있으면 그것이 완료된 후 다시 시간을 센다.
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};