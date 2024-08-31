import React from "react";

const Join = () => {
  return (
    <div className="text-center pb-40">
      <h1 className="text-[30px] sm:text-[40px] mb-2 font-medium">
        Become Apart Of Sonify&apos;s Community
      </h1>
      <p className="font-light">
        Get notified when we&apos;re live! Join our waitlist by sharing your
        email below
      </p>
      <div className="flex justify-center mb-10 md:mb-0 gap-2 mt-10 items-center">
        <input
          placeholder="Your Email Address..."
          required
          type="email"
          className="bg-[rgba(165,_122,_255,_0.05)] outline-none border border-[#4C3177] rounded-md py-3 px-4 max-w-[300px] w-full text-sm"
        />
        <a
          href=""
          className="shrink-0 bg-[#272728] py-3 px-4 rounded-md font-light"
        >
          Join Waitlist
        </a>
      </div>
    </div>
  );
};

export default Join;
