import { useCounter } from "../hooks";

export const Buttons = () => {
  const { counter, isDisableIncrement, buttons } = useCounter();

  return (
    <section className="global-centered global-direction-column">
      <h2>Counter</h2>
      <h3>{counter}</h3>

      <div>
        <button
          className="global-primary-button"
          onClick={buttons.handleClickDecrement}
          disabled={isDisableIncrement}
        >
          Decrement
        </button>
        <button
          className="global-primary-button"
          onClick={buttons.handleClickIncrement}
        >
          Increment
        </button>
      </div>
    </section>
  );
};

export default Buttons;
