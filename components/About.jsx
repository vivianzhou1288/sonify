import { Quote } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="py-40 text-center mt-5" id="about">
      <h1 className="text-[30px] sm:text-[40px] mb-8 font-medium">
        <span className="gradient">Who</span> Are We?
      </h1>
      <div className="bg-[#272728] flex flex-col py-7 px-7 rounded-md pb-16">
        <Quote className="self-end mb-5" size={30} />
        <p className="text-[20px] md:text-[24px] font-light">
          Sonify is a music recommendation app designed to enhance your Spotify
          experience. Our mission is to help you find hidden gems based on your
          listening habits. Using algorithms, we deliver a personalized
          selection of songs that evolves as your tastes change.
        </p>
      </div>
    </div>
  );
};

export default About;
