import React, { useState } from "react";

import { FaAmazon } from "react-icons/fa";

import Hibiscus from "../../../img/Heiland/1Tea/5Hibiscus/E1.jpg";
import Ginger from "../../../img/Heiland/1Tea/4Ginger/A1.jpg";
import Peppermint from "../../../img/Heiland/1Tea/6Peppermint/B1.jpg";
import RoseImg from "../../../img/Heiland/1Tea/2Rose/D3.jpg";
import Chamomile from "../../../img/Heiland/1Tea/3Chamomile/C,1M.jpg";

import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";

export const Rose = () => {
 const [reviews, setReviews] = useState(false);

 const reviewSet = () => {
   setReviews(!reviews);
 };
  

  return (
    <div className="">
      <section className="pt-[10%] xs:pt-[25%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] h-full bg-[#f3ffed bg-[#fcfce4] mt-[73px] ">
        <div className="flex xs:block sm:block pb-[10%]">
          <div className="w-[60%] md:w-[55%] lg:w-[55%] sm:w-full xs:w-full px-[10%] lg:px-[5%] md:px-[5%] sm:px-[15%] xs:px-[8%] ">
            <img src={RoseImg} className="h-[50%" alt="" />
          </div>
          <div className="w-[40%] md:w-[45%] lg:w-[45%]  sm:w-full xs:w-full   h-full pr-[5%] md:pr-[5%] sm:px-[4%] xs:px-[4%]">
            <h1 className="font-bold sm:font-semibold text-3xl sm:text-[27px] xs:mt-[15px] sm:mt-[15px]">
              Rose Tea
            </h1>
            <span className=" ">("Sip blossoming tranquility")</span>

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
              The fragrant aroma of rose tea can promote relaxation, reduce
              stress, and enhance mood, making it a soothing and calming
              beverage
            </p>
            <ul className="pl-[6%]">
              <li className="list-disc mt-[4%]">Digestive Aid </li>
              <li className="list-disc mt-[4%]">Hydrates</li>
              <li className="list-disc mt-[4%]">Weight Management</li>
            </ul>
            <p className="">
              The antioxidants in rose tea may contribute to heart health by
              reducing oxidative stress and inflammation, Menstrual comfort. The
              vitamin C content in rose tea may boost the immune system and help
              the body defend against infections. Cultural and Culinary Delight.
            </p>

            <div className="">
              <h1 className="text-lg font-bold">How to comsume?</h1>
              <p className="">
                Use 1 teaspoon (approximately 1.5 grams) of dried tea powder for
                each 8-ounce (about 240 ml) cup of Hot Water. Cover the teapot
                or cup with a lid or a saucer to trap the steam and let the Rose
                steep for about 5 minutes. After steeping, strain the tea. our
                Rose tea is ready to drink. Take small sips and savor the
                soothing flavor. It's best enjoyed warm.
              </p>
              <p className="py-[5px]">
                <b> Optional:</b> honey or a slice of lemon for added flavor.
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
                  <div className="flex justify-between">
                    <div className="">
                      <h1 className="text-lg font-bold">Customer Reviews</h1>
                      <p className="my-[5%] font-semibold">
                        I Love the Ambrosia
                      </p>
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
                        {" "}
                        <b>Emma:</b>
                      </p>{" "}
                      <p className="">
                        Rose tea is a delightful, fragrant experience. It's
                        perfect for those times when I want a subtle, floral
                        flavor. It's not overly strong, which I appreciate, and
                        it's become a favorite for special occasions.
                      </p>
                    </div>
                    {reviews ? (
                      <div className="">
                        <div className="pt-[2%]">
                          <p className="pb-[1%]">
                            {" "}
                            <b>Liam :</b>
                          </p>{" "}
                          <p className="">
                            I tried rose tea out of curiosity, and while it's a
                            unique flavor, it didn't quite match my taste
                            preferences. It's a bit too floral for my liking,
                            but I can see how others might enjoy its delicate
                            aroma.
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
        className="h-full px-[10%] md:px-[3%] sm:px-[3%] xs:px-[3%] py-[8%]   bg-[#d3e8c9]
       "
      >
        <div className="h-full">
          <h1 className="text-2xl font-bold pb-[6%]  text-center ">
            YOU MIGHT ALSO LIKE
          </h1>
          <div className="w-full h-full flex xs:flex-wrap sm:flex-wrap justify-between">
            <div className=" text-center h-full w-[24%] xs:w-[80%] sm:w-[70%] m-auto">
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
            <div className=" text-center h-full w-[24%] xs:w-[80%] sm:w-[70%] m-auto">
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
            <div className=" text-center h-full w-[24%] xs:w-[80%] sm:w-[70%] m-auto">
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
            <div className=" text-center h-full w-[24%] xs:w-[80%] sm:w-[70%] m-auto">
              <a
                href="/chamomile"
                className="h-[180px]  mx-[5%]  border-2 bg-white "
              >
                <img
                  src={Chamomile}
                  alt=""
                  className="h-full w-full"
                />
                <p className="text-center text-xl font-semibold mt-[10px]">
                  Chamomile Tea
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
