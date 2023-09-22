import React, { useState } from "react";
import supple from "../img/advices/supplement.webp";
import teaimg from "../img/advices/tea.webp";
import beautyimg from "../img/advices/beuty.webp";

export const Advices = () => {
  const [supplement, setsupplement] = useState(false);

  const supplementSet = () => {
    setsupplement(!supplement);
  };
  const [tea, settea] = useState(false);

  const teaSet = () => {
    settea(!tea);
  };
  const [beauty, setbeauty] = useState(false);

  const beautySet = () => {
    setbeauty(!beauty);
  };

  return (
    <div className=" bg-[#fcfce4] mt-[5%] xl:mt-[5%] lg:mt-[6%] md:mt-[7%] sm:mt-[10%] xs:mt-[11%]">
      <h1
        className=" flex justify-center pb-[3%] pt-[5%] xs:pt-[15%] sm:py-[8%] text-5xl md:text-4xl sm:text-3xl xs:text-xl font-semibold xs:font-bold"
        style={{ fontFamily: "Times New Roman" }}
      >
        HEALTH, WELLNESS, BODY AND SOUL
      </h1>
      <section className="px-[20%] xs:px-[15%] sm:px-[15%] pb-[5%]">
        <p
          className=" text-justify  xs:text-sm  text-[18px] font-semibold"
          style={{ fontFamily: "Times New Roman" }}
        >
          Incorporating herbal products like tea, skincare, and supplements into
          your daily routine can enhance your overall health. A balanced diet
          supplemented with herbal teas such as chamomile or Hibiscus tea
          provides a nutritious foundation. Herbal skincare products nurture
          your skin naturally. Additionally, Regular exercise, stress management
          through relaxation techniques, and sufficient sleep complement the
          benefits of herbal products, promoting holistic well-being. Remember,
          consistency and patience are essential as herbal remedies often
          require time to manifest their full potential, contributing to your
          long-term health and vitality.
        </p>
      </section>
      <section className="px-[5%] pb-[5%] lg:pb-[10%] md:pb-[20%] sm:block xs:block flex justify-between">
        <div className="w-[31%] xs:w-full sm:w-full xs:py-[5%] sm:py-[5%]">
          <img src={supple} alt="" className="w-full h-[250px] mb-[5%]" />
          <button onClick={supplementSet} className="font-bold text-xl mb-[2%]">
            Herbal Supplements
          </button>
          <div className="">
            {supplement ? (
              <div className="">
                <p className="font-semibold xs:text-sm mb-[2%]">
                  For lasting relief in gut and digestive care, it's recommended
                  to consume <b>Ambrosia</b> Herbal Supplements for a minimum of{" "}
                  <b>three months</b>. <br /> 
                  To amplify Ambrosia effectiveness,
                  consider incorporating daily yoga or abdominal exercises into
                  your routine. <br />
                <p className="font-semibold xs:text-sm mb-[2%]">
                  For immediate relief from acid reflux and burning sensations,
                  try placing a small piece of ginger in your mouth and allow
                  the juice to slowly trickle down your throat.
                </p>
                  Ashwagandha and shatavari must be comsumed with Milk (It can be vegan or normal milk) <br />
                  Ashwagandha is more effective if comsumed at night before sleep "
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-[31%] xs:w-full sm:w-full xs:py-[5%] sm:py-[5%]">
          <img src={teaimg} alt="" className="w-full  h-[250px] mb-[5%]" />
          <button onClick={teaSet} className="font-bold text-xl mb-[2%]">
            Herbal Tea's
          </button>
          <div className="">
            {tea ? (
              <div className="">
                <p className="font-semibold xs:text-sm mb-[2%]">
                  Experiment with natural sweeteners like honey or stevia, if
                  desired."
                </p>
                <p className="font-semibold xs:text-sm mb-[2%]">
                  Morning Energizer: opt for invigorating options like
                  peppermint to kickstart your day with a burst of energy.
                </p>
                <p className="font-semibold xs:text-sm mb-[2%]">
                  Midday Relaxation: Chamomile, Rose or Ginger tea can help you
                  unwind and reduce stress in the afternoon.
                </p>
                <p className="font-semibold xs:text-sm mb-[2%]">
                  Digestive Aid: After meals hibiscus or Ginger tea can assist
                  with digestion and reduce bloating.
                </p>
                <p className="font-semibold xs:text-sm mb-[2%]">
                  Evening Calm: Before bedtime, try soothing herbal choices like
                  Rose ,Hibiscus chamomile to promote relaxation and improve
                  sleep.
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-[31%] xs:w-full sm:w-full xs:py-[5%] sm:py-[5%]">
          <img src={beautyimg} alt="" className="w-full  h-[250px] mb-[5%]" />
          <button onClick={beautySet} className="font-bold text-xl mb-[2%]">
            Herbal Beauty Care
          </button>
          <div className="">
            {beauty ? (
              <div className="">
                <p className="font-semibold xs:text-sm mb-[3%]">
                  Certainly, when preparing face and body masks , it's essential
                  to consider different dilutions for various skin types to
                  ensure the best results:
                </p>
                <p className="font-semibold mb-[2%]">
                  <span className="font-bold xs:text-sm underline">
                    1. Normal Skin:
                  </span>
                  For normal skin, you can mix Mask powder with plain water or
                  rosewater. This combination can help rejuvenate and refresh
                  the skin.
                </p>
                <p className="font-semibold xs:text-sm mb-[2%]">
                  <span className="font-bold underline">2. Oily Skin: </span>To
                  control excess oil and reduce acne, blend Mask powder with
                  yogurt or lemon juice. The acidity in lemon juice can help
                  balance oil production.
                </p>
                <p className="font-semibold xs:text-sm mb-[2%]">
                  <span className="font-bold underline"> 3. Dry Skin:</span> For
                  dry skin, combine Mask powder with honey or milk. Honey
                  provides moisture, while milk adds a creamy texture and
                  hydration.
                </p>
                <p className="font-semibold xs:text-sm mb-[2%] ">
                  <span className="font-bold underline">
                    4. Sensitive Skin:
                  </span>
                  Sensitive skin benefits from a mixture of Mask powder and aloe
                  vera gel. Aloe vera soothes and calms irritation.
                </p>
                <p className="font-semibold xs:text-sm mb-[2%]">
                  <span className="font-bold underline">
                    5. Combination Skin:
                  </span>
                  If you have combination skin, Mask powder with yogurt. This
                  combination can address both oily and dry areas on the face.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};
