// React Imports
import { useEffect, useState } from "react";

// Component Imports
import Fade from "@/components/framer-motion-comps/Fade";
import BentoGrid from "@/components/BentoBoxes/BentoGrid";
import VerticalCarousel from "@/components/Carousel/VerticalCarousel";

// Image Imports
import reception1 from "/public/reception/reception-1.jpg";
import reception2 from "/public/reception/reception-2.jpg";
import reception3 from "/public/reception/reception-3.jpg";
import reception4 from "/public/reception/reception-4.jpg";
import reception5 from "/public/reception/reception-5.jpg";
import reception6 from "/public/reception/reception-6.jpg";
import reception7 from "/public/reception/reception-7.jpg";
import reception8 from "/public/reception/reception-8.jpg";

const ReceptionImages = [
  reception1,
  reception2,
  reception3,
  reception4,
  reception5,
  reception6,
  reception7,
  reception8,
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
      </div>
    </>
  );
};

export default Reception;
