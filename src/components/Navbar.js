import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="contsiner px-2 flex justify-between items-center w-full h-full">
        <div className="flex text-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>AboutUs</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Out</button>
        </div>
      </div>
      <Bars3Icon className="w-5" />
    </div>
  );
};

export default Navbar;
