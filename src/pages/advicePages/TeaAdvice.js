import React from 'react'
import img from "./images/adviceTea.webp";


export const TeaAdvice = () => {
  return (
    <div className="w-full bg-[#fcfce4] mt-[5%] xl:mt-[5%] lg:mt-[6%] md:mt-[7%] sm:mt-[10%] xs:mt-[11%]">
      <div className="text-5xl font-semibold text-center py-[3%] xs:py-[9%] border-b-4 border-[#097969]">
        Herbal Tea's
      </div>
      <div className="flex py-[5%] md:block sm:block xs:block md:px-[10%] sm:px-[10%] xs:px-[10%] ">
        <div className="w-[50%] md:w-full sm:w-full xs:w-full   px-[5%] lg:px-[3%] md:px-[2%] py-[3%]">
          <img src={img} alt="" className="w-full " />
        </div>
        <div className="w-[50%] items-center flex md:w-full sm:w-full xs:w-full px-[5%] lg:px-[3%] md:px-[5%] sm:px-[9%] xs:px-[10%] py-[3%] ">
          <ul className="list-disc">
            <li className="my-[2%]">
              Experiment with natural sweeteners like honey or stevia, if
              desired.
            </li>
            <li className="my-[2%]">
              Morning Energizer: opt for invigorating options like peppermint to
              kickstart your day with a burst of energy.
            </li>
            <li className="my-[2%]">
              Midday Relaxation: Chamomile, Rose or Ginger tea can help you
              unwind and reduce stress in the afternoon.
            </li>
            <li className="my-[2%]">
              Digestive Aid: After meals hibiscus or Ginger tea can assist with
              digestion and reduce bloating.
            </li>
            <li className="my-[2%]">
              Evening Calm: Before bedtime, try soothing herbal choices like
              Rose ,Hibiscus chamomile to promote relaxation and improve sleep.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
