import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import GetAQuote from '../../components/GetAQuote'

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
                        <img
                          className="rounded-xl"
                          src={item.image.data.attributes.url}
                          alt="image"
                        />
                      </a>
                    </Link>
                  )
                })}
                {/* <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Business Dictionary</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Economics Dictionary</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>NGOs</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Charities</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                </div> */}
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
                        <img
                          className="rounded-xl"
                          src={item.image.data.attributes.url}
                          alt="image"
                        />
                      </a>
                    </Link>
                  )
                })}

                {/* <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Technical SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Relevance SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Authority SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Monitoring SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                </div> */}
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
                      className=" sm:w-[49%] lg:w-[24.5%] w-[100%] mb-10  "
                    >
                      <img
                        className="rounded-lg"
                        src={item.image.data.attributes.url}
                        alt="image"
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
                {/* <div className=' sm:w-[50%] lg:w-[25%] w-[100%] mb-10  ' >
                                    <Image src={homeWebAndMobileDesign} alt="image" />
                                    <h1 className='text-[30px] py-2' >Web & Mobile <br /> Design</h1>
                                    <p className='text-[18px] text-left  p-4' >More than design. We transform your vision into an online reality.</p>
                                    <button className='text-[#59667d] text-[20px] py-2 font-bold border rounded-[50px] px-10 hover:bg-[#2cbc63] hover:text-[#fff] transition duration-300  ' >Get Design</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[25%] w-[100%] mb-10 '>
                                    <Image src={homeSeoService} alt="image" />
                                    <h1 className='text-[30px] py-2' >Search Engine Optimization</h1>
                                    <p className='text-[18px] text-left p-4' >Extend your brand&apos;s organic reach. Attract thousands of new visitors to your website.</p>
                                    <button className='text-[#fff] text-[20px] py-2 font-bold border rounded-[50px] px-10 bg-[#2cbc63] hover:bg-[#fff] hover:text-[#59667d] transition duration-300  ' >Optimize your site</button>

                                </div>
                                <div className=' sm:w-[50%] lg:w-[25%] w-[100%] mb-10 '>
                                    <Image src={homeContentManagementService} alt="image" />
                                    <h1 className='text-[30px] py-2' >Content <br /> Marketing</h1>
                                    <p className='text-[18px] text-left p-4' >With a focus on engagement, we specialize in brand elevating web content.</p>
                                    <button className='text-[#59667d] text-[20px] py-2 font-bold border rounded-[50px] px-10 hover:bg-[#2cbc63] hover:text-[#fff] transition duration-300  ' >Reach more users</button>

                                </div>
                                <div className=' sm:w-[50%] lg:w-[25%] w-[100%] mb-10 '>
                                    <Image src={homeWebManagement} alt="image" />
                                    <h1 className='text-[30px] py-2' >Website <br /> Management</h1>
                                    <p className='text-[18px] text-left p-4' >Let&apos;s take care of your bsuiness. We will manage the day-to-day operations of your website.</p>
                                    <button className='text-[#59667d] text-[20px] py-2 font-bold border rounded-[50px] px-10 hover:bg-[#2cbc63] hover:text-[#fff] transition duration-300  ' >Get a web manager</button>

                                </div> */}
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
                        <img
                          className="rounded-xl"
                          src={item.image.data.attributes.url}
                          alt="image"
                        />
                      </a>
                    </Link>
                  )
                })}
                {/* <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Activism</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Quotes</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Biographies</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Humble Mind Mag</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                </div> */}
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
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/education`)
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
