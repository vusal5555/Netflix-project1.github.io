import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { db } from "../firebase";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { UserAuth } from "../context/UserContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);

  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return movie?.backdrop_path ? (
    <div
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative 
      p-2 hover:scale-105 duration-200"
    >
      <LazyLoadImage
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="w-full h-full block"
        effect="blur"
      />

      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="whitespace-break-spaces text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>

        <p className="absolute top-2 right-2" onClick={() => saveShow()}>
          {like ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}
        </p>
      </div>
    </div>
  ) : null;
};

export default Movie;
