import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);

  return movie?.backdrop_path ? (
    <div className="w-[280px] inline-block p-2 hover:scale-105 duration-200 cursor-pointer relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
        className="w-full h-full"
      />

      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-break-spaces text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>

        <p className="absolute top-2 right-2">
          {like ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}
        </p>
      </div>
    </div>
  ) : null;
};

export default Movie;
