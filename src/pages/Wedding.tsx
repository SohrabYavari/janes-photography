// React Imports
import { useEffect, useState } from "react";

// Component Imports
import Fade from "@/components/framer-motion-comps/Fade";
import BentoGrid from "@/components/BentoBoxes/BentoGrid";
import VerticalCarousel from "@/components/Carousel/VerticalCarousel";

// Image Imports
import wedding1 from "/public/wedding/wedding-1.jpg";
import wedding2 from "/public/wedding/wedding-2.jpg";
import wedding3 from "/public/wedding/wedding-3.jpg";
import wedding4 from "/public/wedding/wedding-4.jpg";
import wedding5 from "/public/wedding/wedding-5.jpg";
import wedding6 from "/public/wedding/wedding-6.jpg";
import wedding7 from "/public/wedding/wedding-7.jpg";
import wedding8 from "/public/wedding/wedding-8.jpg";

const WeddingImages = [
  wedding1,
  wedding2,
  wedding3,
  wedding4,
  wedding5,
  wedding6,
  wedding7,
  wedding8,
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
      </div>
    </>
  );
};

export default Wedding;
