import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="blob blob-one"></div>
      <div className="blob blob-two"></div>

      <div className="card">
        <div className="icon">⚡</div>

        <h1>Counter App</h1>

        <p className="subtitle">
          Simple, modern & interactive counter
        </p>

        <div className="display">
          <div
            className={`number ${
              count > 0 ? "positive" : count < 0 ? "negative" : ""
            }`}
          >
            {count}
          </div>
        </div>

        <div className="status">
          {count > 0
            ? "Positive Value"
            : count < 0
            ? "Negative Value"
            : "Current Value"}
        </div>

        <div className="buttons">
          <button className="main-btn minus" onClick={decrease}>
            −
          </button>

          <button className="main-btn reset" onClick={reset}>
            ↻
          </button>

          <button className="main-btn plus" onClick={increase}>
            +
          </button>
        </div>

        <p className="step-title">Step Value</p>

        <div className="step-control">
          <button
            className="step-btn"
            onClick={() => setStep(Math.max(1, step - 1))}
          >
            −
          </button>

          <input
            className="step-input"
            type="number"
            min="1"
            value={step}
            onChange={(e) =>
              setStep(Math.max(1, Number(e.target.value)))
            }
          />

          <button
            className="step-btn"
            onClick={() => setStep(step + 1)}
          >
            +
          </button>
        </div>

        <div className="footer">
          <span>Counter App</span>
          <span>React • JavaScript</span>
        </div>
      </div>
    </div>
  );
}

export default App;