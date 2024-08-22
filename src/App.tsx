import "./index.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import Form from "./pages/Form";
import Proposals from "./pages/Proposals";
import Wedding from "./pages/Wedding";
import Reception from "./pages/Reception";
import Home from "./pages/Home";
import VerticalCarousel from "./components/Carousel/VerticalCarousel";

const ProposalImages = [
  "/public/proposals/proposal-1.jpg",
  "/public/proposals/proposal-2.jpg",
  "/public/proposals/proposal-3.jpg",
  "/public/proposals/proposal-4.jpg",
  "/public/proposals/proposal-5.jpg",
  "/public/proposals/proposal-6.jpg",
  "/public/proposals/proposal-7.jpg",
  "/public/proposals/proposal-8.jpg",
];

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/proposal",
      element: <Proposals />,
    },
    {
      path: "/reception",
      element: <Reception />,
    },
    {
      path: "/wedding",
      element: <Wedding />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/test",
      element: <VerticalCarousel images={ProposalImages}/>,
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
