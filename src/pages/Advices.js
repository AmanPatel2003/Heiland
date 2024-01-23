import React from "react";
import supple from "../img/Heiland/2Suplements/1Multi Setup/E1M.jpg";
import teaimg from "../img/Heiland/1Tea/1Multi Setup/M3.1M.jpg";
import beautyimg from "../img/Heiland/3Skin Products/1MultiSetup/A1M.jpg";

export const Advices = () => {
  
  return (
    <div className=" bg-[#fcfce4] mt-[73px] ">
      <h1 className=" flex justify-center pb-[3%] pt-[5%] xs:pt-[15%] xs:px-[10%] sm:py-[8%] text-5xl md:text-4xl sm:text-3xl xs:text-xl font-semibold xs:font-bold">
        HEALTH, WELLNESS, BODY AND SOUL
      </h1>
      <section className="px-[20%] xs:px-[15%] sm:px-[15%] pb-[5%]">
        <p className=" text-justify  xs:text-sm  text-[18px] font-semibold">
          Incorporating herbal products like tea, skincare, and supplements into
          your daily routine can enhance your overall health. A balanced diet
          supplemented with herbal teas such as chamomile or Hibiscus tea
          provides a nutritious foundation. Herbal skincare products nurture
          your skin naturally. Additionally, Regular exercise, stress management
          through relaxation techniques, and sufficient sleep complement the
          benefits of herbal products, promoting holistic well-being. Remember,
          consistency and patience are essential as herbal remedies often
          require time to manifest their full potential, contributing to your
          long-term health and vitality.
        </p>
      </section>
      <section className="px-[5%] pb-[5%] lg:pb-[10%] md:pb-[20%] sm:block xs:block flex justify-between">
        <div className="w-[31%] xs:w-full sm:w-[75%] m-auto xs:py-[5%] sm:py-[5%]">
          <a href="/suppleAdvice" className="">
            <img
              src={supple}
              alt=""
              className="w-full h-[250px] sm:h-[300px] 2xl:h-[300px] mb-[5%]"
            />
          </a>
          <a href="/suppleAdvice" className="font-bold text-xl mb-[2%]">
            Herbal Supplements
          </a>
        </div>
        <div className="w-[31%] xs:w-full sm:w-[75%] xs:py-[5%] sm:py-[5%] m-auto">
          <a href="/teaAdvice" className="">
            <img
              src={teaimg}
              alt=""
              className="w-full  h-[250px] sm:h-[300px] 2xl:h-[300px] mb-[5%]"
            />
          </a>
          <a href="/teaAdvice" className="font-bold text-xl mb-[2%]">
            Herbal Tea's
          </a>
        </div>
        <div className="w-[31%] xs:w-full sm:w-[75%] xs:py-[5%] sm:py-[5%] m-auto">
          <a href="/beautyAdvice" className="">
            <img
              src={beautyimg}
              alt=""
              className="w-full  h-[250px] sm:h-[300px] 2xl:h-[300px] mb-[5%]"
            />
          </a>
          <a href="/beautyAdvice" className="font-bold text-xl mb-[2%]">
            Herbal Beauty Care
          </a>
        </div>
      </section>
    </div>
   
  );
};
