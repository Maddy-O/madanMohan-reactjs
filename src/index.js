import "./index.css";
import App from "./App";
import axios from "axios";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./Redux/store";

axios.defaults.baseURL = "https://upayments-studycase-api.herokuapp.com/api";
axios.defaults.headers["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hZGFuZG9vcjdzQGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9NYWRkeS1PIiwiaWF0IjoxNjYzOTk2ODI4LCJleHAiOjE2NjQ0Mjg4Mjh9.YeFpLfWn16YHyWYjDedac8JiGaj9IIOGEVD7Bp3K_qo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
