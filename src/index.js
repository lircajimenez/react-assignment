import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TagsProvider } from "./components/TagsContext";

ReactDOM.render(
  <TagsProvider>
    <App />
  </TagsProvider>,
  document.getElementById("root")
);
