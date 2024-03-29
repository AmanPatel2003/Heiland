import React from "react";
import { Helmet } from "react-helmet-async";
import img1 from "../img/story_img1.webp";
import img2 from "../img/story_img22.webp";
import img3 from "../img/story-33.png";

export default function PageFour() {
  return (
    <>
      <Helmet>
        <title>About </title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="pb-[10%] bg-[#fcfce4] mt-[73px]  ">
        <hr />
        <section className="flex justify-center font-bold text-6xl xs:text-4xl sm:text-5xl py-[10%]">
          ABOUT US
        </section>
        <section className="flex xs:block sm:block  h-full bg-[#789977] xs:pt-[10%] sm:pt-[10%]">
          <div className="w-[30%]  md:w-[40%] sm:w-full xs:w-full sm:h-[400px] sm:px-[15%] xs:px-[10%] ">
            <img src={img1} alt="" className="h-full w-full" />
          </div>
          <div className="w-[70%]  md:w-[60%] sm:w-full xs:w-full  px-[12%] sm:px-[8%] md:px-[9%] py-[7%]">
            <h3 className="font-bold text-2xl pb-[3%] text-white">
              {/* FROM A STRONG HERITAGE, BUILDING AN EVEN STRONGER FUTURE */}
              From a strong heritage building an even stronger future
            </h3>

            <p className="text-white text-bold">
              In a Keshkal valley, a wise herbalist, unearthed a mystical herb,
              kindling a legacy of wellness. Heiland, a premium herbal brand,
              emerged from the herbalist family's reverence for nature's healing
              gifts. Crafted with care, their herbal teas, supplements, face
              masks, and skincare products harnessed the valley's potent herbs.
              "Nature's Wisdom, Your Wellness" became their motto, resonating
              with people worldwide. Their sustainable practices and commitment
              to preserving nature's beauty made Heiland a household name. For
              generations, Heiland's products have touched countless lives,
              sharing the magic of nature and the enduring legacy.
            </p>
          </div>
        </section>
        <section className=" flex xs:block sm:block bg-[#d3e8c9] xs:pb-[10%] sm:pb-[10%]  ">
          <div className="w-[60%] md:w-[55%] xs:w-full px-[8%] sm:w-full  sm:px-[8%] md:px-[9%]   py-[7%] md:py-[6%] sm:py-[6%] xs:py-[8%]">
            <h2 className="text-2xl  font-bold text-green-800 pb-[3%]">
              {/* DISCOVER OUR PURPOSE */}
              Discover our purpose
            </h2>

            <p className="font-semibold  py-[1%] text-green-800 text-justify">
              Our purpose in the world of herbal products is to nurture health
              and harmony through the gifts of nature. We are driven by a deep
              respect for ancient wisdom and a commitment to modern well-being.
              By crafting high-quality herbal remedies, we aim to empower
              individuals on their wellness journeys, promoting holistic health
              and natural vitality. Our purpose is to bring the healing power of
              herbs to the forefront, enriching lives and fostering a deeper
              connection with the Earth. Through science, sustainability, and a
              passion for nature, we are dedicated to creating herbal products
              that promote balance, nurture the body, and inspire a healthier,
              happier life.
            </p>
          </div>

          <div className="w-[40%] md:w-[45%] sm:w-full  xs:w-full sm:h-[400px] sm:px-[15%] xs:px-[10%] ">
            <img src={img2} alt="" className="h-full w-full" />
          </div>
        </section>
        <section className="flex xs:block sm:block bg-[#fcfce4 bg-[#87a786] xs:pt-[10%] sm:pt-[10%]">
          <div className="xs:h-[300px w-[40%] lg:w-[45%] sm:w-full md:w-[50%] sm:h-[400px] sm:px-[15%] xs:px-[10%]   xs:w-full ">
            <img src={img3} alt="" className="h-full w-full" />
          </div>
          <div className="w-[60%] lg:w-[50%] md:w-[55%] sm:w-full xs:w-full px-[8%]   sm:px-[8%] md:px-[9%]   py-[9%] lg:py-[5%] ">
            <h3 className="text-2xl font-bold text-green-80 text-white mb-[3%]">
              {/* EMPOWERING LIVES, ENRICHING FUTURES. */}
              Empowering Lives, Enriching Futures
            </h3>

            <p className="text-green-80 text-white font-semibold">
              Our Belief is to empower lives and enrich futures. We are driven
              by a deep commitment to make a positive impact on the world,
              touching the lives of individuals and communities. Through
              innovation and dedication, we strive to create products and
              solutions that enhance well-being, sustainability, and happiness.
              Our mission goes beyond profit; it's about creating lasting value,
              fostering meaningful connections, and leaving a legacy of positive
              change. We believe that by staying true to our purpose, we can
              contribute to a better, brighter future for all, where
              possibilities are limitless, and dreams can flourish.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
