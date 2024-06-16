import React from "react";

const Tab = ({ title, img }) => {
  return (
    <div class="flex flex-col pt-10 max-w-6xl mx-auto gap-14">
      <h1 class="text-white leading-snug text-center flex flex-col justify-end text-2xl sm:text-4xl font-bold">
        {title}
      </h1>
      <a href="#" class="">
        <img src={img} alt="" class="w-[75%] mx-auto" />
      </a>
    </div>
  );
};

export default Tab;
