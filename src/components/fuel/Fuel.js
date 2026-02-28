import "./fuel.css";

const Fuel = () => {
  return (
    <div className="fuel-bar" id="fuel">
      <div className="fuel-inner">
        <div className="fuel-left">
          <div className="fuel-title">Fuel Prices</div>

          <div className="fuel-chips">
            <div className="fuel-chip">
              <span className="fuel-label">Regular</span>
              <span className="fuel-price">$3.29</span>
            </div>

            <div className="fuel-chip diesel">
              <span className="fuel-label">Diesel</span>
              <span className="fuel-price">$3.79</span>
            </div>
          </div>
        </div>

        <div className="fuel-right">
          <div className="fuel-updated">Updated 10:30 AM</div>

          <a
            className="fuel-rewards-btn"
            href="https://www.shell.us/rewards-and-savings/fuel-rewards.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Shell Rewards
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fuel;