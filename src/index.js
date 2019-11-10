import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { RegularApproach } from "./RegularApproach";
import { SuspenseApproach } from "./SuspenseApproach";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SuspenseApproach />
);
