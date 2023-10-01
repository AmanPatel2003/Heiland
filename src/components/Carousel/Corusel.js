import { useEffect, useRef, useState } from "react";
import { BsStarFill } from "react-icons/bs";

const Corusel = ({ data }) => {
  const [active, setActive] = useState(0);
  const interval = useRef(null);
  useEffect(() => {
    start();
    return () => clearInterval(interval.current);
  });

  const start = () => {
    interval.current = setInterval(() => {
      setActive((prev) => {
        if (prev === data.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);
  };

  const stop = () => {
    if (interval.current) clearInterval(interval.current);
  };

  const nextSlide = () => {
    stop();
    setActive((prev) => {
      if (prev === data.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const prevSlide = () => {
    stop();
    setActive((prev) => {
      if (prev === 0) {
        return data.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="text-center relative">
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            className={active === index ? "bolck" : "hidden cursor-pointer "}
          >
            <section className="px-[20%] h-full  xs:h-auto   lg:px-[15%] md:px-[10%] sm:px-[10%] xs:px-[5%] pt-[5%] pb-[8%] lg:pb-[5%] xl:pb-[5%] 2xl:pb-[5%] flex xs:block bg-[#fcfce4]">
              <div
                onMouseLeave={start}
                onMouseOver={stop}
                className="w-[50%] xs:w-[70%] xs:m-auto h-full items-start "
              >
                <h1 className=" text-start font-bold my-[3%] text-xl ">
                  {item.h1}
                </h1>
                <div className="flex py-[4%] ">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <h1 className=" text-start font-bold py-[3%]">{item.h2}</h1>
                <p className=" font-medium my-[3%] text-start">{item.p1}</p>
                {/* <p className="text-start pt-[4%] font-medium text-sm">
                  {item.p2}
                </p>
                <p className="text-start font-medium text-sm xs:mb-[15px]">
                  {item.p3}
                </p> */}
              </div>
              <div className="w-[50%] xs:w-[70%] xs:m-auto  xs:h-[320px] xs:mb-[5%] bg-white border">
                <a href="/contact" className="">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
              {/* <img className="h-full"
              onMouseLeave={start}
              onMouseOver={stop}
              src={item.image}
              alt={item.title}
            ></img> */}
            </section>
          </div>
        );
      })}

      <button
        className="prev top-[50%] left-0 cursor-pointer absolute p-[10px] outline-none text-[20px] border-none text-black"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="next top-[50%] right-0 cursor-pointer absolute p-[10px] outline-none text-[20px] border-none text-black"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};
export default Corusel;
