import "../styles/experience.css";

export default function Experience() {
  return (
    <section className="experience">

      <div className="experienceHeader">

        <span>Radiance by Classic</span>

        <h2>The Unboxing Experience</h2>

        <p>
          Rotate the box to explore the luxury PR experience inside Radiance by Classic.
        </p>

      </div>

      <div className="scene">

        <div className="box3d">

          <div className="face front">Radiance</div>
          <div className="face back">Glow Ritual</div>
          <div className="face right">Classic USA</div>
          <div className="face left">Skincare</div>
          <div className="face top">Luxury</div>
          <div className="face bottom">Radiance</div>

        </div>

      </div>

    </section>
  );
}