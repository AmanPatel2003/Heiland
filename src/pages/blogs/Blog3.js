import React from "react";
import { Helmet } from "react-helmet-async";
import { Subscribe } from "../../components/Subscribe";
import { BiCalendar } from "react-icons/bi";

import BlogImg from "../../img/Heiland/1Tea/2Rose/D1-M.jpg"

import Chamomile from "../../img/Heiland/1Tea/3Chamomile/Z1M.png"
import Hibiscus from "../../img/Heiland/1Tea/5Hibiscus/Y1M.png"
import  Peppermint from "../../img/Heiland/1Tea/6Peppermint/Y1M.png"


const Blog3 = () => {
  return (
    <>
      <Helmet>
        <title>My Page Title</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="py-[10%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%] px-[27%] lg:px-[20%] md:px-[10%] sm:px-[10%] xs:px-[10%] bg-[#fcfce4] mt-[73px]">
        <h1 className="text-2xl font-bold  ">
          Unleash the Magic of Heiland: Your Path to a Healthier, Happier You
        </h1>
        <p className="flex py-[2%]">
          <BiCalendar size={20} className="mr-1" /> JULY 11, 2023
        </p>
        <div className="h-[380px] xs:h-[280px]  border bg-white ">
          <a href="/tea" className="">
            <img src={BlogImg} alt="" className="h-full w-full" />
          </a>
        </div>

        <div className="pb-[1%] mt-[2%]">
          <h1 className="text-xl font-bold">Introduction:</h1>
          <p className="py-[1%]  mb-[1%] ">
            In a world where well-being often takes a backseat in our busy
            lives, finding a solution that nurtures both our physical and
            emotional health is like discovering a hidden treasure. Let us take
            you on a journey to explore a transformative companion – Heiland.
            Beyond its role as a product, Heiland is a partner in your wellness
            adventure, offering relief from GERD, ulcers, acid reflux, bloating,
            and stomach burning, all while embracing the ancient wisdom of
            natural remedies.
          </p>
          <h1 className="text-xl font-bold">
            Ancient Wisdom Meets Modern Living:
          </h1>
          <p className="py-[1%]  mb-[1%] ">
            Imagine being able to say goodbye to the discomfort that has
            lingered for far too long. Heiland encapsulates the essence of
            India's age-old healing practices, carefully crafting a formula that
            resonates with today's busy lifestyle. It's a bridge that connects
            the wisdom of our ancestors with the demands of modern living.
          </p>
          <h1 className="text-xl font-bold">Your Journey to Wellness:</h1>
          <p className="py-[1%]  mb-[1%] ">
            The journey to wellness isn't about a quick fix; it's about creating
            sustainable, positive changes. Heiland understands this journey and
            accompanies you every step of the way. From relishing the relief it
            brings to basking in the peace of mind that natural ingredients
            provide, Heiland becomes a trusted ally in your pursuit of health.
          </p>
        </div>

        <div className=" flex sm:block xs:block pb-[5%]">
          <div className="w-[54%] sm:w-[100%] xs:w-[100%] ">
            <h1 className="text-xl font-bold">
              A Natural Symphony of Ingredients:
            </h1>
            <p
              className="py-[3%] xs:pb-[8%] 
           "
            >
              Within each bottle of Heiland lies a symphony of nature's finest
              ingredients – aloe vera, ajwain, amla, chiraita, and more. These
              aren't just names; they're the embodiment of nature's generosity
              towards your well-being. With each dose, you're welcoming the
              magic of centuries-old remedies into your life.
            </p>
            <h1 className="text-xl font-bold">
              More Than Health, It's Your Well-Being:
            </h1>
            <p
              className="py-[3%] xs:pb-[8%] 
           "
            >
              The Heiland isn't just about addressing physical discomfort. It's
              about fostering a sense of overall well-being. When you choose
              Heiland, you're investing in a lifestyle that values your health,
              your happiness, and your connection to the world around you.
            </p>
          </div>
          <div className="w-[46%] sm:w-[80%] xs:w-[100%] sm:m-auto xs:m-auto">
            <Subscribe />
          </div>
        </div>
        <div className="border">
          <div className="">
            <h2 className="text-center py-[5%] font-bold text-xl text-green-900">
              PRODUCTS MENTIONED IN THIS ARTICLS
            </h2>
            <div className="flex xs:block pb-3">
              <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
                <div>
                  <div className="w-full xs:pl-[6%]">
                    <a href="/chamomile" className="px-[3%] xs:w-full ">
                      <img src={Chamomile} alt="" />
                    </a>
                  </div>
                  <p className="text-lg font-semibold">Chamomile</p>
                </div>
              </div>
              <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
                <div>
                  <div className="w-full xs:pl-[6%]">
                    <a href="/hibiscus" className="px-[3%]">
                      <img src={Hibiscus} alt="" />
                    </a>
                  </div>
                  <p className="text-lg font-semibold">Hibiscus</p>
                </div>
              </div>
              <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
                <div>
                  <div className="w-full xs:pl-[6%]">
                    <a href="/peppermint" className="px-[3%]">
                      <img src={Peppermint} alt="" />
                    </a>
                  </div>
                  <p className="text-lg font-semibold">Peppermint</p>
                  {/* <h5 className="text-xs font-semibold">AND 2 MORE</h5>
                <p className="text-base font-semibold">
                  Vitamin D3 (Cholecalciferol)250 MCG (10,000 IU) Softgels
                </p>
                <p className="">
                  <img src="star-img.png" alt="" />
                  (0)
                </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog3;
