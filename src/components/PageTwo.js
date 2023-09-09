import React from "react";
export default function PageTwo() {
  return (
    <div className="h-full w-full">
      <section className="flex pt-[10%] xs:pt-[20%] sm:pt-[15%] md:pt-[10%] bg-[#f3ffed] md:block sm:block xs:block  md:pb-[5%] sm:pb-[5%] xs:pb-[5%]  h-full">
        <div className="w-[50%] h-full py-[10%] md:w-[80%] sm:w-[80%] xs:w-[90%] md:m-auto sm:m-auto xs:m-auto px-[9%]">
          <h1 className="font-bold text-2xl text-green-900">OUR MISSION</h1>
          <p className="text-green-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad
            qui quaerat nesciunt error temporibus suscipit praesentium unde
            commodi tempora possimus quisquam quasi? Odit delectus sapiente
            officia error alias quisquam.
          </p>
        </div>
        <div className="w-[50%] border xs:h-[250px] sm:h-[250px] md:h-[250px] md:w-[70%] sm:w-[70%] xs:w-[80%] md:m-auto sm:m-auto xs:m-auto  bg-white">
          <a href="/contact" className="">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.lmXNtfdMUZt2uE74z4gzEAHaEK&pid=Api&P=0&h=180"
              alt=""
              className="h-full w-full"
            />
          </a>
        </div>
      </section>

      <section className="flex h-full w-full bg-[#e2f3e2] md:block sm:block xs:block md:pt-[5%] sm:pt-[5%] xs:pt-[5%] first-letter:">
        <div className="xs:h-[250px] sm:h-[250px] md:h-[250px] w-[35%] md:w-[80%] sm:w-[80%] xs:w-[90%] md:m-auto sm:m-auto xs:m-auto border bg-white">
          <a href="/contact" className="">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.eofsRGZNUdnUmcL1mRfQUAHaHa&pid=Api&P=0&h=180"
              alt=""
              className="h-full w-full"
            />
          </a>
        </div>
        <div className="w-[65%] md:w-[80%] sm:w-[80%] xs:w-[90%] md:m-auto sm:m-auto xs:m-auto  py-[6%] px-[9%] sm:px-[3%] xs:px-[0%] ">
          <h1 className="font-bold text-xl pb-[4%] text-green-900">
            WE CONTINUOUSLY PUSH OVERSELVES TO THE GOLD STANDARD
          </h1>
          <div className="flex justify-between pb-[2%] ">
            <ol className="w-[47%] md:pl-[3%] sm:pl-[3%] xs:pl-[5%]  ">
              <li className=" list-disc font-medium text-sm  py-[2%] text-green-800">
                Science-backed formulas
              </li>
              <li className="list-disc font-medium text-sm py-[2%] text-green-800">
                Responsibly Sourced Ingredients
              </li>
              <li className=" list-disc font-medium text-sm py-[2%] text-green-800">
                Avoiding the Use of Artifical Ingredients or Fillers
              </li>
              <li className=" list-disc font-medium text-sm py-[2%] text-green-800">
                Small Batch, In-House Manufacturing
              </li>
              <li className=" list-disc font-medium text-sm py-[2%] text-green-800">
                Highest Quality Standards:USP Water Filtration,HEPA Air
                Filtration
              </li>
            </ol>
            <ol className=" w-[47%]">
              <li className="list-disc font-medium text-sm py-[2%] text-green-800">
                Recyclable Amber Glass Bottles
              </li>
              <li className="list-disc font-medium text-sm py-[2%] text-green-800">
                Continual Pursuit fo Bold Innovation
              </li>
              <li className=" list-disc font-medium text-sm py-[2%] text-green-800">
                Creating What People Need, Not Just What's Trending
              </li>
              <li className="list-disc font-medium text-sm py-[2%] text-green-800">
                Commitment to the Community through Charity
              </li>
              <li className="list-disc font-medium text-sm py-[2%] text-green-800">
                Accountability to Our Partanes and to You
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
