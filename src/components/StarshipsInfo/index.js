import React from "react";
import "./index.css";

const StarshipsInfo = ({ elem }) => {
  return (
    <>
      <div>
        <h2>{elem.name?.toUpperCase()}</h2>
        <p className="manufacturer">{elem.manufacturer}</p>
      </div>
      <div>
        <div>
          <div className="dataDetails">
            <p>Passengers</p>
            <p>{elem.passengers} persons</p>
          </div>
          <div className="dataDetails">
            <p>Cargo Cap.</p>
            {elem.cargo_capacity === "none" ? (
              <p>Unknown</p>
            ) : (
              <p>{elem.cargo_capacity?.slice(0, 4)} m³</p>
            )}
          </div>

          <div className="dataDetails">
            <p>The Crew</p>
            <p>{elem.crew} persons</p>
          </div>

          <div className="pricingInfo">
            {elem.cost_in_credits === "unknown" ? (
              <p className="credits">Unknown</p>
            ) : (
              <p className="credits">${elem.cost_in_credits?.slice(0, 5)}</p>
            )}
            <button>Add to cart</button>
          </div>
        </div>

        <div className="speedInfo">
          <h3>{elem.max_atmosphering_speed?.toUpperCase()}</h3>
          <p>km/h</p>
          <p className="maxSpeed">Max speed</p>
        </div>
      </div>
    </>
  );
};

export default StarshipsInfo;
