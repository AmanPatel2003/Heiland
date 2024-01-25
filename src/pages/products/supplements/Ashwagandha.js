import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaAmazon } from "react-icons/fa";
import AshwangandhaImg1 from "../../../img/Heiland/2Suplements/3Ashwagandha/B3.jpg"
import AshwangandhaImg2 from "../../../img/Heiland/2Suplements/3Ashwagandha/Y1-M.png"
import AshwangandhaImg3 from "../../../img/Heiland/2Suplements/3Ashwagandha/Y2-M.png"
import AshwangandhaImg4 from "../../../img/Heiland/2Suplements/3Ashwagandha/Y3-M.png"
import Ambrosia from "../../../img/Heiland/2Suplements/2Ambrosia/C,1.jpg"
import Shatavari from "../../../img/Heiland/2Suplements/4Shatavari/A1.jpg"
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";

export const Ashwagandha = () => {


   const [reviews, setReviews] = useState(false);

   const reviewSet = () => {
     setReviews(!reviews);
   };
  const images = [AshwangandhaImg1, AshwangandhaImg2,AshwangandhaImg3,AshwangandhaImg4]; // Add more images to the array
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
    <div className="w-full">
      <Helmet>
        <title>Ashwagandha</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <section className=" w-full pt-[10%] xs:pt-[25%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] h-full bg-[#f3ffed bg-[#fcfce4] mt-[73px] ">
        <div className="flex w-full xs:block sm:block pb-[10%]">
          <div className="  w-[60%] md:w-[55%] lg:w-[55%] sm:w-full xs:w-full px-[10%] lg:px-[5%] md:px-[5%] sm:px-[15%] xs:px-[8%] ">
            <div className="relative">
              <img src={images[currentImageIndex]} className="h-[50%]" alt="" />

              <button
                className="absolute top-1/2 transform -translate-y-1/2 text-3xl text-gray-300  left-0"
                onClick={showPreviousImage}
              >
                <FaLessThan />
              </button>
              <button
                className="absolute top-1/2 transform -translate-y-1/2 text-3xl text-gray-300  right-0"
                onClick={showNextImage}
              >
                <FaGreaterThan />
              </button>
            </div>
          </div>
          <div className="w-[40%] md:w-[45%] lg:w-[45%]  sm:w-full xs:w-full   h-full pr-[3%] sm:px-[4%] xs:px-[1%]">
            <h1 className="font-bold sm:font-semibold text-3xl sm:text-[27px] xs:mt-[15px] sm:mt-[15px]">
              Ashwagandha
            </h1>
            <span className="">(Reignite Your Inner Strength)</span>

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

            <div className=" flex  justify-between pl-[6%]">
              <ul className="w-[48%]">
                <li className="list-disc mt-[4%]">Enhanced Mental Clarity</li>
                <li className="list-disc mt-[4%]">Balanced Hormones</li>
                <li className="list-disc mt-[4%]">Better Sleep</li>
                <li className="list-disc mt-[4%]">Immune Support</li>
                <li className="list-disc mt-[4%]">Anti-Inflammatory</li>
                <li className="list-disc mt-[4%]">Benefits Joint Health</li>
                <li className="list-disc mt-[4%]">Adaptogenic Benefits</li>
                <li className="list-disc mt-[4%]">Overall Wellness</li>
              </ul>
              <ul className="w-[48%]">
                <li className="list-disc mt-[4%]">Stress Reduction </li>
                <li className="list-disc mt-[4%]">improves fertility</li>
                <li className="list-disc mt-[4%]">improves sperm counts</li>
                <li className="list-disc mt-[4%]">reduce PMS</li>
                <li className="list-disc mt-[4%]">improves testosterone</li>
                <li className="list-disc mt-[4%]">helps in Building muscles</li>
                <li className="list-disc mt-[4%]">Improved Energy Levels</li>
              </ul>
            </div>

            <div className="mt-[4%]">
              <h1 className="text-lg font-bold">How to comsume?</h1>
              <p className="">
                2 capsules at Night Before sleep. Consume with lukewarm or
                Normal Milk.
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-bold mb-[4%]">
                Net content-60 Premium Capsules
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
                        Report This
                      </button>
                    </div>
                  </div>
                  <div className=" items-center mb-[5%] mt-[2%]">
                    <div className="">
                      <p className="pb-[1%]">
                        {" "}
                        <b>Emma :</b>{" "}
                      </p>{" "}
                      <p className="">
                        I started taking Ashwagandha capsules to help with my
                        mood swings and occasional sleep disturbances. While I
                        did notice some positive effects on my mood, I didn't
                        experience significant improvements in my sleep quality.
                        It's worth trying if you're looking for a natural way to
                        manage stress, but it may not work the same for
                        everyone.
                      </p>
                    </div>
                    {reviews ? (
                      <div className="">
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            <b>John :</b>
                          </p>{" "}
                          <p className="">
                            've been using Ashwagandha capsules for a couple of
                            months now, and I've seen improvements in my energy
                            levels and focus. It's been particularly helpful
                            during busy workdays. The only reason I'm not giving
                            it a full 5 stars is because the taste can be a bit
                            bitter, but the benefits are worth it.
                          </p>
                        </div>
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            <b>Sarah :</b>
                          </p>{" "}
                          <p className="">
                            Ashwagandha capsules have been a game-changer for my
                            stress and anxiety. As a working mom, I often felt
                            overwhelmed, but since starting these capsules, I've
                            noticed a significant reduction in my stress levels.
                            I feel calmer and more in control, and I've even
                            been sleeping better. Highly recommend!
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-[4%]">
              <button className="w-[35%] bg-[#097969] text-white text-base py-[2%] sm:py-[1%] ">
                BUY ONLINE
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
                href="/ambrosia"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img src={Ambrosia} alt="" className="h-full w-full" />
                <p className="text-center text-2xl font-semibold mt-[10px]">
                  Ambrosia
                </p>
              </a>
            </div>
            <div className=" text-center h-full w-[48%] xs:w-[80%] sm:w-[70%] m-auto">
              <a
                href="/satavari"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img src={Shatavari} alt="" className="h-full w-full" />
                <p className="text-center text-2xl font-semibold mt-[10px]">
                  Satavari
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
