import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footerTop">

        <div className="footerBrand">

          <h2>Radiance by Classic</h2>

          <p>
            Luxury skincare designed to nourish, hydrate,
            and reveal your natural glow.
          </p>

        </div>

        <div className="footerLinks">

          <div>
            <h4>Explore</h4>
            <a href="/">Collection</a>
            <a href="/">Radiance</a>
            <a href="/">Experience</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="/">Contact</a>
            <a href="/">FAQs</a>
            <a href="/">Shipping</a>
          </div>

          <div>
            <h4>Social</h4>
            <a href="/">Instagram</a>
            <a href="/">TikTok</a>
            <a href="/">Facebook</a>
          </div>

        </div>

      </div>

      <div className="footerBottom">

        <p>
          © {new Date().getFullYear()} Radiance by Classic. All rights reserved.
        </p>

        <p>
          Crafted with glow ✨
        </p>

      </div>

    </footer>
  );
}