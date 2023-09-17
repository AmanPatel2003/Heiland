import React from "react";
// import main1 from "../img/p1_main1.jpg";
import main2 from "../img/p1_main2.jpg";

import { MCarousel } from "../components/Carousel/MCarousel";

export default function FirstPage() {
  return (
    <div className="w-full bg-[#fcfce4] ">
      <section
        className="pt-[18%] pb-[15%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%] w-full  px-[15%] lg:px-[15%] md:px-[10%] sm:px-[5%] xs:px-[5%]   h-full bg-[#f3ffed bg-cover bg-center "
        // style={{
        //   backgroundImage:
        //   "/public/photos/1.jpg"
        //     "url('https://ayurvedamegastore.com/image/catalog/Blog%20Post/xDabur,P20blog.jpg.pagespeed.ic.nmT1YSN5ch.jpg')",
        // }}
        // style={{ backgroundImage: `url(${main1})` }}
        style={{ backgroundImage: `url(${main2})` }}
      >
        <div className="mr-[50%] xs:mr-[0%] sm:mr-[0%]">
          <h1 className="text-3xl font-bold  xs:pb-[3%] sm:pb-[3%] pb-[4%] text-white ">
            EMBRACE NATURE FOR A HEALTHIER YOU WITH HEILAND
          </h1>
          <p className="font-medium xs:pb-[4%] sm:pb-[3%] pb-[4%] text-white">
            Experience the true essence of wellness with Heiland. Our diverse
            range of herbal products, from teas and supplements to face and body
            masks, allows you to unlock your inner vitality the natural way.
            Embrace a healthier, more vibrant you with the power of nature
          </p>
          <button className="mt-[2%] py-[1%] px-[2%] bg-transparen bg-gray-700  text font-medium border border-white text-white">
            BROWSE PRODUCTS
          </button>
        </div>
      </section>
      <section className=" pt-[3%] pb-[3%] px-[20%] lg:px-[15%] md:px-[10%] sm:px-[10%] xs:px-[5%]  text-center h-full bg-[#f3ffed">
        <div className="">
          <h1 className=" font-bold text-xl xs:my-[2%] sm:my-[2%]">
            INNOVATIVE HERBAL SOLUTION CRAFTED JUST FOR YOU
          </h1>
          <p className="font-medium mt-[1%] mb-[3%] xs:mb-[4%] sm:mb-[4%]">
            Our unique blends harness nature's wisdom to enhance your well-being
            naturally. Discover personalized wellness with our herbal products.
          </p>
          <div className="w-full h-[60%] flex xs:block sm:block  justify-between">
            <div className="w-[32%] xs:w-[70%] sm:w-[70%] sm:m-auto xs:m-auto   h-[350px] py-[2%]">
              <div className="h-[60%] w-full border-2 ">
                <a href="/contact" className="">
                  <img
                    src="https://i.ytimg.com/vi/HYDfqSTUV1o/maxresdefault.jpg"
                    // src="/photos/1.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="py-[4%] xs:py-[6%] sm:py-[6%]">
                <h1 className="font-bold text-sm">HARBAL SUPPLEMENTS</h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Nature's Healing Secrets
                </p>
              </div>
            </div>
            <div className="w-[32%] h-[350px] py-[2%] xs:w-[70%] sm:w-[70%] sm:m-auto xs:m-auto">
              <div className="h-[60%] w-full border-2 bg-white">
                <a href="/contact" className="">
                  <img
                    src="https://i.ytimg.com/vi/HYDfqSTUV1o/maxresdefault.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="py-[4%] xs:py-[6%] sm:py-[6%]">
                <h1 className="font-bold text-sm">HARBAL TEA</h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Sip Nature's Goodness
                </p>
              </div>
            </div>
            <div className="w-[32%] h-[350px] py-[2%] xs:w-[70%] sm:w-[70%] sm:m-auto xs:m-auto">
              <div className="h-[60%] w-full border-2 bg-white">
                <a href="/contact" className="">
                  <img
                    src="https://i.ytimg.com/vi/HYDfqSTUV1o/maxresdefault.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="py-[4%] xs:py-[6%] sm:py-[6%]">
                <h1 className="font-bold text-sm">Herbal Beauty</h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Redefining your radiant aura with herbal beauty care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[30%] lg:px-[15%] md:px-[10%] sm:px-[5%] xs:px-[5%]  text-center bg-[#5f8575 bg-[#f3ffed]  h-full">
        <h1 className="font-bold pt-[5%] text-white">
          MANY OF OUR PRODUCTS ARE
        </h1>
        <div className="py-[5%] flex flex-wrap  justify-around sm:justify-around px-[4%]  sm:px-[1%]">
          <div className="h-[120px] w-[80px]">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0ZLl5yRJVVvr_xOn_K9QUgHaGn&pid=Api&P=0&h=180"
              alt=""
              className="h-[80px] w-full rounded-full  "
            />
            <h1 className="text-xs font-bold py-[10%] text-white">NON-GMO</h1>
          </div>
          <div className="h-[80px] w-[80px]">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0ZLl5yRJVVvr_xOn_K9QUgHaGn&pid=Api&P=0&h=180"
              alt=""
              className="h-full w-full rounded-full"
            />
            <h1 className="text-xs font-bold py-[10%] text-white">VEGAN</h1>
          </div>
          <div className="h-[80px] w-[80px]">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0ZLl5yRJVVvr_xOn_K9QUgHaGn&pid=Api&P=0&h=180"
              alt=""
              className="h-full w-full rounded-full"
            />
            <h1 className="text-xs font-bold py-[10%] text-white">
              GLUTEN-FREE
            </h1>
          </div>
          <div className="h-[80px] w-[80px]">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0ZLl5yRJVVvr_xOn_K9QUgHaGn&pid=Api&P=0&h=180"
              alt=""
              className="h-full w-full rounded-full"
            />
            <h1 className="text-xs font-bold py-[10%] text-white">
              DAIRY-FREE
            </h1>
          </div>
          {/* <div className="h-[80px] w-[80px]">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0ZLl5yRJVVvr_xOn_K9QUgHaGn&pid=Api&P=0&h=180png"
              alt=""
              className="h-full w-full rounded-full"
            />
            <h1 className="text-xs font-bold py-[10%] text-white">KOSHER</h1>
          </div>
          <div className="h-[80px] w-[80px]">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.0ZLl5yRJVVvr_xOn_K9QUgHaGn&pid=Api&P=0&h=180"
              alt=""
              className="h-full w-full rounded-full"
            />
            <h1 className="text-xs font-bold py-[10%] text-white">HALAL</h1>
          </div> */}
        </div>
      </section>

      <div className="h-[10%]">
        <MCarousel />
      </div>
      {/* <div className="h-full bg-[#f3ffed] "> */}

      <hr />
      <section className="px-[5%] md:px-[10%] sm:px-[10%] xs:px-[5%] text-center py-[3%] xs:py-[6%] sm:py-[6%] bg-[#fcfce4">
        <h1 className="font-bold pb-[1%]">LATEST ARTICLES</h1>
        <div className="w-full h-[60%] flex xs:block sm:block  justify-between">
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] xs:m-auto sm:m-auto h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
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
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] xs:m-auto sm:m-auto  h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/blog1" className="">
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
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] xs:m-auto sm:m-auto  h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/blog1" className="">
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
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] xs:m-auto sm:m-auto h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
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
          <div className="w-[19%] xs:w-[70%] sm:w-[70%] xs:m-auto sm:m-auto  h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/blog1" className="">
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
