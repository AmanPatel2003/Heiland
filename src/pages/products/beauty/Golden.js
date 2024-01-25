import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaAmazon } from "react-icons/fa";

import GoldenZest1 from "../../../img/Heiland/3Skin Products/2Golden Zest/GZ2.jpg"
import GoldenZest2 from "../../../img/Heiland/3Skin Products/2Golden Zest/Y1-M.png"
import GoldenZest3 from "../../../img/Heiland/3Skin Products/2Golden Zest/Y2-M.png"
import GoldenZest4 from "../../../img/Heiland/3Skin Products/2Golden Zest/Y3-M.png"
import ClayGlow from "../../../img/Heiland/3Skin Products/3Clay Glow/CG1.jpg"
import ScarletGlow from "../../../img/Heiland/3Skin Products/4Scarlet Glow/SG1.jpg"

import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

export const Golden = () => {
 const [reviews, setReviews] = useState(false);

 const reviewSet = () => {
   setReviews(!reviews);
   
 };
  const images = [GoldenZest1, GoldenZest2,GoldenZest3,GoldenZest4]; // Add more images to the array
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="">
      <Helmet>
        <title>Golden Zest</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <section className="pt-[10%] xs:pt-[25%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] h-full bg-[#f3ffed bg-[#fcfce4] mt-[73px] ">
        <div className="flex xs:block sm:block pb-[10%]">
          <div className="  w-[60%] md:w-[55%] lg:w-[55%] sm:w-full xs:w-full px-[10%] lg:px-[5%] md:px-[5%] sm:px-[15%] xs:px-[8%] ">
            <div className="relative">
              <img src={images[currentImageIndex]} className="h-[50%]" alt="" />

              <button
                className="absolute top-1/2 transform -translate-y-1/2 text-3xl   left-0"
                onClick={showPreviousImage}
              >
                <FaLessThan />
              </button>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 text-3xl  right-0"
                onClick={showNextImage}
              >
                <FaGreaterThan />
              </button>
            </div>
          </div>
          <div className="w-[40%] md:w-[45%] lg:w-[45%]  sm:w-full xs:w-full   h-full pr-[5%] md:pr-[5%] sm:px-[4%] xs:px-[4%]">
            <h1 className="font-bold sm:font-semibold text-3xl sm:text-[27px] xs:mt-[15px] sm:mt-[15px]">
              Golden Zest
            </h1>
            <span className="">
              ("Nourish Skin with Citrus & Turmeric brilliance")
            </span>

            <div className="flex pb-[5%] md:mb-[7%] lg:mb-[7%] h-full w-full  sm:justify-center xs:justify-center">
              <div className=" h-full w-full text-center items-center flex-col">
                <img
                  src={logo1}
                  alt=""
                  className=" h-[95px] xs:h-[75px] w-[90px] xs:w-[75px] md:h-[65px] md:w-[60px] mb-[5px] pt-[5px] m-auto"
                />
                <h1 className="text-xs font-bold  text-green-700 mt-[5px]">
                  CHEMICAL FREE
                </h1>
              </div>
              <div className="h-full w-full text-center">
                <img
                  src={logo2}
                  alt=""
                  className="h-[100px] xs:h-[80px] w-[100px] xs:w-[80px] md:h-[70px] md:w-[80px] m-auto"
                />
                <h1 className="text-xs font-bold  text-green-700">
                  GLUTEN-FREE
                </h1>
              </div>
              <div className="h-full w-full text-center">
                <img
                  src={logo3}
                  alt=""
                  className=" h-[100px] xs:h-[80px] w-[100px] xs:w-[80px] md:h-[70px] md:w-[90px] m-auto"
                />
                <h1 className="text-xs font-bold  text-green-700">
                  SUGAR-FREE
                </h1>
              </div>
              <div className="h-full w-full text-center">
                <img
                  src={logo4}
                  alt=""
                  className="h-[100px] xs:h-[80px] w-[100px] xs:w-[80px] md:h-[70px] md:w-[90px] m-auto"
                />
                <h1 className="text-xs font-bold  text-green-700">VEGAN</h1>
              </div>
              <div className="h-full w-full text-center">
                <img
                  src={logo5}
                  alt=""
                  className="h-[100px] xs:h-[80px] w-[100px] xs:w-[80px] md:h-[70px] md:w-[90px] m-auto"
                />
                <h1 className="text-xs font-bold  text-green-700">
                  CRUELTY FREE
                </h1>
              </div>
            </div>

            <h1 className="text-lg font-bold">What does it do for you?</h1>

            <ul className="pl-[6%]">
              <li className="list-disc mt-[4%]">Brightening </li>
              <li className="list-disc mt-[4%]">
                Helping to even out skin tone and reduce the appearance of dark
                spots and blemishes
              </li>
              <li className="list-disc mt-[4%]">
                Reduce redness and puffiness
              </li>
              <li className="list-disc mt-[4%]">Exfoliation</li>
              <li className="list-disc mt-[4%]">Acne control</li>
              <li className="list-disc mt-[4%]">Skin hydration</li>
              <li className="list-disc mt-[4%]">Natural Glow</li>
            </ul>

            <div className="mt-[4%]">
              <h1 className="text-lg font-bold">How to apply?</h1>
              <p className="">
                For Face take 1 tea spoon of powder add Rose water or Honey or
                Yogurt depending on skin type (for detailed info on please visit
                Advice -Herbal beauty care section of our website
                www.heiland.shop) mix the ingredients and prepare Smooth paste.
              </p>
              <p className="">
                Cleanse your face, apply the paste and relax for 10-15 minutes
                You may feel a slight tingling sensation, which is normal, but
                if you experience any discomfort or burning, remove the mask
                immediately. Rinse off with Water. Apply moisturizer as per your
                preference.{" "}
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-bold mb-[4%]">
                Net content: 200 Grams
              </h1>
            </div>

            <div className=" py-[4%] border-y-2 border-[#097969]">
              <div className="flex justify-between">
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="">
                      <h1 className="text-lg font-bold">Customer Reviews</h1>
                    </div>
                    <div className="block">
                      {!reviews ? (
                        <button
                          onClick={reviewSet}
                          className="text-right font-semibold block text-[#097969] "
                        >
                          View More
                        </button>
                      ) : null}
                      {reviews ? (
                        <button
                          onClick={reviewSet}
                          className="text-right font-semibold block text-[#097969] "
                        >
                          View less
                        </button>
                      ) : null}
                      <button className="border-2 border-[#097969] rounded w-[100px] px-[4%] py-[5%] my-[15%] font-semibold block ">
                        {" "}
                        Report This
                      </button>
                    </div>
                  </div>
                  <div className=" items-center mb-[5%] mt-[2%]">
                    <div className="">
                      <p className="pb-[1%]">
                        <b>Sarah:</b>
                      </p>{" "}
                      <p className="">
                        The Golden Zest mask gave my skin a noticeable glow.
                        It's refreshing and has a pleasant citrus scent. My only
                        concern is that it can be a bit drying, so make sure to
                        moisturize well afterward.
                      </p>
                    </div>
                    {reviews ? (
                      <div className="">
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            {" "}
                            <b>Emily :</b>
                          </p>{" "}
                          <p className="">
                            I was excited to try the Golden Zest mask, but it
                            didn't quite meet my expectations. While it smelled
                            great and felt refreshing, I didn't see any
                            significant improvements in my skin tone or texture.
                          </p>
                        </div>{" "}
                        <div className="pt-[2%]">
                          <p className="">
                            {" "}
                            <b>Daniel :</b>{" "}
                          </p>{" "}
                          <p className="">
                            I've been using the Golden Zest mask for a few weeks
                            now, and it's become a staple in my skincare
                            routine. My skin feels smoother and looks brighter.
                            It's especially nice for combating oily skin.
                          </p>
                        </div>{" "}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-[4%]">
              <button className="w-[35%] bg-[#097969] text-white text-base py-[2%] sm:py-[1%] ">
                BUY ONLINE{" "}
              </button>
              <FaAmazon className="text-white text-5xl xs:text-5xl sm:text-5xl bg-[#097969] ml-[1px] px-[3%] xs:px-[2%] sm:px-[2%] py-[2%]  " />
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-full px-[22%] md:px-[3%] sm:px-[3%] xs:px-[3%] py-[8%]   bg-[#d3e8c9]
       "
      >
        <div className="h-full">
          <h1 className="text-2xl font-bold pb-[6%]  text-center ">
            YOU MIGHT ALSO LIKE
          </h1>
          <div className="w-full h-full flex xs:flex-wrap sm:flex-wrap justify-between">
            <div className=" text-center h-full w-[48%]  xs:w-[80%] sm:w-[70%] m-auto">
              <a
                href="/clayglow"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img src={ClayGlow} alt="" className="h-full w-full" />
                <p className="text-center text-2xl font-semibold mt-[10px]">
                  Clay Glow
                </p>
              </a>
            </div>
            <div className=" text-center h-full w-[48%]  xs:w-[80%] sm:w-[70%] m-auto">
              <a
                href="/scarletglow"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img src={ScarletGlow} alt="" className="h-full w-full" />
                <p className="text-center text-2xl font-semibold mt-[10px]">
                  Scarlet Glow
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
