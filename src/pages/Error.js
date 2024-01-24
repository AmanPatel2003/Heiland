import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="">
      <div className="h-[100vh] flex flex-col justify-center items-center pt-[73px]">
        <h1 className="text-3xl sm:text-4xl mb-2">404 Error Page</h1>
        <p className=" text-2xl sm:text-3xl ">Sorry, This page doesn't exist</p>
        <NavLink
          to="/"
          className="border-2 px-5 py-3 mt-4 bg-[#077969] text-white text-xl"
        >
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
