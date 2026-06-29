import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "sonner";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import KeepAlive from "./services/KeepAlive.tsx";
import { initializeAnalytics } from "./lib/analytics.ts";

KeepAlive();
initializeAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster richColors position="top-center" />
      <App />
    </ThemeProvider>
  </StrictMode>
);