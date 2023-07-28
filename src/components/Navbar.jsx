import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/UserContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full flex justify-between items-center p-4 absolute text-white z-10">
      <Link to="/">
        <h1 className="text-red-500 font-bold text-4xl uppercase">Netflix</h1>
      </Link>

      {user ? (
        <div>
          <Link to="account">
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
          <Link to="signin">
            <button>Sign In</button>
          </Link>
          <Link to="signup">
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
