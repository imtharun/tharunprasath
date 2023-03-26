import React from "react";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Modal = ({ showModal, modalHandler }) => {
  document.addEventListener("keydown", (e) => {
    if (showModal && e.key === "Escape") {
      modalHandler(false);
    }
  });

  return (
    <div className="transition duration-300 fixed inset-0 overflow-y-auto flex justify-center items-center z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => modalHandler(false)}
          className="fixed inset-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm z-[80]"
        ></motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-[85] border border-gray-200 bg-white px-5 pt-7 pb-5 rounded-lg m-5 w-[32rem] h-[18rem] overflow-y-scroll"
        >
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
              <span className="ml-3">GitHub</span>
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
              <span className="ml-3">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Modal;
