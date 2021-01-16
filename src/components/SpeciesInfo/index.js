import React from "react";
import "./index.css";

const PeopleInfo = ({ elem }) => {
  return (
    <>
      <div>
        <h2>{elem.name?.toUpperCase()}</h2>
        <p className="manufacturer">{elem.language}</p>
      </div>
      <div>
        <div>
          <div className="dataDetails">
            <p>Classification</p>

            <p>{elem.classification}</p>
          </div>
          <div className="dataDetails">
            <p>Average Lifespan</p>
            <p>{elem.average_lifespan} years</p>
          </div>

          <div className="dataDetails">
            <p>Average Height</p>
            <p>{elem.average_height} ft</p>
          </div>

          <div className="pricingInfo">
            <button>Add to favorites</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleInfo;
