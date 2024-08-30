import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between pt-[30px] mb-14 sm:mb-8">
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="" width={30} height={30} />
        <h2 className="text-[20px] sm:text-[26px]">Sonify</h2>
      </div>
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
