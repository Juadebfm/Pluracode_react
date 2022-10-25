import React from "react";
import Head from "../img/head.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center md:flex-row ">
      <div className="md:flex-1 flex flex-col items-center md:items-start p-8 md:p-0 mt-10 md:mt-28">
        <h1 className="font-bold text-transparent text-center md:text-left text-3xl md:text-7xl bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867]">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>

        <p className="text-[#81AFDD] text-center md:text-left mt-8 text-xl w-2/3 font-thin">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="flex mt-8 md:w-3/4 ">
          <input
            type="text"
            className="bg-[#052D56] placeholder-slate-500 pl-4 md:pl-[14px]  flex-1"
            placeholder="Your Email Addess"
          />
          <button className="bg-[#FF4820] text-white px-6 py-4">
            Get Started
          </button>
        </div>

        <div className="flex gap-4 items-center mt-8 w-full">
          <div className="flex -space-x-2  ">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2  ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className=" flex h-8 w-8 items-center justify-center rounded-full ring-2 bg-teal-600 ring-white text-[8px] text-white">
              +1000
            </div>
          </div>

          <p className="text-white text-[10px]">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>

      <div className="flex-1 w-1/2 md:w-full items-center justify-center flex">
        <img src={Head} className="w-full" alt="head of ai" />
      </div>
    </div>
  );
};

export default Hero;
