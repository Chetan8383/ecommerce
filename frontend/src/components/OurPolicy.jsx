import React from "react";
import { assets } from "../assets/assets";
import { TbTruckReturn } from "react-icons/tb";
import { CiCircleCheck, CiHeadphones, CiRepeat } from "react-icons/ci";

const OurPolicy = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <dl className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-center items-center rounded-lg px-4 py-8 text-center">
            <CiRepeat className="text-5xl font-extralight" />
            <p className="font-semibold">Easy Exchange Policy</p>
            <p className="text-gray-400">
              We offer hassle free exchange policy
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg px-4 py-8 text-center">
            <CiCircleCheck className="text-5xl" />
            <p className="font-semibold">7 Days Return Policy</p>
            <p className="text-gray-400">
              We provide 7 days free return policy
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg px-4 py-8 text-center">
            <CiHeadphones className="text-5xl" />
            <p className="font-semibold">Best customer support</p>
            <p className="text-gray-400">we provide 24/7 customer support</p>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default OurPolicy;
