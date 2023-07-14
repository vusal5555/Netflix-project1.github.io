import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { db } from "../firebase";
import { updateDoc, doc, arrayUnion } from "firebase/firestore";
import { UserAuth } from "../context/UserContext";

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
    }
  };
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

        <p className="absolute top-2 right-2" onClick={() => saveShow()}>
          {like ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}
        </p>
      </div>
    </div>
  ) : null;
};

export default Movie;
