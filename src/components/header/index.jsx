import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="w-full bg-green-500 dark:bg-indigo-900 py-4 fixed top-0 z-10">
        <div className="container flex justify-between items-center">
          <div className="w-28">
            <Link className="py-4 text-2xl font-bold uppercase select-none text-white dark:text-[#e4e4ef]" to="/">
              Notable
            </Link>
          </div>
          <div className="w-4/5">
            <div className="flex gap-5 justify-end uppercase font-semibold text-lg text-white">
              <Link to="/" className={location.pathname === "/" ? "overline" : ""}>Home</Link>
              <Link to="/notes" className={location.pathname === "/notes" ? "overline" : ""}>Notes</Link>
              <Link to="/contact" className={location.pathname === "/contact" ? "overline" : ""}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
