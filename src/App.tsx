// React Imports
import * as React from "react";
import { useLocation, useRoutes } from "react-router-dom";

// framer-motion
import { AnimatePresence } from "framer-motion";

// Component Imports
import Home from "./pages/Home";
import Proposals from "./pages/Proposals";
import Wedding from "./pages/Wedding";
import Reception from "./pages/Reception";
import Form from "./pages/Form";

// Styles
import "./index.css";

export default function App() {
  const element = useRoutes([
    {
      path: "/janes-photography/",
      element: <Home />,
    },
    {
      path: "/janes-photography/proposal",
      element: <Proposals />,
    },
    {
      path: "/janes-photography/reception",
      element: <Reception />,
    },
    {
      path: "/janes-photography/wedding",
      element: <Wedding />,
    },
    {
      path: "/janes-photography/form",
      element: <Form />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
