import React from "react";
import Image from "next/image";
import mic from "@/public/mic.png";

const Features = () => {
  return (
    <div className="pb-40 text-center mt-5" id="features">
      <h1 className="text-[30px] sm:text-[40px] mb-8 font-medium">
        Elevate Your Playlist <span className="gradient">Using Sonify</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-around max-w-[1200px] mx-auto">
        <div className="relative w-full md:w-[240px] rounded-[20px] overflow-hidden">
          <div className="card-bg p-6 text-left">
            <Image src={mic} alt="Microphone" width={30} height={30} />
            <p className="pt-7 mb-2 text-[20px] font-medium">
              Listening History
            </p>
            <p className="text-[16px] font-light leading-7">
              Get song suggestions based on your spotify listening history.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-[240px] rounded-[20px] overflow-hidden">
          <div className="card-bg p-6 text-left">
            <Image src={mic} alt="Microphone" width={30} height={30} />
            <p className="pt-7 mb-2 text-[20px] font-medium">
              Fresh Discoveries
            </p>
            <p className="text-[16px] font-light leading-7">
              Get fresh song recommendations tailored to your taste.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-[240px] rounded-[20px] overflow-hidden">
          <div className="card-bg p-6 text-left">
            <Image src={mic} alt="Microphone" width={30} height={30} />
            <p className="pt-7 mb-2 text-[20px] font-medium">Quick Adds</p>
            <p className="text-[16px] font-light leading-7 pb-3">
              Easily add new favorite songs directly to your playlist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
