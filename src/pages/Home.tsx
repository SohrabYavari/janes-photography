import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";

export function Home() {
  const isPresent = useIsPresent();
  return (
    <article>
      <h1>
        Galleries
      </h1>
      <ul>
        <li className="relative transition duration-300 ease-in-out underline-animation">
          <Link to="/coffee">A Programers Best Friend</Link>
        </li>
        <li className="relative transition duration-300 ease-in-out underline-animation">
          <Link to="/silence">Silence & Serenity</Link>
        </li>
      </ul>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </article>
  );
}

