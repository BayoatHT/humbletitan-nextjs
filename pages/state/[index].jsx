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

export default function State() {
  const router = useRouter();
  const query = router.query;
  const { index } = query;
  const stateName = index;
  const [stateData, setStateData] = useState([]);
  const [articles, setArticles] = useState([]);
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
  const options = {
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: stateName + " Elections", lang: "en", page: "1" },
    headers: {
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      "X-RapidAPI-Key": "3be5ca2b13mshaf3263c772c5f80p1fc514jsnc025172a53f0",
    },
  };
  const fetchData = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setArticles(response.data.articles);
        console.log("articles", articles);
      })
      .catch(function (error) {
        console.error(error);
      });
    // const arr = [];
    // await axios.get("/api/sheets").then((result) => {
    //   result.data.values.map((item) => {
    //     arr.push({
    //       state: item[0] || "",
    //       electionDescription: item[1] || "",
    //       electionDate: item[2] || "",
    //       statusOfData: item[3] || "",
    //       electionId: item[4] || "",
    //     });
    //   });
    // });

    // console.log(arr);
    // setStateData(
    //   arr.length > 0 &&
    //     arr.filter((item) => {
    //       return item.state === stateName;
    //     })
    // );
    // console.log(stateData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      {/* State's Elections Date */}
      <section className="mx-auto py-4 bg-[#2cbc63]">
        <div className="flex flex-col text-[#023a51] text-center items-center justify-center container w-12/12 mx-auto max-w-screen-xl h-[250px] ">
          <h4 className="text-[30px]">Next Election(s) in {stateName}</h4>
          {/* {stateData &&
            stateData.map((item, index) => {
              return ( */}
          <div className=" px-[30px] py-[10px] rounded">
            <h2 className="text-[20px] font-bold">Election description</h2>
            <h3 className="text-[22px] flex flex-row items-center justify-center">
              <FaCalendarAlt />
              <span className="font-bold"> 13, September 2022</span>
            </h3>
          </div>
          {/* );
            })} */}
        </div>
      </section>

      {/* News Cards */}

      <section className="mx-auto py-4 px-[20px]">
        <h1 className="text-center text-[30px] font-bold text-[#023a51]">
          News {stateName}
        </h1>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {articles &&
            articles.map((article, index) => {
              return (
                <Link
                  key={index}
                  className="cursor-pointer"
                  href={`/news/${article._id}`}
                  passHref
                >
                  <div className="card m-[10px] border ">
                    <Image
                      src={placeholderImg}
                      className="card-img-top"
                      alt="Img"
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
            className="slickNext bg-[#2cbc63] mr-[2px] text-[#023a51] font-bold rounded-[50%] w-[50px] h-[50px] flex items-center justify-center"
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

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const { state } = params;
//   console.log(params);
//   return {
//     props: {
//       state,
//       params,
//     },
//   };
// }
