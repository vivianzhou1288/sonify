import { CircleUserRound, House, ListMusic, Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.png";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="">
        <Menu size={35} className="sm:hidden m-3" />
      </div>
      <div className="hidden fixed bg-[#373251] w-[70px] min-h-screen sm:flex flex-col items-center justify-center">
        <Image
          src={logo}
          alt=""
          width={35}
          height={35}
          className="fixed top-[15px]"
        />
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="flex flex-col items-center">
            <House />
            <p className="text-sm">Home</p>
          </div>
          <div className="flex flex-col items-center">
            <ListMusic />
            <p className="text-sm">Recs</p>
          </div>
          <div className="flex flex-col items-center">
            <CircleUserRound />
            <p className="text-sm">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
