// React Imports
import { useEffect, useState } from "react";

// Component Imports
import Fade from "@/components/framer-motion-comps/Fade";
import BentoGrid from "@/components/BentoBoxes/BentoGrid";
import PaginationComp from "@/components/Navigation/PageinationComp";
import VerticalCarousel from "@/components/Carousel/VerticalCarousel";

// Image Imports
const ReceptionImages = [
  "/public/reception/reception-1.jpg",
  "/public/reception/reception-2.jpg",
  "/public/reception/reception-3.jpg",
  "/public/reception/reception-4.jpg",
  "/public/reception/reception-5.jpg",
  "/public/reception/reception-6.jpg",
  "/public/reception/reception-7.jpg",
  "/public/reception/reception-8.jpg",
];

const Reception = () => {
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
              {" "}
              Reception{" "}
            </h1>
          </Fade>
        </div>
        <div className="md:w-3/4 w-full relative my-5 mx-auto">
          {isSmallScreen ? (
            <VerticalCarousel images={ReceptionImages} />
          ) : (
            <BentoGrid images={ReceptionImages} />
          )}
        </div>
        <PaginationComp previous="/janes-photography/wedding" next="/janes-photography/form" />
      </div>
    </>
  );
};

export default Reception;
