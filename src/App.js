import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";//./actions/index

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  // Dispatch An Action
  const dispatch = useDispatch();

  return (
    <main className="App">
      <h1>
        Counter { counter }
      </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>{/*Increments by 5 instead of by 1. To look "actions/index.js" & "reducers/counter.js" changes*/}
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable Information I Shouldn't See <br/>If Not Logged In</h3> : ""}
    </main>
  );
}

export default App;