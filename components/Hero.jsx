"use client";
import React, {useState} from "react";
import Image from "next/image";
import HeadphoneImg from "@/public/mic-pic.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleWaitlist = async () => {
    try {
      const response = await fetch("/api/collect-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email}),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        setError(errorText); 
        return;
      }

      const data = await response.json();
      console.log("Added to waitlist successfully", data);
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("An unexpected error occurred."); 
    }
  }
  return (
    <div className="text-center md:text-left md:flex items-center justify-center md:justify-between gap-5 font-medium">
      <div className="">
        <h1 className="text-[30px] sm:text-[35px] md:text-[38px] lg:text-[45px]">
          GET{" "}
          <span className="bg-[#4C3177] py-1 px-3 rounded-md ">
            PERSONALIZED
          </span>
          <br />
          SONG RECOMMENDATIONS
        </h1>
        <p className="max-w-[600px] mt-[10px] mb-[30px] font-light text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          eligendi excepturi obcaecati cum architecto similique!
        </p>
        <div className="flex justify-center mb-10 md:mb-0 md:justify-start gap-2 items-center">
          <input
            placeholder="Your Email Address..."
            required
            type="email"
            className="bg-[rgba(165,_122,_255,_0.05)] outline-none border border-[#4C3177] rounded-md py-3 px-4 max-w-[300px] w-full text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div onClick = {handleWaitlist}>
            <a
              href=""
              className="shrink-0 bg-[#272728] py-3 px-4 rounded-md font-light"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={HeadphoneImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
