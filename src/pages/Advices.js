import React from "react";
import supple from "../img/advices/supplement.webp";
import teaimg from "../img/advices/tea.webp";
import beautyimg from "../img/advices/beuty.webp";

export const Advices = () => {
 
 

  return (
    <div className=" bg-[#fcfce4] mt-[5%] xl:mt-[5%] lg:mt-[6%] md:pt-[6%] sm:mt-[10%] xs:mt-[11%]">
      <h1 className=" flex justify-center pb-[3%] pt-[5%] xs:pt-[15%] sm:py-[8%] text-5xl md:text-4xl sm:text-3xl xs:text-xl font-semibold xs:font-bold">
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
        <div className="w-[31%] xs:w-full sm:w-full xs:py-[5%] sm:py-[5%]">
          <a href="/suppleAdvice" className="">
            <img src={supple} alt="" className="w-full h-[250px] mb-[5%]" />
          </a>
          <a href="/suppleAdvice" className="font-bold text-xl mb-[2%]">
            Herbal Supplements
          </a>
        </div>
        <div className="w-[31%] xs:w-full sm:w-full xs:py-[5%] sm:py-[5%]">
          <a href="/teaAdvice" className="">
            <img src={teaimg} alt="" className="w-full  h-[250px] mb-[5%]" />
          </a>
          <a href="/teaAdvice" className="font-bold text-xl mb-[2%]">
            Herbal Tea's
          </a>
        </div>
        <div className="w-[31%] xs:w-full sm:w-full xs:py-[5%] sm:py-[5%]">
          <a href="/beautyAdvice" className="">
            <img src={beautyimg} alt="" className="w-full  h-[250px] mb-[5%]" />
          </a>
          <a href="/beautyAdvice" className="font-bold text-xl mb-[2%]">
            Herbal Beauty Care
          </a>
        </div>
      </section>
    </div>
  );
};
