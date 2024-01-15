import React from "react";
import { Subscribe } from "../../components/Subscribe";
import { BiCalendar } from "react-icons/bi";
import BlogImg from "../../img/advices/Blog2.jpg";

import Ambrosia from "../../img/Heiland/2Suplements/2Ambrosia/Z1M1.png";
import Ashwagandha from "../../img/Heiland/2Suplements/3Ashwagandha/Y1M.png";
import Shatavari from "../../img/Heiland/2Suplements/4Shatavari/Y3M.png";

const Blog2 = () => {
  return (
    <div className="py-[10%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%] px-[27%] lg:px-[20%] md:px-[10%] sm:px-[10%] xs:px-[10%] bg-[#fcfce4] mt-[73px]">
      <h1 className="text-2xl font-bold  ">
        No More Bloating and Discomfort: Ambrosia - The Natural Way to Relieve
        Fatty Acid and Improve Liver Health
      </h1>
      <p className="flex py-[2%]">
        <BiCalendar size={20} className="mr-1" /> JULY 11, 2023
      </p>
      <div className="h-[380px] xs:h-[280px]  border bg-white  ">
        <a href="/supplement" className="">
          <img src={BlogImg} alt="" className="h-full w-full" />
        </a>
      </div>

      <div className="pb-[1%] mt-[2%]">
        <h1 className="text-xl font-bold ">Introduction:</h1>
        <p className="py-[1%]  mb-[1%] ">
          In our fast-paced lives, health often takes a backseat, leaving us
          vulnerable to various ailments. One of the most common issues many of
          us face is the discomfort of bloating and the challenges that come
          with maintaining optimal liver health. But worry not, because nature
          has bestowed upon us a remarkable solution: Ambrosia – the natural way
          to relieve fatty acid-related issues and improve liver health. In this
          blog, we'll dive deep into the world of Ambrosia, exploring its
          benefits and how it can bring relief and vitality back to your life.
        </p>
        <h1 className="text-xl font-bold">Understanding the Struggles:</h1>
        <p className="py-[1%]  mb-[1%] ">
          Bloating, discomfort, and suboptimal liver health can cast a shadow
          over our daily routines. Irregular eating habits, processed foods, and
          stress can contribute to these problems. Often, we find ourselves
          yearning for a holistic solution that doesn't involve over-the-counter
          medications or synthetic supplements. This is where Ambrosia steps in,
          offering a natural and gentle approach to combating these issues
        </p>
        <h1 className="text-xl font-bold">The Power of Ambrosia:</h1>
      </div>
      <div className=" ">
        <p className="  mb-[2%]">
          <b> Amla:</b> Also known as Indian gooseberry, is a fruit that is high
          in antioxidants and vitamin C, both of which can aid to preserve the
          liver and support liver function. Additionally, it possesses
          anti-inflammatory qualities that might lessen digestive tract
          irritation.
        </p>
        <p className="  mb-[3%] ">
          <b> Chiraita: </b>Also called Swertia Chirata, is a herb that has been
          used to treat digestive problems in traditional medicine. Digestion
          can be improved and stomach acid reduced.
        </p>
      </div>
      <div className=" flex sm:block xs:block pb-[5%]">
        <div className="w-[54%] sm:w-[100%] xs:w-[100%] pr-[1%]">
          <p className="py-[1%]  mb-[2%] ">
            Ambrosia isn't just a myth from ancient tales; it's a potent blend
            of nature's gifts that work synergistically to promote wellness.
            With a combination of carefully selected herbs and ingredients,
            Ambrosia addresses the root causes of bloating and liver distress.
          </p>
          <p className="py-[3%]  mb-[2%]">
            Embracing a natural approach to health is a choice that our bodies
            appreciate. Ambrosia's harmonious blend of dandelion root, turmeric,
            and peppermint holds the promise of relief from bloating and the
            restoration of liver health. By incorporating this natural elixir
            into your routine, you embark on a journey toward overall wellness.
            Bid farewell to discomfort and embrace the vitality that Ambrosia
            brings – a gentle reminder that nature's gifts can truly transform
            our lives. Remember, every sip of Ambrosia is a step towards a
            healthier, more vibrant you. Let this be the start of your renewed
            commitment to your well-being – because you deserve it.
          </p>
        </div>
        <div className="w-[46%] sm:w-[80%] xs:w-[100%] sm:m-auto xs:m-auto">
          <Subscribe />
        </div>
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
                <p className="text-lg  font-semibold">Ambrosia</p>
                {/* <h5 className="text-xs ">AND 1 MORE</h5>
                <p className="text-base ">Magnesium Citrate Tablets</p>
                <p className="">
                  <img src="star-img.png" alt="" />
                  (11)
                </p> */}
              </div>
            </div>
            <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
              <div>
                <div className="w-full xs:pl-[6%]">
                  <a href="/ashwagandha" className="px-[3%]">
                    <img src={Ashwagandha} alt="" />
                  </a>
                </div>
                <p className="text-lg font-semibold ">Ashwagandha</p>
                {/* <h5 className="text-xs ">AND 1 MORE</h5>
                <p className="text-base ">
                  Triple Strength Omega-3 950 mg Softgels
                </p>
                <p className="">
                  <img src="star-img.png" alt="" />
                  (6)
                </p> */}
              </div>
            </div>
            <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
              <div>
                <div className="w-full xs:pl-[6%]">
                  <a href="/satavari" className="px-[3%]">
                    <img src={Shatavari} alt="" />
                  </a>
                </div>
                <p className="text-lg font-semibold ">Shatavari</p>
                {/* <h5 className="text-xs ">AND 2 MORE</h5>
                <p className="text-base ">
                  Vitamin D3 (Cholecalciferol)250 MCG (10,000 IU) Softgels
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog2;
