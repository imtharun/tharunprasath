import React, { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = (flag = false) => {
    setShowModal(flag);
  };

  return (
    <header className="h-[10vh] px-5 py-3 sm:px-10 text-dark">
      <div className="flex justify-between items-center">
        <h1 className="font-juliettaMessie text-[2.5rem]" title="Tharun">
          <Link to="/">Tharun</Link>
        </h1>
        <button
          onClick={() => modalHandler(true)}
          className={`bg-dark
            ${
              props.screen === "others"
                ? "sm:bg-dark sm:text-light"
                : "sm:bg-light sm:text-dark"
            }
            text-light 
            opacity-95
            rounded-lg`}
            title="Menu"
        >
          <span className="block opacity-50 transition-all duration-300 hover:opacity-100 text-[1.5rem] px-[0.5rem]">
            ⌘
          </span>
        </button>
        {showModal && (
          <Modal modalHandler={modalHandler} showModal={showModal} />
        )}
      </div>
    </header>
  );
};

export default Header;
