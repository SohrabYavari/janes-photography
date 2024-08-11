import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";

const Routes = [
  { id: 1, to: "/coffee", name: "A Programmers Best Friend" },
  { id: 2, to: "/silence", name: "Silence & Serenity" },
];

export const Home: React.FC = (): JSX.Element => {
  const isPresent = useIsPresent();
  return (
    <article>
      <h1>Galleries</h1>
      <ul>
        {Routes.map((route) => {
          return (
            <>
              <li
                key={route.id}
                className="relative transition duration-300 ease-in-out underline-animation"
              >
                <Link to={route.to}>{route.name}</Link>
              </li>
            </>
          );
        })}
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
};