import React from "react";
import { BsStarFill } from "react-icons/bs";

export const CarouselComp = (props) => {
  return (
    <section className="px-[20%] lg:px-[15%] md:px-[10%] sm:px-[10%] xs:px-[5%] h-[100%]  pt-[5%] pb-[8%] lg:pb-[5%] xl:pb-[5%] 2xl:pb-[5%] flex xs:block bg-[#fcfce4]">
      <div className="w-[50%] xs:w-[70%] xs:m-auto h-full items-start ">
        <h1 className=" text-start font-bold my-[3%] text-xl ">{props.h1}</h1>
        <div className="flex py-[4%] ">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <h1 className=" text-start font-bold py-[3%]">{props.h2}</h1>
        <p className=" font-medium my-[3%] text-start">{props.p1}</p>
        <p className="text-start pt-[4%] font-medium text-sm">{props.p2}</p>
        <p className="text-start font-medium text-sm xs:mb-[15px]">
          {props.p3}
        </p>
      </div>
      <div className="w-[50%] xs:w-[70%] xs:m-auto  xs:h-[220px] xs:mb-[5%] bg-white border">
        <a href="/contact" className="">
          <img src={props.img} alt="" className="h-full w-full" />
        </a>
      </div>
    </section>
  );
};
