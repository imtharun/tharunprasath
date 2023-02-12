import React, { useEffect } from "react";
import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import indiaFlag from "./../assets/india-flag.png";
import Me from "./../assets/tharun.png";
import Bg from "./../assets/bg.svg";
import Resume from "./../assets/resume/tharunprasath.pdf";
import Hi from "./../assets/gif/Hi.gif";
import Typewriter from "typewriter-effect";

const Main = () => {
  useEffect(() => {
    document.title = "Home / Tharunprasath";
  }, []);

  return (
    <section className="text-dark h-[90vh] font-monts flex flex-col justify-around ">
      {/* <p className="absolute text-[13rem] italic opacity-20 right-3">Home</p> */}
      <aside className="flex flex-row">
        {/* Left */}
        <div className="sm:w-[50%] h-full sm:px-10 sm:py-12 px-5 py-7">
          <h1 className="text-2xl flex items-start">
            Hello
            <img className="w[30px] h-[30px] ml-2" src={Hi} alt="Hi" />,
          </h1>
          <h2 className="text-4xl mt-2 font-medium">I'm Tharunprasath A S,</h2>
          <div className="text-4xl flex items-center mt-2 font-medium">
            <p className="hidden mmd:block mmd:w-[5rem] mmmd:w-[8rem] h-[2px] bg-[#C6AF84] rounded-full md:ml-1"></p>
            <h3 className="mmd:ml-2 mmmd:ml-2 mmmmd:ml-8">Developer 🔮</h3>
          </div>
          <p className="text-gray-500 mt-3 text-sm font-medium">
            I'm a college student with experience in full stack development and
            currently learning mobile development. I am a hardworking individual
            and always eager to learn new technologies.
          </p>
          <div className="flex mt-1 text-gray-500 font-medium text-sm items-center">
            <p className="mr-2">You can talk with me about</p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("ReactJS")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("TailwindCSS")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Javascript")
                  .start();
              }}
            />
          </div>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className="flex text-sm justify-center items-center mt-2 border-b-[1.5px] border-transparent hover:border-b-dark font-medium transition-colors duration-300 opacity-70 hover:opacity-100">
              Download CV <DownloadIcon className="pl-2 w-5 " />
            </button>
          </a>
        </div>
        {/* Right */}
        <div className="relative md:-ml-10 lg:-ml-12 hidden sm:flex sm:w-[50%] sm:flex-col justify-around items-center">
          <img
            className="w-[285px] h-[400px] z-10 rounded-full"
            src={Me}
            alt="Tharunprasath"
          />
          <img
            className="absolute md:max-w-[450px] md:max-h-[400px] translate-y-16 smd:-top-4 md:-top-6 mmd:-top-12 mmmmd:-top-12 lg:-top-14"
            src={Bg}
            alt="Background"
          />
        </div>
      </aside>
      {/* Lower */}
      <aside className="flex items-center justify-between px-5 sm:px-10">
        <div className="flex items-center text-sm text-gray-500">
          Based in India
          <img
            className="w-5 h-4 rounded-md ml-2"
            src={indiaFlag}
            alt="India"
          />
        </div>
        <div className="flex justify-around items-center">
          <a
            href="mailto:im.tharunprasath@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <EnvelopeClosedIcon className="sm:text-light opacity-50 hover:opacity-100 mr-6 w-6 h-6 transition-all duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.github.com/imtharun"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubLogoIcon className="sm:text-light opacity-50 hover:opacity-100 mr-6 w-6 h-6 transition-all duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/imtharun/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInLogoIcon className="sm:text-light opacity-50 hover:opacity-100 w-6 h-6 transition-all duration-300 cursor-pointer" />
          </a>
        </div>
      </aside>
    </section>
  );
};

export default Main;
