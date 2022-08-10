import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout'
import axios from 'axios'

import * as Fontawesome from 'react-icons/fa'
import Brands from '../../components/Brands'
import ReactMarkdown from 'react-markdown'
import ContactForm from '../../components/ContactForm'
import qs from 'qs'

export default function Contact({ contents }) {
  const {
    hero,
    header,
    DanaJohnsonFeedback,
    client_feedback,
    details,
    faqs,
    heading,
    heading_for_faqs,
    label,
    officeInfo,
    trustedByCompanies,
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
        <section className="heading md:py-10 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto flex justify-center w-10/12 md:w-11/12 ">
              <div className="md:w-7/12 text-center py-10 ">
                <h1 className=" text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ">
                  {hero.heading}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="heading md:py-10 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto flex flex-col items-center w-10/12 md:w-11/12 ">
              <div className="md:w-7/12 text-[#023A51] ">
                <h2 className=" text-[40px] font-semibold ">{label}</h2>
                <h2 className=" text-[50px] md:text-[60px] leading-[59px] md:leading-[69px] tracking-[-2px] font-bold ">
                  We’re the elite digital marketing service
                </h2>
              </div>

              {/* contact form  */}
              <div className="md:w-8/12 py-6 md:py-20">
                <ContactForm/>
              </div>

              <div className=" md:w-8/12 ">
                <p className="text-[#023A51] text-[45px] md:text-[60px] font-bold leading-[59px] md:leading-[69px] tracking-[-2px] ">
                  {details}
                </p>
              </div>
            </div>

            <div className="md:flex justify-around text-[#023A51] mt-10 ">
              {officeInfo.info.map((item) => {
                return (
                  <div key={item.id} className="p-6 rounded-lg md:w-[30%]  ">
                    <div className=" flex flex-col items-center">
                      <div className=" mr-4 text-[26px]">
                        {React.createElement(
                          Fontawesome[
                            item.iconClass ? item.iconClass : 'FaMinus'
                          ],
                        )}
                      </div>
                      <h2 className="text-[26px] text-[#023A51] font-bold py-4 ">
                        {item.name}
                      </h2>
                    </div>
                    <ReactMarkdown
                      className="text-center"
                      components={{
                        p: ({ node, ...props }) => (
                          <p className="mr-4 text-[26px] " {...props} />
                        ),
                        a: ({ node, ...props }) => (
                          <a
                            className="hover:text-[#2cbc63] hover:text-underline "
                            {...props}
                          />
                        ),
                      }}
                    >
                      {item.details}
                    </ReactMarkdown>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="heading py-10 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto flex justify-center w-10/12 md:w-11/12 ">
              <div className=" text-center ">
                <h2 className=" text-[40px] md:text-[60px] text-[#023A51] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] ">
                  {heading_for_faqs}
                </h2>
                <div className="flex flex-wrap text-[#023A51] justify-around mt-10 ">
                  {faqs.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className=" rounded-xl md:p-8 md:p-14 md:w-[45%] w-[90%]  mb-6"
                      >
                        <p className="text-[24px] font-bold leading-[30px] ">
                          {item.question}
                        </p>
                        <p className="text-[22px] py-3">{item.answer}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abstract */}
        <section className="heading my-10 md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex w-10/12 md:w-11/12  ">
              <div className="md:flex items-center mx-auto justify-between">
                <div className="text-[#023A51] w-[100%] md:w-[45%] md:pl-20  ">
                  <Image
                    src={client_feedback.logo.data.attributes.url}
                    alt={client_feedback.logo.data.attributes.name}
                    width={client_feedback.logo.data.attributes.width}
                    height={client_feedback.logo.data.attributes.height}
                  />
                  <h2 className=" text-[30px] md:text-[40px] leading-[39px] md:leading-[49px] tracking-[-2px] ">
                    {client_feedback.heading}
                  </h2>
                  <br />
                  <p className="text-[20px] ">{client_feedback.message}</p>
                  <br />
                  <p className="text-[20px] font-bold ">
                    {client_feedback.name}
                  </p>
                  <p className="text-[18px] ">{client_feedback.roll}</p>
                </div>
                <div className="md:mr-22 mt-10 md:mt-0 md:w-[45%]">
                  <div className="p-2">
                    <Image
                      className="rounded-xl"
                      src={client_feedback.image.data.attributes.url}
                      alt={client_feedback.image.data.attributes.name}
                      width={client_feedback.image.data.attributes.width}
                      height={client_feedback.image.data.attributes.height}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Brands />
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
      officeInfo: {
          populate: '*'
      },
      faqs: {
          populate: '*'
      },
      client_feedback: {
          populate: '*'
      },
      trustedByCompanies: {
          populate: "*"
      },
      DanaJohnsonFeedback: {
          populate: '*'
      }
  },
  })
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/contact?${query}`)
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
