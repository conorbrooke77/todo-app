import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Page } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page></Page>
  </StrictMode>
);
