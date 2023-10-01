import React from "react";
import main2 from "../img/p1_main2.jpg";
import logo1 from "../img/logos/logo1.png";
import logo2 from "../img/logos/logo2.png";
import logo3 from "../img/logos/logo3.png";
import logo4 from "../img/logos/logo4.png";
import logo5 from "../img/logos/logo5.png";
// import { MCarousel } from "../components/Carousel/MCarousel";
import Corusel from "../components/Carousel/Corusel"
import people from "../components/Carousel/data"

export default function FirstPage() {
  return (
    <div className="w-full bg-[#fcfce4] mt-[73px] ">
      <section
        className="  py-[13%]  w-full  px-[15%] lg:px-[15%] md:px-[10%] sm:px-[5%] xs:px-[5%]   h-full bg-[#f3ffed bg-cover   "
        style={{ backgroundImage: `url(${main2})` }}
      >
        <div className="mr-[50%] h-full xs:mr-[40%] sm:mr-[40%] md:mr-[40% ">
          <h1 className="text-3xl xs:text-2xl font-bold   pb-[4%] text-white ">
            {/* EMBRACE NATURE FOR A HEALTHIER YOU WITH HEILAND */}
            Embrace nature for a healthier you with heiland
          </h1>
          <p className="font-medium  pb-[4%] text-white xs:text-sm">
            Experience the true essence of wellness with Heiland. Our diverse
            range of herbal products, from teas and supplements to face and body
            masks, allows you to unlock your inner vitality the natural way.
            Embrace a healthier, more vibrant you with the power of nature
          </p>
          <div className="mt-[2%] xs:mt-[3%]  ">
            <a
              href="/"
              className="px-[3%] py-[1%] bg-transparen bg-gray-700  text font-medium border  text-white"
            >
              BROWSE PRODUCTS
            </a>
          </div>
        </div>
      </section>
      <section className=" pt-[3%] pb-[3%] px-[20%] lg:px-[15%] md:px-[10%] sm:px-[10%] xs:px-[5%]  text-cente h-full bg-[#f3ffed">
        <div className="">
          <h1 className=" font-bold text-3xl xs:text-2xl sm:text-2xl xs:my-[2%] sm:my-[2%] ">
            {/* INNOVATIVE HERBAL SOLUTION CRAFTED JUST FOR YOU */}
            Innovative herbal solutions crarted just for you
          </h1>
          <p className="font-medium text-lg xs:text-base sm:text-base mt-[2%] mb-[3%] xs:mb-[4%] sm:mb-[4%]">
            Our unique blends harness nature's wisdom to enhance your well-being
            naturally. Discover personalized wellness with our herbal products.
          </p>
          <div className="w-full h-[60%] flex xs:block sm:block  justify-between pt-[2%] xs:pt-[10%] sm:pt-[8%] md:pt-[5%] ">
            <div className="w-[32%] xs:w-[70%] sm:w-[70%] sm:m-auto xs:m-auto text-center  h-[350px] py-[2%]">
              <div className="h-[60%] w-full border-2 mb-[5%]">
                <a href="/supplement" className="">
                  <img
                    src="https://i.ytimg.com/vi/HYDfqSTUV1o/maxresdefault.jpg"
                    // src="/photos/1.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="py-[4%] xs:py-[3%] sm:py-[3%]">
                <h1 className="font-bold text-xl">Herbal Supplements</h1>
                <p className="text-base font-semibold pt-[1%]">
                  Nature's Healing Secrets
                </p>
              </div>
            </div>
            <div className="w-[32%] h-[350px] py-[2%] xs:w-[70%] sm:w-[70%] text-center sm:m-auto xs:m-auto">
              <div className="h-[60%] w-full border-2 bg-white mb-[5%]">
                <a href="/tea" className="">
                  <img
                    src="https://i.ytimg.com/vi/HYDfqSTUV1o/maxresdefault.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="py-[4%] xs:py-[3%] sm:py-[3%]">
                <h1 className="font-bold text-xl"> Herbal Tea's</h1>
                <p className="text-base font-semibold pt-[1%]">
                  Sip Nature's Goodness
                </p>
              </div>
            </div>
            <div className="w-[32%] h-[350px] py-[2%] xs:w-[70%] sm:w-[70%] text-center sm:m-auto xs:m-auto">
              <div className="h-[60%] w-full border-2 bg-white mb-[5%]">
                <a href="/beauty" className="">
                  <img
                    src="https://i.ytimg.com/vi/HYDfqSTUV1o/maxresdefault.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="py-[4%] xs:py-[3%] sm:py-[3%]">
                <h1 className="font-bold text-xl"> Herbal Beauty Care</h1>
                <p className="text-base font-semibold pt-[1%]">
                  Redefining your radiant aura with herbal beauty care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[20%] lg:px-[15%] md:px-[10%] sm:px-[5%] xs:px-[5%] py-[5%] text-center bg-[#5f8575 bg-[#f3ffed bg-[#d3e8c9]  h-full">
        <h1 className="font-bold text-2xl  text-green-700">
          MANY OF OUR PRODUCTS ARE
        </h1>
        <div className="pb-[5%] pt-[2%] flex flex-wrap  justify-around sm:justify-around px-[4%]  sm:px-[1%]">
          <div className=" mt-[1%] h-[105px] w-[105px]">
            <img src={logo1} alt="" className="h-ful w-ful   " />
            <h1 className="text-xs font-bold py-[17%] text-green-700">
              CHEMICAL FREE
            </h1>
          </div>
          <div className="h-[130px] w-[130px]">
            <img src={logo2} alt="" className="h-full w-full " />
            <h1 className="text-xs font-bold  text-green-700">GLUTEN-FREE</h1>
          </div>
          <div className="h-[130px] w-[130px]">
            <img src={logo3} alt="" className="h-full w-full " />
            <h1 className="text-xs font-bold  text-green-700">SUGAR FREE</h1>
          </div>
          <div className="h-[120px] w-[120px]">
            <img src={logo4} alt="" className=" h-full w-full" />
            <h1 className="text-xs font-bold  text-green-700">
               VEGAN
            </h1>
          </div>
          <div className="h-[120px] w-[120px]">
            <img src={logo5} alt="" className=" h-full w-full" />
            <h1 className="text-xs font-bold  text-green-700">CRUELTY FREE</h1>
          </div>
        </div>
      </section>

      <div className="h-full ">
        {/* <MCarousel /> */}
        <Corusel data={people} />
      </div>

      <hr />
      <section className="px-[5%] md:px-[10%] sm:px-[10%] xs:px-[5%] text-center py-[3%] xs:py-[6%] sm:py-[6%] bg-[#fcfce4">
        <h1 className="font-bold text-3xl pb-[1%]">Latest Blogs</h1>
        <div className="w-full h-[60%] flex xs:block sm:block md:block  justify-between">
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] md:w-[70%] xs:m-auto sm:m-auto md:m-auto h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/blog1" className="">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.2BczbIPBVireVZ0HXintDwHaDu&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="py-[5%]">
              <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
              <h1 className="font-bold text-sm">WOMEN'S COMPLETE PROBIOTIC</h1>
              <p className="text-sm font-semibold pt-[5%]">
                Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                facere iure!
              </p>
            </div>
          </div>
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] md:w-[70%] md:m-auto xs:m-auto sm:m-auto  h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/blog2" className="">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.4b_888yCr2cc1L7cc7pI7QHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="py-[5%]">
              <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
              <h1 className="font-bold text-sm">WOMEN'S COMPLETE PROBIOTIC</h1>
              <p className="text-sm font-semibold pt-[5%]">
                Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                facere iure!
              </p>
            </div>
          </div>
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] md:w-[70%] md:m-auto xs:m-auto sm:m-auto  h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/blog3" className="">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.mmD7isqR_suJYMD7PCl-8wHaEH&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="py-[5%]">
              <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
              <h1 className="font-bold text-sm">WOMEN'S COMPLETE PROBIOTIC</h1>
              <p className="text-sm font-semibold pt-[5%]">
                Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                facere iure!
              </p>
            </div>
          </div>
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] md:w-[70%] md:m-auto xs:m-auto sm:m-auto h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/blog4" className="">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.2BczbIPBVireVZ0HXintDwHaDu&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="py-[5%]">
              <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
              <h1 className="font-bold text-sm">WOMEN'S COMPLETE PROBIOTIC</h1>
              <p className="text-sm font-semibold pt-[5%]">
                Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                facere iure!
              </p>
            </div>
          </div>
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] md:w-[70%] md:m-auto xs:m-auto sm:m-auto  h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/blog5" className="">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.4b_888yCr2cc1L7cc7pI7QHaEK&pid=Api&P=0&h=180"
                  alt=""
                  className="h-full w-full"
                />
              </a>
            </div>
            <div className="py-[5%]">
              <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
              <h1 className="font-bold text-sm">WOMEN'S COMPLETE PROBIOTIC</h1>
              <p className="text-sm font-semibold pt-[5%]">
                Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                facere iure!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
