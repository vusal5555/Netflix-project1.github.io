import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  moves: (element, container, handle) => {
    return handle.classList.contains("drag-handle-class");
  };

  const moveList = document.querySelectorAll("div.drag-handle-class");

  if (moveList) {
    moveList.forEach((move) => {
      move.addEventListener("touchmove", (event) => event.preventDefault());
    });
  }
  return (
    <div>
      <Main></Main>
      <Row rowId="1" title="Popular" fetchUrl={requests.requestPopular}></Row>
      <Row
        rowId="2"
        title="Top Rated"
        fetchUrl={requests.requestTopRated}
      ></Row>
      <Row rowId="3" title="Trending" fetchUrl={requests.requestTrending}></Row>
      <Row rowId="4" title="Horror" fetchUrl={requests.requestHorror}></Row>
      <Row rowId="5" title="Upcoming" fetchUrl={requests.requestUpcoming}></Row>
    </div>
  );
};

export default Home;
