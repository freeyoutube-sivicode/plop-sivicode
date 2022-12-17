import React from "react";
import ReactDOM from "react-dom/client";
import { ProfilePage, TestPage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HomePage /> */}
    <TestPage />
  </React.StrictMode>
);
