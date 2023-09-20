import React from "react";
import { Subscribe } from "../components/Subscribe";
import { BiCalendar } from "react-icons/bi";

export default function PageThree() {
  return (
    <div className="py-[10%] xs:pt-[25%] sm:pt-[20%] md:pt-[15%] px-[27%] lg:px-[20%] md:px-[10%] sm:px-[10%] xs:px-[10%] bg-[#f3ffed] mt-[5%] xl:mt-[5%] lg:mt-[6%] md:mt-[7%] sm:mt-[10%] xs:mt-[11%]">
      <h1 className="text-2xl font-bold  ">
        VITAMINS YOU NEED IN YOUR 20S $ 30S
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
      {/* <div className="pr-[35%] py-[3%]">
        <p className="py-[2%] font-semibold ">
          Your 20s and 30s are a pivoatal time both in life and for your body.
          As you age, you change- and so do your nutritional needs. But choosing
          the right supplements often feels overwhelming. Let's take a look at
          some important nutrients you need in your 20s and 30s
        </p>

        <p className="py-[2%] font-semibold ">
          <strong>NOTE</strong>: Many of the following vitamins and supplements
          are important for everyone at every age. Your healthcare practitioner
          can help to give you a more personalized pecommendation for which
          supplements you should be taking.{" "}
        </p>
      </div> */}
      <div className="pb-[1%]">
        <h1 className="text-xl font-bold my-[3%]">
          VITAMINS YOU SHOULD TAKE IN YOUR 20S &amp; 30S
        </h1>
        <h3 className="text-base font-bold mb-[2%]">1. VITAMIN D</h3>
        <p className="py-[1%] font-semibold mb-[2%] ">
          Vitamin D is often called the "sunshine vitamin" because your body
          absorbs most of its vitamin D through sunshine.That means that if you
          spend most of your days inside. live in a cooler climate, or even wear
          sunscreen everyday (which you should!) you may not get adequate
          vitamin D.
        </p>
        <p className="py-[1%] font-semibold mb-[2%] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          nemo dolore animi pariatur est dicta dolorum eius inventore asperiores
          iste expedita velit ducimus commodi, earum optio reiciendis nostrum at
          obcaecati ullam eveniet quia neque eaque.
        </p>
        <p className="py-[1%] font-semibold mb-[2%] ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
          provident! Fugit natus excepturi commodi, tempore recusandae, maiores
          libero sed vitae soluta voluptas quisquam architecto porro.
        </p>
      </div>
      <div className=" pr-[35%]">
        <h4 className="font-bold py-[2%] mb-[2%]">
          BEST VITAMIN D SUPPLEMENTS
        </h4>

        <a
          href="/"
          className="underline font-bold text-base text-green-600 mb-[2%] "
        >
          Solgar* Vitamin D3 (Cholecalciferol) 250 mcg (10,00 IU) Softgels
        </a>

        <p className="py-[3%] font-semibold mb-[2%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, unde
          inventore? Nesciunt minus nihil facilis fugiat inventore ad dolorem
          repellat eos tempore vel, et necessitatibus ducimus in harum officia!
          Quaerat.
        </p>

        <a
          href="/"
          className="font-bold text-base underline text-green-600 mb-[2%]"
        >
          Solgar* Vegan Vitamin D3 25 mcg(1000 IU)
        </a>

        <p className="py-[3%] font-semibold mb-[2%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          temporibus nesciunt quo corrupti optio quibusdam adipisci sunt aliquam
          odit magni, dolorum veritatis accusamus ducimus porro? Ad sed, quis
          officia a aspernatur nemo neque, quibusdam temporibus doloremque ab
          quod ipsa tenetur provident laborum, harum illum magni. Quaerat
          consequuntur at nulla reiciendis!
        </p>
      </div>
      <div className=" flex sm:block xs:block pb-[5%]">
        <div className="w-[54%] sm:w-[100%] xs:w-[100%] ">
          <h2 className="font-bold text-xl">SUMMING IT UP</h2>

          <p className="py-[3%] font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe
            et, nam obcaecati excepturi sequi culpa eaque error molestias labore
            minima molestiae!
          </p>

          <p className="py-[3%] font-semibold ">
            <a className="underline text-green-600" href="/">
              Follow us on Tiktok
            </a>
            for quick and easy vitamin tips!
          </p>

          <p className="py-[3%] font-semibold ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            nesciunt, excepturi ratione beatae illo, id alias doloribus sed
            architecto
          </p>

          <p className="py-[3%] xs:pb-[8%] font-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, tempora repellat. Quasi debitis laborum dolore libero
            rerum, maxime id magnam, veniam porro ipsam eligendi, similique
            dolores perspiciatis optio fuga sunt nihil corrupti molestias
            aperiam autem minima beatae. Obcaecati, voluptate esse hic
            repudiandae animi magni vero beatae non cupiditate ullam!
            Accusantium pariatur
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
}
