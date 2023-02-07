import { ExitIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-end min-h-screen min-w-full bg-light bg-contain bg-center bg-no-repeat bg-[url('./assets/error.svg')] max-h-[100vh]">
      <Link
        to={"/"}
        className="flex items-center mb-6 bg-dark p-3 rounded-full text-light border-[1.5px] border-transparent hover:border-dark hover:text-dark hover:bg-light transition-all duration-300"
      >
        Back to Home <ExitIcon className="ml-2 mt-1" />
      </Link>
    </div>
  );
};

export default Error;
