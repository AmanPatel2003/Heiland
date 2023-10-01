import React, { useState } from "react";
// import { BsStarFill } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";

import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";

export const Ambrosia = () => {
  // const [slider1, setSlider1] = useState(0);
  // const [slider2, setSlider2] = useState(0);
  // const [slider3, setSlider3] = useState(0);

  const [reviews, setReviews] = useState(false)

  const reviewSet = ()=>{
    setReviews(!reviews)
  }
  

  return (
    <div className="">
      <section className="pt-[10%] xs:pt-[25%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] h-full bg-[#f3ffed bg-[#fcfce4] mt-[73px] ">
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
              Ambrosia
            </h1>
            <span className=" ">(Empowering Gut)</span>

            <div className="flex pb-[5%] md:mb-[7%] lg:mb-[7%] h-full w-full  sm:justify-center xs:justify-center">
              <div className=" h-full w-full text-center ">
                <img
                  src={logo1}
                  alt=""
                  className=" h-[95px] xs:h-[75px] w-[90px] xs:w-[75px] md:h-[65px] md:w-[60px]  pt-[5px] m-auto"
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
              <li className="list-disc mt-[4%]">Acid Reflux </li>
              <li className="list-disc mt-[4%]">Indigestion</li>
              <li className="list-disc mt-[4%]">
                Irritable bowel syndrome (IBS)
              </li>
              <li className="list-disc mt-[4%]">Constipation</li>
              <li className="list-disc mt-[4%]">Ulcer</li>
              <li className="list-disc mt-[4%]">
                Gastroesophageal reflux disease (GERD)
              </li>
              <li className="list-disc mt-[4%]">Gastroenteritis</li>
              <li className="list-disc mt-[4%]">Gastric</li>
              <li className="list-disc mt-[4%]">Gastroenteritis</li>
            </ul>

            <p className="text-sm font-semibold mt-[4%]">
              Boosting Liver is a major advantage of Ambrosia
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
                Net content-60 Premium Capsules
              </h1>
            </div>

            {/* <div className="flex w-full h-full  py-[5%] border-y-2 border-[#097969]">
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
            </div> */}
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
                    <div className="pt-[1%]">
                      <p className="pb-[1%]">
                        <b>Emily Thompson :</b>
                      </p>
                      <p className="">
                        I've been using Ambrosia for a few
                        weeks now, and it's made a significant difference in my
                        bloating and discomfort after meals. It's become a
                        staple in my daily routine, and I feel much better
                        overall.
                      </p>
                    </div>{" "}
                    {reviews ? (
                      <div className="">
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            <b>David Patel :</b>
                          </p>
                          <p className="">
                            I've struggled with digestive
                            issues for years, but Ambrosia has been a
                            game-changer. It's gentle on my stomach, and I've
                            noticed a reduction in acid reflux and indigestion.
                            Highly recommended!
                          </p>
                        </div>{" "}
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            {" "}
                            <b>Sarah Walker :</b>
                          </p>
                          <p className="">
                            I was a bit skeptical about herbal
                            supplements at first, but this one pleasantly
                            surprised me. It's been easy on my sensitive
                            stomach, and I've experienced less gas and
                            discomfort. I appreciate the natural approach to
                            digestive health.
                          </p>
                        </div>{" "}
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            {" "}
                            <b>James O'Connor :</b>
                          </p>
                          <p className="">
                            As someone who enjoys spicy foods,
                            I often have digestive issues. Ambrosia has helped
                            me manage those issues effectively. I've noticed
                            less heartburn and a smoother overall digestion
                            process.
                          </p>
                        </div>
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            {" "}
                            <b>Charlotte Hughes :</b>
                          </p>
                          <p className="">
                          I lead a busy life, and stress can
                            take a toll on my digestion. Ambrosia has become my
                            go-to solution for maintaining a healthy gut. It's
                            soothing and has improved my overall digestive
                            comfort.
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
