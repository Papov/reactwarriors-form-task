import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/store";
import { Provider } from "mobx-react";
import { App } from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
