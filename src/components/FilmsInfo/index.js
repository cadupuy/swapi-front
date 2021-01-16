import React from "react";
import "./index.css";

const PeopleInfo = ({ elem }) => {
  return (
    <>
      <div>
        <h2>{elem.title?.toUpperCase()}</h2>
        <p className="manufacturer">{elem.producer}</p>
      </div>
      <div>
        <div>
          <div className="dataDetails">
            <p>{elem.opening_crawl?.slice(0, 160)}...</p>
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
