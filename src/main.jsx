import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App.jsx'
import Entry from "./entry/Entry.jsx";
import Recoverpass from "./entry/Recoverpass.jsx";
import CreateNewPass from "./entry/CreateNewPass.jsx";
import Registrate from "./entry/Registrate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
  {
    path: '/entry',
    element: <Entry />
  },
  {
    path: '/recoverpass',
    element: <Recoverpass/>
  },
  {
    path: '/createpass',
    element: <CreateNewPass />
  },
  {
    path: '/registrate',
    element: <Registrate />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);