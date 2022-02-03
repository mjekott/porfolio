import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 pt-5 z-10 md:py:20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mfonobong Ekott.
            <br className="hidden lg:inline-block " />
          </h1>
          <div className="mb-8 leading-relaxed">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer.",
                  "Full-Stack Web Developer.",
                  "I love to build amazing apps.",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName:
                  "title-font sm:text-4xl text-3xl mb-4 font-medium text-white",
                cursorClassName: "text-white text-lg",
              }}
            />
          </div>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-gray-400  bg-gray-800  border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-sm md:text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-sm md:text-lg"
            >
              See My Past Work
            </a>
          </div>
          <div className="flex mt-4 md:ml-20">
            <a
              href="#projects"
              className="ml-4  text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-sm md:text-lg"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg border-3 border-gray-200"
            alt="hero"
            src="./profile.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
