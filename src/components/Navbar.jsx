import React, { useState } from "react";
import final_logo from "../assets/final_logo.png";
import lock from "../assets/lock.svg";
import Hamburger from "../assets/hamburgerMenu.svg";
import Close from "../assets/close.svg";
import { motion } from "framer-motion";
import Dividers  from "../components/Dividers"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[96px] shadow-sm">
      <div className="p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center">
        <img src={final_logo} alt="logo" className="w-24 cursor-pointer" />
        <div className="flex items-center">
          <ul className="hidden md:flex gap-4 ">
            <li>Home</li>
            <Dividers/>
            <li>Who We Are</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* DropDown Starts Here  */}



        {/* DropDown Ends Here  */}
        <div className="md:flex hidden">
          <button className="flex justify-content-between items-center bg-transparent px-6 gap-2">
            <img src={lock} alt="lock" />
            Login
          </button>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
           Sign In
          </button>
        </div>
        <motion.div
          whileTap={{ scale: 0.6 }}
          className="md:hidden cursor-pointer"
          onClick={handleToggle}
        >
          <img src={toggle ? Close : Hamburger} alt="hamburger" />
        </motion.div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Navbar;
