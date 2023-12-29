import Link from "next/link";
import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-fll min-h-56 bg-gray-900 sm:px-10 px-4 pt-8 pb-3 text-white">
      <div className="grid grid-cols-3 order-2">
      <div className="md:col-span-2 col-span-4 flex justify-center items-center flex-col">
          <h2 className="md:text-2xl text-xl font-bold text-center">
            Interesting Stories | Updates | Guides
          </h2>
          <p className="text-center">
            Subscribe to receive exclusive blog updates directly to your
            inbox—stay informed, stay inspired!
          </p>
          <form className="mt-5 h-20 py-5 px-5 bg-gray-400 rounded-md flex gap-x-3 ">
            <input placeholder="Enter your email" className="h-full w-full px-2 focus:outline-none bg-transparent placeholder:text-white border-b-2 border-white" />
            <button type="submit" className="bg-red-600 h-full px-3 rounded">Submit</button>
          </form>
        </div>
        <div className="md:col-span-1 col-span-4 md:col-end-4  row-start-1 mb-5 md:mb-0">
          <div className="flex md:justify-center items-center md:flex-col justify-between">
          <div>
            <Link href={"/"} className="font-bold">
              <span className="text-white text-2xl">EZ</span>
              <span className="text-white text-lg">writer</span>
            </Link>
          </div>
          <div>
            <ul className="md:mt-5 flex  justify-center items-center gap-x-3 md:flex-col">
              <li className="text-white hover:underline md:mb-2">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-white hover:underline md:mb-2">
                <Link href={"/"}>About</Link>
              </li>
              <li className="text-white hover:underline md:mb-2">
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      
      </div>
      <hr className="mt-5" />
      <div className="mt-2 flex gap-x-2">
        <Link href={"/"}>
          <FaLinkedin color="#fff" size={"25px"} />
        </Link>
        <Link href={"/"}>
          <FaFacebook color="#fff" size={"25px"} />
        </Link>
        <Link href={"/"}>
          <FaGithub color="#fff" size={"25px"} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
