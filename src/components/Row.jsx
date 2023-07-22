import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Movie from "./Movie";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  //

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="w-full h-full text-white p-4">
      <h1 className="text-xl font-bold mb-3">{title}</h1>
      <div className="relative flex items-center group">
        <BsFillArrowLeftCircleFill
          onClick={() => slideLeft()}
          className="absolute left-0 z-50 hidden group-hover:block"
          size={30}
        ></BsFillArrowLeftCircleFill>
        <div
          className="w-full h-full overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap will-change-contents relative"
          id={"slider" + rowId}
        >
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id}></Movie>;
          })}
        </div>
        <BsFillArrowRightCircleFill
          onClick={() => slideRight()}
          className="absolute right-0 z-50 hidden group-hover:block"
          size={30}
        ></BsFillArrowRightCircleFill>
      </div>
    </div>
  );
};

export default Row;
