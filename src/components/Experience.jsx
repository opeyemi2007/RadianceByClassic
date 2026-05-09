import "../styles/experience.css";

export default function Experience() {
  return (
    <section className="experience">
      <div className="experienceHeader">
        <span>Radiance by Classic</span>

        <h2>The Unboxing Experience</h2>

        <p>
          Rotate the box to explore the luxury PR experience inside Radiance by
          Classic.
        </p>
      </div>

      <div className="scene">
        <div className="box3d">
          <div className="face front">
            <span className="mini">Ritual Kit</span>

            <h2>Radiance</h2>

            <p>by Classic</p>

            <div className="glowCircle"></div>
          </div>
          <div className="face back">
            <span className="mini">Luminous Glow</span>

            <h3>Skincare Ritual</h3>

            <p className="productsText">
              Face Wash • Serum • Sunscreen • Body Oil • Scrub • Face Cream
            </p>
          </div>
          <div className="face right">
            <h3>Glow Beyond The Surface</h3>
          </div>
          <div className="face left">
            <p className="verticalText">Luxury Skincare Experience</p>
          </div>
          <div className="face top">
            <h3>Radiance by Classic</h3>
          </div>
          <div className="face bottom">
            <p>classicmakeupusa.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
