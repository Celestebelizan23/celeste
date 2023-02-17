import React from "react";
import Cele from "../assets/cele.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-purple-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-purple-200 py-4 max-w-md">
          I am looking for a challenging position that allows me to grow in what
           I am passionate about, which is web development, and to continue learning 
           in the dynamic field of information technology.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group flex items-center rounded-md bg-black text-white w-fit px-6 py-3 my-2 cursor-pointer
              sm:w-1/2 sm:px-4 sm:py-2 sm:my-4 md:w-1/3 
              flex-wrap"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Cele}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;