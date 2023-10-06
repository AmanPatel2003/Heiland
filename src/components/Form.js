import React from 'react'

const Form = () => {
  return (
    <div>
      {" "}
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
    <div className="">
        <div data-netlify-recaptcha="true"></div>
    </div>

        <input
          type="submit"
          value="Send Message"
          className="w-[90%] h-[40px] mb-[8%] rounded mt-[4%] mx-[5%] bg-green-900 font-bold text-white"
        />
      </form>
    </div>
  );
}

export default Form