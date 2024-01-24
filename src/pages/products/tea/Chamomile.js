import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaAmazon } from "react-icons/fa";
import ChamomileImg1 from "../../../img/Heiland/1Tea/3Chamomile/C,3.jpg"
import ChamomileImg2 from "../../../img/Heiland/1Tea/3Chamomile/Y1-M.png"
import ChamomileImg3 from "../../../img/Heiland/1Tea/3Chamomile/Y2-M.png"
import ChamomileImg4 from "../../../img/Heiland/1Tea/3Chamomile/Y3-M.png"
import Ginger from "../../../img/Heiland/1Tea/4Ginger/A1.jpg"
import Hibiscus from "../../../img/Heiland/1Tea/5Hibiscus/E1.jpg"
import Peppermint from "../../../img/Heiland/1Tea/6Peppermint/B1.jpg"
import Rose from "../../../img/Heiland/1Tea/2Rose/D1M.jpg"
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";

export const Chamomile = () => {
  const [reviews, setReviews] = useState(false);

  const reviewSet = () => {
    setReviews(!reviews);
  };
  
  const images = [ChamomileImg1, ChamomileImg2,ChamomileImg3,ChamomileImg4]; // Add more images to the array
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
        <title>My Page Title</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <section className="pt-[10%] xs:pt-[25%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] h-full bg-[#f3ffed bg-[#fcfce4] mt-[73px]">
        <div className="flex xs:block sm:block pb-[10%]">
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
          <div className="w-[40%] md:w-[45%] lg:w-[45%]  sm:w-full xs:w-full   h-full pr-[5%] md:pr-[5%] sm:px-[4%] xs:px-[4%]">
            <h1 className="font-bold sm:font-semibold text-3xl sm:text-[27px] xs:mt-[15px] sm:mt-[15px]">
              Chamomile Tea
            </h1>
            <span className="">(“Sip Stress away”)</span>

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
            <p className="text-sm font-semibold mt-[4%]">
              Supports in delivering a long term solution for all
              <b> Gastrointestinal </b> issues such as:
            </p>
            <ul className="pl-[6%]">
              <li className="list-disc mt-[4%]">
                Stress reduction and relaxation{" "}
              </li>
              <li className="list-disc mt-[4%]"> Improves Sleep</li>
              <li className="list-disc mt-[4%]">Improve digestion</li>
              <li className="list-disc mt-[4%]">Anti-Inflammatory</li>
              <li className="list-disc mt-[4%]">Enhance Skin Health</li>
              <li className="list-disc mt-[4%]">Support Immune</li>
              <li className="list-disc mt-[4%]">Menstrual Pain Relief</li>
              <li className="list-disc mt-[4%]"> Mental Clarity</li>
            </ul>

            <div className="mt-[4%]">
              <h1 className="text-lg font-bold">How to comsume?</h1>
              <p className="">
                Use 1 teaspoon (approximately 1.5 grams) of dried tea powder for
                each 8-ounce (about 240 ml) cup of Hot Water. Cover the teapot
                or cup with a lid or a saucer to trap the steam and let the
                chamomile steep for about 5 minutes. After steeping, strain the
                tea. our chamomile tea is ready to drink. Take small sips and
                savor the soothing flavor. It's best enjoyed warm.
              </p>
              <p className="py-[5px]">
                <b> Optional: </b>honey, lemon, or a slice of fresh ginger for
                added flavor.
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-bold mb-[4%]">
                Net content: 250 Grams
              </h1>
            </div>

            <div className=" py-[4%] border-y-2 border-[#097969]">
              <div className="flex justify-between">
                <div className="w-full">
                  <div className="flex justify-between ">
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
                  <div className=" items-center mb-[5%] mt-[2%] ">
                    <div className="">
                      <p className="pb-[1%]">
                        <b>Alice:</b>
                      </p>{" "}
                      <p className="">
                        Chamomile tea is my go-to bedtime drink. It has a
                        soothing, calming effect that helps me relax and sleep
                        better. The gentle, floral taste is comforting, and I
                        wouldn't want to end my day without it.
                      </p>
                    </div>
                    {reviews ? (
                      <div className="">
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            {" "}
                            <b>Peter :</b>
                          </p>{" "}
                          <p className="">
                            I recently started drinking chamomile tea for its
                            potential health benefits. While it hasn't worked
                            miracles, I do notice a subtle improvement in my
                            digestion and overall sense of calm. Plus, it's a
                            lovely, caffeine-free option.
                          </p>
                        </div>{" "}
                        <p className="pt-[2%]">
                          <p className="pb-[1%]">
                            <b>Sarah :</b>
                          </p>{" "}
                          <p className="">
                            Chamomile tea is my secret weapon against stress.
                            It's become a part of my daily routine, and I find
                            it incredibly soothing. The only reason I'm not
                            giving it a perfect score is that I wish the flavor
                            were a bit stronger.
                          </p>
                        </p>{" "}
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
        className="h-full px-[10%] md:px-[3%] sm:px-[3%] xs:px-[3%] py-[8%]   bg-[#d3e8c9]
       "
      >
        <div className="h-full">
          <h1 className="text-2xl font-bold pb-[6%]  text-center ">
            YOU MIGHT ALSO LIKE
          </h1>
          <div className="w-full h-full flex xs:flex-wrap sm:flex-wrap justify-between">
            <div className=" text-center h-full w-[24%]  xs:w-[80%] sm:w-[70%] m-auto">
              <a
                href="/ginger"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img src={Ginger} alt="" className="h-full w-full" />
                <p className="text-center text-xl font-semibold mt-[10px]">
                  Ginger Tea
                </p>
              </a>
            </div>
            <div className=" text-center h-full w-[24%]  xs:w-[80%] sm:w-[70%] m-auto">
              <a
                href="/hibiscus"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img src={Hibiscus} alt="" className="h-full w-full" />
                <p className="text-center text-xl font-semibold mt-[10px]">
                  Hibiscus Tea
                </p>
              </a>
            </div>
            <div className=" text-center h-full w-[24%]  xs:w-[80%] sm:w-[70%] m-auto">
              <a
                href="/peppermint"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img src={Peppermint} alt="" className="h-full w-full" />
                <p className="text-center text-xl font-semibold mt-[10px]">
                  Peppermint Tea
                </p>
              </a>
            </div>
            <div className=" text-center h-full w-[24%]  xs:w-[80%] sm:w-[70%] m-auto">
              <a
                href="/rose"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img src={Rose} alt="" className="h-full w-full" />
                <p className="text-center text-xl font-semibold mt-[10px]">
                  Rose Tea
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
