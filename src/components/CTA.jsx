import React from "react";

const CTA = () => {
  return (
    <div className="bg-img1 bg-cover bg-center h-fit">
      <div className="max-w-6xl mx-auto lg:px-0 px-6 py-20">
        <div className="max-w-xl ml-auto">
          <h1 className="text-white sm:leading-snug flex flex-col justify-end lg:pr-14 text-2xl sm:text-4xl font-bold">
            Start streaming movies today with your public library card or
            university login
          </h1>
          <p className="text-white text-xl leading-snug lg:pr-36 pt-4 pb-14">
            We partner with public libraries and universities to bring you
            ad-free films and series that can be enjoyed on your TV, mobile
            phone, tablet and online.
          </p>
          <button className="bg-[#DE3F00] text-white sm:px-9 px-8 py-3 sm:py-4 font-bold hover:bg-opacity-70 rounded-md duration-500 uppercase tracking-widest">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
