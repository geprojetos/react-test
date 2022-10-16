import { useEffect, useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [isDisableIncrement, setIsDisableIncrement] = useState(true);

  useEffect(() => {
    buttons.utils.isDisableIncrementButton();
  }, [counter]);

  const buttons = {
    handleClickIncrement: () => {
      setCounter((oldState) => oldState + 1);
    },
    handleClickDecrement: () => {
      setCounter((oldState) => buttons.utils.isValidOldState(oldState));
    },
    utils: {
      isValidOldState: (oldState: number) => {
        return oldState > 0 ? oldState - 1 : 0;
      },
      isDisableIncrementButton: () => {
        if (counter === 0) {
          setIsDisableIncrement(true);
          return;
        }
        setIsDisableIncrement(false);
      },
    },
  };

  return { counter, buttons, isDisableIncrement };
};

export { useCounter };
