import React from "react";
import "./PageEight.css";

export default function PageEight() {
  return (
    <>
      <>
        <main>
          <div className="cont-main-div">
            <div className="cont-main-div1">
              <div
                className="cont-main-div2"
                style={{ margin: "20px 0px 0px 20px" }}
              >
                <h3 className="p8-h3">CONTACT US</h3>
                <p className="p8-p1">
                  500 Willow Tree Road <br />
                  Leonia, NJ 0705 <br />
                  United States <br />
                  Phone: + 1201-944-2311
                  <br />
                  Phone: + 1 877-765-4274 <br />
                  Fax: +1 201-944-7351
                </p>
                <h5>international inquires</h5>
                <a href="">international@solgar.com</a>
              </div>
              <div
                className="cont-main-div2"
                style={{ backgroundColor: "cadetblue" }}
              >
                <div className="cont-main-form1">
                  <h3>SEND A MESSAGE</h3>
                  <p>
                    At Solgar,we respect your privacy . Unless you instruct us
                    otherwise, we'll use the information you provide below only
                    to respond to your inquiry. To learn more about how we use
                    and store the information we collect from you, please read
                    our
                  </p>
                  <a href="" style={{ color: "darkseagreen" }}>
                    Privacy Policy
                  </a>
                </div>
                <div className="cont-main-form2">
                  <form action="">
                    <label htmlFor="">
                      What Best Describes Your Question?*
                    </label>
                    <br />
                    <button id="select-btn">
                      <span>SELECT A CATEGORY</span>
                      {/* <input type="text" name="" id="" /> */}
                      <select name="" id="select">
                        <option value="" />
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                        <option value="">1</option>
                      </select>
                    </button>
                    <br />
                    <label htmlFor="">First Name*</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label htmlFor="">Email Address</label>
                    <br />
                    <input type="email" name="" id="" />
                    <br />
                    <label htmlFor="">Phone</label>
                    <br />
                    <input type="number" />
                    <br />
                    <label htmlFor="">message</label>
                    <br />
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={10}
                      defaultValue={""}
                    />
                    <br />
                    <button className="secd-buttion">SEND MESSAGE</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer />
      </>
    </>
  );
}
