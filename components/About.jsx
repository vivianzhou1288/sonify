import { Quote } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="py-40 text-center">
      <h1 className="text-[40px] mb-8 font-medium">
        <span className="gradient">Who</span> Are We?
      </h1>
      <div className="bg-[#272728] flex flex-col py-7 px-7 rounded-md pb-16">
        <Quote className="self-end mb-5" size={30} />
        <p className="text-[20px] md:text-[24px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type. Lorem ipsum dolor sit amet the
          consectetur adipisicing industrys consectetur.
        </p>
      </div>
    </div>
  );
};

export default About;
