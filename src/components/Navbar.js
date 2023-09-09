import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [open, setopen] = useState(false);

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };
  const toggleCompanyDropdown = () => {
    setCompanyDropdownOpen(!companyDropdownOpen);
  };
  const toggleLearnDropdown = () => {
    setLearnDropdownOpen(!learnDropdownOpen);
  };

  const handeleMenu = () => {
    setopen((prev) => !prev);
    // console.log(open);
  };

  return (
    <div className="w-full  ">
      <div className="fixed  top-0 left-0 bg-[#f3ffed]  w-full">
        <div className="h-full flex justify-between w-full">
          <div className="ml-[10%]  ">
            <a className="flex" href="/">
              <img
                src="/photos/logo.png"
                alt=""
                className="h-full w-[50px] mt-[13%] xs:mt-[12%] xs:w-[50px]"
              />
              <h1 className="font-semibold text-4xl py-[9%] xs:text-3xl">
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
          <div className="flex items-center justify-center w-[30%] lg:hidden md:hidden sm:hidden xs:hidden">
            <ul className="flex justify-between h-full  w-full mr-[1%]">
              <li className="relative w-full h-full  text-center hover:bg-[#d2e7c7]">
                <button
                  onClick={toggleProductsDropdown}
                  className=" w-full h-full text-black"
                >
                  PRODUCTS
                </button>
                {productsDropdownOpen && (
                  <ul className="absolute bg-[#d2e7c7] top-full left-0 pt-2 w-full text-left">
                    <li className="w-full ">
                      <a
                        href="/products"
                        onClick={toggleProductsDropdown}
                        className="bg-[#d2e7c7]  pr-[40%] pl-[6%]"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={toggleProductsDropdown}
                        href="/1"
                        className="bg-[#d2e7c7] pr-[40%] pl-[6%]"
                      >
                        PageTwo
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={toggleProductsDropdown}
                        href="/about"
                        className="bg-[#d2e7c7] pr-[40%]  pl-[6%]"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              {/* Repeat this pattern for Company and Learn dropdowns */}
            </ul>

            <ul className="flex justify-between w-full h-full  mr-[1%]">
              <li className="relative w-full h-full text-center hover:bg-[#d2e7c7]">
                <button
                  onClick={toggleCompanyDropdown}
                  className=" text-black h-full w-full"
                >
                  COMPANY
                </button>
                {companyDropdownOpen && (
                  <ul className="absolute bg-[#d2e7c7] top-full left-0 pt-2 w-full text-left">
                    <li>
                      <a
                        href="/story"
                        onClick={toggleCompanyDropdown}
                        className="bg-[#d2e7c7] pr-[40%] pl-[6%]"
                      >
                        Story
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={toggleCompanyDropdown}
                        href="/articles"
                        className="bg-[#d2e7c7] pr-[40%] pl-[6%]"
                      >
                        Articles
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={toggleCompanyDropdown}
                        href="/shop"
                        className="bg-[#d2e7c7] pr-[40%] pl-[6%]"
                      >
                        Shop
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              {/* Repeat this pattern for Company and Learn dropdowns */}
            </ul>
            <ul className="flex justify-between w-full h-full mr-[1%]">
              <li className="relative w-full text-center h-full hover:bg-[#d2e7c7]">
                <button
                  onClick={toggleLearnDropdown}
                  className=" text-black w-full h-full"
                >
                  LEARN
                </button>
                {learnDropdownOpen && (
                  <div className="">
                    <ul
                      // onMouseOut={toggleLearnDropdown}
                      className="absolute bg-[#d2e7c7]  left-0 pt-2 w-full text-left"
                    >
                      <li>
                        <a
                          href="/privacy"
                          onClick={toggleLearnDropdown}
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%] "
                        >
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={toggleLearnDropdown}
                          href="/contact"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%] "
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={toggleLearnDropdown}
                          // onMouseLeave={toggleLearnDropdown}
                          href="/impact"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%]"
                        >
                          Impact
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* Repeat this pattern for Company and Learn dropdowns */}
            </ul>
          </div>

          <div className="w-[9%] flex justify-center items-center mr-[7%] lg:hidden md:hidden sm:hidden xs:hidden">
            <a
              href="/WhereToBuy"
              className="text-lg m-auto pl-[4%] text-white w-full bg-green-400"
            >
              Where To Buy
            </a>
          </div>
        </div>
        <hr />

        <div className="   xl:hidden 2xl:hidden px-[20%] xs:px-[10%] sm:px-[10%] md:px-[10%] h-full bg-[#f3ffed] ">
          {open ? (
            <div className="flex pt-[20px w-full h-full ">
              <ul className="flex justify-between h-full  w-full">
                <li className="relative w-full h-full text-center hover:bg-[#d2e7c7]">
                  <button
                    onClick={toggleProductsDropdown}
                    className=" text-black h-full"
                  >
                    PRODUCTS
                  </button>
                  {productsDropdownOpen && (
                    <ul className="absolute bg-[#d2e7c7] top-full left-0 mt-2 w-[95%] text-left
                    ">
                      <li>
                        <a
                          href="/products"
                          onClick={toggleProductsDropdown}
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%] "
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={toggleProductsDropdown}
                          href="/1"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%] "
                        >
                          PateTwo
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={toggleProductsDropdown}
                          href="/about"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%] "
                        >
                          About
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Repeat this pattern for Company and Learn dropdowns */}
              </ul>
              <ul
                onClick={toggleCompanyDropdown}
                className="flex justify-between w-full"
              >
                <li className="relative w-full text-center hover:bg-[#d2e7c7]">
                  <button className=" text-black">COMPANY</button>
                  {companyDropdownOpen && (
                    <ul className="absolute bg-[#d2e7c7] top-full left-0 mt-2 w-[95%] text-left">
                      <li>
                        <a
                          onClick={toggleCompanyDropdown}
                          href="/story"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%]  "
                        >
                          Story
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={toggleCompanyDropdown}
                          href="/articles"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%] "
                        >
                          Articles
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={toggleCompanyDropdown}
                          href="/shop"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%]  "
                        >
                          Shop
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Repeat this pattern for Company and Learn dropdowns */}
              </ul>
              <ul
                onClick={toggleLearnDropdown}
                className="flex justify-between w-full"
              >
                <li className="relative w-full text-center hover:bg-[#d2e7c7]">
                  <button className=" text-black w-full ">LEARN</button>
                  {learnDropdownOpen && (
                    <ul className="absolute bg-[#d2e7c7] top-full left-0 mt-2 w-[95%] text-left">
                      <li>
                        <a
                          onClick={toggleLearnDropdown}
                          href="/privacy"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%]"
                        >
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={toggleLearnDropdown}
                          href="/contact"
                          className="bg-[#d2e7c7] pr-[40%] pl-[6%]"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={toggleLearnDropdown}
                          href="/impact"
                          className="bg-[#d2e7c7]pr-[40%] pl-[6%]"
                        >
                          Impact
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Repeat this pattern for Company and Learn dropdowns */}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
