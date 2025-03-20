import React from "react";

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
   
  return (
    <div>
      <div className="mx-auto max-w-screen-xl rounded-3xl px-4 py-10 saira-font">
        <h2 className="text-center text-4xl font-bold sm:text-3xl">
          Subscribe now & get 20% off
        </h2>
        <p className="mt-3 text-center text-xl font-light">
          Available in PDF, ePub & mobi
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="mx-auto mt-3 flex max-w-2xl flex-col border-violet-600 bg-white sm:flex-row sm:rounded-full sm:border"
        >
          <input
            className="m-2 h-12 rounded-full px-4 text-gray-500 ring ring-violet-400 sm:w-full sm:ring-0 focus:outline-none focus:ring"
            placeholder="Enter your email"
            type="email"
            name="email"
          />
          <button className="shrink-0 m-2 rounded-full bg-violet-500 px-8 py-3 font-medium text-white focus:bg-violet-700 focus:outline-none hover:bg-violet-700">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
