import About from "@/components/About";
import Fade from "@/components/framer-motion-comps/Fade";

const Home = () => {
  return (
    <>
      <div>
        <Fade>
          <About />
        </Fade>
      </div>
    </>
  );
};

export default Home;
