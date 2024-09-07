import { FolderHeart, UserPen } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex sm:gap-6 sm:mr-4 justify-around items-center">
      <div className="text-center w-fit shrink-0">
        <p className="hidden sm:block text-3xl">20:00</p>
        <p className="hidden sm:block text-sm">Tuesday, 27 Aug</p>
      </div>
      <div className="flex-1 sm:max-w-[500px] mr-3">
        <input
          type="text"
          placeholder="Search Song..."
          className="py-2 px-4 w-full rounded-md text-black"
        />
      </div>
      <div className="flex sm:gap-6">
        <div className="flex gap-3 shrink-0">
          <UserPen className="hidden sm:block" />
          <p className="hidden sm:flex">John Doe</p>
        </div>
        <div className="shrink-0">
          <FolderHeart className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default Header;
