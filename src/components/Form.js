import React, { useState } from "react";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";
// import AppConfig from "./App.config";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to collect form data
    const formData = new FormData(e.target);

    // You can access the form fields using formData.get('field_name')
    const name = formData.get("name");
    const email = formData.get("email");
    const number = formData.get("number");
    const message = formData.get("message");
    // Create an object to send to your API

    if (name && email && number && message && token) {
      const dataToSend = {
        username: "AKIAVG3KVGIQ5K5C54EV",
        password: "BGI30r7ViaHz5pMhtMjkqw/GDeAD4S3McLoMJltIaaqF",
        server_addr: "email-smtp.eu-north-1.amazonaws.com",
        server_port: "587",
        destination_email: "aman.catex@gmail.com",
        sender_email: "HielandSupport@catax.me",
        subject: `${name} wants to contact with you`,
        body: `
Dear Admin,

This form has been filled:
- Name: ${name}
- Email: ${email}
- Number: ${number}
- Message:
${message}
          
 We appreciate your prompt attention to this matter. If you need any further information, please feel free to reach out.
        `,
      };

      // Send the data to your API using Axios
      try {
        const apiResponse = await axios.post(
          "https://emailsender.catax.me/sendEmail",
          dataToSend
        );

        if (apiResponse.status === 200) {
          console.log("Form data sent successfully");
          // Reset the form fields
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
          setToken("");
          alert("Your information is submited succes full");
        } else {
          console.error("Error sending form data to the API");
          // Handle error response from your API
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle any other errors here
      }
    } else {
      alert("Please fill in all required fields and complete hCaptcha.");
    }
  };

  const [token, setToken] = useState("");

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="" className="text-white font-semibold  mt-[3%]">
          First Name*
        </label>
        <br />
        <input
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-[35px] font-medium pl-[5%] mb-[8%]"
        />
        <br />
        <label htmlFor="" className="text-white font-semibold mt-[3%]">
          Email Address
        </label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={number}
          onChange={(e) => setNumber(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-[8%]"
          name="message"
          id="message"
          placeholder="Message"
          cols={30}
          rows={5}
        />
        <br />
        <div className="text-center  flex w-full ">
          <HCaptcha
            // sitekey={AppConfig.hCaptchaSiteToken}
            sitekey={"6181e7d8-51a3-4fab-bd63-af695604e71f"}
            onVerify={(token) => setToken(token)}
            onExpire={(e) => setToken("")}
          />
        </div>
        <div className="mt-[5%]">
          <button
            type="submit"
            className="w-[90%] h-[40px] mb-[8%]
          rounded mt-[4%] mx-[5%] bg-green-900 font-bold text-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
