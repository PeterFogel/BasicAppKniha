import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { AppContextProvider } from "./helpers/AppContext";
import { ModalContextProvider } from "./helpers/ModalContext";
import "./styles.css";
import NoContextPage from "./pages/companies/NoContextPage";

const root = document.getElementById("root");

createRoot(root).render(
  <Router>
    <ModalContextProvider>
      <Routes>
        <Route path="/no-context" element={<NoContextPage />} />
        <Route
          path="*"
          element={
            <AppContextProvider>
              <App />
            </AppContextProvider>
          }
        />
      </Routes>
    </ModalContextProvider>
  </Router>
);
