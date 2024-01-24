import React from 'react'
import { Helmet } from "react-helmet-async";
import img from "../../img/Heiland/3Skin Products/1MultiSetup/A1M.jpg";

export const BeautyAdvice = () => {
  return (
    <>
      <Helmet>
        <title>My Page Title</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="w-full bg-[#fcfce4] mt-[73px] ">
        <div className="text-5xl xs:text-4xl font-semibold text-center py-[4%]   border-b-4 border-[#097969]">
          Herbal Beauty Care
        </div>
        <div className="flex py-[5%] md:block sm:block xs:block md:px-[10%] sm:px-[10%] xs:px-[10%] ">
          <div className="w-[50%] md:w-full sm:w-full xs:w-full   px-[5%] lg:px-[3%] md:px-[2%] py-[3%]">
            <img src={img} alt="" className="w-full " />
          </div>
          <div className="w-[50%] items-center  xl:text-lg 2xl:text-lg flex md:w-full sm:w-full xs:w-full px-[5%] lg:px-[3%] md:px-[5%] sm:px-[9%] xs:px-[10%] py-[3%] ">
            <ul className="list-disc">
              <p className="font-semibold xs:text-sm mb-[3%]">
                Certainly, when preparing face and body masks , it's essential
                to consider different dilutions for various skin types to ensure
                the best results:
              </p>
              <li className="my-[2%]">
                Normal Skin: For normal skin, you can mix Mask powder with plain
                water or rosewater. This combination can help rejuvenate and
                refresh the skin.
              </li>
              <li className="my-[2%]">
                Oily Skin: To control excess oil and reduce acne, blend Mask
                powder with yogurt or lemon juice. The acidity in lemon juice
                can help balance oil production.
              </li>
              <li className="my-[2%]">
                Dry Skin: For dry skin, combine Mask powder with honey or milk.
                Honey provides moisture, while milk adds a creamy texture and
                hydration.
              </li>
              <li className="my-[2%]">
                Sensitive Skin: Sensitive skin benefits from a mixture of Mask
                powder and aloe vera gel. Aloe vera soothes and calms
                irritation.
              </li>
              <li className="my-[2%]">
                Combination Skin: If you have combination skin, Mask powder with
                yogurt. This combination can address both oily and dry areas on
                the face.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
