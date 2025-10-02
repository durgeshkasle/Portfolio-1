import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from './theme';

// 👉 Import fonts here (global)
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";


import "./index.css";
import App from "./App";
import store from "./store";
import ErrorBoundary from "./components/errorHandlerComponents/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/* resets & applies global MUI styles */}
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </ThemeProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

