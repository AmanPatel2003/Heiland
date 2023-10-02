import React from "react";
// import "./PageEight.css";

export default function PageEight() {
  return (
    <>
      <div className="px-[10%] lg:px-[3%] md:px-[0%] sm:px-[0%] xs:px-[0%] pt-[10%] pb-[20%] sm:pb-[10%] bg-[#f3ffed] mt-[73px] ">
        <div className="flex sm:block xs:block  sm:px-[3%] xs:px-[3%] sm:mt-[5%] xs:mt-[1%]">
          <div className="w-[50%] sm:w-full xs:w-full pt-[3%] pl-[9%] sm:mb-[8%] xs:mb-[8%]">
            <h3 className="font-bold text-3xl pb-[7%]">
              {/* CONTACT US  */}
              Contact Us
            </h3>
            <p className="text-[15px] font-semibold">
              500 Willow Tree Road <br />
              Leonia, NJ 0705 <br />
              United States <br />
              Phone: + 1201-944-2311
              <br />
              Phone: + 1 877-765-4274 <br />
              Fax: +1 201-944-7351
            </p>
            <h5 className="font-bold my-[3%]">international inquires</h5>
            <a href="/" className="text-green-700 font-bold">
              international@solgar.com
            </a>
          </div>
          <div className=" w-[50%]  sm:w-full xs:w-full p-[3%] bg-[#79b9bb] mx-[7%] sm:mx-[0%] xs:mx-[0%]">
            <div className="text-white">
              <h3 className="font-bold text-xl">
                {/* SEND A MESSAGE */}
                Send a Message
              </h3>
              <p>
                At Solgar,we respect your privacy . Unless you instruct us
                otherwise, we'll use the information you provide below only to
                respond to your inquiry. To learn more about how we use and
                store the information we collect from you, please read our
              </p>
              <a href="/privacy" className="text-[#88d888] underline">
                Privacy Policy
              </a>
            </div>
            <div className="px-[5%]">
              <form action="POST" data-netlify="true">
                {/* <label htmlFor="" className="text-white font-semibold">
                  What Best Describes Your Question?*
                </label>
                <br />
                <button className="w-full text-left mb-[8%]  bg-white text-black font-medium pl-[2%] py-[1%] ">
                
                  Select a Category
                  <select name="" className="h-full border-none">
                      <option value="" />
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                    </select>
                </button> */}
                <br />
                <label htmlFor="" className="text-white font-semibold  mt-[3%]">
                  First Name*
                </label>
                <br />
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="w-full h-[35px] font-medium pl-[5%] mb-[8%]"
                />
                <br />
                <label htmlFor="" className="text-white font-semibold mt-[3%]">
                  Email Address
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-[35px] font-medium pl-[5%] mb-[8%]"
                />
                <br />
                <label htmlFor="" className="text-white font-semibold mt-[3%]">
                  Phone
                </label>
                <br />
                <input
                  name="number"
                  id="number"
                  type="number"
                  className="w-full h-[35px] font-medium pl-[5%] mb-[8%]"
                />
                <br />
                <label htmlFor="" className="text-white font-semibold mt-[3%]">
                  message
                </label>
                <br />
                <br />
                <textarea
                  className="w-full mb-[8%]"
                  name="message"
                  id="message"
                  placeholder="Message"
                  cols={30}
                  rows={5}
                  defaultValue={""}
                />
                <br />
                <input className="w-[90%] h-[40px] mb-[8%] rounded mt-[4%] mx-[5%] bg-green-900 font-bold text-white">
                  SEND MESSAGE
                </input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
