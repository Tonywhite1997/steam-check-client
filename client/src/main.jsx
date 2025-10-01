import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App";

const url =
  import.meta.env.VITE_APP_ENV === "development"
    ? "http://localhost:5000/api"
    : import.meta.env.VITE_APP_PROD_URL;

export const api = Axios.create({
  baseURL: url,
  withCredentials: true,
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<App />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </StrictMode>
);
