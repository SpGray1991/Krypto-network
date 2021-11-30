import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hi", like: 300 },
  { id: 2, message: "How are you?", like: 350 },
  { id: 3, message: "i'm fine!" },
  { id: 4, message: "" },
];

let dialogs = [
  { id: 1, name: "Brother" },
  { id: 2, name: "Kostya" },
  { id: 3, name: "Sanya" },
  { id: 4, name: "Dimon" },
  { id: 5, name: "Vanya" },
  { id: 6, name: "Toha" },
  { id: 7, name: "Kerya" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "i'm fine!" },
  { id: 4, message: "Ok" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
