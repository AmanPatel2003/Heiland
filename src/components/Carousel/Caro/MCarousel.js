import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import { CarouselComp } from "./CarouselComp";
import {  AiFillCaretLeft,  AiFillCaretRight} from "react-icons/ai"


export const MCarousel = () => {
  const arrowStyles= {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 100,
    cursor: "pointer",
  };
  

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  };
  return (
    <div className="h-full">
      <Carousel
      style={{zIndex:"-1"}}
        statusFormatter={(current, total) =>
          `Current slide: ${current} / Total: ${total}`
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              <AiFillCaretLeft />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
            >
              <AiFillCaretRight />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: "#000" ,borderRadius:"50%" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
            
          }
        else{ return (
          <li
            style={{
              ...indicatorStyles,
              background: "red",
              borderRadius: "50%",
            }}
            onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
          />
        );
        }
         
          // return (
          //   <li
          //     style={indicatorStyles}
          //     onClick={onClickHandler}
          //     onKeyDown={onClickHandler}
          //     value={index}
          //     key={index}
          //     role="button"
          //     tabIndex={0}
          //     title={`${label} ${index + 1}`}
          //     aria-label={`${label} ${index + 1}`}
          //   />
          // );
        }}
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
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
