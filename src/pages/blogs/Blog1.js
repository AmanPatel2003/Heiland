import React from "react";
import { Subscribe } from "../../components/Subscribe";
import { BiCalendar } from "react-icons/bi";

const Blog1 = () => {
  return (
    <div className="py-[10%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%] px-[27%] lg:px-[20%] md:px-[10%] sm:px-[10%] xs:px-[10%] bg-[#f3ffed] mt-[73px]">
      <h1 className="text-2xl font-bold  ">
        Ambrosia - The Permanent Solution to Your Digestive Woes: No
        Preservatives, No Chemicals.
      </h1>
      <p className="flex py-[2%]">
        <BiCalendar size={20} className="mr-1" /> JANUARY 15, 2023
      </p>
      <div className="h-[280px] border bg-white ">
        <a href="/contact" className="">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.2BczbIPBVireVZ0HXintDwHaDu&pid=Api&P=0&h=180"
            alt=""
            className="h-full w-full"
          />
        </a>
      </div>

      <div className="pb-[1%]">
        <p className="pb-[1%] pt-[4%] text-lg  italic ">
          Do digestive problems like GERD, ulcers, acid reflux, bloating, and
          stomach burning make you tired? Do you frequently turn to
          over-the-counter or prescription pharmaceuticals for short-term
          comfort only to discover that your symptoms keep returning? If so, you
          might want to have a look at Ambrosia, a natural supplement that
          offers a long-lasting fix for your digestive problems.
        </p>
        <p className="py-[1%]   ">
          Ambrosia is made from natural ingredients such as aloe vera, ajwain,
          amla, and chiraita. Together, these essential components reduce
          stomach discomfort and enhance liver function. Here is how each
          component aids:
        </p>
        <p className="py-[1%]   ">
          <b> Aloe vera:</b> Due to its anti-inflammatory characteristics, aloe
          vera has long been used as a natural treatment for digestive problems.
          It can ease stomach discomfort and lessen inflammation, offering
          relief from illnesses including GERD and acid reflux.
        </p>
      </div>
      <div className=" ">
        <p className="py-[1%]   ">
          <b> Ajwain:</b> Thymol is a substance found in ajwain, sometimes
          referred to as carom seeds, that possesses antibacterial
          characteristics. It can enhance digestion and lessen gas and bloating.
        </p>

        <p className="py-[1%]   ">
          <b>Amla:</b> Also known as Indian gooseberry, is a fruit that is high
          in antioxidants and vitamin C, both of which can aid to preserve the
          liver and support liver function. Additionally, it possesses
          anti-inflammatory qualities that might lessen digestive tract
          irritation.
        </p>
        <p className="py-[1%]   ">
          <b>Chiraita:</b> Also called Swertia Chirata, is a herb that has been
          used to treat digestive problems in traditional medicine. Digestion
          can be improved and stomach acid reduced.
        </p>
      </div>
      <div className=" flex sm:block xs:block pb-[5%]">
        <div className="w-[54%] sm:w-[100%] xs:w-[100%] ">
          <p className="py-[2%] font-semibold  text-xl ">
            Here are some major benefits of ambrosia
          </p>

          <p className="py-[3%] xs:pb-[8%] ">
            <b> Permanent comfort -</b> Unlike many over-the-counter drugs that
            only provide short-term comfort, Ambrosia offers a long-lasting
            answer to your digestive problems.
          </p>
          <p className="py-[3%] xs:pb-[8%]  ">
            <b>No Side Effects -</b> Ambrosia has only natural ingredients, thus
            there is little chance that it will have any negative side effects.
          </p>
          <p className="py-[3%] xs:pb-[8%]  ">
            <b> No Preservatives -</b> Ambrosia doesn't include any
            preservatives, so you can be sure you're consuming a supplement
            devoid of dangerous chemicals.
          </p>
          <p className="py-[3%] xs:pb-[8%]  ">
            <b>Improved Liver Health -</b> Ambrosia contains nutrients that can
            support better liver health and function. Ambrosia only contains
            natural components, so you can be sure you're taking a supplement
            that won't harm your health and is both safe and effective.
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
          <div className="flex xs:block">
            <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
              <div>
                <div className="w-full xs:pl-[6%]">
                  <a href="/" className="px-[3%] xs:w-full ">
                    <img
                      src="	https:www.solgar.com/wp-content/uploads/product_photos/SO_358720/SO_358720_F-300x300.png"
                      alt=""
                    />
                  </a>
                </div>
                <p className="text-sm ">STRESS SUPPORT</p>
                <h5 className="text-xs ">AND 1 MORE</h5>
                <p className="text-base ">Magnesium Citrate Tablets</p>
                <p className="">
                  <img src="star-img.png" alt="" />
                  (11)
                </p>
              </div>
            </div>
            <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
              <div>
                <div className="w-full xs:pl-[6%]">
                  <a href="/" className="px-[3%]">
                    <img
                      src="	https:www.solgar.com/wp-content/uploads/product_photos/SO_011519/SO_011519_F-300x300.png"
                      alt=""
                    />
                  </a>
                </div>
                <p className="text-sm ">HEART HEALTH</p>
                <h5 className="text-xs ">AND 1 MORE</h5>
                <p className="text-base ">
                  Triple Strength Omega-3 950 mg Softgels
                </p>
                <p className="">
                  <img src="star-img.png" alt="" />
                  (6)
                </p>
              </div>
            </div>
            <div className="w-[33%] xs:w-[80%] xs:m-auto text-center px-[4%]">
              <div>
                <div className="w-full xs:pl-[6%]">
                  <a href="/" className="px-[3%]">
                    <img
                      src="		https:www.solgar.com/wp-content/uploads/product_photos/SO_012493/SO_012493_F-300x300.png"
                      alt=""
                    />
                  </a>
                </div>
                <p className="text-sm ">IMMUNE SUPPORT</p>
                <h5 className="text-xs ">AND 2 MORE</h5>
                <p className="text-base ">
                  Vitamin D3 (Cholecalciferol)250 MCG (10,000 IU) Softgels
                </p>
                <p className="">
                  <img src="star-img.png" alt="" />
                  (0)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
