import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import QRSection from "../components/QRSection";
import Routine from "../components/Routine";
import Testimonials from "../components/Testimonials";
import MotionWrapper from "../components/MotionWrapper"


function Home() {
  return (
    <>
      <MotionWrapper>
        <Hero />
      </MotionWrapper>

      <MotionWrapper>
        <About />
      </MotionWrapper>

      <MotionWrapper>
        <ProductShowcase />
      </MotionWrapper>

      <MotionWrapper>
        <Routine />
      </MotionWrapper>

      <MotionWrapper>
        <Experience />
      </MotionWrapper>

      <MotionWrapper>
        <Testimonials />
      </MotionWrapper>

      <MotionWrapper>
        <QRSection />
      </MotionWrapper>
    </>
  );
}

export default Home