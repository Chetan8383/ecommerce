import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3 tracking-widest shadows-into-light-regular">
      <p className="text-gray-500">
        {text1} <span className="text-violet-700">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-violet-700"></p>
    </div>
  );
};

export default Title;
