import React from "react";
import { BsStarFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component

export default function FirstPage() {
  return (
    <div className="w-full bg-[#f3ffed] ">
      <section
        className="py-[15%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%] w-full  px-[20%] lg:px-[15%] md:px-[10%] sm:px-[5%] xs:px-[5%]  border-b-8 h-full bg-[#f3ffed bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://ayurvedamegastore.com/image/catalog/Blog%20Post/xDabur,P20blog.jpg.pagespeed.ic.nmT1YSN5ch.jpg')",
        }}
      >
        <div className="mr-[55%] xs:mr-[0%] sm:mr-[0%]">
          <h1 className="text-3xl font-bold  xs:pb-[3%] sm:pb-[3%] pb-[3%]">
            THE GOLD STANDARD IN VITAMINS.
          </h1>
          <p className="font-medium xs:pb-[4%] sm:pb-[3%] pb-[3%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            ullam corporis, laborum voluptate sit veniam. Inventore aspernatur
            exercitationem possimus perspiciatis.
          </p>
          <button className="mt-[2%] py-[1%] px-[2%] bg-transparent text-[#568385 text font-medium border border-black">
            BROWSE PRODUCTS
          </button>
        </div>
      </section>
      <section className=" pt-[3%] pb-[3%] px-[20%] lg:px-[15%] md:px-[10%] sm:px-[10%] xs:px-[5%]  text-center h-full bg-[#f3ffed]">
        <div className="">
          <h1 className=" font-bold text-xl xs:my-[2%] sm:my-[2%]">
            INNOVATIVE PRODUCTS MADE WITH YOU IN MIND
          </h1>
          <p className="font-medium mt-[1%] mb-[3%] xs:mb-[4%] sm:mb-[4%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            architecto molestias pariatur optio quos blanditiis libero nostrum
            perspiciatis cum possimus vero laborum modi.
          </p>
          <div className="w-full h-[60%] flex xs:block sm:block  justify-between">
            <div className="w-[32%] xs:w-[70%] sm:w-[70%] sm:m-auto xs:m-auto   h-[350px] py-[2%]">
              <div className="h-[60%] w-full border-2 ">
                <a href="/contact" className="">
                  <img
                    src="https://i.ytimg.com/vi/HYDfqSTUV1o/maxresdefault.jpg"
                    alt=""
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="py-[4%] xs:py-[6%] sm:py-[6%]">
                <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
                <h1 className="font-bold text-sm">
                  WOMEN'S COMPLETE PROBIOTIC
                </h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                  facere iure!
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
                <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
                <h1 className="font-bold text-sm">
                  WOMEN'S COMPLETE PROBIOTIC
                </h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                  facere iure!
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
                <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
                <h1 className="font-bold text-sm">
                  WOMEN'S COMPLETE PROBIOTIC
                </h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                  facere iure!
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-full h-[60%] xs:block sm:block flex justify-between">
            <div className="w-[32%] h-[350px] xs:w-[70%] sm:w-[70%] sm:m-auto xs:m-auto py-[2%]">
              <div className="h-[60%] w-full border-2 bg-white "></div>
              <div className="py-[4%] xs:py-[6%] sm:py-[6%]">
                <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
                <h1 className="font-bold text-sm">
                  WOMEN'S COMPLETE PROBIOTIC
                </h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                  facere iure!
                </p>
              </div>
            </div>
            <div className="w-[32%] h-[350px] xs:w-[70%] sm:w-[70%] sm:m-auto xs:m-auto py-[2%]">
              <div className="h-[60%] w-full  border-2 bg-white "></div>
              <div className="py-[4%] xs:py-[6%] sm:py-[6%]">
                <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
                <h1 className="font-bold text-sm">
                  WOMEN'S COMPLETE PROBIOTIC
                </h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                  facere iure!
                </p>
              </div>
            </div>
            <div className="w-[32%] h-[350px] xs:w-[70%] sm:w-[70%] sm:m-auto xs:m-auto py-[2%]">
              <div className="h-[60%] w-full border-2 bg-white "></div>
              <div className="py-[4%] xs:py-[6%] sm:py-[6%]">
                <h1 className="text-xs font-semibold">DIGESTIVE HEALTH</h1>
                <h1 className="font-bold text-sm">
                  WOMEN'S COMPLETE PROBIOTIC
                </h1>
                <p className="text-sm font-semibold pt-[5%]">
                  Lorem lorem30 ipsum dolor sit amet Ab natus eaque minima rerum
                  facere iure!
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <section className="px-[20%] lg:px-[15%] md:px-[10%] sm:px-[5%] xs:px-[5%]  text-center bg-[#78c178] pb-[3%] h-full">
        <h1 className="font-bold pt-[5%] text-white">
          MANY OF OUR PRODUCTS ARE
        </h1>
        <div className="py-[5%] flex flex-wrap justify-between xs:justify-around sm:justify-around px-[4%]  sm:px-[1%]">
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
          <div className="h-[80px] w-[80px]">
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
          </div>
        </div>
      </section>

      {/* <div className="h-full bg-[#f3ffed] "> */}
      <Carousel
        showArrows={true} // Customize carousel settings as needed
        showStatus={false}
        showThumbs={true}
        autoPlay={true} // Set to true for automatic slideshow
        interval={7000} // Adjust the interval between slides (in milliseconds)
        infiniteLoop={true}
        // useKeyboardArrows={true} // Enable keyboard navigation
        stopOnHover={true}
      >
        <section className="px-[20%] lg:px-[15%] md:px-[10%] sm:px-[10%] xs:px-[5%]   pt-[5%] pb-[8%] lg:pb-[5%] xl:pb-[5%] 2xl:pb-[5%] flex xs:block bg-[#f3ffed]">
          <div className="w-[50%] xs:w-[70%] xs:m-auto h-full items-start ">
            <h1 className=" text-start font-bold my-[3%] text-xl ">
              WHAT PEOPLE ARE SAYING
            </h1>
            <div className="flex py-[4%] ">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <h1 className=" text-start font-bold py-[3%]">
              GREAT MAGNESIUM SOURCE
            </h1>
            <p className=" font-medium my-[3%] text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident doloribus ipsum voluptatibus rerum nulla magnam
              laudantium, reiciendis obcaecati fugit molestias ullam.
            </p>
            <p className="text-start pt-[4%] font-medium text-sm">
              An Amawon Customer
            </p>
            <p className="text-start font-medium text-sm xs:mb-[15px]">
              about Magnesium Citrate
            </p>
          </div>
          <div className="w-[50%] xs:w-[70%] xs:m-auto  xs:h-[220px] xs:mb-[5%] bg-white border">
            <a href="/contact" className="">
              <img
                src="https://i.ytimg.com/vi/8VrLhZhiNX4/maxresdefault.jpg"
                alt=""
                className="h-full w-full"
              />
            </a>
          </div>
        </section>

        <section className="px-[20%] lg:px-[15%] md:px-[10%] sm:px-[10%] xs:px-[5%]   py-[5%] flex xs:block bg-[#f3ffed]">
          <div className="w-[50%] xs:w-[70%] xs:m-auto h-full">
            <h1 className="text-start font-bold my-[3%] text-xl">
              WHAT PEOPLE ARE SAYING
            </h1>
            <div className="flex py-[4%] ">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <h1 className="text-start font-bold py-[3%]">
              GREAT MAGNESIUM SOURCE
            </h1>
            <p className="text-start font-medium my-[3%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident doloribus ipsum voluptatibus rerum nulla magnam
              laudantium, reiciendis obcaecati fugit molestias ullam.
            </p>
            <p className=" text-start pt-[4%] font-medium text-sm">
              An Amawon Customer
            </p>
            <p className="text-start font-medium text-sm xs:mb-[15px]">
              about Magnesium Citrate
            </p>
          </div>
          <div className="w-[50%] xs:w-[70%] xs:m-auto  xs:h-[220px] bg-white border">
            <a href="/contact" className="">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/606d2082874849.5d2b473f01d4f.jpg"
                alt=""
                className="h-full w-full"
              />
            </a>
          </div>
        </section>
        <section className="px-[20%] lg:px-[15%] md:px-[10%] sm:px-[10%] xs:px-[5%]   py-[5%] flex xs:block bg-[#f3ffed]">
          <div className="w-[50%] xs:w-[70%] xs:m-auto h-full">
            <h1 className="text-start font-bold my-[3%] text-xl">
              WHAT PEOPLE ARE SAYING
            </h1>
            <div className="flex py-[4%] ">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <h1 className="text-start font-bold py-[3%]">
              GREAT MAGNESIUM SOURCE
            </h1>
            <p className="text-start font-medium my-[3%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident doloribus ipsum voluptatibus rerum nulla magnam
              laudantium, reiciendis obcaecati fugit molestias ullam.
            </p>
            <p className="text-start pt-[4%] font-medium text-sm">
              An Amawon Customer
            </p>
            <p className="text-start font-medium text-sm xs:mb-[15px]">
              about Magnesium Citrate
            </p>
          </div>
          <div className="w-[50%] xs:w-[70%] xs:m-auto  xs:h-[220px] bg-white border">
            <a href="/contact" className="">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/606d2082874849.5d2b473f01d4f.jpg"
                alt=""
                className="h-full w-full"
              />
            </a>
          </div>
        </section>
      </Carousel>
      {/* </div> */}

      <hr />
      <section className="px-[17%] md:px-[10%] sm:px-[10%] xs:px-[5%] text-center py-[3%] xs:py-[6%] sm:py-[6%] bg-[#f3ffed]">
        <h1 className="font-bold pb-[1%]">LATEST ARTICLES</h1>
        <div className="w-full h-[60%] flex xs:block sm:block  justify-between">
          <div className="w-[32%] xs:w-[70%] sm:w-[70%] xs:m-auto sm:m-auto h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/contact" className="">
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
          <div className="w-[32%] xs:w-[70%] sm:w-[70%] xs:m-auto sm:m-auto  h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/contact" className="">
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
          <div className="w-[32%] xs:w-[70%] sm:w-[70%] xs:m-auto sm:m-auto  h-[350px] py-[2%] xs:py-[4%] sm:py-[4%]">
            <div className="h-[60%] w-full border-2 bg-white ">
              <a href="/contact" className="">
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
        </div>
      </section>
    </div>
  );
}
