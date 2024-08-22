// ShadcnUI Import
import ContactForm from "@/components/Contact/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Image & Component Imports
import profileImg from '../../src/assets/profilePhoto.jpg'
import PageinationComp from "@/components/Navigation/PageinationComp";

const Form = () => {
  return (
    <>
      <div className="container relative flex md:flex-row flex-col mx-auto justify-center items-center min-h-screen gap-5">
        <div className="w-full">
          <div>
            <h1 className="md:text-6xl md:text-left text-center uppercase tracking-tight text-4xl py-5 text-white font-bold">
              Contact Form{" "}
            </h1>
          </div>
          <Card className="bg-secondary">
            <CardHeader>
              <div className="flex">
                <picture className="w-[250px]">
                  <img src={profileImg} alt="profilePhoto" className="w-[250px] rounded-full shadow-xl" />
                </picture>
                <div className="px-2 flex flex-col gap-2 justify-center ">

                <CardTitle>
                  Contact <span className="italic">Me</span>
                </CardTitle>
                <CardDescription className="italic">
                  Capture the Magic of Your Special Day and Every Cherished Moment
                  Beyond!
                </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="px-2 italic">
              With a delicate touch and an eye for the exquisite, I am here to turn your most precious memories into timeless treasures. From the blush of first love to the sparkle of your wedding day, and every beautiful moment in between, let me weave your story through the lens with elegance and grace.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
        <PageinationComp 
          previous="/janes-photography/reception"
          next="/janes-photography/"
        />
    </>
  );
};

export default Form;
