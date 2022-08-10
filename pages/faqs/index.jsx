import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import axios from 'axios'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn'
import qs from 'qs'


export default function Index({ contents }) {
  const { faqs, hero, header, requestAQuote_section } = contents.data.attributes
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
        <section className="heading py-10 md:py-10 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto flex justify-center w-10/12 md:w-11/12 ">
              <div className=" md:w-7/12">
                <h1 className=" text-[50px] md:text-[60px] text-center text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ">
                  {hero.heading}
                </h1>
                <p className=" text-[20px] md:text-[26px] text-[#023A51] mt-4">
                  {hero.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="heading my-10 md:my-20 ">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto  w-10/12 md:w-11/12 bg-[#f9fafb] rounded ">
              <div className="md:flex flex-wrap text-[#023A51] justify-around">
                {faqs.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className=" rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10"
                    >
                      <p className="text-[26px] font-semibold leading-[40px] ">
                        {item.question}
                      </p>
                      <p className="text-[20px] py-3">{item.answer}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Request a qoute */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-center  w-10/12 md:w-11/12 ">
              <h2 className="text-[40px] font-semibold text-[#023A51] md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] md:px-10">
                {requestAQuote_section.mainHeading}
              </h2>
              <p className="text-[26px] text-[#2cbc63] md:text-[35px] mt-4 leading-[35px] md:leading-[44px] tracking-[-2px] md:px-10">
                {requestAQuote_section.heading2}
              </p>
              <div className="my-6 flex justify-center">
                <Green_rounded_btn
                  href={requestAQuote_section.actionButton.href}
                >
                  {requestAQuote_section.actionButton.label}
                </Green_rounded_btn>
              </div>
              <p className="text-[16px] text-[#023A51]">
                {requestAQuote_section.textBellow}
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const getServerSideProps = async ({req, res}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const query = qs.stringify({
    populate: {
      header: {
          populate: '*'
      },
      hero: {
          populate: '*'
      },
      faqs: {
          populate: '*'
      },
      requestAQuote_section: {
          populate: '*'
      }
  },
  })
  var contents
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/faqs-page?${query}`)
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