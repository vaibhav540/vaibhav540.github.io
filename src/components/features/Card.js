import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-4 md:px-8 h-auto py-8 rounded-lg shadow-shadowOne flex flex-col justify-between bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className="h-auto overflow-hidden">
        <div className="flex flex-col gap-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-10 flex justify-between">
            {icon ? (
              <span className="text-4xl md:text-5xl text-designColor">
                {icon}
              </span>
            ) : (
              <div className="flex flex-col space-y-1">
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-400">
              {des}
            </p>
            <span className="text-xl md:text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
