import React from "react";
import { appleImg, bagImg, searchImg } from "../utils/index";
import { navLists } from "../constants/index";
const NavBar = () => {
  return (
    <header className="flex w-full items-center justify-center px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex w-full flex-1 justify-center max-sm:hidden">
          {navLists.map((item) => (
            <div
              className="cursor-pointer px-5 text-sm text-gray transition-all hover:text-white"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Cart" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
