import React from "react";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
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
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <div className=" flex gap-6">
        <button className=" text-white font-thin">Sign in</button>
        <button className="px-4 py-2 bg-[#FF4820] font-thin text-white ">
          Sign up
        </button>
      </div>
      <style jsx>{`
        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
          overflow: hidden;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }
        .hamburger {
          display: none;
        }
        @media (max-width: 767px) {
          .hamburger {
            display: fixed;
            padding-top: 10px;
            margin-left: 10px;
          }

          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            background-color: blue;
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: fixed;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
