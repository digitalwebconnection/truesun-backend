
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // or your CSS file (optional)

const rootEl = document.getElementById("root");
if (rootEl) {
  hydrateRoot(
    rootEl,
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  );
} else {
  console.error("Root element not found for hydration");
}
