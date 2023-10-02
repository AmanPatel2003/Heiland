import React from 'react'

export const Tea = () => {
  return (
    <>
      <div className="bg-[#f3ffed] px-[20%]  md:px-[10%] sm:px-[5%] xs:px-[5%] py-[5%] md:py-[8%] xs:py-[18%] mt-[73px] ">
        <div className="flex h-full">
          {/* <div className="w-[30%] xs:hidde sm:hidde md:hidde xs:w-[40%] pt-[8%]">
            <ul className="">
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="general-health"
                  name="health_interest_select"
                  id={15}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={15}>
                  General Health
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="bone-joint-support"
                  name="health_interest_select"
                  id={9}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={9}>
                  Bone &amp; Joint Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="immune-support"
                  name="health_interest_select"
                  id={8}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={8}>
                  Immune Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="sleep-support"
                  name="health_interest_select"
                  id={10}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={10}>
                  Sleep Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="stress-support"
                  name="health_interest_select"
                  id={11}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={11}>
                  Stress Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="energy-support"
                  name="health_interest_select"
                  id={6}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={6}>
                  Energy Support
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="beauty"
                  name="health_interest_select"
                  id={5}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={5}>
                  Beauty
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="fitness-nutrition"
                  name="health_interest_select"
                  id={7}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={7}>
                  Fitness &amp; Nutrition
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="heart-health"
                  name="health_interest_select"
                  id={18}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={18}>
                  Heart Health
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="digestive-health"
                  name="health_interest_select"
                  id={12}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%] font-semibold" htmlFor={12}>
                  Digestive Health
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="brain-health"
                  name="health_interest_select"
                  id={13}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={13}>
                  Brain Health
                </label>
              </li>
              <li className="mb-[4%]">
                <input
                  type="checkbox"
                  defaultValue="eye-health"
                  name="health_interest_select"
                  id={14}
                  className="w-[16px] h-[16px]"
                />
                <label className="ml-[4%]  font-semibold" htmlFor={14}>
                  Eye Health
                </label>
              </li>
            </ul>
          </div> */}
          {/* <div className=" h-full w-[70%] xs:w-[60%]  pt-[8%] xs-px-[3%] sm:px-[4%] md:px-[5%]"> */}
          <div className=" h-full w-full  pt-[8%] xs-px-[3%] sm:px-[4%] md:px-[5%]">
            <div>
              <h2 className="text-5xl font-bold  xs:text-4xl xs:pl-[6%] pl-[10%] pb-[5%] ">
                Herbal tea's
              </h2>
            </div>
            <section className="h-full bg-[#f3ffed]   ">
              <div className="flex justify-between xs:block pt-[4%] pb-[40px]">
                <div className="flex flex-wrap justify-cente lg:flex-wrap w-full xs:w-full xs:mt-[8%]">
                  <div className="w-[33%] xs:w-[50%] sm:w-[50%] md:w-[50%] ">
                    <a href="/chamomile">
                      <img
                        src="	https://www.solgar.com/wp-content/uploads/product_photos/SO_358720/SO_358720_F-300x300.png"
                        alt=""
                      />
                    <p className="text-center text-2xl font-semibold mt-[10px]">
                      Chamomile Tea
                    </p>
                    </a>
                  </div>

                  <div className="w-[33%]  xs:w-[50%] sm:w-[50%] md:w-[50%]">
                    <a href="/ginger">
                      <img
                        src="	https://www.solgar.com/wp-content/uploads/product_photos/SO_011519/SO_011519_F-300x300.png"
                        alt=""
                      />
                    <p className="text-center text-2xl font-semibold mt-[10px]">
                      Ginger Tea
                    </p>
                    </a>
                  </div>
                  {/* </div> */}

                  {/* <div className="flex w-[50%] xs:w-full xs:mt-[8%]"> */}
                  <div className="w-[33%]  xs:w-[50%] sm:w-[50%] md:w-[50%] xs:mt-[10%] sm:mt-[10%] md:mt-[10%]">
                    <a href="/hibiscus">
                      <img
                        src="		https://www.solgar.com/wp-content/uploads/product_photos/SO_012493/SO_012493_F-300x300.png"
                        alt=""
                      />
                    <p className="text-center text-2xl font-semibold mt-[10px]">
                      Hibiscus Tea
                    </p>
                    </a>
                  </div>
                  <div className="w-[33%]  xs:w-[50%] sm:w-[50%] md:w-[50%] mt-[10%]">
                    <a href="/peppermint">
                      <img
                        src="		https://www.solgar.com/wp-content/uploads/product_photos/SO_012493/SO_012493_F-300x300.png"
                        alt=""
                      />
                    <p className="text-center text-2xl font-semibold mt-[10px]">
                      Peppermint Tea
                    </p>
                    </a>
                  </div>
                  <div className="w-[33%]  xs:w-[50%] sm:w-[50%] md:w-[50%]  mt-[10%]">
                    <a href="/rose">
                      <img
                        src="		https://www.solgar.com/wp-content/uploads/product_photos/SO_012493/SO_012493_F-300x300.png"
                        alt=""
                      />
                    <p className="text-center text-2xl font-semibold mt-[10px]">
                      Rose Tea
                    </p>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
