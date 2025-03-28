import React, { useState } from "react";
import { FaPaintBrush, FaArrowRight } from "react-icons/fa";

const App = () => {
  const [isRedBackground, setIsRedBackground] = useState(false);

  const toggleBackground = () => {
    setIsRedBackground(!isRedBackground);
  };

  return (
    <div
      className={`relative w-full h-full min-h-screen justify-center items-center flex transition-colors duration-300 ${
        isRedBackground
          ? "bg-gray-800 text-white"
          : "bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
      }`}
    >
      <h1 className="font-bold text-3xl">Hello </h1>
      <div className="flex absolute top-4 right-20">
        <button
          onClick={toggleBackground}
          className=" text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none animate-slow-spin"
        >
          <FaPaintBrush size={32} />
        </button>
      </div>
    </div>
  );
};

export default App;
