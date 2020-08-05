import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import Main from "./routes/Main";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <Main />
  </Router>,
  document.getElementById("root")
);
