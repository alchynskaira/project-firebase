import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import {firebaseConfig} from "./firebaseConfig";

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


