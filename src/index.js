import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const channel = new BroadcastChannel("CTIChannel");

channel.onmessage = (e) => {
  console.log("on message", e);
};

setInterval(() => {
  console.log(" setInterval running", e);
  channel.postMessage("custom message");
}, 5000);
