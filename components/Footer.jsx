import React from "react";

const Footer = () => {
  return (
    <div className="footer pt-6 pb-10 flex justify-between">
      <div className="flex gap-5">
        <a className="text-[15px] font-light" href="#">
          About
        </a>
        <a className="text-[15px] font-light" href="#">
          Features
        </a>
        <a className="text-[15px] font-light" href="#">
          FAQ
        </a>
      </div>
      <p className="font-light">@ 2024 Sonify</p>
    </div>
  );
};

export default Footer;
