import React from "react";
import Ambrosia from "../../img/Heiland/2Suplements/2Ambrosia/Z1M1.png";
import Ashwagandha from "../../img/Heiland/2Suplements/3Ashwagandha/Y1M.png";
import Shatavari from "../../img/Heiland/2Suplements/4Shatavari/Y3M.png";

export const Supplement = () => {
  return (
    <>
      <div className="bg-[#fcfce4] px-[20%]  md:px-[10%] sm:px-[5%] xs:px-[5%] py-[5%] md:py-[8%] xs:py-[18%] mt-[73px] ">
        <div className="flex h-full">
          <div className=" h-full w-full   pt-[8%] xs-px-[3%] sm:px-[4%] md:px-[5%]">
            <div>
              <h2 className="text-5xl font-bold  xs:text-4xl xs:pl-[6%] pl-[10%] pb-[5%] ">
                Herbal supplements
              </h2>
            </div>
            <section className="h-full    ">
              <div className="flex justify-between xs:block pt-[4%] pb-[40px]">
                <div className="flex xs:flex-wrap sm:flex-wrap md:flex-wrap justify-between lg:flex-wrap w-full xs:w-full xs:mt-[8%]">
                  <div className="w-[32%] xs:w-[50%] sm:w-[50%] md:w-[50%] ">
                    <a href="/ambrosia">
                      <img src={Ambrosia} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Ambrosia
                      </p>
                    </a>
                  </div>

                  <div className="w-[32%]  xs:w-[50%] sm:w-[50%] md:w-[50%]">
                    <a href="/ashwagandha">
                      <img src={Ashwagandha} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Ashwagandha
                      </p>
                    </a>
                  </div>

                  <div className="w-[32%]  xs:w-[50%] sm:w-[50%] md:w-[50%] xs:mt-[10%] sm:mt-[10%] md:mt-[10%]">
                    <a href="/satavari">
                      <img src={Shatavari} alt="" />
                      <p className="text-center text-2xl font-semibold mt-[10px]">
                        Shatavari
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
