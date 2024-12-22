import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Router from "./config/routes.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>
);
