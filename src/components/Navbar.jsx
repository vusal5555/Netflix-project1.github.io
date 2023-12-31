import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/UserContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  //flex items-center justify-between p-4 z-[100] w-full text-white fixed

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full text-white absolute">
      <Link to="/">
        <h1 className="text-red-500 font-bold text-4xl uppercase">Netflix</h1>
      </Link>

      {user ? (
        <div>
          <Link to="/account">
            <button>Account</button>
          </Link>

          <button
            onClick={() => handleLogOut()}
            className="px-4 py-2 bg-red-500 rounded-md ml-4"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-red-500 rounded-md ml-4">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
