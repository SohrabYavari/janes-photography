import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import { Footer } from "./components/Navigation/Footer.tsx";
import { Navbar } from "./components/Navigation/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer title="Lets Immortalize Your Special Day!" url="/" />
    </BrowserRouter>
  </React.StrictMode>
);
