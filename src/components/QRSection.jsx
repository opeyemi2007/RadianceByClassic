import "../styles/qrSection.css";

export default function QRSection() {
  return (
    <section className="qrSection">

      <div className="qrHeader">

        <span>Scan Experience</span>

        <h2>
          Unlock Radiance
        </h2>

        <p>
          Scan the QR code to explore the full Classic experience —
          products, routines, skincare tips, and more.
        </p>

      </div>

      <div className="qrBox">

        <div className="qrVisual">

          {/* Replace with real QR image */}
          <img
            src="public/https_classicmakeupusa_com_.png"
            alt="QR Code"
          />

        </div>

        <div className="qrInfo">

          <h3>
            Radiance by Classic Experience
          </h3>

          <p>
            Discover how each product works, explore your complete skincare
            ritual, and learn how to achieve your best glow ever.
          </p>

          <a
            href="https://classicmakeupusa.com/"
            target="_blank"
            rel="noreferrer"
            className="qrBtn"
          >
            Visit Website
          </a>

        </div>

      </div>

    </section>
  );
}