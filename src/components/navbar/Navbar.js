import logo from '../../utils/images/logo1.webp';
import './navbar.css';
const Navbar = () => {
  return (
  <nav className="navbar">
  <div className="navbar-inner">
    <a className="brand" href="/">
      <img src={logo} alt="Buddy's Logo" />
    </a>

    <div className="links-container">
      <a className="link active" href="#home">Home</a>
      <a className="link" href="#groceries">Groceries</a>
      <a className="link" href="#fuel">Fuel</a>
      <a className="link" href="#deals">Deals</a>
      <a className="link" href="#contact">Contact</a>

      <a className="nav-cta" href="#directions">Get Directions</a>
    </div>
  </div>
</nav>
  );
};

export default Navbar;