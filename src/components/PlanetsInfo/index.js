import React from "react";
import "./index.css";

const PeopleInfo = ({ elem }) => {
  return (
    <>
      <div>
        <h2>{elem.name?.toUpperCase()}</h2>
        <p className="manufacturer">Population : {elem.population}</p>
      </div>
      <div>
        <div>
          <div className="dataDetails">
            <p>Diameter</p>
            {elem.cargo_capacity === "none" ? (
              <p>Unknown</p>
            ) : (
              <p>{elem.diameter}</p>
            )}
          </div>
          <div className="dataDetails">
            <p>Climate</p>
            <p>{elem.climate}</p>
          </div>

          <div className="dataDetails">
            <p>Gravity</p>
            <p>{elem.gravity}</p>
          </div>

          <div className="pricingInfo">
            <button>Add to favorites</button>
          </div>
        </div>

        <div className="speedInfo">
          <h3>{elem.rotation_period}</h3>
          <p>{elem.orbital_period}</p>
        </div>
      </div>
    </>
  );
};

export default PeopleInfo;
