import React, { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = (flag = false) => {
    setShowModal(flag);
  };

  return (
    <header className="h-[10vh] px-5 py-3 sm:px-10 text-[#1f1f1f]">
      <div className="flex justify-between items-center">
        <h1 className="font-explora text-5xl font-semibold">Tharun</h1>
        <button
          onClick={() => modalHandler(true)}
          className="text-4xl bg-[#1f1f1f] sm:bg-[#fefde9] px-[6px] text-[#fefde9] opacity-95 sm:text-[#1f1f1f] rounded-lg"
        >
          <span className="block opacity-70 -mt-[2px] transition-all duration-300 hover:opacity-100">
            ⌘
          </span>
        </button>
        {showModal && <Modal modalHandler={modalHandler} />}
      </div>
    </header>
  );
};

export default Header;
