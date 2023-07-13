import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const scrollLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const scrollRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="w-full h-full text-white p-4">
      <h1 className="text-xl font-bold mb-3">{title}</h1>
      <div className="flex items-center relative">
        <BsFillArrowLeftCircleFill
          onClick={() => scrollLeft()}
          className="absolute left-0 z-10"
          size={30}
        ></BsFillArrowLeftCircleFill>
        <div
          className="w-full h-full overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap relative"
          id={"slider" + rowId}
        >
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id}></Movie>;
          })}
        </div>
        <BsFillArrowRightCircleFill
          onClick={() => scrollRight()}
          className="absolute right-0 z-10"
          size={30}
        ></BsFillArrowRightCircleFill>
      </div>
    </div>
  );
};

export default Row;
