// ShadcnUI Imports
import { Card, CardContent } from "./ui/card";

// Component Imports
import Fade from "./framer-motion-comps/Fade";
import Scale from "./framer-motion-comps/Scale";
import Camera from "./SvgComps/Camera";

// Image Imports
import profileImage from "../assets/profilePhoto.jpg";

const About = () => {
  return (
    <>
      <div className="container mx-auto relative min-h-screen flex justify-center">
        <div className="flex flex-col justify-center items-center mx-auto md:w-9/12 h-auto">
          <div className="pt-10 md:w-2/3 w-full">
            <Scale>
              <figure className="w-full h-auto rounded-full object-cover flex mx-auto">
                <img
                  className="rounded-full shadow-md shadow-[#333]"
                  src={profileImage}
                  alt="John"
                />
              </figure>
            </Scale>
          </div>
          <div className="">
            <Fade>
              <h1 className="text-white flex justify-center items-center text-center md:text-9xl text-6xl tracking-tight font-bold md:-mt-40 -mt-20">
                Jane's <br /> Photography
              </h1>
            </Fade>
          </div>

          <div className="mt-20">
            <Scale>
              <Card className="pt-5 md:w-2/3 w-[350px] mx-auto text-center bg-secondary">
                <CardContent className="flex md:flex-row flex-col">
                  <figure className="flex justify-center items-center">
                    <Camera />
                  </figure>
                  <p>
                    Hi, I'm Jane, a wedding photographer who adores capturing
                    love stories in their most beautiful and authentic moments.
                    With a keen eye for detail and a heart full of passion, I’m
                    dedicated to preserving the magic of your special day,
                    turning every precious moment into a timeless memory.
                  </p>
                </CardContent>
              </Card>
            </Scale>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
