import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import {firebaseConfig} from "./components/helpers/firebase/firebaseConfig";

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { StyledEngineProvider } from "@mui/material/styles";



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
<StyledEngineProvider>
    <App />
</StyledEngineProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


