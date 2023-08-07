import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const trunaceString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4">
          <h1 className="text-3xl text-gray-200 md:text-5xl font-bold mb-3">
            {movie?.title}
          </h1>
          <div className="mb-3">
            <button className="px-5 py-2 bg-gray-400 text-black mr-3">
              Play
            </button>
            <button className="px-5 py-2 border border-white text-white">
              Watch Later
            </button>
          </div>
          <h1 className="text-gray-400">{movie?.release_date}</h1>
          <h1 className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {trunaceString(movie?.overview, 150)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
