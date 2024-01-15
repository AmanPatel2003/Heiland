import React from 'react'
import Ambrosia from "../../img/Heiland/2Suplements/2Ambrosia/Z1M1.png"
import  Ashwagandha from "../../img/Heiland/2Suplements/3Ashwagandha/Y1M.png"
import Shatavari from "../../img/Heiland/2Suplements/4Shatavari/Y3M.png"

export const Supplement = () => {
  return (
    <>
      {/* <div className="bg-[#f3ffed] px-[15%]  md:px-[10%] sm:px-[5%] xs:px-[5%] py-[5%] md:py-[8%] xs:py-[18%] mt-[5%] xl:mt-[5%] lg:mt-[6%] md:mt-[7%] sm:mt-[10%] xs:mt-[11%]"> */}
      <div className="bg-[#fcfce4] px-[20%]  md:px-[10%] sm:px-[5%] xs:px-[5%] py-[5%] md:py-[8%] xs:py-[18%] mt-[73px] ">
        <div className="flex h-full">
          {/* <div className="w-[30%] xs:hidde sm:hidde md:hidde xs:w-[40%] pt-[8%]">
            <ul className="">
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="general-health"
                  name="health_interest_select"
                  id={15}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={15}>
                  General Health
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="bone-joint-support"
                  name="health_interest_select"
                  id={9}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={9}>
                  Bone &amp; Joint Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="immune-support"
                  name="health_interest_select"
                  id={8}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={8}>
                  Immune Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="sleep-support"
                  name="health_interest_select"
                  id={10}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={10}>
                  Sleep Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="stress-support"
                  name="health_interest_select"
                  id={11}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={11}>
                  Stress Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="energy-support"
                  name="health_interest_select"
                  id={6}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={6}>
                  Energy Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="beauty"
                  name="health_interest_select"
                  id={5}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={5}>
                  Beauty
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="fitness-nutrition"
                  name="health_interest_select"
                  id={7}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={7}>
                  Fitness &amp; Nutrition
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="heart-health"
                  name="health_interest_select"
                  id={18}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={18}>
                  Heart Health
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="digestive-health"
                  name="health_interest_select"
                  id={12}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%] font-semibold" htmlFor={12}>
                  Digestive Health
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="brain-health"
                  name="health_interest_select"
                  id={13}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={13}>
                  Brain Health
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="eye-health"
                  name="health_interest_select"
                  id={14}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={14}>
                  Eye Health
                </label>
              </li>
            </ul>
          </div> */}
          <div className=" h-full w-full   pt-[8%] xs-px-[3%] sm:px-[4%] md:px-[5%]">
            {/* <div className=" h-full w-full  pt-[8%] xs-px-[3%] sm:px-[4%] md:px-[5%]"> */}
            <div>
              <h2 className="text-5xl font-bold  xs:text-4xl xs:pl-[6%] pl-[10%] pb-[5%] ">
                Herbal supplements
              </h2>
            </div>
            <section className="h-full    ">
              <div className="flex justify-between xs:block pt-[4%] pb-[40px]">
                <div className="flex xs:flex-wrap sm:flex-wrap md:flex-wrap justify-between lg:flex-wrap w-full xs:w-full xs:mt-[8%]">
                  <div className="w-[32%] xs:w-[50%] sm:w-[50%] md:w-[50%] ">
                    {/* <div className="w-[20%] xs:w-[50%] sm:w-[32%] md:w-[25%]  md:pt-[5%] sm:pt-[5%] "> */}
                    <a href="/ambrosia">
                      <img
                        src={Ambrosia}
                        alt=""
                      />
                    <p className="text-center text-2xl font-semibold mt-[10px]">
                      Ambrosia
                    </p>
                    </a>
                  </div>

                  <div className="w-[32%]  xs:w-[50%] sm:w-[50%] md:w-[50%]">
                    {/* <div className="w-[20%] xs:w-[50%] sm:w-[32%] md:w-[25%]  md:pt-[5%] sm:pt-[5%] "> */}
                    <a href="/ashwagandha">
                      <img
                        src={Ashwagandha}
                        alt=""
                      />
                    <p className="text-center text-2xl font-semibold mt-[10px]">
                      Ashwagandha
                    </p>
                    </a>
                  </div>
                  {/* </div> */}

                  {/* <div className="flex w-[50%] xs:w-full xs:mt-[8%]"> */}
                  <div className="w-[32%]  xs:w-[50%] sm:w-[50%] md:w-[50%] xs:mt-[10%] sm:mt-[10%] md:mt-[10%]">
                    {/* <div className="w-[20%] xs:w-[50%] sm:w-[32%] md:w-[25%]  md:pt-[5%] sm:pt-[5%] "> */}
                    <a href="/satavari">
                      <img
                        src={Shatavari}
                        alt=""
                      />
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
}
