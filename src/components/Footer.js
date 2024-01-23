import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" h-full w-full text-lg bg-[#144947] ">
        <div className="w-full ">
          <div className="h-full w-full flex  md:block sm:block xs:block justify-between pt-[70px] pb-[50px] px-[15%] lg:px-[6%] md:px-[15%] sm:px-[15%] xs:px-[10%] xl:px-[15%] ">
            <div className="h-full w-full flex xl:justify-around">
              <ul className="flex sm:w-full xs:w-full  sm:block xs:block ">
                <div className="flex justify-around xs:w-full">
                  <li
                    className="w-[170px] lg:w-[150px] md:w-[35%
                     sm:w-[40%] xs:w-[40%]"
                  >
                    <a
                      href="/"
                      className="text-[14px] text-[#e4d00a] font-semibold mb-[15%]"
                    >
                      PRODUCTS
                    </a>
                    <ul className="mt-[15px]">
                      <li>
                        <a href="/ambrosia" className="text-white text-[14px]">
                          Ambrosia
                        </a>
                      </li>
                      <li>
                        <a
                          href="/ashwagandha"
                          className="text-white text-[14px]"
                        >
                          Ashwagandha
                        </a>
                      </li>
                      <li>
                        <a href="/satavari" className="text-white text-[14px]">
                          Shatavari
                        </a>
                      </li>
                      <li>
                        <a href="/chamomile" className="text-white text-[14px]">
                          Chamomile Tea
                        </a>
                      </li>
                      <li>
                        <a href="/tea" className="text-white text-[14px]">
                          Ginger Tea
                        </a>
                      </li>
                      <li>
                        <a href="/hibiscus" className="text-white text-[14px]">
                          Hibiscus Tea
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="w-[170px] lg:w-[150px] md:w-[35% sm:w-[40%] xs:w-[40%]">
                    <a
                      href="/"
                      className="text-[14px] text-[#e4d00a] font-semibold mb-[8%]"
                    >
                      PRODUCTS
                    </a>
                    <ul className="mt-[15px]">
                      <li>
                        <a
                          href="/peppermint"
                          className="text-white text-[14px]"
                        >
                          Peppermint Tea
                        </a>
                      </li>
                      <li>
                        <a href="/rose" className="text-white text-[14px]">
                          Rose Tea
                        </a>
                      </li>
                      <li>
                        <a href="/clayglow" className="text-white text-[14px]">
                          Clayglow
                        </a>
                      </li>
                      <li>
                        <a href="/golden" className="text-white text-[14px]">
                          Golden Zest
                        </a>
                      </li>
                      <li>
                        <a
                          href="/scarletglow"
                          className="text-white text-[14px]"
                        >
                          ScarletGlow
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
                <div className="flex xs:justify-around sm:justify-around  xs:pt-[5%] sm:pt-[5%]">
                  <li className="w-[170px] lg:w-[150px]  sm:w-[40%] xs:w-[40%] ">
                    <a
                      href="/"
                      className="text-[14px] text-[#e4d00a] font-semibold -[8%]"
                    >
                      HEILAND
                    </a>
                    <ul className="mt-[15px]">
                      {/* <li>
                        <a href="/" className="text-white text-[14px]">
                          Company
                        </a>
                      </li> */}
                      <li>
                        <a href="/contact" className="text-white text-[14px]">
                          Contact
                        </a>
                      </li>
                      {/* <li>
                        <a href="/" className="text-white text-[14px]">
                          Products
                        </a>
                      </li> */}
                      <li>
                        <a href="/blog1" className="text-white text-[14px]">
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a
                          href="/whereToBuy"
                          className="text-white text-[14px]"
                        >
                          Where To Buy
                        </a>
                      </li>
                      <li>
                        <a href="/privacy" className="text-white text-[14px]">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="/terms&condition"
                          className="text-white text-[14px]"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className=" w-[170px] lg:w-[150px] md:w-[35% sm:w-[40%] xs:w-[40%]">
                    <a
                      href="/"
                      className="text-[14px] text-[#e4d00a] font-semibold "
                    >
                      FOLLOW US
                    </a>
                    <ul className="mt-[15px]">
                      <li>
                        <a
                          className="text-white text-[14px]"
                          // target="_blank"
                          rel="noopener"
                          href="https://www.facebook.com/profile.php?id=61551046019227&mibextid=opq0tG"
                        >
                          <i className="fa-brands fa-facebook" /> Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white text-[14px]"
                          // target="_blank"
                          rel="noopener"
                          href="https://www.instagram.com/heilandcares?igsh=MTByaDM5bGlleWdteA%3D%3D&utm_source=qr "
                        >
                          <i className="fab fa-instagram" /> Instagram
                        </a>
                      </li>
                      {/* <li>
                        <a
                          className="text-white text-[14px]"
                          // target="_blank"
                          rel="noopener"
                          href="/"
                        >
                          <i className="fab fa-youtube" /> YouTube
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white text-[14px]"
                          // target="_blank"
                          rel="noopener"
                          href="/"
                        >
                          <i className="fab fa-tiktok" /> TikTok
                        </a>
                      </li> */}
                    </ul>
                  </li>
                </div>
              </ul>
            </div>

            <div className="flex justify-around md:pt-[10%] xs:pt-[5%] sm:pt-[5%] xl:pt-[1%]">
              <div className=" w-[35%] md:w-[90%] xs:w-[90%] sm:w-[90%] lg:w-[85%] xl:w-[90%] xl:pl-[3%] h-full ">
                <h6 className="text-[#e4d00a] mb-[6%] xl:mb-[3%] xs:mb-[4%] sm:mb-[4%] text-[16px] ">
                  JOIN OUR COMMUNITY
                </h6>
                <p className="text-[#387576] text-[13px] mb-[3%]">
                  Enter your email to join the heiland community and redeive
                  updates new and exciting things are happening with Heiland!
                </p>
                <input
                  type="email"
                  className="w-full  h-[30px] px-[13px] py-[8px] mb-[3%] hover:bg-[#144947"
                  placeholder="YOUR EMAIL"
                />
                <br />
                <div className="">
                  <button
                    type="submit"
                    className="w-full bg-[#e4d00a] text-white hover:bg-[#6b673c] "
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-white" />

          <div className="py-[2%] xs:py-[8%]   text-[14px] pr-[35%] px-[15%] md:px-[15%] lg:px-[6%] xl:px-[15%] sm:px-[15%] xs:px-[10%]">
            <div className="pr-[20%]  md:px-[5%] xs:px-[3%] sm:px-[3%]">
              <p className="text-[#4c8182] leading-5 mb-[1%]">
                †* These statements have not been evaluated by the Food and Drug
                Administration. These products are not intended to diagnose,
                treat, cure or prevent any disease.
              </p>
              {/* <p className="text-[#4c8182] text-[14px]">© 2023 Solgar Inc.</p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
