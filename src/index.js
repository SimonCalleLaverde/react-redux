import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//----------------------------------REACT REDUX Example 2----------------------------------//

import { createStore } from "redux";//combineReducers
import allReducers from "./reducers"//./reducers/allReducers//./reducers/index//Webpack looks at "index.js" in this folder
import { Provider } from "react-redux";//Connects our global state (store) to our entire <App/>

// STORE
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//----------------------------------REACT REDUX Example 1----------------------------------//

// import { createStore } from "redux";

// // STORE (Storage) (Globalized State) (Holds All The Data/State Of The App)
// //let store = createStore(reducer);

// // ACTION (Describes What You Want To Do) (Increment)
// const increment = () => {
//   return {
//     type: "INCREMENT"//Is the name, but must be spelled as "type"
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT"//Is the name, but must be spelled as "type"
//   };
// };

// // REDUCER (How Your Actions Transform The State, Into The Next State) (Checks What To Do, And Then The Store Gets Updated)
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };
// let store = createStore(counter);

// // Display It In The Console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH (Final Step) (Execute That Action) (Dispatch This Action To The Reducer)
// store.dispatch(increment());//Dispatch an Action
// store.dispatch(decrement());
// store.dispatch(decrement());

//----------------------------------REACT App Rendering----------------------------------//

ReactDOM.render(
  <Provider store={ myStore }>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();