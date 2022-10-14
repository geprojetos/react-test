import { useState } from "react";

const useButtons = () => {
  const [counter, setCounter] = useState(0);

  const buttons = {
    handleClickIncrement: () => {
      setCounter((oldState) => oldState + 1);
    },
    handleClickDecrement: () => {
      setCounter((oldState) => oldState - 1);
    },
  };

  return { counter, buttons };
};

export { useButtons };
