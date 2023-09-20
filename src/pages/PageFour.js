import React from "react";
import img1 from "../img/story_img1.webp";
import img2 from "../img/story_img22.webp";
import img3 from "../img/story-33.png";

export default function PageFour() {
 
  return (
    <div className="pb-[10%]   bg-[#fcfce4] mt-[5%] xl:mt-[5%] lg:mt-[6%] md:mt-[7%] sm:mt-[10%] xs:mt-[11%] ">
      <section className=" px-[30%] xs:px-[3%] sm:px-[8%] md:px-[10%] lg:px-[20%] py-[5%] xs:pt-[13%]  w-full">
        <div className="w-full flex justify-between">
          <a href="/mission">
            <p className="font-semibold text-lg xs:text-sm sm:text-sm">
              OUR MISSION
            </p>
          </a>
          <a href="/">
            <p className="font-semibold text-lg border-black border-b-2 xs:text-sm sm:text-sm">
              ABOUT US
            </p>
          </a>
          <a href="/impact">
            <p className="font-semibold text-lg xs:text-sm sm:text-sm">
              OUR IMPACT
            </p>
          </a>
          <a href="/contact">
            <p className="font-semibold text-lg xs:text-sm sm:text-sm">
              CONTACT US
            </p>
          </a>
        </div>
      </section>
      <hr />
      <section className="flex justify-center font-bold text-6xl py-[10%]">
        ABOUT US
      </section>
      <section className="flex xs:block  h-full bg-[#789977] ">
        <div className="w-[30%] sm:w-[40%] md:w-[35%] xs:w-full xs:h-[300px] ">
          <img src={img1} alt="" className="h-full w-full" />
        </div>
        <div className="w-[70%] sm:w-[60%] md:w-[65%] xs:w-full  px-[12%] sm:px-[8%] md:px-[9%] py-[10%]">
          <h3 className="font-bold text-2xl pb-[3%] text-white">
            {/* FROM A STRONG HERITAGE, BUILDING AN EVEN STRONGER FUTURE */}
            From a Strong Heritage Building An Even Stronger Future
          </h3>

          <p className="text-white text-bold">
            Under every gold metal Solgar cap, there’s an amber glass bottle
            containing the stories of decades of diligent research, pioneering
            science, and an unwavering commitment to wellness.
          </p>
        </div>
      </section>
      <section className=" flex xs:block bg-[#e2f3e2]  ">
        <div className="w-[60%] xs:w-full px-[8%]   sm:px-[8%] md:px-[9%]   py-[7%] md:py-[6%] sm:py-[6%] xs:py-[8%]">
          <h2 className="text-2xl  font-bold text-green-800 pb-[3%]">
            {/* DISCOVER OUR PURPOSE */}
            Discover Our Perpose
          </h2>
          {/* <p className="font-semibold text-sm py-[2%] ">
            This has been our north star for 75 years.
          </p> */}
          <p className="font-semibold  py-[1%] text-green-800 text-justify">
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

        <div className="w-[40%] h-[460px] xs:w-full xs:h-[300px] ">
          <img src={img2} alt="" className="h-full w-full" />
        </div>
      </section>
      <section className="flex xs:block bg-[#fcfce4 bg-[#87a786] ">
        <div className="xs:h-[300px] w-[40%] lg:w-[50%] h-[500px] xs:w-full ">
          <img src={img3} alt="" className="h-full w-full" />
        </div>
        <div className="w-[60%] lg:w-[50%] xs:w-full px-[8%]   sm:px-[8%] md:px-[9%]   py-[9%] lg:py-[5%] ">
          <h3 className="text-2xl font-bold text-green-80 text-white mb-[3%]">
            {/* EMPOWERING LIVES, ENRICHING FUTURES. */}
            Empowering Lives, Enriching Futures.
          </h3>

          <p className="text-green-80 text-white font-semibold">
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
