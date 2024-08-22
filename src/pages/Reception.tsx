import BentoGrid from "@/components/BentoBoxes/BentoGrid";
import VerticalCarousel from "@/components/Carousel/VerticalCarousel";
import Fade from "@/components/framer-motion-comps/Fade";
import PaginationComp from "@/components/Navigation/PageinationComp";
import { useEffect, useState } from "react";

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

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
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
        <PaginationComp previous="/wedding" next="/form" />
      </div>
    </>
  );
};

export default Reception;
