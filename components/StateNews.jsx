import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
export default function StateNews({ stateName, articles }) {
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mx-auto py-4 px-[20px]">
      <h1 className="text-center my-8 text-[40px] font-bold text-[#023a51]">
        Election articles of {stateName}
      </h1>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {articles?.map((article, index) => {
          return (
            <Link
              key={index}
              className="cursor-pointer"
              href={`${article.link}`}
              passHref
            >
              <div className="flex flex-col card m-[10px] border mx-[10px] h-[300px] rounded-lg">
                <Image
                  src={`/api/imageProxy?url=${encodeURIComponent(
                    article.media
                  )}`}
                  className="card-img-top grow rounded-t-lg"
                  alt="Img"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
                <div className="card-body py-[10px] px-[10px]">
                  <div className="flex space-between">
                    <p className="text-[#555555] truncate text-[12px]  ">
                      Author: {article.author ? article.author : "Unknown"}
                    </p>
                  </div>
                  <h5 className="card-title text-[#023a51] font-bold">
                    {article.title && article.title}
                  </h5>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
      <div className="sliderBtns flex items-center justify-center p-[20px]">
        <button
          onClick={sliderRef?.slickPrev}
          className="slickNext bg-[#023a51] mr-[10px] text-[#fff] font-bold rounded-[50%] w-[50px] h-[50px] flex items-center justify-center"
        >
          <BsChevronLeft size={20} />
        </button>
        <button
          onClick={sliderRef?.slickNext}
          className="slickNext bg-[#023a51] text-[#fff] font-bold rounded-[50%] w-[50px] h-[50px] flex items-center justify-center"
        >
          <BsChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
