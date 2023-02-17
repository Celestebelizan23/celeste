import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-purple-900 to-black text-white flex flex-col justify-center"
    > 
      <div className="max-w-screen-lg mx-auto p-4 h-full flex flex-col justify-center flex-grow">
        <div className="pb-4 md:pb-8">
          <p className="text-4xl md:text-5xl font-bold inline border-b-4 border-purple-400 leading-tight md:leading-normal">
         About
          </p>
        </div>

        <p className="text-xl mt-20">

      As a web developer, I have a deep passion for creating impactful and meaningful user experiences
      that provide innovative and efficient solutions to my clients.
      Working in a team with people from different disciplines is one of my strengths and I am proud to 
      contribute to the success of each project.
      Before starting any project, I make an effort to fully understand my clients' needs and goals. 
      I want to ensure that each solution I offer is personalized and effective, and to do that, 
      it is essential to understand their challenges and expectations.
      I like to work tirelessly to provide solutions that meet my clients'
      expectations and have a positive impact on their lives.
        </p>
      </div>
    </div>
  );
};

export default About;