import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // <-- ajouter


createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/PF/"> {/* <-- important pour GitHub Pages */}
    <App />
  </BrowserRouter>
);