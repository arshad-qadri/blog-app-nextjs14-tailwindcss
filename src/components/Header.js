import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-10 py-3">
      <Link href={"/"} className="font-bold">
        <span className="text-red-600 text-xl">EZ</span>writer
      </Link>
      <button className="bg-custome-blue text-white py-1 px-5 rounded">Login</button>
    </div>
  );
};

export default Header;
