import React from "react";

const Header = () => {
  return (
    <header className="h-[10vh] px-5 py-3 sm:px-10 text-[#1f1f1f]">
      <div className="flex justify-between items-center">
        <h1 className="font-explora text-5xl font-semibold  ">Tharun</h1>
        <label className="bg-[#1f1f1f] sm:bg-[#fefde9]" htmlFor="check">
          <input type="checkbox" id="check" />
          <span className="bg-[#fefde9] sm:bg-[#1f1f1f]"></span>
          <span className="bg-[#fefde9] sm:bg-[#1f1f1f]"></span>
          <span className="bg-[#fefde9] sm:bg-[#1f1f1f]"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
