import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import BrowsByState from "../../components/BrowseByState";
import { FaCalendarAlt } from "react-icons/fa";
import placeholderImg from "../../assets/images/PLACE-HOLDER-600x348.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function State({ articles, data, index }) {
  // const router = useRouter();
  // const query = router.query;
  // const { index } = query;
  // const stateName = index;
  const newArticles = articles;
  const stateName = index;
  console.log(data.length);
  // console.log(newArticles);
  // console.log(newData);
  // console.log(newStateName);
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <Layout>
      {/* State's Elections Date */}
      <section className="mx-auto py-4 bg-[#f7f7f7]">
        <div className=" text-[#023a51]  container w-12/12 mx-auto max-w-screen-xl ">
          <h4 className="text-[35px] text-center">
            {data?.length !== 0
              ? "Upcomming Election(s) in"
              : " Sorry! There is no upcomming elections in "}{" "}
            <span className="font-bold">{stateName}</span>
          </h4>
          <div className="flex flex-col items-center justify-center">
            <div>
              {data
                ?.filter((item) => item.statusOfData !== "Expired")
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" py-[20px] px-[5px] flex  text-left w-mx"
                    >
                      <h2 className="text-[20px] font-bold">
                        {index + 1}) {item.state} {item.electionDescription} ||
                      </h2>
                      <h3 className="text-[22px] ml-[15px] flex flex-row items-center ">
                        <FaCalendarAlt />
                        <span className="font-bold ml-[10px]">
                          {item.electionDate}
                        </span>
                      </h3>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* State's News Cards */}

      <section className="mx-auto py-4 px-[20px]">
        <h1 className="text-center text-[30px] font-bold text-[#023a51]">
          Election articles of {stateName}
        </h1>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {newArticles?.map((article, index) => {
            return (
              <Link
                key={index}
                className="cursor-pointer"
                href={`${article.link}`}
                passHref
              >
                <div className="flex flex-col card m-[10px] border mx-[10px] h-[300px] ">
                  <Image
                    src={`/api/imageProxy?url=${encodeURIComponent(
                      article.media
                    )}`}
                    className="card-img-top grow"
                    alt="Img"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                  />
                  <div className="card-body p-[5px]">
                    <div className="flex space-between">
                      <p className="text-[#555555] text-[12px]">
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
            className="slickNext bg-[#2cbc63] mr-[10px] text-[#023a51] font-bold rounded-[50%] w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsChevronLeft size={20} />
          </button>
          <button
            onClick={sliderRef?.slickNext}
            className="slickNext bg-[#2cbc63] text-[#023a51] font-bold rounded-[50%] w-[50px] h-[50px] flex items-center justify-center"
          >
            <BsChevronRight size={20} />
          </button>
        </div>
      </section>
      <BrowsByState />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { index },
  } = context;

  var articles = [];
  var data = [];

  const options = {
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: index + " Elections", lang: "en", page: "1" },
    headers: {
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      "X-RapidAPI-Key": "3be5ca2b13mshaf3263c772c5f80p1fc514jsnc025172a53f0",
    },
  };

  try {
    await axios.request(options).then(function (response) {
      articles = response.data.articles;
      console.log(articles);
    });
  } catch (error) {
    console.log(error.message);
  }

  const arr = [];

  await axios
    .get("http://localhost:3000/api/sheets")
    .then((result) => {
      result.data.values.map((item) => {
        arr.push({
          state: item[0] || "",
          electionDescription: item[1] || "",
          electionDate: item[2] || "",
          statusOfData: item[3] || "",
          electionId: item[4] || "",
        });
      });
    })
    .then(() => {
      data =
        arr.length > 0 &&
        arr.filter((item) => {
          return item.state === index;
        });
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    props: {
      articles,
      data,
      index,
    },
  };
}
