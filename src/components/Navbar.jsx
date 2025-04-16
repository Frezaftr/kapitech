import React, { useState } from "react";
import logo from "../assets/LogoKapitech.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-black/30 text-white">
      {/* Left Side: Logo + Brand + Menu (Hidden on mobile) */}
      <div className="flex items-center space-x-6">
        <img src={logo} alt="Kapitech Logo" className="h-8 w-auto" />
        <span className="text-sm tracking-wider font-semibold">Kapitech</span>
        <div className="hidden md:flex items-center space-x-6">
          <div className="hover:text-red-500 cursor-pointer">Work</div>
          <div className="hover:text-red-500 cursor-pointer">Agency</div>
          <div className="hover:text-red-500 cursor-pointer flex items-center">
            Services <span className="ml-1 text-xs">›</span>
          </div>
        </div>
      </div>

      {/* Right Side: Actions (Hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-6 text-sm">
        {/* <div className="hover:text-red-500 cursor-pointer">News</div>
        <div className="hover:text-red-500 cursor-pointer">Careers</div> */}
        <button className="bg-[#F32222] hover:bg-red-500 transition px-5 py-1.5 rounded-full text-white font-medium text-sm">
          Contact
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 text-white px-6 py-4 md:hidden flex flex-col space-y-4">
          <div className="hover:text-red-500 cursor-pointer">Work</div>
          <div className="hover:text-red-500 cursor-pointer">Agency</div>
          <div className="hover:text-red-500 cursor-pointer">Services</div>
          {/* <div className="hover:text-red-500 cursor-pointer">News</div>
          <div className="hover:text-red-500 cursor-pointer">Careers</div> */}
          <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-full text-white font-medium text-sm">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
