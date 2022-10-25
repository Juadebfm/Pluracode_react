import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-around md:justify-between w-full mt-20">
      <h1 className="text-white font-bold text-xl">GPT3</h1>
      <nav className="hidden md:flex gap-8">
        <a href="#home" className="text-white">
          Home
        </a>
        <a href="#home" className="text-white">
          What is GPT?
        </a>
        <a href="#home" className="text-white">
          Open AI
        </a>
        <a href="#home" className="text-white">
          Case Studies
        </a>
        <a href="#home" className="text-white">
          Library
        </a>
      </nav>
      <div className=" flex gap-6">
        <button className=" text-white font-thin">Sign in</button>
        <button className="px-4 py-2 bg-[#FF4820] font-thin text-white ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
