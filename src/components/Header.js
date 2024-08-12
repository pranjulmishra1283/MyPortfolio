import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a className="flex" href="/">
            <img src={Logo} className="h-40" alt="My logo" />
            <div className="hidden lg:flex flex-col my-auto text-6xl">
              <div className="text-gradient text-4xl">Pranjul</div>
              <div className="font-semibold">Mishra</div>
            </div>
          </a>
          {/* Button */}
          <button className="btn btn-sm">
            <a
              href="mailto:pranjulmishra1283@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work with me
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
