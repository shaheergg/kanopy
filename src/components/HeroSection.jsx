import React from "react";
import logo from "../assets/img/kanopy.svg";
import androidmini from "../assets/img/androidmini.svg";
import applemini from "../assets/img/applemini.svg";
import chromemini from "../assets/img/chromemini.svg";
import firetabletmini from "../assets/img/firetabletmini.svg";
import firetvmini from "../assets/img/firetvmini.svg";
import rokumini from "../assets/img/rokumini.svg";
import samsungmini from "../assets/img/samsungmini.svg";
import applelogo from "../assets/img/applelogo.svg";
import playgooglelogo from "../assets/img/playgooglelogo.svg";

const HeroSection = () => {
  return (
    <div className="w-full lg:bg-cover z-20 bg-center relative bg-img">
      <div
        className="md:w-[500px] sm:w-[400px] w-[280px] h-full absolute top-0 z-20"
        style={{
          background: `linear-gradient(
          88.01deg,
          #1a1a1a 45.26%,
          rgba(26, 26, 26, 0.602484) 80.81%,
          rgba(26, 26, 26, 0) 100.01%
        )`,
        }}
      ></div>
      <div className="max-w-6xl mx-auto sm:px-[46px] px-4 pt-20 pb-14 relative z-40">
        <img src={logo} alt="" className="w-[114px] h-auto" />
        <div className="pt-16 max-w-xl">
          <h1 className="text-white sm:leading-[60px] text-2xl sm:text-4xl font-bold">
            Enjoy Thoughtful
            <span className="block">Entertainment</span>
          </h1>
          <p className="text-white sm:leading-snug lg:pr-20 pt-4 pb-8">
            Stream thousands of films for free, thanks to the generous support
            of your public library or university.
          </p>
          <button className="bg-[#DE3F00] text-white sm:px-10 px-7 py-3 sm:py-5 font-extrabold hover:bg-opacity-70 rounded-md duration-500 uppercase tracking-widest text-sm">
            Get Started
          </button>
          <p className="text-white text-lg pt-4 flex sm:flex-row flex-col sm:items-end gap-2">
            Have a Kanopy account?
            <a
              href="#"
              className="text-white font-bold group hover:gap-4 duration-500 flex items-center gap-2"
            >
              Log in
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M24 12.16L18.24 6.4v4.24H0v3.04h18.24v4.24z"
                />
              </svg>
            </a>
          </p>
          <div className="flex gap-3 pt-16">
            <a href="#" className="">
              <img src={applelogo} alt="" className="" />
            </a>
            <a href="#" className="">
              <img src={playgooglelogo} alt="" className="" />
            </a>
          </div>
          <div className="pt-10 flex sm:flex-row flex-col gap-4">
            <p className="text-[12px] text-[#9A9A9A] font-bold">
              Also available on:
            </p>
            <div className="flex flex-wrap justify-center sm:justify-normal gap-2">
              <img src={applemini} alt="" className="w-5 h-auto" />
              <img src={androidmini} alt="" className="w-14 h-auto" />
              <img src={chromemini} alt="" className="w-20 h-auto" />
              <img src={rokumini} alt="" className="w-6 h-auto" />
              <img src={firetvmini} alt="" className="w-7 h-auto" />
              <img src={firetabletmini} alt="" className="w-12 h-auto" />
              <img src={samsungmini} alt="" className="w-14 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
