"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeadphoneImg from "@/public/mic-pic.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleWaitlist = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }
    
    try {
      const response = await fetch("/api/collect-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      // if (!response.ok) {
      //   const errorText = await response.text();
      //   console.error("Server error:", errorText);
      //   setError(errorText);
      //   return;
      // }

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setStatusMessage("Email added successfully!");
        setEmail("");
      } else {
        setStatusMessage(result.error || "Failed to add email.");
      }
      console.log("Added to waitlist successfully", data);
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatusMessage("An error occurred. Please try again later.");
    }
  };
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
            className="bg-[rgba(165,_122,_255,_0.05)] outline-none border border-[#4C3177] rounded-md py-3 px-4 max-w-[250px] w-full text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div onClick={handleWaitlist}>
            <a
              href=""
              className="shrink-0 bg-[#272728] py-3 px-4 rounded-md font-light"
            >
              Join Waitlist
            </a>
          </div>
        </div>
        <div>
            {statusMessage && <p className="mt-4 text-sm">{statusMessage}</p>}{" "}
          </div>
      </div>
      <div className="flex justify-center">
        <Image src={HeadphoneImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
