import React, { useState } from "react";
import img1 from "../img/story_img1.png";
import img2 from "../img/story_img22.png";
import img3 from "../img/story-33.jpg";

export default function PageFour() {
  const [border, setBorder] = useState(false);
  const SetBorder = () => {
    setBorder = true;
  };
  return (
    <div className="py-[8%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%]  bg-[#fcfce4] ">
      <section className="flex justify-between px-[30%] mb-[3%]">
        <a href="/story" onClick={SetBorder}>
          <p className="font-semibold text-lg">OUR STORY</p>
        </a>
        <a href="/" onClick={SetBorder}>
          <p className="font-semibold text-lg ">OUR MISSION</p>
        </a>
        <a href="/impact" onClick={SetBorder}>
          <p className="font-semibold text-lg">OUR IMPACT</p>
        </a>
        <a href="/contact" onClick={SetBorder}>
          <p className="font-semibold text-lg">CONTACT US</p>
        </a>
      </section>
      <hr />
      <section className="flex justify-center font-bold text-6xl py-[10%]">
        ABOUT US
      </section>
      <section className="flex xs:block  h-full bg-[#789977] ">
        <div className="w-[30%] sm:w-[40%] md:w-[35%] xs:w-full xs:h-[230px] ">
          <img src={img1} alt="" className="h-full w-full" />
        </div>
        <div className="w-[70%] sm:w-[60%] md:w-[65%] xs:w-full  px-[12%] sm:px-[8%] md:px-[9%] py-[7%]">
          <h3 className="font-bold text-xl text-white">
            FROM A STRONG HERITAGE, BUILDING AN EVEN STRONGER FUTURE
          </h3>

          <p className="text-white">
            Under every gold metal Solgar cap, there’s an amber glass bottle
            containing the stories of decades of diligent research, pioneering
            science, and an unwavering commitment to wellness.
          </p>
        </div>
      </section>
      <section className=" flex xs:block bg-[#e2f3e2]  ">
        <div className="w-[60%] xs:w-full px-[8%] xs:px-[2%] md:px-[5%] sm:px-[4%] py-[7%] md:py-[6%] sm:py-[6%] xs:py-[8%]">
          <h2 className="text-2xl font-bold text-green-800 pb-[3%]">
            DISCOVER OUR PURPOSE
          </h2>
          {/* <p className="font-semibold text-sm py-[2%] ">
            This has been our north star for 75 years.
          </p> */}
          <p className="font-semibold text-sm py-[1%]">
            Our purpose in the world of herbal products is to nurture health and
            harmony through the gifts of nature. We are driven by a deep respect
            for ancient wisdom and a commitment to modern well-being. By
            crafting high-quality herbal remedies, we aim to empower individuals
            on their wellness journeys, promoting holistic health and natural
            vitality. Our purpose is to bring the healing power of herbs to the
            forefront, enriching lives and fostering a deeper connection with
            the Earth. Through science, sustainability, and a passion for
            nature, we are dedicated to creating herbal products that promote
            balance, nurture the body, and inspire a healthier, happier life.
          </p>
        </div>

        <div className="w-[40%] h-[460px] xs:w-full xs:h-[250px] ">
          <img src={img2} alt="" className="h-full w-full" />
        </div>
      </section>
      <section className="flex xs:block bg-[#fcfce4] ">
        <div className="xs:h-[250px] w-[40%] h-[500px] xs:w-full ">
          <img src={img3} alt="" className="h-full w-full" />
        </div>
        <div className="w-[60%] xs:w-full px-[5%] sm:pl-[8%]  sm:pr-[8%] md:pr-[15%] lg:pr-[15%]  pt-[7%] pb-[11%] md:pb-[8%] lg:pb-[8%]">
          <h3 className="text-xl font-bold text-green-800 mb-[2%]">
            EMPOWERING LIVES, ENRICHING FUTURES.
          </h3>

          <p className="text-green-800 font-semibold">
            Our Belief is to empower lives and enrich futures. We are driven by
            a deep commitment to make a positive impact on the world, touching
            the lives of individuals and communities. Through innovation and
            dedication, we strive to create products and solutions that enhance
            well-being, sustainability, and happiness. Our mission goes beyond
            profit; it's about creating lasting value, fostering meaningful
            connections, and leaving a legacy of positive change. We believe
            that by staying true to our purpose, we can contribute to a better,
            brighter future for all, where possibilities are limitless, and
            dreams can flourish.
          </p>
        </div>
      </section>
      {/* <section className="flex xs:block bg-[#fcfce4] ">
        <div className="w-[50%] xs:w-full  py-[10%] pl-[11%] pr-[7%]">
          <h2 className="font-bold text-xl mb-[1%]">IT'S ABOUT YOU</h2>

          <p className="text-sm font-semibold mb-[2%]">
            <span>
              Whether you have been with us for decades or have just joined us
              on your journey of health and wellness, we will continue to uphold
              the gold standard for you and your family.
            </span>
          </p>

          <p className="text-sm font-semibold">
            <span>
              And to everyone who has given the gold cap and amber glass bottle
              a space in their cabinet, we thank you.
            </span>
          </p>
        </div>
        <div className="w-[50%] xs:w-full  xs:h-[250px]  border-4 bg-white">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Nm0f-eM-ZU6GmVJifGwJgwHaE8&pid=Api&P=0&h=180"
            alt=""
            className="h-full w-full"
          />
        </div>
      </section> */}
    </div>
  );
}
