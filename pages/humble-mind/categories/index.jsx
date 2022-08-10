import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

export default function Categories() {
  const categories = ['economics', 'tram-seo', 'business-dictionary']
  const [search, setSearch] = useState('')
  const [filterdCategories, setFilterdCategories] = useState([])

  const handleFilter = (e) => {
    setSearch(e)
    setFilterdCategories(categories.filter((item) => item.includes(search)))
  }
  return (
    <>
      <Head>
        <title>Magazine - Humble Titan</title>
        <meta name="description" content="true" />
        <meta
          name="keywords"
          content="stocks, Marketing Consultant, SEO, polictics,"
        />
        <meta
          property="og:title"
          content="Elite Digital Marketing Services | Business &amp; Politics Made Digital"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="Bayo adesina" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="true" />
        <meta property="og:url" content="https://www.humbletitan.com/" />
        <meta property="og:site_name" content="Humble Titan" />
        <meta
          property="article:modified_time"
          content="2022-08-01T08:28:57+00:00"
        />
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
        {/* Hero */}
        <section className="heading py-10 md:py-10 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto w-10/12 md:w-11/12 ">
              <div>
                <h1 className=" text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 leading-[69px] ">
                  Magazine
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
          </div>
        </section>

        <section className="heading py-10 md:py-10 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto flex flex-wrap justify-around w-10/12 md:w-11/12 ">
              {search.length === 0
                ? categories.map((item, index) => {
                    return (
                      <Link href={`category/${item}`} passHref key={index}>
                        <a className="rounded-xl bg-[#fff] shadow-sm mb-2 flex justify-center group transition duration-300 cursor-pointer itmes-center p-2 md:w-[20%] ">
                          <p className=" text-[18px] text-center md:text-[20px] text-[#023A51] group-hover:text-[#2cbc63]   leading-[35px] ">
                            {item}
                          </p>
                        </a>
                      </Link>
                    )
                  })
                : filterdCategories.map((item, index) => {
                    return (
                      <Link href={`category/${item}`} passHref key={index}>
                        <a className="rounded-xl bg-[#fff] shadow-sm mb-2 flex justify-center group transition duration-300 cursor-pointer itmes-center p-2 md:w-[20%] ">
                          <p className=" text-[18px] text-center md:text-[20px] text-[#023A51] group-hover:text-[#2cbc63]   leading-[35px] ">
                            {item}
                          </p>
                        </a>
                      </Link>
                    )
                  })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
