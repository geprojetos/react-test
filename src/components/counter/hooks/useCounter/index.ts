import { useEffect, useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [isDisableIncrement, setIsDisableIncrement] = useState(true);

  useEffect(() => {
    buttons.utils.isDisableIncrementButton();
  }, [counter]);

  const buttons = {
    handleClickIncrement: () => {
      state.setCounter(buttons.utils.increment);
    },
    handleClickDecrement: () => {
      state.setCounter(buttons.utils.isDecrement);
    },
    utils: {
      increment: (oldState: number) => {
        return oldState + 1;
      },
      isDecrement: (oldState: number) => {
        return oldState > 0 ? oldState - 1 : 0;
      },
      isDisableIncrementButton: () => {
        if (counter === 0) {
          state.setIsDisableIncrement(true);
          return;
        }
        state.setIsDisableIncrement(false);
      },
    },
  };

  const state = {
    setCounter: (fn: React.SetStateAction<number>) => {
      setCounter(fn);
    },
    setIsDisableIncrement: (isDisable: boolean) => {
      setIsDisableIncrement(isDisable);
    },
  };

  return { counter, buttons, isDisableIncrement };
};

export { useCounter };
