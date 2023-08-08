import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <footer id="footer">
        <div id="mainfooter">
          <div id="mainfoot1">
            <div className="footer1">
              <ul id="mainul1">
                <li className="li-first">
                  <a>PRODUCTS</a>
                  <ul className="footer-ul">
                    <li>
                      <a href="#">General Health</a>
                    </li>
                    <li>
                      <a href="#">Bone &amp; Joint Support</a>
                    </li>
                    <li>
                      <a href="#">Immune Support</a>
                    </li>
                    <li>
                      <a href="#">Sleep Support</a>
                    </li>
                    <li>
                      <a href="#">Stress Support</a>
                    </li>
                    <li>
                      <a href="#">Energy Support</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">PRODUCTS</a>
                  <ul className="footer-ul">
                    <li>
                      <a href="#">General Health</a>
                    </li>
                    <li>
                      <a href="#">Bone &amp; Joint Support</a>
                    </li>
                    <li>
                      <a href="#">Immune Support</a>
                    </li>
                    <li>
                      <a href="#">Sleep Support</a>
                    </li>
                    <li>
                      <a href="#">Stress Support</a>
                    </li>
                    <li>
                      <a href="#">Energy Support</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">SOLOGAR</a>
                  <ul className="footer-ul">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">Articles</a>
                    </li>
                    <li>
                      <a href="#">Where To Buy</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">FOLLOW US</a>
                  <ul className="footer-ul">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.facebook.com/Solgar/"
                      >
                        <i className="fa-brands fa-facebook" /> Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.instagram.com/solgar/"
                      >
                        <i className="fab fa-instagram" /> Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.youtube.com/channel/UCf1YYsT_ItQi07zGv_4IRZQ"
                      >
                        <i className="fab fa-youtube" /> YouTube
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.tiktok.com/@solgarvitamins"
                      >
                        <i className="fab fa-tiktok" /> TikTok
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <hr />
            <div className="footer2">
              <h6 className="foot_heading">JOIN OUR COMMUNITY</h6>
              <p className="para3">
                Enter your email to join the solger community and redeive
                updates whenever new and exciting things are happening with
                Solgar!
              </p>
              <input type="email" className="input" placeholder="YOUR EMAIL" />
              <br />
              <div className="button">
                <button type="submit" className="btn4">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <hr className="footer-hr" />
          <div id="mainfooter2">
            <div className="mainfooter2-first">
              <div className="mainfooter2-second">
                <div className="mainfooter2-second-first">
                  <p className="para1">
                    †* These statements have not been evaluated by the Food and
                    Drug Administration. These products are not intended to
                    diagnose, treat, cure or prevent any disease.
                  </p>
                  <p className="para2">© 2023 NAMAN Inc.</p>
                </div>
                <div className="mainfooter2-second-second" />
              </div>
            </div>
            <div className="mainfooter2-second" />
          </div>
        </div>
      </footer>
    </>
  );
}
