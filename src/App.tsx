// All photos by Matt Perry https://citizenofnowhe.re
import "./index.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Gallery } from "./template/Gallery";
import { amsterdamPhotosMetadata, londonPhotosMetadata } from "./data";

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
          photos={amsterdamPhotosMetadata}
          title="A Programmers Best Friend"
          titleWidth={8.2}
          category="coffee"
          alt="Coffee"
        />
      )
    },
    {
      path: "/london",
      element: (
        <Gallery
          photos={londonPhotosMetadata}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="canary"
          alt="A building in Canary Wharf"
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
