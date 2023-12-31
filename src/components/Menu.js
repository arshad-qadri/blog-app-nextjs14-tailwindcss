import { menuItem } from "@/utils";
import Link from "next/link";
import React from "react";

const Menu = ({ toggle }) => {
 
  return (
    <div>
      <div
        className="sm:block hidden w-max bg-light/80 py-2 border border-solid border-dark top-5 rounded-full  fixed left-1/2 -translate-x-1/2 px-10 z-30
    backdrop-blur-sm "
      >
        <ul className="flex justify-center items-center gap-x-7">
          {menuItem.map((item, index) => (
            <li key={index} className="font-semibold">
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      {toggle && (
        <div className="sm:hidden block fixed z-30 bg-white/80 py-4 px-8 border border-solid border-dark rounded-xl backdrop-blur-sm right-20">
          <ul className="flex justify-center items-center gap-y-5 flex-col">
            {menuItem.map((item, index) => (
              <li key={index} className="font-semibold">
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
