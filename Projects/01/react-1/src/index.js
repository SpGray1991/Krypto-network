import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

/* let rerenderEntireTree = () => { */
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
      /* state={state}
          dispatch={store.dispatch.bind(store)}
          store={store} */
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

/* }; */

/* rerenderEntireTree(); */

/* store.subscribe(() => {
  rerenderEntireTree();
}); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* export default rerenderEntireTree; */
