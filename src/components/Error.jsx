import { ExitIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-end min-h-screen min-w-full bg-[#fefde9] bg-contain bg-center bg-no-repeat bg-[url('./assets/error.svg')] max-h-[100vh]">
      <Link
        to={"/"}
        className="flex items-center mb-6 bg-[#1f1f1f] p-3 rounded-full text-[#fefde9] border-[1.5px] border-transparent hover:border-[#1f1f1f] hover:text-[#1f1f1f] hover:bg-[#fefde9] transition-all duration-300"
      >
        Back to Home <ExitIcon className="ml-2 mt-1" />
      </Link>
    </div>
  );
};

export default Error;
