import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeCSSOptimizations } from "./utils/optimize-css";

// Initialize CSS optimizations for better performance
initializeCSSOptimizations();

createRoot(document.getElementById("root")!).render(<App />);
