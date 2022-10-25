import React from "react";
import Blog1 from "../img/1.png";
import Blog2 from "../img/2.png";
import Blog3 from "../img/3.png";
import Blog4 from "../img/4.png";
import Blog6 from "../img/6.png";

const Blog = () => {
  return (
    <div className="mt-28">
      <p className=" w-full md:w-2/3 font-bold text-transparent   text-2xl text-center md:text-left md:text-7xl bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
        A lot is happening, We are blogging about it.
      </p>

      <div className="grid grid-cols-1 m-8 md:mt-32 md:m-0 md:grid-cols-3 grid-rows-2 gap-8 mt-24">
        <div className="row-span-2 hover:scale-105  ">
          <div className="w-full">
            <img className="object-cover" src={Blog4} alt="" />
          </div>

          <div className="flex flex-col justify-between h-96  bg-[#042C54] p-6">
            <div className="">
              <span className="text-white">Sep 26, 2021</span>
              <p className="text-white mt-2">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>

            <span className="text-white text-xs">Read Full Article</span>
          </div>
        </div>

        <div className=" hover:scale-105">
          <div className="w-full">
            <img className="object-cover" src={Blog6} alt="" />
          </div>

          <div className="flex flex-col justify-between bg-[#042C54] p-6">
            <div>
              <span className="text-white">Sep 26, 2021</span>
              <p className="text-white mt-2">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>

            <span className="mt-2 text-white text-xs">Read Full Article</span>
          </div>
        </div>

        <div className="hover:scale-105">
          <div className="">
            <img className="object-cover" src={Blog2} alt="" />
          </div>

          <div className="flex flex-col justify-between bg-[#042C54] p-6">
            <div>
              <span className="text-white">Sep 26, 2021</span>
              <p className="text-white mt-2">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>

            <span className="mt-2 text-white text-xs">Read Full Article</span>
          </div>
        </div>

        <div className="hover:scale-105">
          <div className="">
            <img className="object-cover" src={Blog3} alt="" />
          </div>

          <div className="flex flex-col justify-between  bg-[#042C54] p-6">
            <div>
              <span className="text-white">Sep 26, 2021</span>
              <p className="text-white mt-2">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>

            <span className="mt-2 text-white text-xs">Read Full Article</span>
          </div>
        </div>

        <div className="hover:scale-105">
          <div className="">
            <img className="object-cover" src={Blog1} alt="" />
          </div>

          <div className="flex flex-col justify-between  bg-[#042C54] p-6">
            <div className="flexc  flex-col justify-between">
              <span className="text-white">Sep 26, 2021</span>
              <p className="text-white mt-2">
                GPT-3 and Open AI is the future. Let us exlore how it is?
              </p>
            </div>

            <span className="mt-2 text-white text-xs">Read Full Article</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
