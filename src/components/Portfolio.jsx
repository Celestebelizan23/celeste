import React from "react";
import { FaCode } from "react-icons/fa";
import countries from "../assets/portfolio/countries.png";

const Portfolio = () => {
  const portfolios = [ 
    {
      id: 1,  
      src: countries,
      link: "https://pi-countries-main-six.vercel.app/",
      code: "https://github.com/Celestebelizan23/PI-Countries-main",
    },
  
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-purple-900 w-full text-white md:h-screen flex flex-col"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-400">
            Portfolio
          </p>
          
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href= {link}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href= {code}>Code</a>
                </button>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;