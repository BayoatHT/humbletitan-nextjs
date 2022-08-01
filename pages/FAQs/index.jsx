import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import axios from 'axios'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn'

export default function index({ contents }) {
  const { faqs, hero, header, requestAQuote_section } = contents.data.attributes
  return (
    <>
      <Head>
        <title>{header.title}</title>
        <meta name="description" content={header?.description} />
        <meta
          name="keywords"
          content="stocks, Marketing Consultant, SEO, polictics,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="humbletitan.com" />
        <meta charset="UTF-8" />
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

export const getServerSideProps = async () => {
  var contents
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/faqs-page`)
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
