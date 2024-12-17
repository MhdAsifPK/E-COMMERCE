import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FireBaseContext } from "./context/myContext.jsx";
import {app} from "../src/assets/Firebase/firebaseConfig.js";
import Context from '../src/context/myContext.jsx'
// import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FireBaseContext.Provider value={{app}}>
      <Context>

      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Context>
    </FireBaseContext.Provider>

    {/* <BrowserRouter> */}
    {/* <ToastContainer> */}

    {/* <App /> */}
    {/* </ToastContainer> */}
    {/* </BrowserRouter> */}
  </StrictMode>
);
