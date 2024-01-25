import React from "react";
import { Helmet } from "react-helmet-async";
import Chamomile from "../../img/Heiland/1Tea/3Chamomile/Z1M.png";
import Ginger from "../../img/Heiland/1Tea/4Ginger/Z1M.png";
import Hibiscus from "../../img/Heiland/1Tea/5Hibiscus/Y1M.png";
import Peppermint from "../../img/Heiland/1Tea/6Peppermint/Y1M.png";
import Rose from "../../img/Heiland/1Tea/2Rose/Y1M.png";

export const Tea = () => {
  return (
    <>
      <Helmet>
        <title>Tea Products</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="bg-[#fcfce4] px-[20%]  md:px-[10%] sm:px-[5%] xs:px-[5%] py-[5%] md:py-[8%] xs:py-[18%] mt-[73px] ">
        <div className="flex h-full">
          <div className=" h-full w-full  pt-[8%] xs-px-[3%] sm:px-[4%] md:px-[5%]">
            <div>
              <h2 className="text-5xl font-bold  xs:text-4xl xs:pl-[6%] pl-[10%] pb-[5%] ">
                Herbal tea's
              </h2>
            </div>
            <section className="h-full  ">
              <div className="flex justify-between xs:block pt-[4%] pb-[40px]">
                <div className="flex flex-wrap justify-cente lg:flex-wrap w-full xs:w-full xs:mt-[8%]">
                  <div className="w-[33%] xs:w-[50%] sm:w-[50%] md:w-[50%] ">
                    <a href="/chamomile">
                      <img src={Chamomile} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Chamomile Tea
                      </p>
                    </a>
                  </div>

                  <div className="w-[33%]  xs:w-[50%] sm:w-[50%] md:w-[50%]">
                    <a href="/ginger">
                      <img src={Ginger} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Ginger Tea
                      </p>
                    </a>
                  </div>

                  <div className="w-[33%]  xs:w-[50%] sm:w-[50%] md:w-[50%] xs:mt-[10%] sm:mt-[10%] md:mt-[10%]">
                    <a href="/hibiscus">
                      <img src={Hibiscus} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Hibiscus Tea
                      </p>
                    </a>
                  </div>
                  <div className="w-[33%]  xs:w-[50%] sm:w-[50%] md:w-[50%] mt-[10%]">
                    <a href="/peppermint">
                      <img src={Peppermint} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Peppermint Tea
                      </p>
                    </a>
                  </div>
                  <div className="w-[33%]  xs:w-[50%] sm:w-[50%] md:w-[50%]  mt-[10%]">
                    <a href="/rose">
                      <img src={Rose} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Rose Tea
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
