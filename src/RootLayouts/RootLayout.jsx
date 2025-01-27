import React, { useState } from "react";
import Navbar from "../components/header";
import { Outlet } from "react-router-dom";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Navbar />
        <Outlet />
        <button
          className="absolute bottom-10 left-10 text-white"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <div className="scale-150 bg-emerald-600 hover:bg-emerald-500 p-2 rounded-full">
            <BsSunFill />
            </div>
          ) : (
            <div className="scale-125 bg-indigo-700 hover:bg-indigo-600 p-2 rounded-full">
              <BsFillMoonStarsFill />
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default RootLayout;
