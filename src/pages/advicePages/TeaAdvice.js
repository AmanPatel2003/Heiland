import React from 'react'
import { Helmet } from "react-helmet-async";
import img from "../../img/Heiland/1Tea/1Multi Setup/M1.1M.jpg";


export const TeaAdvice = () => {
  return (
    <>
      <Helmet>
        <title>Tea Advice</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="w-full bg-[#fcfce4] mt-[73px] ">
        <div className="text-5xl font-semibold text-center py-[4%]  border-b-4 border-[#097969]">
          Herbal Tea's
        </div>
        <div className="flex py-[5%] md:block sm:block xs:block md:px-[10%] sm:px-[10%] xs:px-[10%] ">
          <div className="w-[50%] md:w-full sm:w-full xs:w-full   px-[5%] lg:px-[3%] md:px-[2%] py-[3%]">
            <img src={img} alt="" className="w-full   " />
          </div>
          <div className="w-[50%] items-center xl:text-lg 2xl:text-lg flex md:w-full sm:w-full xs:w-full px-[5%] lg:px-[3%] md:px-[5%] sm:px-[9%] xs:px-[10%] py-[3%] ">
            <ul className="list-disc">
              <li className="my-[2%]">
                Experiment with natural sweeteners like honey or stevia, if
                desired.
              </li>
              <li className="my-[2%]">
                Morning Energizer: opt for invigorating options like peppermint
                to kickstart your day with a burst of energy.
              </li>
              <li className="my-[2%]">
                Midday Relaxation: Chamomile, Rose or Ginger tea can help you
                unwind and reduce stress in the afternoon.
              </li>
              <li className="my-[2%]">
                Digestive Aid: After meals hibiscus or Ginger tea can assist
                with digestion and reduce bloating.
              </li>
              <li className="my-[2%]">
                Evening Calm: Before bedtime, try soothing herbal choices like
                Rose ,Hibiscus chamomile to promote relaxation and improve
                sleep.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
