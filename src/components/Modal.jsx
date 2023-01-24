import {
  ArrowRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { NavLink } from "react-router-dom";

const Modal = ({ modalHandler }) => {
  return (
    <div className="transition duration-300 fixed z-20 inset-0 overflow-y-auto flex justify-center items-center">
      <div
        onClick={() => modalHandler(false)}
        className="fixed inset-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm"
      ></div>
      <div className="z-50 border border-gray-200 bg-white px-5 pt-7 pb-5 rounded-lg m-5 w-[32rem] h-[18rem] overflow-y-scroll">
        <div>
          <p className="text-gray-500 text-xs">Navigation</p>
          <NavLink
            onClick={() => modalHandler(false)}
            className="flex mt-3 transition-all duration-300 opacity-50 hover:opacity-100 items-center hover:bg-gray-200 p-3 hover:rounded-md"
            to={"/"}
          >
            <ArrowRightIcon className="w-6 h-6" />
            <span className="ml-2 ">Home</span>
          </NavLink>
          <NavLink
            onClick={() => modalHandler(false)}
            className="flex mt-3 transition-all duration-300 opacity-50 hover:opacity-100 items-center hover:bg-gray-200 p-3 hover:rounded-md"
            to={"/skills"}
          >
            <ArrowRightIcon className="w-6 h-6" />
            <span className="ml-2 ">Skills</span>
          </NavLink>
          <NavLink
            onClick={() => modalHandler(false)}
            className="flex mt-3 items-center transition-all duration-300 opacity-50 hover:opacity-100 hover:bg-gray-200 p-3 hover:rounded-md"
            to={"/projects"}
          >
            <ArrowRightIcon className="w-6 h-6" />
            <span className="ml-2 ">Projects</span>
          </NavLink>
        </div>
        <div className="mt-5">
          <p className="text-gray-500 text-xs">Socials</p>
          <a
            onClick={() => modalHandler(false)}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/imtharun"
            className="flex mt-3 items-center transition-all duration-300 opacity-50 hover:opacity-100 hover:bg-gray-200 p-3 hover:rounded-md"
            to={"/skills"}
          >
            <GitHubLogoIcon className="w-5 h-5" />
            <span className="ml-3">Skills</span>
          </a>
          <a
            onClick={() => modalHandler(false)}
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/imtharun"
            className="flex mt-3 items-center transition-all duration-300 opacity-50 hover:opacity-100 hover:bg-gray-200 p-3 hover:rounded-md"
            to={"/projects"}
          >
            <LinkedInLogoIcon className="w-5 h-5" />
            <span className="ml-3">Projects</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
