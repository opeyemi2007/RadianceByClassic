import "../styles/testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testHeader">

        <span>Real Results</span>

        <h2>
          What People Are Saying
        </h2>

        <p>
          Real feedback from users experiencing the Radiance by Classic routine.
        </p>

      </div>

      <div className="testGrid">

        <div className="testCard">

          <p>
            “My skin has never felt this smooth and hydrated.
            The glow is actually real after a few days.”
          </p>

          <h4>— Sarah M.</h4>

        </div>

        <div className="testCard">

          <p>
            “The routine is so simple but effective.
            Everything feels premium and intentional.”
          </p>

          <h4>— Aisha K.</h4>

        </div>

        <div className="testCard">

          <p>
            “I love how my skin looks now.
            Even people started noticing the glow.”
          </p>

          <h4>— Jennifer L.</h4>

        </div>

      </div>

    </section>
  );
}