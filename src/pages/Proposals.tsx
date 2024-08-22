import BentoGrid from "@/components/BentoBoxes/BentoGrid";
import VerticalCarousel from "@/components/Carousel/VerticalCarousel";
import Fade from "@/components/framer-motion-comps/Fade";
import PaginationComp from "@/components/Navigation/PageinationComp";
import { motion, useIsPresent } from "framer-motion";
import { useEffect, useState } from "react";

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

const Proposals = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
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

        <PaginationComp previous="/" next="/wedding" />
      </div>
    </>
  );
};

export default Proposals;
