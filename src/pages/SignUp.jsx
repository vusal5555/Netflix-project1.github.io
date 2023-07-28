import React, { useState } from "react";
import { UserAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSingUp = async (e) => {
    e.preventDefault();
    navigate("/");
    try {
      await createUser(email, password);
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Email already in use");
        navigate("/signup");
      }
    }
  };

  return (
    <div className="w-full h-screen relative lg:overflow-hidden">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
        className="absolute w-full h-full object-cover hidden lg:block"
      />
      <div className="w-full h-full pt-[5rem] px-4 absolute top-[15%]">
        <div
          className="max-w-[450px] h-[600px] block bg-white lg:bg-black/75 px-4 py-16 text-black
         lg:text-white m-auto rounded-md"
        >
          <form onSubmit={handleSingUp}>
            <div className="flex flex-col mb-4">
              <label className="mb-2">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="px-2 py-2 text-black rounded-sm border border-gray-300 lg:border-none"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="px-2 py-2 text-black rounded-sm border border-gray-300 lg:border-none"
              />
            </div>
            <button className="bg-red-500 text-white text-center w-full px-2 py-2 rounded-sm">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
