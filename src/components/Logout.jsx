import React from "react";
import { NavLink } from "react-router-dom";

const Logout = () => {
  localStorage.clear();
  return (
    <>
      <div className="text-center mt-5">
        <h1>You have logged out successfully!!!</h1>
        <NavLink to="/">LogIn Again</NavLink>
      </div>
    </>
  );
};

export default Logout;
