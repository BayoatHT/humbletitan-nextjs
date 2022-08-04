import React, { useState } from 'react'
import Layout from '../../../components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'
import qs from 'qs'

import { FaSearch } from 'react-icons/fa'
import { ThreeDots } from 'react-loading-icons'

import defaultBlogImage from '../../../assets/imgs/Blog-Post-header.jpg'

export default function Category({ category, name, blogs }) {
  const [search, setSearch] = useState('')
  const [filterdCategories, setFilterdCategories] = useState([])
  const blogsLength = Math.ceil(blogs?.length / 6)
  const [page, setPage] = useState(1)
  const [blogsLoaded, setBlogsLoaded] = useState(blogs?.slice(0, 6))
  console.log(blogs)
  console.log(category)
  console.log(name)
  // console.log(blogsLoaded)
  const [loading, setLoading] = useState(false)

  const handleFilter = (e) => {
    setSearch(e)
    setFilterdCategories(
      filterdCategories?.filter((item) => item.includes(search)),
    )
  }

  const loadMorePosts = async () => {
    setPage(page + 1)
    console.log(page)
    setLoading(true)
    setTimeout(() => {
      setBlogsLoaded([
        ...blogsLoaded,
        ...blogs?.slice(blogsLoaded.length, blogsLoaded.length + 6),
      ])
      setLoading(false)
    }, 400)
    // if (category === "uncategorized") {
    //     await axios.get("https://humble-titan-strapi.herokuapp.com/api/blogs?populate=*&pagination[pageSize]=1000")
    //         .then(({ data }) => {
    //             console.log(data)
    //             if (category === "uncategorized") {
    //                 setLoaded(data.data.filter((item) => item.attributes.category.data == null))
    //                 console.log(loaded)
    //             } else {
    //                 blogs = data.data.filter((item) => item.attributes.category.data?.attributes.slug === category)
    //             }
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // } else {
    //     await axios.get(`https://humble-titan-strapi.herokuapp.com/api/categories?filters[slug][$eq]=${category}&pagination[pageSize]=6&pagination[page]=${page}&populate=*`)
    //         .then(({ data }) => {
    //             console.log(data)
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // }
  }

  return (
    <>
      <Head>
        <title>
          {name
            ? name
            : category === 'uncategorized'
            ? 'Uncategorized'
            : category.replaceAll('-', ' ').charAt(0).toUpperCase() +
              category.replaceAll('-', ' ').slice(1)}{' '}
          - Humble-Titan{' '}
        </title>
        <meta name="description" content="" />
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
        <meta name="robots" content="noindex" />
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
        <meta name="true" content="true" />
        <meta name="next-head-count" content="32" />
      </Head>
      <Layout>
        <section className="heading">
          <div className=" container mx-auto md:flex justify-around flex-wrap max-w-screen-xl">
            <div className="px-4">
              <h1 className="text-[50px] md:text-[60px] font-semibold text-[#023A51] pt-3 md:pt-10 leading-[69px] ">
                {blogs[0]?.attributes?.category?.data?.attributes?.name
                  ? blogs[0]?.attributes?.category?.data?.attributes?.name
                  : category === 'uncategorized'
                  ? 'Uncategorized'
                  : category.replaceAll('-', ' ').charAt(0).toUpperCase() +
                    category.replaceAll('-', ' ').slice(1)}
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
              <div className="flex md:flex-row flex-wrap justify-around ">
                {blogsLoaded?.map((blog) => {
                  const post = blog?.attributes
                  const blogImage = post?.blogImage?.data?.attributes
                  const blogImageUrl = blogImage && blogImage?.url
                  return (
                    <div
                      key={blog?.id}
                      className="bg-[#fff] p-2 transition text-center flex flex-col items-center rounded mb-2 sm:w-[48%] md:w-[33%] "
                    >
                      <Link
                        href={`/humble-mind/${
                          post?.category?.data?.attributes?.slug
                            ? post?.category?.data?.attributes?.slug
                            : 'uncategorized'
                        }/blogs/${post?.slug}`}
                        passHref
                      >
                        <a className="w-[100%] ">
                          <div className="w-[100%] h-[100%]">
                            {blogImageUrl ? (
                              <Image
                                className="rounded"
                                src={blogImageUrl}
                                layout="responsive"
                                height={
                                  blogImage?.height ? blogImage?.height : '100%'
                                }
                                width={
                                  blogImage?.width ? blogImage?.width : '100%'
                                }
                                alt=""
                              />
                            ) : (
                              <Image
                                className="rounded"
                                src={defaultBlogImage}
                                layout="responsive"
                                alt=""
                              />
                            )}
                          </div>
                        </a>
                      </Link>
                      <Link
                        href={`/humble-mind/${
                          post?.category?.data?.attributes?.slug
                            ? post?.category?.data?.attributes?.slug
                            : 'uncategorized'
                        }/blogs/${post?.slug}`}
                        passHref
                      >
                        <a className="text-[26px] text-center font-semibold md:text-[32px] text-[#023A51] pt-3 leading-[35px] md:leading-[45px] hover:text-[#2cbc63] ease-in duration-300 ">
                          {blog.attributes?.title}
                        </a>
                      </Link>
                      <p className="text-[16px] mt-4 ">
                        {new Date(post?.publishedAt).toDateString()}{' '}
                      </p>
                    </div>
                  )
                })}
                {loading && (
                  <div className="text-[#000] w-[100%] flex justify-center">
                    <ThreeDots className="w-[50px] h-[50px]" fill="#023A51" />
                  </div>
                )}
              </div>
            </div>

            {/* Load more button */}
            {blogsLength > page && (
              <div className="bg-[#f6f7f8] mx-auto w-[90%] rounded cursor-pointer hover:bg-[#e7ecf0] group transition duration-150 ">
                <a onClick={() => loadMorePosts()}>
                  <p className="uppercase text-[#023A51] py-2 text-center text-[24px] group-hover:text-[25px] ">
                    Load More Posts
                  </p>
                </a>
              </div>
            )}
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
    query: { category },
  } = ctx
  let blogs
  let name = ''

  const query1 = qs.stringify({
    populate: '*',
  })
  const query2 = qs.stringify({
    populate: {
      blogs: {
        populate: '*',
      },
    },
  })

  if (category === 'uncategorized') {
    await axios
      .get(
        `https://humble-titan-strapi.herokuapp.com/api/blogs?sort[0]=publishedAt%3Adesc&pagination[pageSize]=1000&&populate=%2a`,
      )
      .then(({ data }) => {
        blogs = data.data?.filter(
          (item) => item?.attributes?.category?.data === null,
        )
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    await axios
      .get(
        `https://humble-titan-strapi.herokuapp.com/api/categories?filters[slug][$eq]=${category}&sort[0]=publishedAt%3Adesc&pagination[pageSize]=1000&${query2}`,
      )
      .then(({ data }) => {
        blogs = data.data[0]?.attributes?.blogs?.data
        name = data.data[0]?.attributes?.name
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    props: {
      blogs,
      category,
      name,
    },
  }
}
