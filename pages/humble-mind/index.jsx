import React, { useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Oval } from "react-loading-icons";
import ReactPaginate from "react-paginate";
import qs from 'qs'

import defaultBlogImage from "../../assets/imgs/Blog-Post-header.jpg";
import GetAQuote from "../../components/GetAQuote";
import Newsletter from "../../components/Newsletter";

export default function Magazine({ data, categories, contents }) {
  const { hero, header, ht_digital_services } = contents.data.attributes;

  const [browseText, setBrowseText] = useState(
    <button className="text-[#fff] font-semibold">Browse</button>
  );
  const blogs = data.data;
  const pageCount = data.meta.pagination?.pageCount;

  const categoriesData = categories?.data;
  const router = useRouter();

  const [selectedTag, setSelectedtag] = useState("");
  const handleBrowse = () => {
    if (selectedTag !== "") {
      setBrowseText(<Oval className="p-2" />);
      router.push(`/humble-mind/${selectedTag}`);
    } else {
      return null;
    }
  };

  return (
    <>
      <Head>
        <title>{header?.title || "Humble Titan"}</title>
        <meta name="description" content={header?.metaDescription || ""} />
        <meta name="keywords" content={header?.keywords || ""} />
        <meta name="robots" content={header?.robots || ""} />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="language" content={header?.language || ""} />
        <meta name="revisit-after" content={header?.revisitAfter || "5 days"} />
        <meta name="author" content={header?.author || "humble titan"} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="og:locale" content={header?.og_locale || "en_US"} />
        <meta property="og:type" content={header?.og_type || "article"} />
        <meta property="og:title" content={header?.og_title || ""} />
        <meta
          property="og:description"
          content={header?.og_description || ""}
        />
        <meta property="og:url" content={header?.org_url || ""} />
        <meta property="og:site_name" content={header?.og_site_name || ""} />
        <meta property="og:image" content={header?.og_image || ""} />
        <meta name="twitter:card" content={header?.twitter_card || ""} />
        <meta name="twitter:site" content={header?.twitter_site || ""} />
        <meta name="twitter:creator" content={header?.twitter_creator || ""} />
        <meta name="twitter:title" content={header?.twitter_title || ""} />
        <meta
          name="twitter:description"
          content={header?.twitter_description || ""}
        />
        <meta name="twitter:domain" content={header?.twitter_domain || ""} />
        <meta name="twitter:image" content={header?.twitter_image} />
        <meta name="twitter:url" content={header?.twitter_url} />
        <meta itemProp="image" content={header?.itemProp_image || ""} />
        <meta itemProp="name" content={header?.itemProp_name || ""} />
        <meta
          itemProp="description"
          content={header?.itemProp_description || ""}
        />
        <meta name="geo.region" content={header?.geo_region || ""} />
        <meta name="geo.placename" content={header?.geo_placename || ""} />
        <meta name="geo.position" content={header?.geo_position || ""} />
        <meta name="ICBM" content="true" />
        <meta name="next-head-count" content="32" />
        <link rel="canonical" href={header?.canonicalUrl || ""} />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="heading py-20 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto w-10/12 text-center md:w-11/12 ">
              <h1 className=" text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 leading-[69px] ">
                {hero.heading}
              </h1>
              <div className="flex items-center justify-center">
                <div className=" mt-4 bg-[#fff] p-2 rounded max-w-max">
                  <select
                    className="w-[180px] bg-[#fff] font-bold text-center text-[#023A51] outline-0 "
                    value={selectedTag}
                    onChange={(e) => setSelectedtag(e.target.value)}
                  >
                    <option disabled value="">
                      Browse categories
                    </option>
                    <option value="uncategorized">Uncategorized</option>
                    {categoriesData?.map((item) => {
                      return (
                        <option key={item.id} value={item.attributes?.slug}>
                          {item.attributes?.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div
                  onClick={() => handleBrowse()}
                  className=" mt-4 ml-4 flex justify-center items-center bg-[#2cbc63] w-[100px] h-[40px] cursor-pointer p-2 rounded max-w-max"
                >
                  {browseText}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Magazines */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
              <div className="flex md:flex-row flex-wrap justify-around">
                {blogs?.slice(0, 3)?.map((blog) => {
                  const post = blog?.attributes;
                  const blogImage = post.blogImage?.data?.attributes;
                  const blogImageUrl = blogImage && blogImage?.url;
                  return (
                    <div
                      key={blog?.id}
                      className="bg-[#fff] p-2 transition text-center flex flex-col items-center rounded mb-10 md:mb-4 sm:w-[48%] md:w-[32%] "
                    >
                      <Link
                        href={`/humble-mind/${
                          post.category.data?.attributes.slug
                            ? post.category.data?.attributes.slug
                            : "uncategorized"
                        }/blogs/${post?.slug}`}
                        passHref
                      >
                        <a className="w-[100%] ">
                          <div className=" w-[100%] h-[100%]">
                            {blogImageUrl ? (
                              <Image
                                className="rounded"
                                src={blogImageUrl}
                                layout="responsive"
                                height={
                                  blogImage?.height ? blogImage?.height : "100%"
                                }
                                width={
                                  blogImage?.width ? blogImage?.width : "100%"
                                }
                                alt={blogImage?.name}
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
                          post.category.data?.attributes.slug
                            ? post.category.data?.attributes.slug
                            : "uncategorized"
                        }/blogs/${post?.slug}`}
                        passHref
                      >
                        <a className="text-[26px] text-center font-semibold md:text-[32px] text-[#023A51] pt-3 leading-[35px] md:leading-[45px] hover:text-[#2cbc63] ease-in duration-300 ">
                          {blog.attributes.title}
                        </a>
                      </Link>
                      <p className="text-[16px] mt-4 ">
                        {new Date(post.publishedAt).toDateString()} |{" "}
                        <a
                          href={`/humble-mind/${
                            post.category.data?.attributes.slug
                              ? post.category.data?.attributes.slug
                              : "uncategorized"
                          }`}
                          className="hover:text-[#2cbc63] font-bold "
                        >
                          {" "}
                          {post.category.data?.attributes.name
                            ? post.category.data?.attributes.name
                            : "Uncategorized"}
                        </a>
                      </p>
                    </div>
                  );
                })}
                <Newsletter />
                {blogs?.slice(3)?.map((blog) => {
                  const post = blog?.attributes;
                  const blogImage = post.blogImage?.data?.attributes;
                  const blogImageUrl = blogImage && blogImage?.url;
                  return (
                    <div
                      key={blog?.id}
                      className="bg-[#fff] p-2 transition text-center flex flex-col items-center rounded mb-10 md:mb-4 sm:w-[48%] md:w-[32%] "
                    >
                      <Link
                        href={`/humble-mind/${
                          post.category.data?.attributes.slug
                            ? post.category.data?.attributes.slug
                            : "uncategorized"
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
                                  blogImage?.height ? blogImage?.height : "100%"
                                }
                                width={
                                  blogImage?.width ? blogImage?.width : "100%"
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
                          post.category.data?.attributes.slug
                            ? post.category.data?.attributes.slug
                            : "uncategorized"
                        }/blogs/${post?.slug}`}
                        passHref
                      >
                        <a className="text-[26px] text-center font-semibold md:text-[32px] text-[#023A51] pt-3 leading-[35px] md:leading-[45px] hover:text-[#2cbc63] ease-in duration-300 ">
                          {blog.attributes.title}
                        </a>
                      </Link>
                      <p className="text-[16px] mt-4 ">
                        {new Date(post.publishedAt).toDateString()} |{" "}
                        <a
                          href={`/humble-mind/${
                            post.category.data?.attributes.slug
                              ? post.category.data?.attributes.slug
                              : "uncategorized"
                          }`}
                          className="hover:text-[#2cbc63] font-bold "
                        >
                          {" "}
                          {post.category.data?.attributes.name
                            ? post.category.data?.attributes.name
                            : "Uncategorized"}
                        </a>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* pagination */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
              <div className=" md:flex flex-wrap justify-around ">
                {/* pagination */}
                <div className="paginations flex justify-center md:justify-end md:w-[100%] ">
                  {pageCount > 1 && (
                    <ReactPaginate
                      onPageChange={(n) =>
                        router.push(`/humble-mind?page=${n.selected + 1}`)
                      }
                      pageCount={pageCount}
                      marginPagesDisplayed={3}
                      previousLabel="< Previous"
                      nextLabel="Next >"
                      pageRangeDisplayed={3}
                      containerClassName="flex flex-wrap justify-between"
                      pageClassName="flex items-center mx-2 justify-center p-2 w-[30px] h-[30px] border"
                      breakClassName="flex items-center mx-2 justify-center p-2 text-[20px] w-[30px] h-[30px] border"
                      activeClassName="active flex items-center mr-2 justify-center p-2 w-[30px] h-[30px] text-[#fff] hover:text-[#023A51] border-[#2cbc63] bg-[#2cbc63] "
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <Newsletter />
          </div>
        </section>

        {/* Get a Quote */}
        <GetAQuote />
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const pageNumber = ctx.query.page > 0 ? ctx.query.page : 1;
  var data;
  var contents;

  const query = qs.stringify({
    populate: {
      header: {
          populate: '*'
      },
      hero: {
          populate: '*'
      },
      ht_digital_services: {
          populate: '*'
      },
  },
  })
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/humble-mind?${query}`)
    .then(({ data }) => {
      contents = data;
    })
    .catch((error) => {
      console.log(error);
    });
  await axios
    .get(
      `https://humble-titan-strapi.herokuapp.com/api/blogs?populate=*&pagination[pageSize]=6&pagination[page]=${pageNumber}&sort[0]=publishedAt%3Adesc`
    )
    .then((result) => {
      data = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
  var categories;
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/categories?populate=*`)
    .then(({ data }) => {
      categories = data;
    })
    .catch((error) => {
      console.log(error);
    });
  return {
    props: {
      contents,
      data,
      categories,
    },
  };
}
