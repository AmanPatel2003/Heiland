import React, { useState } from "react";

import { FaAmazon } from "react-icons/fa";

import logo1 from "../logos/logo1.png";
import logo2 from "../logos/logo2.png";
import logo3 from "../logos/logo3.png";
import logo4 from "../logos/logo4.png";
import logo5 from "../logos/logo5.png";

export const Hibiscus = () => {
  const [reviews, setReviews] = useState(false);

  const reviewSet = () => {
    setReviews(!reviews);
  };

   return (
     <div className="">
       <section className="pt-[10%] xs:pt-[25%] sm:pt-[15%] md:pt-[15%] lg:pt-[15%] h-full bg-[#f3ffed bg-[#fcfce4] mt-[73px]">
         <div className="flex xs:block sm:block pb-[10%]">
           <div className="w-[60%] md:w-[55%] lg:w-[55%] sm:w-full xs:w-full px-[10%] lg:px-[5%] md:px-[5%] sm:px-[15%] xs:px-[15%] ">
             <img
               src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/606d2082874849.5d2b473f01d4f.jpg"
               className="h-[80%]"
               alt=""
             />
           </div>
           <div className="w-[40%] md:w-[45%] lg:w-[45%]  sm:w-full xs:w-full   h-full pr-[5%] md:pr-[5%] sm:px-[4%] xs:px-[4%]">
             <h1 className="font-bold sm:font-semibold text-3xl sm:text-[27px]">
               Hibiscus Tea
             </h1>
             <span className=" text-xl">
               ("Sip the Vibrant Elegance of Hibiscus”)
             </span>

             <div className="flex pb-[5%] md:mb-[7%] lg:mb-[7%] h-[130px] md:h-[95px]  sm:justify-center xs:justify-center">
               <div className=" h-[90%] md:h-[85%]  w-[20%] text-center">
                 <img
                   src={logo1}
                   alt=""
                   className="h-full w-[90%  mt-[8%] md:my-[10%] "
                 />
                 <h1 className="text-xs font-bold  text-green-700">
                   CHEMICAL FREE
                 </h1>
               </div>
               <div className="h-full w-[20%] text-center">
                 <img src={logo2} alt="" className="h-full w-full " />
                 <h1 className="text-xs font-bold  text-green-700">
                   GLUTEN-FREE
                 </h1>
               </div>
               <div className="h-full w-[20%] text-center">
                 <img src={logo3} alt="" className="h-full w-full " />
                 <h1 className="text-xs font-bold  text-green-700">
                   GLUTEN-FREE
                 </h1>
               </div>
               <div className="h-full w-[20%] text-center">
                 <img src={logo4} alt="" className="h-full w-full " />
                 <h1 className="text-xs font-bold  text-green-700">VEGAN</h1>
               </div>
               <div className="h-full w-[20%] text-center">
                 <img src={logo5} alt="" className="h-full w-full " />
                 <h1 className="text-xs font-bold  text-green-700">
                   CRUELTY FREE
                 </h1>
               </div>
             </div>

             <h1 className="text-lg font-bold">What does it do for you?</h1>
             <p className="text-sm font-semibold mt-[4%]">
               Supports in delivering a long term solution for all
               <b> Gastrointestinal </b> issues such as:
             </p>
             <ul className="pl-[6%]">
               <li className="list-disc mt-[4%]">Anti-Oxidants powder </li>
               <li className="list-disc mt-[4%]">
                 Regulate Heart health contribute to lower blood pressure and
                 improved cholesterol levels
               </li>
               <li className="list-disc mt-[4%]">
                 potentially reducing the risk of heart disease
               </li>
               <li className="list-disc mt-[4%]">Weight Management</li>
               <li className="list-disc mt-[4%]"> improves digestion</li>
               <li className="list-disc mt-[4%]">
                 Supports Liver and Kidney health
               </li>
               <li className="list-disc mt-[4%]">Supports immune</li>
               <li className="list-disc mt-[4%]"> Menstrual comforts</li>
               <li className="list-disc mt-[4%]">Hydrate skin</li>
             </ul>

             <p className="text-sm font-semibold mt-[4%]">
               Boosting Liver is a mojor advantage of Ambrosia
             </p>

             <div className="">
               <h1 className="text-lg font-bold">How to comsume?</h1>
               <p className="">
                 Use 1 teaspoon (approximately 1.5 grams) of dried tea powder
                 for each 8-ounce (about 240 ml) cup of Hot Water. Cover the
                 teapot or cup with a lid or a saucer to trap the steam and let
                 the hibiscus steep for about 5 minutes. After steeping, strain
                 the tea. our hibiscus tea is ready to drink. Take small sips
                 and savor the soothing flavor. It's best enjoyed warm.
               </p>
             </div>
             <div className="">
               <h1 className="text-lg font-bold mb-[4%]">
                 Net content 250 Grms
               </h1>
             </div>

             <div className=" py-[4%] border-y-2 border-[#097969]">
               <div className="flex justify-between">
                 <div className="w-full">
                   <div className="flex justify-between">
                     <div className="">
                       <h1 className="text-lg font-bold">Customer Reviews</h1>
                       <p className="my-[5%] font-semibold">
                         I Love the Ambrosia
                       </p>
                     </div>
                     <div className="block">
                       {!reviews ? (
                         <button
                           onClick={reviewSet}
                           className="text-right font-semibold block text-[#097969] "
                         >
                           View More
                         </button>
                       ) : null}
                       {reviews ? (
                         <button
                           onClick={reviewSet}
                           className="text-right font-semibold block text-[#097969] "
                         >
                           View less
                         </button>
                       ) : null}
                       <button className="border-2 border-[#097969] rounded w-[100px] px-[4%] py-[5%] my-[15%] font-semibold block ">
                         {" "}
                         Report This
                       </button>
                     </div>
                   </div>
                   <div className=" items-center mb-[5%] mt-[2%]">
                     <p className="">
                       <b>Lily:</b> "Hibiscus tea is a vibrant, tangy delight.
                       Its bright red color is a visual treat, and the tart,
                       fruity flavor is refreshing. It's a great alternative to
                       sugary drinks."
                     </p>
                     {reviews ? (
                       <div className="">
                         <p className="pt-[1%]">
                           <b>William :</b> "I tried hibiscus tea expecting a
                           sweeter taste, but it's quite tart. It's not my
                           personal favorite, but I can see how some might enjoy
                           its unique flavor profile"
                         </p>{" "}
                       </div>
                     ) : null}
                   </div>
                 </div>
               </div>
             </div>

             <div className="flex mt-[4%]">
               <button className="w-[35%] bg-[#097969] text-white text-base py-[2%] sm:py-[1%] ">
                 BUY ONLINE{" "}
               </button>
               <FaAmazon className="text-white text-5xl xs:text-5xl sm:text-5xl bg-[#097969] ml-[1px] px-[3%] xs:px-[2%] sm:px-[2%] py-[2%]  " />
             </div>
           </div>
         </div>
       </section>

       <section
         className="h-full px-[22%] md:px-[3%] sm:px-[3%] xs:px-[3%] py-[8%]   bg-[#d3e8c9]
       "
       >
         <div className="">
           <h1 className="text-2xl font-bold pb-[6%]  text-center ">
             YOU MIGHT ALSO LIKE
           </h1>
           <div className="w-full flex xs:flex-wrap sm:flex-wrap justify-center">
             <div className=" text-center">
               <div className="h-[180px]  mx-[5%]  border-2 bg-white">
                 <img
                   src="https://tse3.mm.bing.net/th?id=OIP.lmXNtfdMUZt2uE74z4gzEAHaEK&pid=Api&P=0&h=180"
                   alt=""
                   className="h-full w-full"
                 />
               </div>
               <a
                 href="/"
                 className="text-xs text-green-500 font-semibold block mt-[2%]"
               >
                 BONE & JOINT SUPPORT
               </a>
               <a
                 href="/"
                 className="text-xs text-green-500 font-medium  underline decoration-dotted"
               >
                 SEE ALL CATEGORIES
               </a>
               <p className="font-medium text-sm  mt-[1%] px-[2%]">
                 Solgar* No.7 Vegetable Capsules
               </p>
             </div>
             <div className=" text-center">
               <div className="h-[180px]  mx-[5%]  border-2 bg-white ">
                 <img
                   src="https://tse3.mm.bing.net/th?id=OIP.lmXNtfdMUZt2uE74z4gzEAHaEK&pid=Api&P=0&h=180"
                   alt=""
                   className="h-full w-full"
                 />
               </div>
               <a
                 href="/"
                 className="text-xs text-green-500 font-semibold block mt-[2%] "
               >
                 BONE & JOINT SUPPORT
               </a>
               <a
                 href="/"
                 className="text-xs text-green-500 font-medium  underline decoration-dotted"
               >
                 SEE ALL CATEGORIES
               </a>
               <p className="font-medium text-sm  mt-[1%] px-[2%]">
                 Solgar* No.7 Vegetable Capsules
               </p>
             </div>
             <div className=" text-center">
               <div className="h-[180px]  mx-[5%]  border-2 bg-white">
                 <img
                   src="https://tse1.mm.bing.net/th?id=OIP.0ZLl5yRJVVvr_xOn_K9QUgHaGn&pid=Api&P=0&h=180"
                   alt=""
                   className="h-full w-full"
                 />
               </div>
               <a
                 href="/"
                 className="text-xs text-green-500 font-semibold block mt-[2%]"
               >
                 BONE & JOINT SUPPORT
               </a>
               <a
                 href="/"
                 className="text-xs text-green-500 font-medium  underline decoration-dotted"
               >
                 SEE ALL CATEGORIES
               </a>
               <p className="font-medium text-sm  mt-[1%] px-[2%]">
                 Solgar* No.7 Vegetable Capsules
               </p>
             </div>
             <div className=" text-center">
               <div className="h-[180px]  mx-[5%]  border-2 bg-white">
                 {" "}
                 <img
                   src="https://tse2.mm.bing.net/th?id=OIP.ImmrkgATgNztf4RXyUBb8wHaFj&pid=Api&P=0&h=180"
                   alt=""
                   className="h-full w-full"
                 />
               </div>
               <a
                 href="/"
                 className="text-xs text-green-500 font-semibold block mt-[2%]"
               >
                 BONE & JOINT SUPPORT
               </a>
               <a
                 href="/"
                 className="text-xs text-green-500 font-medium  underline decoration-dotted"
               >
                 SEE ALL CATEGORIES
               </a>
               <p className="font-medium text-sm mt-[1%] px-[2%]">
                 Solgar* No.7 Vegetable Capsules
               </p>
             </div>
           </div>
         </div>
         <div class="flex"></div>
       </section>
     </div>
   );
};
