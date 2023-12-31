import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import App from "./App";
import PdfEditor from "./component/PdfEditor";
import reportWebVitals from "./reportWebVitals";
import { PDFViewer } from "@react-pdf/renderer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <PdfEditor />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
