import React from "react";
import HeroElypse from "./heroElypse";

const What = () => {
  return (
    <div className="pt-10 pb-0 px-10 relative h-[60vh] lg:h-[45vh] mt-20 w-full bg-[#0F4279]  shadow-md mx-auto flex flex-col">
      <HeroElypse />

      <div className="flex flex-col  md:items-start">
        <div className="w-10  h-1 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500"></div>

        <div className="flex flex-col md:flex-row w-full  md:items-center md:justify-between mt-6">
          <div className="text-white font-bold ">
            <span className="md:mt-2 mb-2">What is GPT-3</span>
          </div>
          <div className="md:w-3/4">
            <p className="text-[#81AFDD] text-[14px] md:text-base">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex flex-col md:flex-row mt-4 lg:mt-8 md:md-20 items-center md:items-start  md:justify-between">
        <div className=" md:w-2/3 ">
          <p className="font-bold text-transparent text-2xl md:text-4xl  bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
            The possibilities are beyond your imagination
          </p>
        </div>
        <span className="text-[#FF8A71] mt-4 md:mt-0">Explore The Library</span>
      </div>

      <div className="md:flex mt-5 md:mt-20 gap-8">
        <div className="flex flex-col flex-1">
          <div className="w-10 mt-6 h-1 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500"></div>
          <span className="text-white font-bold md:mt-4">Chatbots</span>
          <p className="text-[#81AFDD] md:mt-10 text-[14px] md:text-base">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.{" "}
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <div className="w-10 mt-6 h-1 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500"></div>
          <span className="text-white font-bold md:mt-4">Knowledgebase</span>
          <p className="text-[#81AFDD] md:mt-10 text-[14px] md:text-base">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments{" "}
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <div className="w-10 h-1 mt-6 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500"></div>
          <span className="text-white font-bold md:mt-4">Education</span>
          <p className="text-[#81AFDD] md:mt-10 text-[14px] md:text-base">
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default What;
