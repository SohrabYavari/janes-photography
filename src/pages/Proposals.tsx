// React Import
import { useEffect, useState } from "react";

// framer-motion Import
import { motion, useIsPresent } from "framer-motion";

// Component Imports
import BentoGrid from "@/components/BentoBoxes/BentoGrid";
import VerticalCarousel from "@/components/Carousel/VerticalCarousel";
import Fade from "@/components/framer-motion-comps/Fade";

// Image Imports
import proposal1 from "/public/proposals/proposal-1.jpg";
import proposal2 from "/public/proposals/proposal-2.jpg";
import proposal3 from "/public/proposals/proposal-3.jpg";
import proposal4 from "/public/proposals/proposal-4.jpg";
import proposal5 from "/public/proposals/proposal-5.jpg";
import proposal6 from "/public/proposals/proposal-6.jpg";
import proposal7 from "/public/proposals/proposal-7.jpg";
import proposal8 from "/public/proposals/proposal-8.jpg";

const ProposalImages = [
  proposal1,
  proposal2,
  proposal3,
  proposal4,
  proposal5,
  proposal6,
  proposal7,
  proposal8,
];

const Proposals = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isPresent = useIsPresent();
  return (
    <>
      <div className="container mx-auto md:min-h-screen">
        <div className="w-full mx-auto py-5">
          <Fade>
            <h1 className="text-center md:text-9xl text-7xl cursor-default text-white tracking-tighter">
              {" "}
              Proposals{" "}
            </h1>
          </Fade>
        </div>
        <div className="md:w-3/4 w-full relative my-5 mx-auto">
          {isSmallScreen ? (
            <VerticalCarousel images={ProposalImages} />
          ) : (
            <BentoGrid images={ProposalImages} />
          )}
        </div>

        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />

      </div>
    </>
  );
};

export default Proposals;
