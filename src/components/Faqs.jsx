import React from "react";
import Faq from "./Faq";

const Faqs = () => {
  const faqs = [
    {
      id: 1,
      question: "What is Kanopy?",
      answer: `Kanopy is the best video streaming service for quality, thoughtful entertainment. Find movies, documentaries, foreign films, classic cinema, independent films and educational videos that inspire, enrich and entertain. We partner with public libraries and universities to bring you an ad-free experience that can be enjoyed on your TV, mobile phone, tablets and online.`,
    },
    {
      id: 2,
      question: "How is Kanopy free for me?",
      answer: `
        Just as your library buys books to add to their collection for you to borrow, your library offers a variety of digital resources too - Kanopy is one of their more popular digital resources. Kanopy does not charge you because the public library or university covers all associated costs, allowing you to watch for free with no ads.`,
    },
    {
      id: 3,
      question: "Why do I need a library card or university login to sign up?",
      answer: `
      Kanopy is only available through libraries, so you need to be a member of a participating library to start watching Kanopy.

If you are a member of a participating public library, you can start watching by signing up with a valid public library card number and PIN/password.

If you are a currently registered student or faculty member of a participating college university, you can start watching by signing up with a valid university login.`,
    },
    {
      id: 4,
      question: "How do I know if my library or university offers Kanopy?",
      answer: `
      For public libraries, check to see if your library has made Kanopy available here. Type in the name of your library, or enter your zip code to display nearby libraries that have made Kanopy available.

For universities, check to see if your library has made Kanopy available here. Type in the name of your university to see if they have made Kanopy available.`,
    },
    {
      id: 5,
      question: "How do I get started?",
      answer: `
        Getting started is easy! Click here to find your library and enter your library card information or university login when prompted. Follow the simple instructions to create your Kanopy account using your email address or Google login and then start watching.`,
    },
    {
      id: 6,
      question: "What is Kanopy Kids?",
      answer: `
      Kanopy Kids is our collection of movies and shows for kids available in public libraries only. Your public library offers unlimited plays in Kanopy Kids, so your kids are free to explore enriching, educational and entertaining films and TV series. Click here to check out Kanopy Kids!`,
    },
  ];
  return (
    <div class="bg-black py-20">
      <div class="">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-6xl divide-y divide-white">
            <h2 class="sm:text-5xl text-3xl font-bold leading-10 text-center tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <dl class="mt-10 space-y-6 divide-y divide-white">
              {faqs.map((faq) => {
                return (
                  <Faq
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                );
              })}
            </dl>
          </div>
        </div>
      </div>
      <div class="max-w-2xl flex flex-col items-center gap-10 px-6 mx-auto pt-20">
        <h1 class="text-white sm:leading-snug text-center flex flex-col justify-end text-2xl sm:text-4xl font-bold">
          Sign up today for free through your public library or university
        </h1>
        <button class="bg-[#DE3F00] text-white sm:px-9 sm:py-4 py-3 px-7 font-bold hover:bg-opacity-70 rounded duration-500 uppercase tracking-widest">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Faqs;
