import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import GetAQuote from '../../components/GetAQuote'
import qs from 'qs'

import humblePoliticians from '../../assets/imgs/humble-politicians-400x174.jpg'
import humblePoliticalCampaigns from '../../assets/imgs/humble-political-campaigns-400x174.jpg'
import humbleNgos from '../../assets/imgs/humble-ngos-400x174.jpg'
import humbleCharities from '../../assets/imgs/humble-charities-400x174.jpg'
import homeContentManagementService from '../../assets/imgs/home-content-management-service.jpg'
import homeSeoService from '../../assets/imgs/home-seo-service.jpg'
import homeWebAndMobileDesign from '../../assets/imgs/home-web-and-mobile-design.jpg'
import homeWebManagement from '../../assets/imgs/home-web-management.jpg'
import DigitalServices from '../../assets/imgs/home-content-Humble-Digital-Services.jpg'
import HumbleTrader from '../../assets/imgs/home-content-Humble-Trader.jpg'
import HumbleVoter from '../../assets/imgs/home-content-Humble-Voter.jpg'
import TRAMSEO from '../../assets/imgs/home-content-TRAM-SEO.jpg'
import Humblemind from '../../assets/imgs/home-content-Humble-mind.jpg'

import { FaAngleDown } from 'react-icons/fa'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn'
import DiscoverMore from '../../components/DiscoverMore'

export default function Education({ contents }) {
  const {
    discover_full_seo_course,
    discover_ht_magazine,
    educationalDictionaries,
    explore,
    header,
    hero,
    ht_digital_services,
    ht_mind_mag,
    services_gallery,
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
              <div className="md:w-7/12 pb-6">
                <p className="text-[22px] font-bold pb-4 text-[#2cbc63] ">
                  {hero.label.name}
                </p>
                <h1 className=" text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ">
                  {hero.heading}
                </h1>
                <p className=" text-[20px] md:text-[26px] text-[#023A51] mt-4">
                  {hero.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Dictionaries */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto  w-10/12 md:w-11/12 ">
              <p className=" text-[50px] md:text-[60px] text-[#00989e] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ">
                {educationalDictionaries.heading}
              </p>

              <div className="flex flex-wrap text-[#023A51] justify-around ">
                {educationalDictionaries.feature.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.link ? item.link : '#'}
                      passHref
                    >
                      <a className=" rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10">
                        <p className="text-[35px] ">{item.title}</p>
                        <p className="text-[20px] py-3">{item.description}</p>
                        <Image
                          className="rounded-xl"
                          src={item.image.data.attributes.url}
                          alt={item.image.data.attributes.name}
                          width={item.image.data.attributes.width}
                          height={item.image.data.attributes.height}
                        />
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Discover our full SEO course */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto  w-10/12 md:w-11/12 ">
              <div className="flex flex-col text-[#023A51] items-center">
                <p className="text-[30px] md:text-[40px] font-bold text-[#023A51] ">
                  {discover_full_seo_course.title}
                </p>
                <FaAngleDown className="text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold " />
              </div>

              {/* Learn SEO & Online Success */}

              <p className=" text-[50px] md:text-[60px] text-[#00989e] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ">
                {discover_full_seo_course.features.heading}
              </p>

              <div className="flex flex-wrap text-[#023A51] justify-around">
                {discover_full_seo_course.features.feature.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.link ? item.link : '#'}
                      passHref
                    >
                      <a className=" rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10">
                        <p className="text-[35px] ">{item.title}</p>
                        <p className="text-[20px] py-3">{item.description}</p>
                        <Image
                          className="rounded-xl"
                          src={item.image.data.attributes.url}
                          alt={item.image.data.attributes.name}
                          width={item.image.data.attributes.width}
                          height={item.image.data.attributes.height}
                        />
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Discover the HT Magazine */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto  w-10/12 md:w-11/12 ">
              <div className="flex flex-col text-[#023A51] items-center">
                <p className="text-[30px] md:text-[40px] font-bold text-[#023A51] ">
                  Discover the HT Magazine
                </p>
                <FaAngleDown className="text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold " />
              </div>

              {/* Learn SEO & Online Success */}
              <div className="flex justify-center">
                <div className="p-10 bg-[#eefaf3] w-[80%] mt-10 rounded-xl">
                  <p className="text-[24px] text-[#2cbc63] font-bold  ">
                    Discover what the internet can do for your business or idea.
                  </p>
                  <div className="mt-10">
                    <Green_rounded_btn
                      href="/contact"
                      className="green_rounded_btn mt-4"
                    >
                      Talk to us!
                    </Green_rounded_btn>
                  </div>
                </div>
              </div>

              <p className=" text-[50px] md:text-[60px] text-[#023A51] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ">
                {services_gallery.heading}
              </p>

              <div className="mx-auto text-[#023A51] py-20 flex flex-wrap justify-between text-center ">
                {services_gallery.single_service.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className=" sm:w-[49%] lg:w-[24.5%] w-[100%] mb-10 p-[10px] flex flex-col items-center "
                    >
                      <Image
                        className="rounded-lg"
                        src={item.image.data.attributes.url}
                        alt={item.image.data.attributes.name}
                        width={item.image.data.attributes.width}
                        height={item.image.data.attributes.height}
                      />
                      <h2 className="text-[30px] py-2">{item.title}</h2>
                      <p className="text-[18px] text-left  p-4">
                        {item.details}
                      </p>
                        <Green_rounded_btn href={item.href}>
                          {item.label}
                        </Green_rounded_btn>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* HT Mind Mag */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto  w-10/12 md:w-11/12 ">
              <p className=" text-[50px] md:text-[60px] text-[#00989e] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ">
                {ht_mind_mag.heading}
              </p>

              <div className="flex flex-wrap text-[#023A51] justify-around">
                {ht_mind_mag.feature.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.link ? item.link : '#'}
                      passHref
                    >
                      <a className=" rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10">
                        <p className="text-[35px] ">{item.title}</p>
                        <p className="text-[20px] py-3">{item.description}</p>
                        <Image
                          className="rounded-xl"
                          src={item.image.data.attributes.url}
                          alt={item.image.data.attributes.name}
                          width={item.image.data.attributes.width}
                          height={item.image.data.attributes.height}
                        />
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Discover the HT Magazine */}
        <DiscoverMore title={discover_ht_magazine.title} />

        {/* Ht digital Services */}
        <GetAQuote />
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
      educationalDictionaries: {
          populate: {
              feature: {
                  populate: '*'
              }
          }
      },
      discover_full_seo_course: {
          populate: {
              features: {
                  populate: {
                      feature: {
                          populate: "*"
                      }
                  }
              }
          }
      },
      discover_ht_magazine: {
          populate: {
              features: {
                  populate: {
                      feature: {
                          populate: {
                              image: {
                                populate: "*"
                              }
                          }
                      }
                  }
              }
          }
      },
      services_gallery: {
          populate: {
              single_service: {
                  populate: '*'
              }
          }
      },
      ht_mind_mag: {
          populate: {
              feature: {
                  populate: '*'
              }
          }
      },
      explore: {
          populate: {
              Offerings: {
                  populate: '*'
              }
          }
      },
      ht_digital_services: {
          populate: '*'
      },
  },
  })


  await axios
    .get(`https://humbletitan-strapi.herokuapp.com/api/education?${query}`)
    .then(({ data }) => {
      console.log(data);
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
