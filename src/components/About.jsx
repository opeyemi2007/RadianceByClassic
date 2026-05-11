import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <div className="aboutTop">
        <span>The Radiance Experience</span>

        <h2>
          Skincare Designed <br /> Beyond The Surface
        </h2>
      </div>

      <div className="aboutContent">
        <div className="aboutText">
          <p>
            Radiance by Classic is a curated skincare crafted to nourish,
            hydrate, and elevate your everyday self-care experience.
          </p>

          <p>
            Every product inside the collection was carefully selected to work
            together in harmony — helping your skin feel smoother, healthier,
            and visibly radiant with every use.
          </p>
        </div>

        <div className="aboutCards">
          <div className="aboutCard">
            <h3>Glow Enhancing</h3>
            <p>Formulas designed to reveal natural radiance.</p>
          </div>

          <div className="aboutCard">
            <h3>Deep Hydration</h3>
            <p>Nourishment that keeps your skin refreshed daily.</p>
          </div>

          <div className="aboutCard">
            <h3>Luxury Care</h3>
            <p>A premium skincare experience from start to finish.</p>
          </div>

          <div className="aboutCard">
            <h3>Everyday Radiance</h3>
            <p>Simple routines that fit beautifully into your life.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
