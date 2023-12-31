"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setToggle(false)
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex justify-between px-10 py-6" onScroll={()=>setToggle(false)}>
      <Link href={"/"} className="font-bold text-xl">
        <span className="text-red-600 text-2xl">EZ</span>writer
      </Link>
      <Menu toggle={toggle} />
      <button className="sm:block hidden bg-custome-blue text-white py-1 px-5 rounded">
        Login
      </button>
      <div className="cursor-pointer block sm:hidden" onClick={() => setToggle(!toggle)}>
        {toggle ? <IoCloseSharp size={25} /> : <FaBars size={25} />}
      </div>
    </div>
  );
};

export default Header;
