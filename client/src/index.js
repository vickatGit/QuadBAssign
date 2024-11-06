import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div
      className="d-flex justify-content-center"
      style={{
        border: "solid 1px #191d28",
        backgroundColor: "#191d28",
        position: "fixed",
        left: "0",
        alignItems: "center",
        width: "100vw",
        height: "47px",
        bottom: "0",
        zIndex: "8",
      }}
    >
      <button
        className="add-button btn btn-outline-info"
        style={{ display: "block" }}
      >
        Add hodlinfo to home screen
      </button>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
