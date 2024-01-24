import React from "react";
import logo from "../img/logo2.png";
import { Helmet } from "react-helmet-async";

export default function PageTwo() {
  return (
    <>
      <Helmet>
        <title>My Page Title</title>
        {/* <meta name="description" content="This is a description of my page" /> */}
        <link rel="canonical" href="http://example.com/my-page" />
      </Helmet>
      <div className="w-full bg-[#fcfce4] mt-[73px] ]">
        <section className="flex justify-center h-[500px] xs:h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-full py-[5%]  ">
          <img src={logo} alt="" className="h-full " />
        </section>
        <section className="px-[15%] pb-[5%]">
          <p className="font-semibold text-lg xs:text-base sm:text-base pb-[2%] xs:pb-[5%] sm:pb-[5%]">
            Heiland is commited to connect the world with nature and harness the
            incredible power of herbs. However, we recognize that this mission
            extends far beyond just providing natural remedies to our customers;
            it also involves giving the utmost importance to the unsung heroes
            of this journey – our farmers.
          </p>
          <p className="font-semibold text-lg xs:text-base sm:text-base pb-[2%] xs:pb-[5%] sm:pb-[5%]">
            Farmers are the custodians of nature's bounty, nurturing and
            cultivating herbs that have been passed down through generations.
            They toil under the sun and weather the storms to ensure that the
            world can benefit from the healing properties of herbs. By
            supporting them, we not only uphold the integrity of our products
            but also honor the wisdom and traditions deeply rooted in herbalism.
          </p>
          <p className="font-semibold text-lg xs:text-base sm:text-base pb-[2%]  xs:pb-[5%] sm:pb-[5%]">
            Our commitment to farmers goes beyond fair wages; it encompasses
            sustainable farming practices, ethical sourcing, and long-term
            partnerships. We strive to empower these farmers, providing them
            with the tools, knowledge, and resources they need to thrive. In
            doing so, we not only elevate their livelihoods but also preserve
            the delicate ecosystems that are vital to the growth of these
            healing herbs.
          </p>
          <p className="font-semibold text-lg xs:text-base sm:text-base pb-[2%] xs:pb-[5%]">
            By placing farmers at the center of our mission, we not only promote
            the sustainable use of nature's gifts but also foster a deeper
            connection between people and the planet. We believe that when we
            honor and support those who cultivate these herbs, we are taking a
            significant step toward a healthier, more harmonious world.
            Together, we can bridge the gap between humanity and the healing
            wonders of nature, guided by the unwavering respect and support we
            give to our invaluable farmers.
          </p>
        </section>
      </div>
    </>
  );
}
