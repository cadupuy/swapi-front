import React from "react";
import "./index.css";

// Components
import StarshipsInfo from "../StarshipsInfo";
import PeopleInfo from "../PeopleInfo";
import PlanetsInfo from "../PlanetsInfo";
import FilmsInfo from "../FilmsInfo";
import SpeciesInfo from "../SpeciesInfo";

const CardContainer = ({ elem, choice }) => {
  const renderCategory = () => {
    switch (choice) {
      case "people":
        return <PeopleInfo elem={elem} />;

      case "planets":
        return <PlanetsInfo elem={elem} />;

      case "starships":
        return <StarshipsInfo elem={elem} />;

      case "vehicles":
        return <StarshipsInfo elem={elem} />;

      case "films":
        return <FilmsInfo elem={elem} />;

      case "species":
        return <SpeciesInfo elem={elem} />;

      default:
        break;
    }
  };

  return (
    <section className="dataInformation">
      <div>
        {/* {choice && (
          <img
            src={
              require(`../../assets/img/${choice}/${elem.created}.png`).default
            }
            alt=""
          />
        )} */}

        <img
          src={
            require(`../../assets/img/vehicles/2014-12-15T12:38:25.937000Z.png`)
              .default
          }
          alt=""
        />
      </div>

      <div className="cardInfo">{renderCategory()}</div>
    </section>
  );
};

export default CardContainer;
