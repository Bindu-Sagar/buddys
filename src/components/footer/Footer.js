
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="footer-logo">Buddy’s Gas & Grocery</h3>
          <p className="footer-desc">
            Your neighborhood stop for fuel, fresh groceries,
            hot food, and weekly deals. Fast service and friendly staff.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#fuel">Fuel Prices</a>
          <a href="#groceries">Groceries</a>
          <a href="#deals">Deals</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Store Hours</h4>
          <p>Mon – Sun</p>
          <p>6:00 AM – 11:00 PM</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>(000) 000-0000</p>
          <p>123 Main St</p>
          <p>Your City, ST 00000</p>

          <div className="footer-socials">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Buddy’s Gas & Grocery. All rights reserved.
      </div>
    </footer>
  );
}