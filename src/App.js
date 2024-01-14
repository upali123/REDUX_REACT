import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementNum, deccrementNum } from "./Actions/index";

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.IncrementReducer);
  console.log({ myState });
  // const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        Increment/Decrement Counter
        <div className="head">
          <button
            className="App-subheader"
            onClick={() => dispatch(deccrementNum())}
          >
            -
          </button>
          <span>{myState}</span>
          <button
            onClick={() => dispatch(incrementNum())}
            className="App-subheader"
          >
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
