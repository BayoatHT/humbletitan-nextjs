import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import * as Fontawesome from 'react-icons/fa'
import GetAQuoteCopy from '../../components/GetAQuoteCopy'
import Green_rounded_btn_outlined from '../../components/buttons/Green_rounded_btn_outlined'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn_outlined'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import qs from 'qs'

export default function About({ contents }) {
  const {
    header,
    hero,
    ht_digital_services,
    meetTheTeam_section,
    ourOffices,
    ourValue_section,
    overview,
    section_with_image,
    section_with_image_left,
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
        <meta name="twitter:image" content={header?.twitter_image || ""} />
        <meta name="twitter:url" content={header?.twitter_url || ""} />
        <meta itemProp="image" content={header?.itemProp_image || ""} />
        <meta itemProp="name" content={header?.itemProp_name || ""} />
        <meta itemProp="description" content={header?.itemProp_description || ""} />
        <meta name="geo.region" content={header?.geo_region || ""} />
        <meta name="geo.placename" content={header?.geo_placename || ""} />
        <meta name="geo.position" content={header?.geo_position || ""} />
        <meta name="ICBM" content="true" />
        <meta name="next-head-count" content="32" />
        <link rel="canonical" href={header?.canonicalUrl || ''} />
      </Head>
      <Layout>
        {/* Hero */}
        <section className="heading  bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto w-10/12 md:w-11/12 ">
              <div className="pt-[40px] ">
                <h1 className=" text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 md:pt-10 mb-10   leading-[69px] ">
                  {hero.heading}
                </h1>
                <div className="flex flex-col md:flex-row items-center md:mt-20 justify-around mb-20 pb-10 ">
                  {hero.heroImage.data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={` md:mx-3 my-2  ${
                          index == 1 ? 'order-2' : ''
                        }`}
                      >
                        <Image
                          className="rounded-xl"
                          src={item.attributes.url}
                          alt={item.attributes.name}
                          width={item.attributes.width}
                          height={item.attributes.height}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="heading my-10 md:my-20 ">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex justify-center w-10/12 md:w-11/12 ">
              <div className=" md:w-8/12 text-[#023A51] ">
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => (
                      <h2
                        className="text-[45px] md:text-[55px] pt-3 md:pt-10  font-bold leading-[69px] tracking-[-2px] "
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-[45px] md:text-[55px] pt-3 md:pt-10  font-bold leading-[69px] tracking-[-2px] "
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-[25px] md:text-[35px] pt-3 md:pt-10 font-bold  md:leading-[50px]"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-[22px] my-4" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-[22px] text-[#2cbc63] hover:text-underline "
                        {...props}
                      />
                    ),
                  }}
                >
                  {overview}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="heading md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex w-10/12 md:w-11/12  ">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:ml-20 order-2 md:order-1 my-10">
                  <Image
                    className="rounded-xl"
                    src={section_with_image.image.data[0].attributes.url}
                    alt={section_with_image.image.data[0].attributes.name}
                    width={section_with_image.image.data[0].attributes.width}
                    height={section_with_image.image.data[0].attributes.height}
                  />
                </div>
                <div className="text-[#023A51] w-[100%] lg:pl-20  ">
                  <p className="text-[26px] font-bold font-bold my-10 text-[#2cbc63] ">
                    {section_with_image.lable.name}
                  </p>
                  <h2 className=" text-[45px] md:text-[55px] font-medium leading-[50px] md:leading-[60px] tracking-[-2px] ">
                    {section_with_image.heading}
                  </h2>
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="text-[22px] my-4" {...props} />
                      ),
                    }}
                  >
                    {section_with_image.description}
                  </ReactMarkdown>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Companies */}
        <section className="heading md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto text-center w-10/12 md:w-11/12 text-[#023A51] ">
              <p className=" text-[26px] md:text-[24px]  py-4 block font-semibold text-center ">
                {trustedByCompanies.title}
              </p>
              <div className="flex flex-col md:flex-row items-center justify-around pb-10 md:py-10 ">
                {trustedByCompanies.companyLogos.data.map((item, index) => {
                  return (
                    <div key={index}>
                      <Image src={item.attributes.url} alt={item.attributes.name}
                    width={item.attributes.width}
                    height={item.attributes.height} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values. */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 bg-[#e0ecf0] py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-[#023A51]  md:flex items-center w-10/12 md:w-11/12 ">
              <div className="md:w-5/10 ">
                <p className="text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ">
                  {ourValue_section.heading}
                </p>

                <p className="text-[20px] pr-10 ">
                  {ourValue_section.description}
                </p>
              </div>
              <div className="pt-[40px] md:flex  justify-around md:w-5/10 ">
                <div className="md:flex flex-wrap justify-around ">
                  {ourValue_section.value_cards.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-[#fff] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] "
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
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team. */}
        <section className="heading py-20 bg-[#f9fafb]">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <h1 className=" text-[50px] md:text-[60px] text-center leading-[69px] md:leading-[50px] tracking-[-2px] py-20 pt-[80px] text-[#023A51] ">
              {meetTheTeam_section.heading}
            </h1>
            <div className="flex flex-wrap text-[#023A51] justify-around">
              {meetTheTeam_section.person.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" rounded-xl w-[90%] sm:w-[45%] md:w-[30%]  mb-10 "
                  >
                    <Image
                      className="rounded-xl"
                      src={item.image.data.attributes.url}
                      alt={item.image.data.attributes.name}
                      width={item.image.data.attributes.width}
                      height={item.image.data.attributes.height}
                    />
                    <p className="text-[30px] ">{item.name}</p>
                    <p className="text-[20px] ">{item.roll}</p>
                    <div className=" flex items-center mt-4 ">
                      {item.social_links.map((item) => {
                        return (
                          <div key={item.id} className="text-[24px] mr-4 ">
                            {React.createElement(Fontawesome[item.iconClass])}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="heading md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex w-10/12 md:w-11/12  ">
              <div className="flex flex-col lg:flex-row items-center mx-auto justify-between">
                <div className="lg:ml-20 order-2 md:order-1 mt-10">
                  <Image
                    className="rounded-xl"
                    src={section_with_image_left.image.data[0].attributes.url}
                    alt={section_with_image_left.image.data[0].attributes.name}
                    width={section_with_image_left.image.data[0].attributes.width}
                    height={section_with_image_left.image.data[0].attributes.height}
                  />
                </div>
                <div className="text-[#023A51] w-[100%] md:pl-20  ">
                  <p className="text-[26px] font-bold my-10 text-[#2cbc63] ">
                    {section_with_image_left.lable.name}
                  </p>
                  <p className=" text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] ">
                    {section_with_image_left.heading}
                  </p>
                  <p className="text-[20px] my-10 ">
                    {section_with_image_left.description}
                  </p>
                  <div className='flex '>

                  {section_with_image_left.actionButton.style ==
                  'green-outlined' ? (
                    <Green_rounded_btn_outlined
                      href={section_with_image_left.actionButton.href}
                    >
                      {section_with_image_left.actionButton.label}
                    </Green_rounded_btn_outlined>
                  ) : (
                    <Green_rounded_btn>
                      {section_with_image_left.actionButton.label}
                    </Green_rounded_btn>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offices */}
        <section className="heading py-20 bg-[#f9fafb]">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <p className=" text-[50px] md:text-[60px] text-center leading-[69px] md:leading-[50px] tracking-[-2px] md:py-20 pt-[80px] text-[#023A51] ">
              {ourOffices.heading}
            </p>
            <div className="flex flex-wrap text-[#023A51] justify-around my-10">
              <div className=" rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ">
                <p>Address</p>
              </div>
              <div className="rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ">
                <p>Address</p>
              </div>
              <div className="rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ">
                <p>Address</p>
              </div>
            </div>

            <div className=" text-[#023A51] ">
              <div className="flex flex-wrap md:flex-row justify-around">
                {ourOffices.office.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] "
                    >
                      <p className="text-[26px] ">{item.title}</p>
                      <p className="text-[20px]">{item.address}</p>
                      <br />
                      <Link href={"#"} passHref ><a className="text-[20px] text-[#2cbc63]">Contact us</a></Link>
                    </div>
                  )
                })}
              </div>

              <br />
              <div className="text-center flex justify-center">
                <Green_rounded_btn_outlined
                  href={ourOffices.action_button[0].href}
                >
                  {ourOffices.action_button[0].label}
                </Green_rounded_btn_outlined>
              </div>
            </div>
          </div>
        </section>

        {/* Get a Quote */}
        <GetAQuoteCopy data={ht_digital_services} />
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
      section_with_image: {
          populate: '*'
      },
      trustedByCompanies: {
          populate: '*'
      },
      ourValue_section: {
          populate: '*'
      },
      meetTheTeam_section: {
          populate: {
              person: {
                  populate: '*'
              }
          }
      },
      section_with_image_left: {
          populate: '*'
      },
      ourOffices: {
          populate: '*'
      },
      ht_digital_services: {
          populate: '*'
      },
  },
  })
  await axios
    .get(`https://humbletitan-strapi.herokuapp.com/api/about?${query}`)
    .then(({ data }) => {
      contents = data
    })
    .catch((error) => {
      console.log(error)
    })
  return {
    props: {
      contents: JSON.parse(JSON.stringify(contents)),
    },
  }
}
