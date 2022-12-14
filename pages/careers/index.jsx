import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Layout from '../../components/Layout'
import Image from 'next/image'
import * as Fontawesome from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import qs from 'qs'

export default function Careers({ contents }) {
  const {
    header,
    hero,
    Benefits,
    WhoWeAre,
    danaJohnson,
    ourValue,
    opennings,
  } = contents.data.attributes
  return (
    <>
      <Head>
      <title>{header?.title || "Humble Titan"}</title>
        <meta name="description" content={header?.metaDescription || "" } />
        <meta name="keywords" content={header?.keywords || "" }/>
        <meta name="robots" content={header?.robots || ""} />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="language" content={header?.language || ""} />
        <meta name="revisit-after" content={ header?.revisitAfter || "5 days"} />
        <meta name="author" content={header?.author || "humble titan"} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="og:locale" content={ header?.og_locale ||"en_US" } />
        <meta property="og:type" content={header?.og_type || "article"} />
        <meta property="og:title" content={header?.og_title || ""} />
        <meta property="og:description" content={header?.og_description || ""} />
        <meta property="og:url" content={header?.org_url || ""} />
        <meta property="og:site_name" content={header?.og_site_name || ""} />
        <meta property="og:image" content={header?.og_image || ""} />
        <meta name="twitter:card" content={header?.twitter_card || ""} />
        <meta name="twitter:site" content={header?.twitter_site || ""} />
        <meta name="twitter:creator" content={header?.twitter_creator || ""} />
        <meta name="twitter:title" content={header?.twitter_title || ""} />
        <meta name="twitter:description" content={header?.twitter_description || ""} />
        <meta name="twitter:domain" content={header?.twitter_domain || ""} />
        <meta name="twitter:image" content={header?.twitter_image} />
        <meta name="twitter:url" content={header?.twitter_url} />
        <meta itemProp="image" content={header?.itemProp_image || ""} />
        <meta itemProp="name" content={header?.itemProp_name || ""} />
        <meta itemProp="description" content={header?.itemProp_description || ""} />
        <meta name="geo.region" content={header?.geo_region || ""} />
        <meta name="geo.placename" content={header?.geo_placename || ""} />
        <meta name="geo.position" content={header?.geo_position || ""} />
        <meta name="ICBM" content="true" />
        <meta name="next-head-count" content="32" />
        <link rel="canonical" href={header?.canonicalUrl || ""} />
      </Head>
      <Layout>
        {/* Hero */}
        <section className="heading py-10 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto flex justify-center w-10/12 md:w-11/12 ">
              <div className="md:w-7/12">
                <h1 className=" text-[50px] green-last md:text-[60px] text-center text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ">
                  {hero.heading}
                </h1>
                <p className=" text-[20px] md:text-[26px] text-[#023A51] mt-4">
                  {hero.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="heading my-10 md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex w-10/12 md:w-11/12  ">
              <div className="flex flex-col md:flex-row items-center mx-auto justify-between">
                <div className="md:mr-20 w-[100%] md:w-[45%]">
                  <Image
                    className="rounded-xl"
                    src={WhoWeAre.image.data[0].attributes.url}
                    layout="responsive"
                    objectFit="cover"
                    width={WhoWeAre.image.data[0].attributes.width}
                    height={WhoWeAre.image.data[0].attributes.height}
                    alt={WhoWeAre.image.data[0].attributes.name}
                  />
                </div>
                <div className="text-[#023A51]  w-[100%] md:w-[45%]">
                  <p className="text-[30px] text-[#2cbc63] font-bold my-10 ">
                    {WhoWeAre.lable.name}
                  </p>
                  <p className=" text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] ">
                    {WhoWeAre.heading}
                  </p>
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="text-[22px] my-10 " {...props} />
                      ),
                    }}
                  >
                    {WhoWeAre.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Working at a firm like */}
        <section className="heading md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex w-10/12 md:w-11/12  ">
              <div className="md:flex items-center mx-auto justify-between">
                <div className="text-[#023A51] md:mr-10 md:w-[50%] ">
                  <p className=" text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] ">
                    {danaJohnson.heading}
                  </p>
                  <p className="text-[22px] my-10 ">{danaJohnson.message}</p>
                  <p className="text-[18px] py-3">
                    <span className="font-bold">{danaJohnson.name}</span>{' '}
                    {danaJohnson.roll}
                  </p>
                </div>
                <div className="md:w-[40%]">
                  <Image
                    className="rounded-xl "
                    src={danaJohnson.image.data.attributes.url}
                    layout="responsive"
                    width={danaJohnson.image.data.attributes.width}
                    height={danaJohnson.image.data.attributes.height}
                    alt={danaJohnson.image.data.attributes.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values. */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-[#023A51] flex flex-col md:flex-row items-center w-10/12 md:w-11/12 ">
              <div className="pt-[40px] flex flex-wrap justify-around md:w-[55%] md:order-none order-1 w-[100%] ">
                {ourValue.value_cards.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 w-[100%] sm:w-[48%] "
                    >
                      <div className="text-[26px] text-[#2cbc63]">
                        {React.createElement(Fontawesome[item.iconClassName])}
                      </div>
                      <p className="text-[24px] text-[#2cbc63] ">
                        {item.title}
                      </p>
                      <p className="text-[18px]  ">{item.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="md:w-[45%] md:ml-10 order-none md:order-1 ">
                <p className="text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ">
                  {ourValue.heading}
                </p>

                <p className="text-[20px] ">{ourValue.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits. */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
              <p className="text-[50px] md:text-[60px] text-center font-bold leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ">
                {Benefits.heading}
              </p>

              <div className="flex flex-wrap justify-around w-[100%] ">
                {Benefits.benefit.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 w-[100%] sm:w-[48%] md:w-[32%] "
                    >
                      <div className="text-[26px] text-[#2cbc63]">
                        {React.createElement(Fontawesome[item.iconClass])}
                      </div>
                      <p className="text-[24px] text-[#2cbc63] ">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Current openings. */}
        <section className="heading bg-[#f9fafb] md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
              <p className="text-[50px] md:text-[60px] text-center font-bold leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ">
                {opennings.heading}
                <span className="text-[#2cbc63]">.</span>
              </p>

              <div className="flex flex-wrap justify-around w-[100%] ">
                {opennings.single_openings.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="bg-[#fff] p-6 rounded mb-4 w-[100%] sm:w-[48%] md:w-[24%] shadow "
                    >
                      <p className="text-[22px] font-bold text-[#023A51] ">
                        {item.title}
                      </p>
                      <p className="text-[20px] font-thin text-[#59667d] ">
                        {item.location}
                      </p>
                      <br />
                      <Link href={item.button_href} passHref>
                        <a className="text-[22px] text-[#2cbc63]">
                          {item.apply_button_text}
                        </a>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  var contents
  const query = qs.stringify({
    populate: {
      header: {
          populate: '*'
      },
      hero: {
          populate: '*'
      },
      WhoWeAre: {
          populate: '*'
      },
      ourValue: {
          populate: '*'
      },
      Benefits: {
          populate: '*'
      },
      heading: {
          populate: "*"
      },
      danaJohnson: {
          populate: '*'
      },
      opennings: {
          populate: '*'
      }
  },
  })
  await axios
    .get(`https://humbletitan-strapi.herokuapp.com/api/careers-page?${query}`)
    .then(({ data }) => {
      contents = JSON.parse(JSON.stringify(data))
    })
    .catch((error) => {
      console.log(error)
    })
  return {
    props: {
      contents: contents,
    },
  }
}
