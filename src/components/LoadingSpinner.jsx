import React from "react";
import "tw-elements";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col bg-[#fefde9] min-h-screen w-full justify-center items-center">
      <div
        className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-[#1f1f1f]"
        role="status"
      ></div>
      <div className="mt-2">
        <p className="visually-hidden">Loading...</p>
        <p className="text-[#1f1ff] text-sm">This might take few seconds, please don't close this page!</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
