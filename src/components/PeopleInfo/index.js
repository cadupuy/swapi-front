import React from "react";
import "./index.css";

const PeopleInfo = ({ elem }) => {
  return (
    <>
      <div>
        <h2>{elem.name?.toUpperCase()}</h2>
        <p className="manufacturer">Birth year :{elem.birth_year}</p>
      </div>
      <div>
        <div>
          <div className="dataDetails">
            <p>Gender</p>
            {elem.cargo_capacity === "none" ? (
              <p>Unknown</p>
            ) : (
              <p>{elem.gender}</p>
            )}
          </div>
          <div className="dataDetails">
            <p>Height</p>
            <p>{elem.height} ft</p>
          </div>

          <div className="dataDetails">
            <p>Mass</p>
            <p>{elem.mass} lbs</p>
          </div>

          <div className="pricingInfo">
            {elem.cost_in_credits === "unknown" ? (
              <p className="credits">Unknown</p>
            ) : (
              <p className="credits">{elem.cost_in_credits?.slice(0, 5)}</p>
            )}
            <button>Add to favorites</button>
          </div>
        </div>

        <div className="speedInfo">
          <h3>{elem.eye_color}</h3>
          <p>{elem.skin_color}</p>
        </div>
      </div>
    </>
  );
};

export default PeopleInfo;
