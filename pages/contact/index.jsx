import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import axios from 'axios'

import * as Fontawesome from 'react-icons/fa'
import Brands from '../../components/Brands'
import ReactMarkdown from 'react-markdown'

export default function Contact({ contents }) {
  console.log(contents)
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
        <title>{header.title}</title>
        <meta name="description" content={header?.description} />
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
                <div className=" bg-[#fff] rounded-xl p-4 md:p-10 ">
                  <div className="md:flex justify-between py-4">
                    <div>
                      <label
                        className="text-[#34495E] my-6 md:py-3 text-[20px] "
                        htmlFor="name"
                      >
                        Name *
                      </label>
                      <input
                        className="block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%] "
                        type="text"
                        required
                        placeholder="John Stuart"
                      />
                    </div>
                    <div>
                      <label
                        className="text-[#34495E] py-3 text-[20px] "
                        htmlFor="name"
                      >
                        Phone *
                      </label>
                      <input
                        className="block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%] "
                        type="tel"
                        required
                        placeholder="(123)-456-7890"
                      />
                    </div>
                  </div>
                  <div className="md:flex justify-between py-4">
                    <div>
                      <label
                        className="text-[#34495E] py-3 text-[20px]"
                        htmlFor="name"
                      >
                        Email address *
                      </label>
                      <input
                        className="block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%]"
                        type="text"
                        required
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        className="text-[#34495E] py-3 text-[20px]"
                        htmlFor="name"
                      >
                        Service interested in *
                      </label>
                      <select
                        className="block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] md:w-[90%]"
                        required
                        placeholder="(123)-456-7890"
                      >
                        <option value="search engine optimization">
                          Search Engine Optimaization
                        </option>
                        <option value="web design">Web Design</option>
                        <option value="content marketing">
                          Content Marketing
                        </option>
                        <option value="website management">
                          Website management
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="py-4 ">
                    <div>
                      <label
                        className="text-[#34495E] py-3 text-[20px]"
                        htmlFor="subject"
                      >
                        Subject
                      </label>
                      <input
                        className="block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] "
                        type="text"
                        placeholder="Quote request for"
                      />
                    </div>
                  </div>
                  <div className="py-4 ">
                    <div>
                      <label
                        className="text-[#34495E] py-3 text-[20px]"
                        htmlFor="subject"
                      >
                        How can we help?
                      </label>
                      <textarea
                        className="block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] "
                        type="text"
                        placeholder="I need help with the next problem"
                      ></textarea>
                    </div>
                  </div>
                  <div className="py-4 ">
                    <div>
                      <button className="green_rounded_btn">
                        Get in touch
                      </button>
                    </div>
                  </div>
                </div>
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
                  <img
                    src={client_feedback.logo.data.attributes.url}
                    alt="image"
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
                    <img
                      className="rounded-xl"
                      src={client_feedback.image.data.attributes.url}
                      alt="image"
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
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/contact`)
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
