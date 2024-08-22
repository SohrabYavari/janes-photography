// React Imports
import { useEffect, useState } from "react";

// Component Imports
import Fade from "@/components/framer-motion-comps/Fade";
import BentoGrid from "@/components/BentoBoxes/BentoGrid";
import PaginationComp from "@/components/Navigation/PageinationComp";
import VerticalCarousel from "@/components/Carousel/VerticalCarousel";

// Images Import 
const WeddingImages = [
  "/public/wedding/wedding-1.jpg",
  "/public/wedding/wedding-2.jpg",
  "/public/wedding/wedding-3.jpg",
  "/public/wedding/wedding-4.jpg",
  "/public/wedding/wedding-5.jpg",
  "/public/wedding/wedding-6.jpg",
  "/public/wedding/wedding-7.jpg",
  "/public/wedding/wedding-8.jpg",
];

const Wedding = () => {
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
  return (
    <>
      <div className="container mx-auto md:min-h-screen">
        <div className="w-full mx-auto py-5">
          <Fade>
            <h1 className="text-center md:text-9xl text-7xl cursor-default text-white tracking-tighter">
              Weddings
            </h1>
          </Fade>
        </div>
        <div className="md:w-3/4 w-full relative my-5 mx-auto">
          {isSmallScreen ? (
            <VerticalCarousel images={WeddingImages} />
          ) : (
            <BentoGrid images={WeddingImages} />
          )}
        </div>
        <PaginationComp previous="/janes-photography/proposal" next="/janes-photography/reception" />
      </div>
    </>
  );
};

export default Wedding;
