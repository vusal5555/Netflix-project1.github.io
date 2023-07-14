import React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/UserContext";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { onSnapshot, doc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { updateDoc } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const Account = () => {
  const [movies, setMovies] = useState([]);

  const { user } = UserAuth();

  const movieId = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(movieId, (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const deleteShow = async (id) => {
    try {
      const result = movies.filter((movie) => movie.id !== id);
      await updateDoc(movieId, {
        savedShows: result,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="w-full h-[550px]">
      <div className="w-full h-full relative">
        <div className="absolute w-full h-full bg-black/60 top-0 left-0"></div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-[30%] text-white p-4">
          <h1 className="text-3xl font-bold uppercase">My Shows</h1>
        </div>

        <div className="w-full h-full text-white p-4">
          <h1 className="text-xl font-bold mb-3">My Shows</h1>
          <div className="relative flex items-center group ">
            <BsFillArrowLeftCircleFill
              onClick={() => slideLeft()}
              className="absolute left-0 z-50 hidden group-hover:block"
              size={30}
            ></BsFillArrowLeftCircleFill>
            <div
              className="w-full h-full overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap  relative will-change-transform"
              id={"slider"}
            >
              {movies.map((movie) => {
                return (
                  <div
                    key={movie?.id}
                    className="w-[280px] inline-block p-2 hover:scale-105 duration-200 cursor-pointer relative"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie?.img}`}
                      alt=""
                      className="w-full h-full"
                    />

                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                      <p className="whitespace-break-spaces text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                        {movie?.title}
                      </p>
                    </div>

                    <AiOutlineClose
                      size={20}
                      className="absolute top-2 right-2 cursor-pointer"
                      onClick={() => deleteShow(movie?.id)}
                    ></AiOutlineClose>
                  </div>
                );
              })}
            </div>
            <BsFillArrowRightCircleFill
              onClick={() => slideRight()}
              className="absolute right-0 z-50 hidden group-hover:block"
              size={30}
            ></BsFillArrowRightCircleFill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
