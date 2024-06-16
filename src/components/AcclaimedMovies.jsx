import React from "react";
import floatimg1 from "../assets/img/floatimg1.jpg";
import floatimg2 from "../assets/img/floatimg2.jpg";
import floatimg3 from "../assets/img/floatimg3.jpg";
import floatimg4 from "../assets/img/floatimg4.jpg";
import floatimg5 from "../assets/img/floatimg5.jpg";
import floatimg6 from "../assets/img/floatimg6.jpg";
import float11 from "../assets/img/float11.jpg";
import float22 from "../assets/img/float22.jpg";
import float33 from "../assets/img/float33.jpg";
import float44 from "../assets/img/float44.jpg";
import float55 from "../assets/img/float55.jpg";
import float66 from "../assets/img/float66.jpg";
import Slides from "./Slides";

const AcclaimedMovies = () => {
  return (
    <div class="bg-black py-20 z-20">
      <div class="max-w-[700px] px-4 mx-auto">
        <h1 class="text-white sm:leading-snug text-center flex flex-col justify-end text-2xl sm:text-4xl font-bold">
          Enjoy critically-acclaimed movies, inspiring documentaries,
          award-winning foreign films and more
        </h1>
      </div>
      <div class="pt-16">
        <Slides
          speed={100000}
          imgs={[
            floatimg1,
            floatimg2,
            floatimg3,
            floatimg4,
            floatimg5,
            floatimg6,
          ]}
        />
      </div>
      <div class="pt-4">
        <Slides
          speed={100000 * 1.5}
          imgs={[float11, float22, float33, float44, float55, float66]}
        />
      </div>
      <div class="max-w-3xl mx-auto text-center px-4 flex flex-col gap-8 items-center pt-20">
        <h1 class="text-white leading-snug text-center flex flex-col justify-end text-4xl font-bold">
          Stream these movies and thousands more
        </h1>
        <button class="border-white border-4 sm:px-6 px-4 py-2 sm:py-3 text-lg hover:bg-white hover:text-black duration-700 hover:border-black tracking-widest text-white font-bold">
          BROWSE MOVIES
        </button>
      </div>
    </div>
  );
};

export default AcclaimedMovies;
