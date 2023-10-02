import React, { useState } from "react";

import { FaAmazon } from "react-icons/fa";

import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";

export const Clayglow = () => {
  const [reviews, setReviews] = useState(false);

  const reviewSet = () => {
    setReviews(!reviews);
  };

  return (
    <div className="">
      <section className="pt-[10%] xs:pt-[25%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] h-full  bg-[#fcfce4] mt-[73px]">
        <div className="flex xs:block sm:block pb-[10%]">
          <div className="w-[60%] md:w-[55%] lg:w-[55%] sm:w-full xs:w-full px-[10%] lg:px-[5%] md:px-[5%] sm:px-[15%] xs:px-[15%] ">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/606d2082874849.5d2b473f01d4f.jpg"
              className="h-[80%]"
              alt=""
            />
          </div>
          <div className="w-[40%] md:w-[45%] lg:w-[45%]  sm:w-full xs:w-full   h-full pr-[5%] md:pr-[5%] sm:px-[4%] xs:px-[4%]">
            <h1 className="font-bold sm:font-semibold text-3xl sm:text-[27px] xs:mt-[15px] sm:mt-[15px]">
              Clayglow
            </h1>
            <span className="">("Unearth Your Natural Radiance.")</span>

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
              <li className="list-disc mt-[4%]">Deep cleansing </li>
              <li className="list-disc mt-[4%]">
                Oil balancing (excellent oil-absorbing properties, helping to
                remove excess oil and dirt from the skin, leaving it feeling
                fresh and clean)
              </li>
              <li className="list-disc mt-[4%]">Acne control</li>
              <li className="list-disc mt-[4%]">Tightening Pores</li>
              <li className="list-disc mt-[4%]">Improving skin tone</li>
              <li className="list-disc mt-[4%]">Smoothening Irritable skin</li>
              <li className="list-disc mt-[4%]">Natural Glow</li>
            </ul>

            <div className=" mt-[4%]">
              <h1 className="text-lg font-bold">How to apply?</h1>
              <p className="">
                For Face take 1 tea spoon of powder add Rose water or Yogurt
                depending on skin type (for detailed info on please visit Advice
                -Herbal beauty care section of our website www.heiland.shop) mix
                the ingredients and prepare Smooth paste.
              </p>
              <p className="">
                Cleanse your face, apply the paste and relax for 10-15 minutes.
                if you experience any discomfort or burning, remove the mask
                immediately.
              </p>
              <p className="">
                Rinse off with Water. Apply moisturizer as per your preference.
              </p>
              <p className="">
                For Body Take the appropriate amount of Powder and rest of the
                process is specified as above
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
                        Report This
                      </button>
                    </div>
                  </div>
                  <div className=" items-center mb-[5%] mt-[2%]">
                    <div className="">
                      <p className="pb-[1%]">
                        {" "}
                        <b>Mia:</b>
                      </p>{" "}
                      <p className="">
                        Clayglow mask is a miracle worker for my acne-prone
                        skin. It absorbs excess oil, tightens pores, and leaves
                        my skin feeling clean and rejuvenated. I can't recommend
                        it enough!
                      </p>
                    </div>
                    {reviews ? (
                      <div className="">
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            {" "}
                            <b>Liam :</b>{" "}
                          </p>{" "}
                          <p className="">
                            I've heard great things about Clayglow masks, but I
                            found it a bit too drying for my sensitive skin. It
                            did help with oil control, but I needed to use a
                            heavy moisturizer afterward.
                          </p>
                        </div>
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            {" "}
                            <b>Grace :</b>
                          </p>{" "}
                          <p className="">
                            Clayglow mask is a reliable choice for a deep
                            cleanse. It's especially effective for removing
                            impurities and reducing acne breakouts. I like to
                            mix it with rose water for added benefits.
                          </p>
                        </div>
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            <b>David :</b>
                          </p>{" "}
                          <p className="">
                            Clayglow mask is my go-to solution for acne and oily
                            skin. It's natural, affordable, and incredibly
                            effective. I use it regularly, and it's never let me
                            down.
                          </p>
                        </div>
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            <b>Olivia :</b>
                          </p>{" "}
                          <p className="">
                            Clayglow mask is a classic for a reason. It's a
                            simple yet powerful treatment for clearer skin. I
                            appreciate that it's versatile and can be customized
                            with other ingredients.
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
            <div className=" text-center h-full w-[48%] xs:w-full sm:w-full">
              <a
                href="/golden"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.lmXNtfdMUZt2uE74z4gzEAHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
                <p className="text-center text-2xl font-semibold mt-[10px]">
                  Golden Zest
                </p>
              </a>
            </div>
            <div className=" text-center h-full w-[48%] xs:w-full sm:w-full">
              <a
                href="/scarletglow"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.lmXNtfdMUZt2uE74z4gzEAHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
                <p className="text-center text-2xl font-semibold mt-[10px]">
                  ScarletGlow
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
