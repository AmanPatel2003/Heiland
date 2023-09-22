import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";

import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";

export const Satavari = () => {
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(0);
  const [slider3, setSlider3] = useState(0);

  return (
    <div className="">
      <section className="pt-[10%] xs:pt-[25%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] h-full bg-[#f3ffed bg-[#fcfce4] mt-[5%] xl:mt-[5%] lg:mt-[6%] md:mt-[7%] sm:mt-[10%] xs:mt-[11%]">
        <div className="flex xs:block sm:block pb-[10%]">
          <div className="w-[60%] md:w-[55%] lg:w-[55%] sm:w-full xs:w-full px-[10%] lg:px-[5%] md:px-[5%] sm:px-[15%] xs:px-[15%] ">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/606d2082874849.5d2b473f01d4f.jpg"
              className="h-[80%]"
              alt=""
            />
          </div>
          <div className="w-[40%] md:w-[45%] lg:w-[45%]  sm:w-full xs:w-full   h-full pr-[5%] md:pr-[5%] sm:px-[4%] xs:px-[4%]">
            <h1 className="font-bold sm:font-semibold text-3xl sm:text-[27px]">
              Shatavari
            </h1>
            <span className=" text-xl">
              (Nourishing life, Gift to wellness)
            </span>

            <div className="flex pb-[5%] md:mb-[7%] lg:mb-[7%] h-[130px] md:h-[95px]  sm:justify-center xs:justify-center">
              <div className=" h-[90%] md:h-[85%]  w-[20%] text-center">
                <img
                  src={logo1}
                  alt=""
                  className="h-full w-[90%  mt-[8%] md:my-[10%] "
                />
                <h1 className="text-xs font-bold  text-green-700">
                  CHEMICAL FREE
                </h1>
              </div>
              <div className="h-full w-[20%] text-center">
                <img src={logo2} alt="" className="h-full w-full " />
                <h1 className="text-xs font-bold  text-green-700">
                  GLUTEN-FREE
                </h1>
              </div>
              <div className="h-full w-[20%] text-center">
                <img src={logo3} alt="" className="h-full w-full " />
                <h1 className="text-xs font-bold  text-green-700">
                  GLUTEN-FREE
                </h1>
              </div>
              <div className="h-full w-[20%] text-center">
                <img src={logo4} alt="" className="h-full w-full " />
                <h1 className="text-xs font-bold  text-green-700">VEGAN</h1>
              </div>
              <div className="h-full w-[20%] text-center">
                <img src={logo5} alt="" className="h-full w-full " />
                <h1 className="text-xs font-bold  text-green-700">
                  CRUELTY FREE
                </h1>
              </div>
            </div>

            <h1 className="text-lg font-bold">What does it do for you?</h1>
            <p className="text-sm font-semibold mt-[4%]">
              Treat urinary tract disorder rejuvenate the whole body improves
              muscle strength:
            </p>
            <ul className="pl-[6%]">
              <li className="list-disc mt-[4%]">boost immunity </li>
              <li className="list-disc mt-[4%]">balance hormones </li>
              <li className="list-disc mt-[4%]">aids in relieving menopause</li>
              <li className="list-disc mt-[4%]">support lactation</li>
              <li className="list-disc mt-[4%]">treat endometriosis</li>
              
            </ul>

            <p className="text-sm font-semibold mt-[4%]">
              Boosting Liver is a mojor advantage of Ambrosia
            </p>

            <div className="">
              <h1 className="text-lg font-bold">How to comsume?</h1>
              <p className="">
                1-2 capsules after each meal depending upon the severity consume
                with normal to lukewarm water
              </p>
            </div>
            <div className="">
              <h1 className="text-lg font-bold mb-[4%]">
                Net content-60 Primium Capsules
              </h1>
            </div>

            <div className="flex w-full h-full  py-[5%] border-y-2 border-[#097969]">
              <div className="w-[40%] h-full text-center">
                <h1 className="font-bold text-lg mb-[10%]">Rating & Reviews</h1>
                <h1 className="">
                  <span className="font-bold text-2xl">4.6</span>
                  <span className="font-semibold text-lg">/5</span>
                </h1>
                <div className="flex py-[4%] justify-between px-[20%] ">
                  <BsStarFill className="text-[#097969]" />
                  <BsStarFill className="text-[#097969]" />
                  <BsStarFill className="text-[#097969]" />
                  <BsStarFill className="text-[#097969]" />
                  <BsStarFill className="text-[#097969]" />
                </div>
                <p className="">322 verified users</p>
              </div>

              <div className="w-[60%] h-full border-l-2 border-[#097969] m-auto py-[5%] px-[5%]">
                <div className="mb-[5%]">
                  <h1 className="">Performance</h1>
                  <div className="flex items-center mt-[2%]">
                    <input
                      className="h-[5px] bg-[#097969]  w-[80%]"
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={slider1}
                      onChange={(e) => setSlider1(e.target.value)}
                    />
                    <h1 className="ml-[4%]">{slider1}%</h1>
                  </div>
                </div>
                <div className="mb-[5%]">
                  <h1 className="">Quality</h1>
                  <div className="flex items-center">
                    <input
                      className="h-[5px] w-[80%]"
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={slider2}
                      onChange={(e) => setSlider2(e.target.value)}
                    />
                    <h1 className="ml-[4%]">{slider2}%</h1>
                  </div>
                </div>
                <div className="">
                  <h1 className="">Value</h1>
                  <div className="flex items-center">
                    <input
                      className="h-[5px] w-[80%]"
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={slider3}
                      onChange={(e) => setSlider3(e.target.value)}
                    />
                    <h1 className="ml-[4%]">{slider3}%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-[4%] border-b-2 border-[#097969]">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-lg font-bold">Customer Reviews</h1>
                  <p className="my-[5%] font-semibold">I Love the fragrance</p>
                  <div className="flex  items-center mb-[5%]">
                    <span className="">Plyush</span>
                    <BsStarFill className="text-[#097969] ml-[4%]" />
                    <p className="ml-[5px]">4</p>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-right font-semibold ">View More</h1>
                  <button className="border-2 border-[#097969] rounded w-[100px] px-[4%] py-[5%] my-[15%] font-semibold ">
                    {" "}
                    Report This
                  </button>
                </div>
              </div>
              <p className="">
                It's fragrance is so good. I'm just fan of it and it makes
                screen so smooth. Loving it.
              </p>
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
        <div className="">
          <h1 className="text-2xl font-bold pb-[6%]  text-center ">
            YOU MIGHT ALSO LIKE
          </h1>
          <div className="w-full flex xs:flex-wrap sm:flex-wrap justify-center">
            <div className=" text-center">
              <div className="h-[180px]  mx-[5%]  border-2 bg-white">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.lmXNtfdMUZt2uE74z4gzEAHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <a
                href="/"
                className="text-xs text-green-500 font-semibold block mt-[2%]"
              >
                BONE & JOINT SUPPORT
              </a>
              <a
                href="/"
                className="text-xs text-green-500 font-medium  underline decoration-dotted"
              >
                SEE ALL CATEGORIES
              </a>
              <p className="font-medium text-sm  mt-[1%] px-[2%]">
                Solgar* No.7 Vegetable Capsules
              </p>
            </div>
            <div className=" text-center">
              <div className="h-[180px]  mx-[5%]  border-2 bg-white ">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.lmXNtfdMUZt2uE74z4gzEAHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <a
                href="/"
                className="text-xs text-green-500 font-semibold block mt-[2%] "
              >
                BONE & JOINT SUPPORT
              </a>
              <a
                href="/"
                className="text-xs text-green-500 font-medium  underline decoration-dotted"
              >
                SEE ALL CATEGORIES
              </a>
              <p className="font-medium text-sm  mt-[1%] px-[2%]">
                Solgar* No.7 Vegetable Capsules
              </p>
            </div>
            <div className=" text-center">
              <div className="h-[180px]  mx-[5%]  border-2 bg-white">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.0ZLl5yRJVVvr_xOn_K9QUgHaGn&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <a
                href="/"
                className="text-xs text-green-500 font-semibold block mt-[2%]"
              >
                BONE & JOINT SUPPORT
              </a>
              <a
                href="/"
                className="text-xs text-green-500 font-medium  underline decoration-dotted"
              >
                SEE ALL CATEGORIES
              </a>
              <p className="font-medium text-sm  mt-[1%] px-[2%]">
                Solgar* No.7 Vegetable Capsules
              </p>
            </div>
            <div className=" text-center">
              <div className="h-[180px]  mx-[5%]  border-2 bg-white">
                {" "}
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.ImmrkgATgNztf4RXyUBb8wHaFj&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <a
                href="/"
                className="text-xs text-green-500 font-semibold block mt-[2%]"
              >
                BONE & JOINT SUPPORT
              </a>
              <a
                href="/"
                className="text-xs text-green-500 font-medium  underline decoration-dotted"
              >
                SEE ALL CATEGORIES
              </a>
              <p className="font-medium text-sm mt-[1%] px-[2%]">
                Solgar* No.7 Vegetable Capsules
              </p>
            </div>
          </div>
        </div>
        <div class="flex"></div>
      </section>
    </div>
  );
};
