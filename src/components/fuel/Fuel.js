import './fuel.css';
const Fuel = () => {
  return (
      <div className="fuel-bar">
        <div className="fuel-inner">

          <div className="fuel-title">
             Fuel Prices
          </div>

          <div className="fuel-chip">
            <span className="fuel-label">Regular</span>
            <span className="fuel-price">$3.29</span>
          </div>

          <div className="fuel-chip diesel">
            <span className="fuel-label">Diesel</span>
            <span className="fuel-price">$3.79</span>
          </div>

          <div className="fuel-updated">
            Updated 10:30 AM
          </div>
      </div>
    </div>
  );
};
export default Fuel;