import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Radiance by Classic</div>

      <div className="navLinks">
        <a href="/">Collection</a>
        <a href="/">Radiance</a>
        <a href="/">Experience</a>
      </div>

      <button className="shopBtn">Shop Now</button>
    </nav>
  );
};

export default Navbar;
