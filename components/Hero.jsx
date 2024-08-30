import Image from "next/image";
import React from "react";
import HeadphoneImg from "@/public/mic-pic.png";

const Hero = () => {
  return (
    <div className="text-center md:text-left md:flex items-center justify-center md:justify-between gap-5 font-medium">
      <div className="">
        <h1 className="text-[25px] sm:text-[35px] md:text-[30px] lg:text-[43px]">
          GET{" "}
          <span className="bg-[#4C3177] py-1 px-3 rounded-md ">
            PERSONALIZED
          </span>
          <br />
          SONG RECOMMENDATIONS
        </h1>
        <p className="max-w-[600px] mt-[10px] mb-[30px] font-light text-[13px] md:text-sm lg:text-base">
          Discover songs tailored to your unique taste with Sonify! Log in using
          your Spotify account to explore new music you’ll love, curated just
          for you.
        </p>
        <div className="flex justify-center mb-10 md:mb-0 md:justify-start gap-2 items-center">
          <input
            placeholder="Your Email Address..."
            required
            type="email"
            className="bg-[rgba(165,_122,_255,_0.05)] outline-none border border-[#4C3177] rounded-md py-2 px-3 sm:py-3 sm:px-4 max-w-[300px] w-full text-sm"
          />
          <a
            href=""
            className="shrink-0 bg-[#272728] py-2 px-3 sm:py-3 sm:px-4 rounded-md font-light"
          >
            Join Waitlist
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={HeadphoneImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
