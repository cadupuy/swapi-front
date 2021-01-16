import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import "./index.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import CardContainer from "../../components/CardContainer";

const Home = ({ choice, id, setId }) => {
  const [isLoading, setIsLoading] = useState(true);
  // List of items from DB
  const [item, setItem] = useState({});

  // Pagination +
  const handlePlus = () => {
    if (id !== item.results.length - 1) {
      setId(id + 1);
    } else {
      setId(0);
    }
  };

  // Pagination -
  const handleMinus = () => {
    if (id !== 0) {
      setId(id - 1);
    } else {
      setId(item.results.length - 1);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/data?type=${choice}`
        );
        setIsLoading(false);
        setItem(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [choice]);

  console.log(item);

  return isLoading ? (
    <main>
      <div className="loading">
        <Loader
          type="ThreeDots"
          color="#fded22"
          height={100}
          width={100}
          timeout={999999}
        />
      </div>
    </main>
  ) : (
    <main>
      <div className="container">
        <button onClick={handleMinus}>
          <FontAwesomeIcon icon="arrow-left" />
        </button>
        <div className="dataContainer">
          {item.results?.map((elem, index) => {
            return (
              id === index && (
                <CardContainer key={index} elem={elem} choice={choice} />
              )
            );
          })}
        </div>

        <button onClick={handlePlus}>
          <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
    </main>
  );
};

export default Home;
