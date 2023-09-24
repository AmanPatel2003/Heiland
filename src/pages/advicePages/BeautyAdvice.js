import React from 'react'
import img from "./images/adviceBeauty.jpg";

export const BeautyAdvice = () => {
  return (
    <div className="w-full bg-[#fcfce4] mt-[5%] xl:mt-[5%] lg:mt-[6%] md:mt-[7%] sm:mt-[10%] xs:mt-[11%]">
      <div className="text-5xl font-semibold text-center py-[3%] xs:py-[9%] border-b-4 border-[#097969]">
        Herbal Beauty Cate
      </div>
      <div className="flex py-[5%] md:block sm:block xs:block md:px-[10%] sm:px-[10%] xs:px-[10%] ">
        <div className="w-[50%] md:w-full sm:w-full xs:w-full   px-[5%] lg:px-[3%] md:px-[2%] py-[3%]">
          <img src={img} alt="" className="w-full " />
        </div>
        <div className="w-[50%] items-center flex md:w-full sm:w-full xs:w-full px-[5%] lg:px-[3%] md:px-[5%] sm:px-[9%] xs:px-[10%] py-[3%] ">
          <ul className="list-disc">
            <p className="font-semibold xs:text-sm mb-[3%]">
              Certainly, when preparing face and body masks , it's essential to
              consider different dilutions for various skin types to ensure the
              best results:
            </p>
            <li className="my-[2%]">
              1. Normal Skin: For normal skin, you can mix Mask powder with
              plain water or rosewater. This combination can help rejuvenate and
              refresh the skin.
            </li>
            <li className="my-[2%]">
              2. Oily Skin: To control excess oil and reduce acne, blend Mask
              powder with yogurt or lemon juice. The acidity in lemon juice can
              help balance oil production.
            </li>
            <li className="my-[2%]">
              3. Dry Skin: For dry skin, combine Mask powder with honey or milk.
              Honey provides moisture, while milk adds a creamy texture and
              hydration.
            </li>
            <li className="my-[2%]">
              4. Sensitive Skin: Sensitive skin benefits from a mixture of Mask
              powder and aloe vera gel. Aloe vera soothes and calms irritation.
            </li>
            <li className="my-[2%]">
              5. Combination Skin: If you have combination skin, Mask powder
              with yogurt. This combination can address both oily and dry areas
              on the face.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
