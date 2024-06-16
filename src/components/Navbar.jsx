import React from "react";
import logo from "../assets/img/kanopy.svg";
const Navbar = () => {
  return (
    <nav className="bg-black z-40 sticky top-0">
      <div className="max-w-6xl mx-auto sm:px-[46px] px-4 gap-2 py-[18px] flex justify-between">
        <a href="" className="#">
          <img src={logo} alt="" className="w-[114px] h-auto" />
        </a>
        <button className="bg-[#DE3F00] text-white sm:px-[18px] px-3 px-1.5 sm:py-2.5 sm:font-extrabold font-semibold hover:bg-opacity-70 rounded-md duration-500 uppercase tracking-widest text-xs">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
