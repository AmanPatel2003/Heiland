import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import { CarouselComp } from "./CarouselComp";


export const MCarousel = () => {
  return (
    <div className="">
      <Carousel
        showArrows={true} // Customize carousel settings as needed
        showStatus={false}
        // showThumbs={true}
        autoPlay={true} // Set to true for automatic slideshow
        interval={7000} // Adjust the interval between slides (in milliseconds)
        infiniteLoop={true}
        // // useKeyboardArrows={true} // Enable keyboard navigation
        stopOnHover={true}
      >
        <CarouselComp
          h1="WHAT PEOPLE ARE SAYING"
          h2="GREAT MAGNESIUM SOURCE"
          p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            doloribus ipsum voluptatibus rerum nulla magnam laudantium,
            reiciendis obcaecati fugit molestias ullam."
          p2="An Amwon Customer"
          p3="about Magnesium Citrate"
          img="https://i.ytimg.com/vi/8VrLhZhiNX4/maxresdefault.jpg"
        />
        <CarouselComp
          h1="WHAT PEOPLE ARE SAYING"
          h2="GREAT MAGNESIUM SOURCE"
          p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            doloribus ipsum voluptatibus rerum nulla magnam laudantium,
            reiciendis obcaecati fugit molestias ullam."
          p2="An Amwon Customer"
          p3="about Magnesium Citrate"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/606d2082874849.5d2b473f01d4f.jpg"
        />
        <CarouselComp
          h1="WHAT PEOPLE ARE SAYING"
          h2="GREAT MAGNESIUM SOURCE"
          p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            doloribus ipsum voluptatibus rerum nulla magnam laudantium,
            reiciendis obcaecati fugit molestias ullam."
          p2="An Amwon Customer"
          p3="about Magnesium Citrate"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/606d2082874849.5d2b473f01d4f.jpg"
        />
      </Carousel>
    </div>
  );
};
