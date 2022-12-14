import "./styles.css";
import { Buttons } from "./components/counter";
import { Form } from "./components/form";
import { GitHub } from "./components/gitHub/";

export default function App() {
  return (
    <div className="App">
      <h1 className="global-text-centered">
        React with{" "}
        <span className="global-text-main">@testing-library/react-hooks</span>
      </h1>
      <section className="global-centered">
        <div className="global-box">
          <Buttons />
        </div>
      </section>

      <span className="global-divisor"></span>

      <section className="global-centered">
        <div className="global-box">
          <Form />
        </div>
      </section>

      <span className="global-divisor"></span>

      <section className="global-centered">
        <div className="global-box">
          <GitHub />
        </div>
      </section>
    </div>
  );
}
