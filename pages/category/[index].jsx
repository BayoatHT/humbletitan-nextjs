import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import UnemploymentTrap from '../../assets/imgs/Unemployment-Trap-min-600x423.jpg'
import UndergroundEconomy from '../../assets/imgs/Underground-Economy-min-600x423.jpg'
import TradeSurplus from '../../assets/imgs/Trade-Surplus-min-400x282.jpg'
import TradeDeficit from '../../assets/imgs/Trade-Deficit-min-400x282.jpg'
import SupplySide from '../../assets/imgs/Supply-side-policies-min-400x282.jpg'
import SupplyMin from '../../assets/imgs/Supply-min-400x282.jpg'

import { newsByCategories } from '../../utils/newsByCategories'
import { FaSearch } from 'react-icons/fa'

export default function Category({ news }) {
  const { category, title, h1_1, h1_2, h2_1, h2_2 } = news

  const categories = ['economics', 'tram-seo', 'business-dictionary']
  const [search, setSearch] = useState('')
  const [filterdCategories, setFilterdCategories] = useState([])

  const handleFilter = (e) => {
    setSearch(e)
    setFilterdCategories(categories?.filter((item) => item.includes(search)))
  }

  return (
    <>
      <Head>
        <title>{title && title}</title>
        <meta name="description" content={""} />
        <meta
          name="keywords"
          content="stocks, Marketing Consultant, SEO, polictics,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="humbletitan.com" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="true" />
        <meta property="og:description" content="true" />
        <meta property="og:url" content="true" />
        <meta property="og:site_name" content="true" />
        <meta property="og:image" content="true" />
        <meta name="twitter:card" content="true" />
        <meta name="twitter:site" content="true" />
        <meta name="twitter:creator" content="true" />
        <meta name="twitter:title" content="true" />
        <meta name="twitter:description" content="true" />
        <meta name="twitter:domain" content="true" />
        <meta name="twitter:image" content="true" />
        <meta name="twitter:url" content="true" />
        <meta itemProp="image" content="true" />
        <meta itemProp="name" content="true" />
        <meta itemProp="description" content="true" />
        <meta name="geo.region" content="true" />
        <meta name="geo.placename" content="true" />
        <meta name="geo.position" content="true" />
        <meta name="ICBM" content="true" />
        
        <meta name="next-head-count" content="32" />
      </Head>
      <Layout>
        <section className="heading">
          <div className=" container mx-auto md:flex justify-around flex-wrap max-w-screen-xl">
            <div className="px-4">
              <h1 className="text-[50px] md:text-[60px] text-[#023A51] pt-3 md:pt-10 leading-[69px] ">
                {h1_1 && h1_1}
              </h1>
            </div>
            <div className="flex justify-center mt-6 md:mt-10">
              <div className="flex relative text-[22px] rounded">
                <FaSearch className="absolute top-[35%] left-[10px] text-[#023A51]" />
                <input
                  value={search}
                  onChange={(e) => handleFilter(e.target.value)}
                  placeholder="What are you looking for?"
                  className="rounded-xl text-[#023A51] pl-10 p-4 border"
                  type="text"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="heading md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
              <div className=" md:flex flex-wrap justify-around ">
                <div className="md:flex flex-wrap justify-around">
                  <div className="bg-[#fff] cursor-pointer transition p-2 text-center flex flex-col items-center rounded mb-2 md:w-[33%] ">
                    <Image
                      className="rounded"
                      src={UnemploymentTrap}
                      alt="image"
                    />
                    <p className="text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ">
                      Unemployment Trap
                    </p>
                    <p className="text-[12px] mt-4 hover:text-[#2cbc63]">
                      March 11, 2022 | economics{' '}
                    </p>
                  </div>
                  <div className="bg-[#fff] cursor-pointer transition p-2  text-center flex flex-col items-center rounded mb-2 md:w-[33%] ">
                    <Image
                      className="rounded"
                      src={UndergroundEconomy}
                      alt="image"
                    />
                    <p className="text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ">
                      Underground Economy
                    </p>
                    <p className="text-[12px] mt-4 hover:text-[#2cbc63]">
                      March 11, 2022 | economics
                    </p>
                  </div>
                  <div className="bg-[#fff] cursor-pointer transition p-2 text-center flex flex-col items-center rounded mb-2 md:w-[33%] ">
                    <Image className="rounded" src={TradeSurplus} alt="image" />
                    <p className="text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ">
                      Trade Surplus
                    </p>
                    <p className="text-[12px] mt-4 hover:text-[#2cbc63]">
                      April 29, 2022|Uncategorized
                    </p>
                  </div>
                  <div className="bg-[#fff] cursor-pointer transition p-2  text-center flex flex-col items-center rounded mb-2 md:w-[33%] ">
                    <Image className="rounded" src={TradeDeficit} alt="image" />
                    <p className="text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ">
                      Trade Deficit
                    </p>
                    <p className="text-[12px] mt-4 hover:text-[#2cbc63]">
                      April 29, 2022|Uncategorized
                    </p>
                  </div>
                  <div className="bg-[#fff] cursor-pointer transition p-2 text-center flex flex-col items-center rounded mb-2 md:w-[33%] ">
                    <Image className="rounded" src={SupplySide} alt="image" />
                    <p className="text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ">
                      Supply-Side Policies
                    </p>
                    <p className="text-[12px] mt-4 hover:text-[#2cbc63]">
                      April 29, 2022|Uncategorized
                    </p>
                  </div>
                  <div className="bg-[#fff] cursor-pointer transition p-2  text-center flex flex-col items-center rounded mb-2 md:w-[33%] ">
                    <Image className="rounded" src={SupplyMin} alt="image" />
                    <p className="text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ">
                      Supply
                    </p>
                    <p className="text-[12px] mt-4 hover:text-[#2cbc63]">
                      April 29, 2022|Uncategorized
                    </p>
                  </div>
                </div>
              </div>

              {/* Load more button */}

              <div className="bg-[#f6f7f8] w-[100%] rounded cursor-pointer hover:bg-[#e7ecf0] group transition duration-150 ">
                <p className="uppercase text-[#023A51] py-2 text-center text-[24px] group-hover:text-[25px] ">
                  Load More Posts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Request a qoute */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-center  w-10/12 md:w-11/12 ">
              <p className="text-[40px] text-[#023A51] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] md:px-10">
                Want to get serious about your business and online strategy
                <span className="text-[#2cbc63]">?</span>
              </p>
              <p className="text-[30px] text-[#2cbc63] md:text-[40px] font-light mt-4 leading-[40px] md:leading-[55px] tracking-[-2px] md:px-10">
                Get in touch. Web Design. Content Marketing. SEO. Website
                Management.{' '}
              </p>
              <button className="green_rounded_btn my-6">
                Request a Quote
              </button>
              <p className="text-[16px] text-[#023A51]"> Delighted to help.</p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const {
    query: { index },
  } = ctx
  var categorySearch = index
  const news = newsByCategories?.find(
    (item) => item.category === categorySearch,
  )
  return {
    props: {
      news,
    },
  }
}
