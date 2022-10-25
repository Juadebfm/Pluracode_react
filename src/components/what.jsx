import React from "react";
import HeroElypse from "./heroElypse";

const What = () => {
  return (
    <div className="p-20 relative overflow-hidden h-full mt-20 w-full bg-[#0F4279]  shadow-md mx-auto flex flex-col">
      <HeroElypse />

      <div className="flex flex-col items-center md:items-start">
        <div className="w-10  h-1 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500"></div>

        <div className="flex flex-col md:flex-row w-full items-center md:items-start md:justify-between mt-6">
          <div className="text-white font-bold ">
            <span className="mt-2">What is GPT-3</span>
          </div>
          <div className="md:w-3/4">
            <p className="text-[#81AFDD]">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col md:flex-row mt-20 items-center md:items-start  md:justify-between">
        <div className="w-2/3 ">
          <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
            The possibilities are beyond your imagination
          </p>
        </div>
        <span className="text-[#FF8A71] mt-4 md:mt-0">Explore The Library</span>
      </div>

      <div className="hidden md:flex mt-20 gap-8">
        <div className="flex flex-col flex-1">
          <div className="w-10  h-1 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500"></div>
          <span className="text-white font-bold mt-4">Chatbots</span>
          <p className="text-[#81AFDD] mt-10">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.{" "}
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <div className="w-10  h-1 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500"></div>
          <span className="text-white font-bold mt-4">Knowledgebase</span>
          <p className="text-[#81AFDD] mt-10">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments{" "}
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <div className="w-10  h-1 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500"></div>
          <span className="text-white font-bold mt-4">Education</span>
          <p className="text-[#81AFDD] mt-10">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default What;
