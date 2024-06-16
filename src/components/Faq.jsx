import React, { useState } from "react";

const PlusIcon = () => {
  return (
    <svg
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
    </svg>
  );
};

const Faq = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6">
      <dt>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex w-full items-start justify-between text-left text-[#414141]"
          aria-controls="faq-0"
          aria-expanded="false"
        >
          <span className="sm:text-3xl text-2xl text-white font-bold sm:leading-7">
            {question}
          </span>
          <span className="ml-6 flex h-7 items-center">
            {open ? <MinusIcon /> : <PlusIcon />}
          </span>
        </button>
      </dt>
      <dd className={`${open ? "block" : "hidden"} mt-10 sm:pr-20`} id="faq-0">
        <p className="sm:text-2xl text-lg sm:leading-[40px] text-white">
          {answer}
        </p>
      </dd>
    </div>
  );
};

export default Faq;
