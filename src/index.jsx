import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Container from "./props_lesson/Container";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
