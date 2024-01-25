import React from "react";
import { Helmet } from "react-helmet-async";
import img from "../../img/Heiland/2Suplements/1Multi Setup/E11M.jpg";

export const SupplementsAdvice = () => {
  return (
    <>
      <Helmet>
        <title>Supplements Advice </title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="w-full bg-[#fcfce4] mt-[73px] ]">
        <div className="text-5xl xs:text-4xl font-semibold  text-center py-[4%] border-b-4 border-[#097969]">
          Herbal supplements
        </div>
        <div className="flex py-[5%] md:block sm:block xs:block md:px-[10%] sm:px-[10%] xs:px-[10%] ">
          <div className="w-[50%] md:w-full sm:w-full xs:w-full   px-[5%] lg:px-[3%] md:px-[2%] py-[3%]">
            <img src={img} alt="" className="w-full " />
          </div>
          <div className="w-[50%] items-center  xl:text-lg 2xl:text-lg flex md:w-full sm:w-full xs:w-full px-[5%] lg:px-[3%] md:px-[5%] sm:px-[9%] xs:px-[10%] py-[3%] ">
            <ul className="list-disc">
              <li className="my-[2%]">
                For lasting relief in gut and digestive care, it's recommended
                to consume <b>Ambrosia</b> Herbal Supplements for a minimum of{" "}
                <b>three months</b>
              </li>
              <li className="my-[2%]">
                To amplify Ambrosia effectiveness, consider incorporating daily
                yoga or abdominal exercises into your routine.
              </li>
              <li className="my-[2%]">
                For immediate relief from acid reflux and burning sensations,
                try placing a small piece of ginger in your mouth and allow the
                juice to slowly trickle down your throat.
              </li>
              <li className="my-[2%]">
                Ashwagandha and shatavari must be comsumed with Milk (It can be
                vegan or normal milk)
              </li>
              <li className="my-[2%]">
                Ashwagandha is more effective if comsumed at night before sleep
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
