import "../styles/routine.css";

export default function Routine() {
  return (
    <section className="routine">

      <div className="routineHeader">

        <span>The Radiance Kits</span>

        <h2>
          Your Daily Glow Routine
        </h2>

        <p>
          A simple step-by-step skincare designed to
          cleanse, nourish, protect, and restore your glow.
        </p>

      </div>

      <div className="routineGrid">

        {/* Morning */}
        <div className="routineCard">

          <h3>☀️ Morning Routine</h3>

          <ul>
            <li>Face Wash</li>
            <li>Serum</li>
            <li>Face Cream</li>
            <li>Sunscreen</li>
          </ul>

        </div>

        {/* Night */}
        <div className="routineCard">

          <h3>🌙 Night Routine</h3>

          <ul>
            <li>Face Wash</li>
            <li>Scrub (2–3x weekly)</li>
            <li>Aloe Vera Gel</li>
            <li>Face Cream</li>
          </ul>

        </div>

        {/* Body */}
        <div className="routineCard">

          <h3>✨ Body Routine</h3>

          <ul>
            <li>Body Lotion</li>
            <li>Body Oil</li>
            <li>Armpit & Thigh Cream</li>
          </ul>

        </div>

      </div>

    </section>
  );
}