import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //StricMode solo se utiliza en desarrollo
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
