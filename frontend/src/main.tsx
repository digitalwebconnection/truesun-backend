import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  );
} else {
  console.error("Root element not found");
}
