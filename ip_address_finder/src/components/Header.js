import React from "react";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-gradient-to-b from-gray-500 to-gray-900 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <a className="pressStart" href="/">
            IP Address Finder
          </a>
          <Link className="pressStart" to="/">
            IP Address Finder
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="/"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </a>

          <a
            href="/services"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
