import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-[30px] mb-14 sm:mb-8">
      <h2 className="text-[20px] sm:text-[26px]">Sonify</h2>
      <div className="flex gap-7">
        <a className="text-[15px] font-light" href="#">
          About
        </a>
        <a className="text-[15px] font-light" href="#">
          Features
        </a>
        <a className="text-[15px] font-light" href="#">
          FAQ
        </a>
        <a className="text-[15px] font-light" href="#">
          Github
        </a>
      </div>
    </div>
  );
};

export default Header;
