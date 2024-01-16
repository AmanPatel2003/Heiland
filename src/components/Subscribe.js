import React from "react";

export const Subscribe = () => {
  return (
    <div>
      <div className="w-full bg-[#d2ebd2] px-[9%] pt-[10%] pb-[15%] h-full ">
        <h1 className="text-xl font-bold pb-[8%]">
          GET THE LATEST UPDATES AND EXCLUSIVE DEALS WHEN YOU SING NEWSLETTER!
        </h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="YOUR EMAIL"
          className="w-full p-[3%] sm:p-[2%] xs:p-[2%] "
        />
        <div className=" flex py-[5%]">
          <div className="">
            <input type="checkbox" className="mt-[1%]" />
          </div>
          <p className="pl-[2%] font-semibold text-sm">
            By checking this box, I certify that the email address provided is
            my personal email address, and I have read and agreed to the current
            <span className=""> Terms of use</span> and
            <span className="">Privacy Policy.</span>
          </p>
        </div>
        <div className="pt-[3%] pb-[10%] flex">
          <div className="">
            <input type="checkbox" className="mt-[1%] top-0" />
          </div>
          <p className="pl-[2%] font-semibold text-sm">
            By checking this box, I certify that I am located in the United
            Kingdom and I agree to allow Heiland to use my email to send me all
            news, offers,and announcements about Heiland.
          </p>
        </div>
        <button
          className="text-center bg-green-900 text-white py-[2%] text-xl w-full"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};
