import "../styles/hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroText">
        <span className="miniText">The Luxury Skincare Experience</span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Radiance <br /> by Classic
        </motion.h1>

        <p>
          A curated skincare experience designed to nourish, hydrate, and reveal
          your natural glow through luxurious everyday care.
        </p>

        <div className="heroButtons">
          <button className="exploreBtn">Explore Collection</button>

          {/* <button className="watchBtn">Watch Ritual</button> */}
        </div>
      </div>

      <div className="heroImage">
        <div className="glow"></div>

        {/* <img src={heroImage} alt="PR Box" /> */}
      </div>
    </section>
  );
};

export default Hero;
