import React from "react";
import { Subscribe } from "../../components/Subscribe";
import { BiCalendar } from "react-icons/bi";

const Blog5 = () => {
  return (
    <div className="py-[10%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%] px-[27%] lg:px-[20%] md:px-[10%] sm:px-[10%] xs:px-[10%] bg-[#f3ffed] mt-[73px]">
      <h1 className="text-2xl font-bold  ">
        Tummy Troubles? Try These 5 Foods for Bloating Relief
      </h1>
      <p className="flex py-[2%]">
        <BiCalendar size={20} className="mr-1" /> JULY 11, 2023
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
        <p className="py-[1%] font-semibold mb-[2%] ">
          In addition to gas, cramps, and a full feeling, a bloated stomach can
          be unpleasant and even painful. Bloating can have a variety of causes,
          including food intolerances, overeating, and digestive problems, but
          adding specific items to your diet can help reduce the discomfort.
          This post will discuss five foods that can aid in promoting digestive
          health and relieving bloating in the stomach.
        </p>
        <h1 className="text-xl font-bold">Ginger</h1>
        <p className="py-[1%] font-semibold mb-[2%] ">
          For ages, ginger has been utilised as a home cure for a variety of
          digestive problems, such as indigestion and bloating. It has a
          bioactive ingredient called gingerol, which has anti-inflammatory and
          anti-spasmodic qualities. By helping to relax the muscles in your
          digestive system, gingerol can lessen gas and bloating.
        </p>
        <p className="py-[1%] font-semibold mb-[2%] ">
          Ginger can be consumed in a variety of ways, including ground or fresh
          ginger added to meals, fresh ginger tea, and supplements. Not only
          does ginger aid reduce bloating, but it also gives your food a
          delicious flavour.
        </p>
      </div>
      <div className=" ">
        <h1 className="text-xl font-bold">Mint pepper</h1>

        <p className="py-[3%] font-semibold mb-[2%]">
          Another great option for calming an enlarged stomach is peppermint. It
          contains menthol, which can assist relieve gastrointestinal discomfort
          due to its ability to relax muscles. Since peppermint tea helps ease
          gastrointestinal tract tension and minimise gas, it is a well-liked
          treatment for bloating.
        </p>

        <p className="py-[3%] font-semibold mb-[2%]">
          Peppermint oil capsules are available over-the-counter and can be a
          useful technique to treat the symptoms of bloating if you prefer a
          different mode of ingestion. If you suffer from acid reflux, use
          peppermint with caution as some people may find their condition
          worsened by it.
        </p>
        <h1 className="text-xl font-bold">Greek yoghurt</h1>
        <p className="py-[3%] font-semibold mb-[2%] ">
          Yogurt and other meals high in probiotics can do wonders for your
          digestive system. Live bacterial cultures included in yogurt have the
          potential to regulate the gut microbiome, enhancing digestion overall
          and lowering bloating. When choosing yogurt, look for the label that
          states "live and active cultures" to make sure you're getting the
          probiotic advantages.
        </p>
        <p className="py-[3%] font-semibold mb-[2%] ">
          Particularly Greek yogurt is a great option because it's higher in
          protein and has less lactose than regular yoghurt, which some
          individuals find easier to stomach. For more taste and nutrients, add
          some fresh fruit or a honey drizzle.
        </p>
        <h1 className="text-xl font-bold">Fenestration</h1>
        <p className="py-[3%] font-semibold mb-[2%] ">
          For ages, people have used fennel, a versatile vegetable with a subtle
          licorice flavour, to ease digestive pain, including gas and bloating.
          It has ingredients including anethole, which can ease the
          gastrointestinal tract's muscles and facilitate more easily digested
          food.
        </p>
        <p className="py-[3%] font-semibold mb-[2%] ">
          Fennel can be enjoyed raw or roasted as a side dish, steeped as a
          fennel tea, or added to salads. Fennel seeds are also available and
          can be brewed into a calming tea or chewed to help relieve bloating.
        </p>
      </div>
      <div className=" flex sm:block xs:block pb-[5%]">
        <div className="w-[54%] sm:w-[100%] xs:w-[100%] ">
          {/* <h2 className="font-bold text-xl">SUMMING IT UP</h2> */}

          <p className="py-[3%] font-semibold ">
            <a className="underline text-green-600" href="/">
              Follow us on Inatagram{""}
            </a>
            {"  "}
            for quick and easy vitamin tips!
          </p>

          <p className="py-[3%] font-semibold ">
            Here are some major benefits of ambrosia
          </p>
          <h1 className="text-xl font-bold">banana</h1>

          <p className="py-[3%] xs:pb-[8%] font-semibold ">
            A fruit that is widely available and simple to digest, bananas can
            aid in the fight against bloating. They include a lot of potassium,
            which can help control the sodium balance in your body and lessen
            bloating and water retention. Dietary fibre, which is also present
            in bananas, helps support regular bowel motions and ward against
            constipation, which is another common cause of bloating.
          </p>
          <p className="py-[3%] xs:pb-[8%] font-semibold ">
            If you're looking for a natural solution to relieve bloating in your
            stomach, try slicing bananas over your muesli or cereal in the
            morning or adding them to smoothies.
          </p>
          <h1 className="text-xl font-bold">In summary</h1>
          <p className="py-[3%] xs:pb-[8%] font-semibold ">
            Although having a bloated stomach might be uncomfortable, you can
            lessen your discomfort by following a sensible nutrition plan.
            Yoghurt, fennel, ginger, peppermint, and bananas can help you feel
            more comfortable after eating, support healthy digestion, and lessen
            bloating. To rule out any underlying medical concerns, it's crucial
            to see a healthcare provider if bloating continues or gets worse.
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
                <p className="text-sm font-semibold">STRESS SUPPORT</p>
                <h5 className="text-xs font-semibold">AND 1 MORE</h5>
                <p className="text-base font-semibold">
                  Magnesium Citrate Tablets
                </p>
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
                <p className="text-sm font-semibold">HEART HEALTH</p>
                <h5 className="text-xs font-semibold">AND 1 MORE</h5>
                <p className="text-base font-semibold">
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
                <p className="text-sm font-semibold">IMMUNE SUPPORT</p>
                <h5 className="text-xs font-semibold">AND 2 MORE</h5>
                <p className="text-base font-semibold">
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

export default Blog5;
