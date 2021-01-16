import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./index.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import CardContainer from "../../components/CardContainer";

const Home = ({ choice, id, setId, searchItem, page, setPage }) => {
  const [isLoading, setIsLoading] = useState(true);
  // List of items from DB
  const [item, setItem] = useState({});

  const [pageMax, setPageMax] = useState(0);
  // Number of results per page
  const limit = 10;

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

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
          `http://localhost:3001/data?type=${choice}&search=${searchItem}&page=${page}`
        );
        setIsLoading(false);
        setItem(response.data);
        setPageMax(Math.ceil(Number(response.data.count) / limit));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [choice, searchItem, page]);

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
        <div>
          <button className="leftButton" onClick={handleMinus}>
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

          <button className="rightButton" onClick={handlePlus}>
            <FontAwesomeIcon icon="arrow-right" />
          </button>
        </div>

        <div className="pages">
          <ReactPaginate
            previousLabel={"PREV"}
            nextLabel={"NEXT"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageMax}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
