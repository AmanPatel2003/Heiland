import React from "react";
import Form from "../components/Form";
// import "./PageEight.css";

export default function PageEight() {
  return (
    <>
      <div className="px-[10%] lg:px-[3%] md:px-[0%] sm:px-[0%] xs:px-[0%] pt-[10%] pb-[20%] sm:pb-[10%] bg-[#fcfce4] mt-[73px] ">
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
              info@heiland.shop
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
            <div className="px-[5%] xs:px-[1%]">
             <Form/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
