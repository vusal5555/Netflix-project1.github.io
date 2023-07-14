import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSingIn = async (e) => {
    e.preventDefault();
    navigate("/");
    try {
      await signIn(email, password);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-full h-full relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
        className="absolute w-full h-screen object-cover hidden lg:block"
      />
      <div className="w-full h-full pt-[10rem] px-4 absolute top-[15%]">
        <div className="max-w-[450px] h-[600px] bg-white lg:bg-black/75   px-4 py-16 text-black lg:text-white m-auto  rounded-md ">
          <form onSubmit={handleSingIn}>
            <div className="flex flex-col mb-4">
              <label className="mb-2">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="px-2 py-2 text-black rounded-sm border border-gray-300 lg:border-none"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="px-2 py-2 text-black rounded-sm border border-gray-300  lg:border-none"
              />
            </div>
            <button className="bg-red-500 text-white text-center w-full px-2 py-2 rounded-sm">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
