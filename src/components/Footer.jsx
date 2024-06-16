import React from "react";
import applemini from "../assets/img/applemini.svg";
import android from "../assets/img/android.svg";
import androidmini from "../assets/img/androidmini.svg";
import appletab from "../assets/img/appletab.svg";
import firetvmini from "../assets/img/firetvmini.svg";
import firetabletmini from "../assets/img/firetabletmini.svg";
import rokumini from "../assets/img/rokumini.svg";
import samsungmini from "../assets/img/samsungmini.svg";
import apple2 from "../assets/img/apple2.svg";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div
        className="w-full h-1"
        style={{
          background: `linear-gradient(
          to right,
          #d12027 0%,
          #e65525 22%,
          #f7901e 91%,
          #fdba12 100%`,
        }}
      ></div>
      <div className="max-w-7xl flex xl:flex-row flex-col xl:gap-2 gap-8 items-center justify-center xl:items-start xl:justify-between mx-auto lg:px-0 px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 sm:flex-row flex-wrap sm:gap-14">
            <a
              href="#"
              className="text-sm hover:text-[#DE3F00] duration-200 font-bold text-white tracking-wide"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#DE3F00] duration-200 font-bold text-white tracking-wide"
            >
              LIBRARIANS
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#DE3F00] duration-200 font-bold text-white tracking-wide"
            >
              CAREERS
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#DE3F00] duration-200 font-bold text-white tracking-wide"
            >
              PRESS
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#DE3F00] duration-200 font-bold text-white tracking-wide"
            >
              CONTACT
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#DE3F00] duration-200 font-bold text-white tracking-wide"
            >
              SUPPORT
            </a>
          </div>
          <div className="flex gap-8 items-end">
            <div className="flex sm:flex-row flex-col gap-4 pt-2 sm:items-center">
              <p className="text-white">Available on:</p>
              <div className="flex flex-wrap gap-4 items-end text-white">
                <img src={apple2} alt="" className="w-14 h-auto" />
                <img src={appletab} alt="" className="w-10 h-auto" />
                <img src={applemini} alt="" className="w-6 h-auto" />
                <img src={android} alt="" className="w-12 h-auto" />
                <img src={androidmini} alt="" className="w-14 h-auto" />
                <img src={rokumini} alt="" className="w-8 h-auto" />
                <img src={firetvmini} alt="" className="w-8 h-auto" />
                <img src={firetabletmini} alt="" className="w-14 h-auto" />
                <img src={samsungmini} alt="" className="w-16 h-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:items-end items-center gap-4">
          <div className="flex gap-8">
            <a href="" className="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:text-[#DE3F00] duration-200 text-white"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                  />
                  <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m17.5 6.51l.01-.011"
                  />
                </g>
              </svg>
            </a>
            <a href="#" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:text-[#DE3F00] duration-200 text-white"
                width="30"
                height="30"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M17.316 6.246c.008.162.011.326.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562a3.779 3.779 0 0 1-3.526-2.621a3.858 3.858 0 0 0 1.705-.065a3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.716 10.716 0 0 0 7.781 3.945a3.813 3.813 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.602 7.602 0 0 0 2.397-.916a3.789 3.789 0 0 1-1.66 2.088a7.55 7.55 0 0 0 2.168-.594a7.623 7.623 0 0 1-1.884 1.953"
                />
              </svg>
            </a>
            <a href="#" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:text-[#DE3F00] duration-200 text-white"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73"
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap sm:flex-normal gap-4">
            <p className="text-[#9B9B9B] text-sm">©2024 Kanopy</p>
            <a href="#" className="text-[#9B9B9B] text-sm" id="">
              Terms of Service
            </a>
            <a href="#" className="text-[#9B9B9B] text-sm" id="">
              Privacy Policy
            </a>
            <a href="#" className="text-[#9B9B9B] text-sm" id="">
              Cookies
            </a>
            <a href="#" className="text-[#9B9B9B] text-sm" id="">
              Accessibility
            </a>
            <a href="#" className="text-[#9B9B9B] text-sm" id="">
              Worldwide
            </a>
            <select name="" id="" className="bg-[#101010] w-10">
              <optgroup className="text-gray-400 text-xs">
                <option value=""></option>
                <option value="">Australia</option>
                <option value="">United States</option>
                <option value="">Singapore</option>
                <option value="">Hong Kong</option>
                <option value="">Canada</option>
                <option value="">New Zeeland</option>
                <option value="">United Kingdom</option>
                <option value="">Europe</option>
                <option value="">Worldwide</option>
                <option value="" className="">
                  Middle East
                </option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
