
import "./index.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./components/Gallery";
import { cabinPhotosMetadata, coffeePhotosMetadata } from "./data";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/coffee",
      element: (
        <Gallery
          photos={coffeePhotosMetadata}
          title="A Programmers Best Friend"
          category="coffee"
          alt="Coffee"
        />
      )
    },
    {
      path: "/silence",
      element: (
        <Gallery
          photos={cabinPhotosMetadata}
          title="Silence & Serenity"
          category="cabin"
          alt="Cabin in the Woods"
        />
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
