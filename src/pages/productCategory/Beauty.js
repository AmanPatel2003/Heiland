import React from "react";
import { Helmet } from "react-helmet-async";
import GoldenZest from "../../img/Heiland/3Skin Products/2Golden Zest/Z11.png";
import ClayGlow from "../../img/Heiland/3Skin Products/3Clay Glow/Y1M.png";
import ScarletGlow from "../../img/Heiland/3Skin Products/4Scarlet Glow/Y1M.png";

export const Beauty = () => {
  return (
    <>
      <Helmet>
        <title>Beauty Products</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="bg-[#fcfce4] px-[20%]  md:px-[10%] sm:px-[5%] xs:px-[5%] py-[5%] md:py-[8%] xs:py-[18%] mt-[73px] ">
        <div className="flex h-full">
          <div className=" h-full w-full   pt-[8%] xs-px-[3%] sm:px-[4%] md:px-[5%]">
            <div>
              <h2 className="text-5xl font-bold  xs:text-4xl xs:pl-[6%] pl-[10%] pb-[5%] ">
                Herbal Beauty Care
              </h2>
            </div>
            <section className="h-full bg-[#f3ffed   ">
              <div className="flex justify-between xs:block pt-[4%] pb-[40px]">
                <div className="flex xs:flex-wrap sm:flex-wrap md:flex-wrap justify-between lg:flex-wrap w-full xs:w-full xs:mt-[8%]">
                  <div className="w-[32%] xs:w-[50%] sm:w-[50%] md:w-[50%] ">
                    <a href="/clayglow">
                      <img src={ClayGlow} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Clayglow
                      </p>
                    </a>
                  </div>

                  <div className="w-[32%]  xs:w-[50%] sm:w-[50%] md:w-[50%]">
                    <a href="/golden">
                      <img src={GoldenZest} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Golden Zest
                      </p>
                    </a>
                  </div>

                  <div className="w-[32%]  xs:w-[50%] sm:w-[50%] md:w-[50%] xs:mt-[10%] sm:mt-[10%] md:mt-[10%]">
                    <a href="/scarletglow">
                      <img src={ScarletGlow} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        ScarletGlow
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
