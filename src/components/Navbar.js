import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo1 from "../img/logo.png";

export default function Navbar() {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [open, setopen] = useState(false);

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
    setCompanyDropdownOpen(false);
    setLearnDropdownOpen(false);
  };
  const toggleCompanyDropdown = () => {
    setCompanyDropdownOpen(!companyDropdownOpen);
    setProductsDropdownOpen(false);
    setLearnDropdownOpen(false);
  };
  const toggleLearnDropdown = () => {
    setLearnDropdownOpen(!learnDropdownOpen);
    setCompanyDropdownOpen(false);
      setProductsDropdownOpen(false);
  };

  const handeleMenu = () => {
    setopen((prev) => !prev);
    // console.log(open);
  };



  return (
    <div className="w-full  ">
      <div className="fixed  top-0 left-0  bg-[#d3e8c9] border-b-2 border-[#097969]  w-full z-50">
        <div className="h-full flex justify-between w-full ">
          <div className="ml-[2%]  ">
            <a className="flex" href="/">
              <img
                src={logo1}
                alt=""
                className="h-full w-[50px] mt-[12%] xs:mt-[10%]"
              />
              <h1 className="font-semibold text-3xl py-[12%] xs:py-[10%] pl-[4%] ">
                HEILAND
              </h1>
            </a>
          </div>
          <div className="mr-[2%] flex xl:hidden 2xl:hidden ">
            <button
              className="inline-flex items-center justify-centerp-2 text-gray-700 hover:text-gray-500  "
              type="button"
              onClick={handeleMenu}
            >
              {/* <span className="sr-only">Opne main menu</span> */}
              {open === true ? (
                <FaTimes className="text-3xl xs:text-3xl sm:text-4xl" />
              ) : (
                <FaBars className="text-3xl xs:text-3xl sm:text-4xl" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-center w-[35%] lg:hidden md:hidden sm:hidden xs:hidden ">
            <ul className="flex justify-between h-full  w-full mr-[1%]">
              <li className="relative w-full h-full  text-center hover:bg-[#d2e7c7]">
                <button
                  onClick={toggleProductsDropdown}
                  className=" w-full h-full text-black font-bold"
                >
                  PRODUCTS
                </button>
              </li>
              {/* Repeat this pattern for Company and Learn dropdowns */}
            </ul>
            {productsDropdownOpen && (
              <ul className="absolute bg-[#d2e7c7] top-full py-[4%]  left-0   w-full flex px-[30%] justify-between text-left">
                <li className=" ">
                  <a
                    href="/supplement"
                    onClick={toggleProductsDropdown}
                    className="bg-[#d2e7c7] font-bold   "
                  >
                    Herbal supplements
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleProductsDropdown}
                    href="/tea"
                    className="bg-[#d2e7c7] font-bold "
                  >
                    Herbal tea's
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleProductsDropdown}
                    href="/beauty"
                    className="bg-[#d2e7c7]  font-bold"
                  >
                    Herbal Beauty care
                  </a>
                </li>
              </ul>
            )}

            <ul className="flex justify-between w-full h-full  mr-[1%]">
              <li className="relative w-full h-full text-center hover:bg-[#d2e7c7]">
                <button
                  onClick={toggleCompanyDropdown}
                  className=" text-black h-full w-full font-bold"
                >
                  COMPANY
                </button>
              </li>
              {/* Repeat this pattern for Company and Learn dropdowns */}
            </ul>
            {companyDropdownOpen && (
              <ul className="absolute bg-[#d2e7c7] flex justify-between px-[30%] top-full left-0 py-[4%] w-full text-left">
                <li>
                  <a
                    href="/about"
                    onClick={toggleCompanyDropdown}
                    className="bg-[#d2e7c7] font-bold "
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleCompanyDropdown}
                    href="/mission"
                    className="bg-[#d2e7c7] font-bold"
                  >
                    Ous Mission
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleCompanyDropdown}
                    href="/article1"
                    className="bg-[#d2e7c7] font-bold"
                  >
                    Article
                  </a>
                </li>
                <li>
                  <a
                    onClick={toggleCompanyDropdown}
                    href="/posts"
                    className="bg-[#d2e7c7] font-bold"
                  >
                    Posts
                  </a>
                </li>
              </ul>
            )}
            <ul className="flex justify-between h-full  w-full mr-[1%]">
              <li className="relative w-full h-full text-center hover:bg-[#d2e7c7]">
                <button className=" text-black h-full w-full font-bold">
                  <a href="/advice" className="">
                    ADVICES
                  </a>
                </button>
              </li>
            </ul>
            <ul className="flex justify-between w-full h-full mr-[1%]">
              <li className="relative w-full text-center h-full hover:bg-[#d2e7c7]">
                <button
                  onClick={toggleLearnDropdown}
                  className=" text-black w-full h-full font-bold"
                >
                  LEARN
                </button>
              </li>
              {/* Repeat this pattern for Company and Learn dropdowns */}
            </ul>
            {learnDropdownOpen && (
              <div className="">
                <ul
                  // onMouseOut={toggleLearnDropdown}
                  className="absolute bg-[#d2e7c7] top-full flex justify-between py-[4%] px-[30%] left-0  w-full text-left"
                >
                  <li>
                    <a
                      href="/privacy"
                      onClick={toggleLearnDropdown}
                      className="bg-[#d2e7c7] font-bold "
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={toggleLearnDropdown}
                      href="/contact"
                      className="bg-[#d2e7c7] font-bold "
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={toggleLearnDropdown}
                      // onMouseLeave={toggleLearnDropdown}
                      href="/impact"
                      className="bg-[#d2e7c7] font-bold"
                    >
                      Impact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="w-[12%] flex justify-center items-center mr-[2%] lg:hidden md:hidden sm:hidden xs:hidden">
            <a
              href="/WhereToBuy"
              className="   text-white w-full bg-[#097969] text-center "
            >
              <p className="py-[2%] text-xl font-semibold "> Where To Buy</p>
            </a>
          </div>
        </div>
        <hr />

        <div className="   xl:hidden 2xl:hidden px-[20%] xs:px-[3%] sm:px-[4%] md:px-[10%] h-full bg-[#d3e8c9] borde-b-2 border-[#097969 ">
          {open ? (
            <div className="flex py-[4%] w-full h-full justify-between ">
              <ul className="flex justify-between h-full  w-full">
                <li className="relative w-full h-full text-center hover:bg-[#d2e7c7]">
                  <button
                    onClick={toggleProductsDropdown}
                    className=" text-black h-full font-bold"
                  >
                    PRODUCTS
                  </button>
                </li>
                {/* Repeat this pattern for Company and Learn dropdowns */}
              </ul>
              <ul
                onClick={toggleCompanyDropdown}
                className="flex justify-between w-full"
              >
                <li className="relative w-full text-center hover:bg-[#d2e7c7]">
                  <button className=" text-black font-bold">COMPANY</button>
                </li>
                {/* Repeat this pattern for Company and Learn dropdowns */}
              </ul>
              {productsDropdownOpen && (
                <ul className="absolute bg-[#d2e7c7] top-full py-[4%]  left-0   w-full flex px-[15%] lg:px-[25%] xs:px-[2%] justify-between text-left">
                  <li className=" ">
                    <a
                      href="/supplement"
                      onClick={toggleProductsDropdown}
                      className="bg-[#d2e7c7] font-semibold text-lg  xs:font-bold xs:text-sm "
                    >
                      Herbal supplements
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={toggleProductsDropdown}
                      href="/tea"
                      className="bg-[#d2e7c7] font-semibold  text-lg xs:font-bold xs:text-sm "
                    >
                      Herbal tea's
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={toggleProductsDropdown}
                      href="/beauty"
                      className="bg-[#d2e7c7]  font-semibold text-lg xs:font-bold xs:text-sm"
                    >
                      Herbal Beauty Care
                    </a>
                  </li>
                </ul>
              )}
              <ul className="flex justify-between h-full  w-full ">
                <li className="relative w-full h-full text-center hover:bg-[#d2e7c7]">
                  <button className=" text-black h-full w-full font-bold">
                    <a href="/advice" className="">
                      ADVICES
                    </a>
                  </button>
                </li>
              </ul>
              {companyDropdownOpen && (
                <ul className="absolute bg-[#d2e7c7] flex justify-between px-[15%] lg:px-[25%] xs:px-[2%] top-full left-0 py-[4%] w-full text-left">
                  <li>
                    <a
                      href="/about"
                      onClick={toggleCompanyDropdown}
                      className="bg-[#d2e7c7] font-semibold text-lg xs:font-bold xs:text-sm "
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={toggleCompanyDropdown}
                      href="/mission"
                      className="bg-[#d2e7c7] font-semibold text-lg xs:font-bold xs:text-sm"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={toggleCompanyDropdown}
                      href="/article1"
                      className="bg-[#d2e7c7] font-semibold text-lg xs:font-bold xs:text-sm"
                    >
                      Article
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={toggleCompanyDropdown}
                      href="/posts"
                      className="bg-[#d2e7c7] font-semibold text-lg xs:font-bold xs:text-sm"
                    >
                      Posts
                    </a>
                  </li>
                </ul>
              )}
              <ul
                onClick={toggleLearnDropdown}
                className="flex justify-between w-full"
              >
                <li className="relative w-full text-center hover:bg-[#d2e7c7]">
                  <button className=" text-black w-full font-bold ">
                    LEARN
                  </button>
                </li>
                {/* Repeat this pattern for Company and Learn dropdowns */}
              </ul>
              {learnDropdownOpen && (
                <div className="">
                  <ul
                    // onMouseOut={toggleLearnDropdown}
                    className="absolute bg-[#d2e7c7] top-full flex justify-between py-[4%] px-[15%] lg:px-[25%]  left-0  w-full text-left"
                  >
                    <li>
                      <a
                        href="/privacy"
                        onClick={toggleLearnDropdown}
                        className="bg-[#d2e7c7] font-semibold text-lg xs:font-bold xs:text-sm"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={toggleLearnDropdown}
                        href="/contact"
                        className="bg-[#d2e7c7] font-semibold text-lg xs:font-bold xs:text-sm"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={toggleLearnDropdown}
                        // onMouseLeave={toggleLearnDropdown}
                        href="/impact"
                        className="bg-[#d2e7c7] font-semibold text-lg xs:font-bold xs:text-sm"
                      >
                        Impact
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
