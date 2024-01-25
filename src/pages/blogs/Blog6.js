import React from "react";
import { Helmet } from "react-helmet-async";
// import { Subscribe } from "../../components/Subscribe";
import { BiCalendar } from "react-icons/bi";

import BLogImg from "../../img/advices/Blog5.jpg"
import Ambrosia from "../../img/Heiland/2Suplements/2Ambrosia/Z1M1.png";
import Ashwagandha from "../../img/Heiland/2Suplements/3Ashwagandha/Y1M.png";
import Shatavari from "../../img/Heiland/2Suplements/4Shatavari/Y3M.png";

const Blog6 = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Blog Six</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="py-[10%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%] px-[27%] lg:px-[20%] md:px-[10%] sm:px-[10%] xs:px-[10%] bg-[#fcfce4] mt-[73px]">
        <h1 className="text-2xl font-bold  ">
          Overcoming Acid Reflux: 3 Methods for Comfortable Living
        </h1>
        <p className="flex py-[2%]">
          <BiCalendar size={20} className="mr-1" /> JULY 11, 2023
        </p>
        <div className="h-[380px] xs:h-[280px]  border bg-white  ">
          <a href="/supplement" className="">
            <img src={BLogImg} alt="" className="h-full w-full" />
          </a>
        </div>

        <div className="">
          <p className="mt-[3%]  mb-[1%] ">
            A common digestive condition that can be uncomfortable and have an
            effect on your general quality of life is acid reflux, often known
            as gastroesophageal reflux disease (GERD). Recurrent reflux of
            stomach acid into the esophagus causes symptoms like regurgitation,
            heartburn, and chest pain. In addition to taking medicine to control
            acid reflux, lifestyle adjustments, and natural therapies can be
            very important to live a pleasant life with this problem. We'll look
            at three practical ways to get rid of acid reflux and enhance your
            everyday life in this post.
          </p>
          <h1 className="text-lg font-bold my-[1%]">Dietary Adjustments</h1>
          <p className=" mb-[1%] ">
            The meals you eat significantly affect the amount of acid reflux
            that you experience. Changing your diet strategically can help
            improve digestion and reduce symptoms:
          </p>
          <p className=" mb-[1%] ">
            Avoid Trigger Foods: Caffeine, alcohol, and spicy, acidic, and fatty
            foods are among the items that have been shown to aggravate symptoms
            of acid reflux. Recognise your own triggers and reduce the amount of
            them you consume.
          </p>
        </div>
        <div className=" ">
          <p className=" mb-[1%]">
            Accept Anti-Reflux Foods: Include foods like lean proteins, whole
            grains, fruits, vegetables, and non-citrus alternatives that can
            help lessen acid reflux. There is a lower chance of esophageal
            discomfort with these options.
          </p>

          <p className=" mb-[1%]">
            Smaller, More Frequently: Rather than eating three substantial meals
            a day, choose to eat smaller, more frequent meals that are
            well-balanced. By doing so, the lower esophageal sphincter's
            pressure may be lowered, halting the reflux of acid into the
            oesophagus.
          </p>
          <h1 className="text-lg font-semibold">Lifestyle Modifications</h1>
          <p className="my-[1%]  ">
            The way of life has a big influence on acid reflux. You can achieve
            observable gains by altering your lifestyle:
          </p>
          <p className=" mb-[1%] ">
            Keep Your Weight in Check: Being overweight, particularly in the
            abdomen, can put more strain on the stomach and exacerbate acid
            reflux. Reducing body weight with a healthy diet and consistent
            exercise can help reduce discomfort.
          </p>
          <p className=" mb-[2%] ">
            Raising the head of your bed by 6 to 8 inches as you sleep will help
            stop stomach acid from refluxing back into your oesophagus. For a
            comparable result, you can also use a wedge-shaped pillow.
          </p>
        </div>
        <div className=" flex sm:block xs:block pb-[5%]">
          <div className="w-[54% sm:w-[100%] xs:w-[100%] ">
            {/* <h2 className="font-bold text-xl">SUMMING IT UP</h2> */}

            <p className="py-[1%]  ">
              Avoid Lying Down Right Away After Eating: Wait a little while for
              your body to finish digesting your meal before you lay down or
              head to bed. This gives stomach acid a place to stay thanks to
              gravity.
            </p>
            <h1 className="text-lg font-semibold">Organic Treatments</h1>
            <p className="py-[1%] xs:pb-[8%]  ">
              Without the need for medicine, there are a number of natural
              therapies that can relieve the symptoms of acid reflux:
            </p>
            <p className=" xs:pb-[8%]  ">
              Ginger tea: Due to its anti-inflammatory qualities, ginger tea may
              help relieve intestinal discomfort. Drinking ginger tea after
              eating may help to lessen acid reflux symptoms.
            </p>
            <p className="py-[1%] xs:pb-[8%] ">
              Aloe Vera Juice: Studies have shown that aloe vera soothes the
              gastrointestinal tract. A tiny amount of aloe vera juice consumed
              prior to meals can aid in esophageal irritation relief.
            </p>
            <p className="py-[%] xs:pb-[8%] ">
              Chewing Gum: Chewing sugar-free gum can increase salivation, which
              lessens acid reflux symptoms by neutralizing stomach acid.
            </p>
          </div>
          {/* <div className="w-[46%] sm:w-[80%] xs:w-[100%] sm:m-auto xs:m-auto">
            <Subscribe />
          </div> */}
        </div>
        <div className="border">
          <div className="">
            <h2 className="text-center py-[5%] font-bold text-xl text-green-900">
              PRODUCTS MENTIONED IN THIS ARTICLS
            </h2>
            <div className="flex xs:block pb-3">
              <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
                <div>
                  <div className="w-full xs:pl-[6%]">
                    <a href="/ambrosia" className="px-[3%] xs:w-full ">
                      <img src={Ambrosia} alt="" />
                    </a>
                  </div>
                  <p className="text-lg font-semibold">Ambrosia</p>
                </div>
              </div>
              <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
                <div>
                  <div className="w-full xs:pl-[6%]">
                    <a href="/ashwagandha" className="px-[3%]">
                      <img src={Ashwagandha} alt="" />
                    </a>
                  </div>
                  <p className="text-lg font-semibold">Ashwagandha</p>
                </div>
              </div>
              <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
                <div>
                  <div className="w-full xs:pl-[6%]">
                    <a href="/satavari" className="px-[3%]">
                      <img src={Shatavari} alt="" />
                    </a>
                  </div>
                  <p className="text-lg m-auto font-semibold">Shatavari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog6;
