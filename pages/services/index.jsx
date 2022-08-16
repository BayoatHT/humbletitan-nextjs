import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import { FaCheck, FaChartLine, FaUserTie, FaStar } from 'react-icons/fa'
import { GiElectric } from 'react-icons/gi'
import GetAQuote from '../../components/GetAQuote'
import axios from 'axios';
import Link from 'next/link'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn'
import * as Fontawesome from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import qs from 'qs'


import industriesniche from '../../assets/imgs/industries-niche.jpg'




export default function Services({ contents }) {
    const { header, IndustriesWeServe, bayo_quote, cotactUs, ht_digital_services, ourValue, services_cards, top_section } = contents.data.attributes
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


                {/* services */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold my-10 text-[#2cbc63] ' >{top_section.lable.name}</p>
                                    <h1 className=' text-[50px] font-bold md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>{top_section.heading}</h1>
                                    <br />
                                    <p className='text-[22px] ' >{top_section.description}</p>

                                </div>
                                <div className='md:ml-20 md:w-[50%] mt-10 md:mt-0 ' >
                                    <div className='p-2'>
                                        <Image className='rounded-xl' 
                                        src={top_section.image.data[0].attributes.url} 
                                        alt={top_section.image.data[0].attributes.name}
                                        width={top_section.image.data[0].attributes.width}
                                        height={top_section.image.data[0].attributes.height}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Elite services at your disposal. */}
                <section className='heading bg-[#f9fafb] my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='text-[#023A51] py-12 ' >
                                <h2 className=' text-[40px] md:text-[50px] text-center font-bold leading-[45px] md:leading-[59px] tracking-[-2px] '>{services_cards.heading}</h2>
                                <br />
                                <div className='md:flex justify-around flex-wrap w-[100%] '>
                                    {
                                        services_cards.serviceCards.map((item) => {
                                            return (
                                                <div key={item.id} className='rounded-lg bg-[#fff] px-6 md:px-10 py-6 pb-10 shadow-lg md:w-[45%] w-[100%] mb-12 '>
                                                    <div className="flex justify-center w-[100%]">
                                                        <Image 
                                                        src={item.image.data.attributes.url} 
                                                        alt={item.image.data.attributes.name}
                                                        width={item.image.data.attributes.width}
                                                        height={item.image.data.attributes.height}
                                                        />

                                                    </div>
                                                    <h2 className='text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px] tracking-[-2px] ' >{item.title}</h2>
                                                    <br />
                                                    <p className='text-[#59667d] text-[20px] md:text-[22px]  '>{item.description}</p>
                                                    <br />
                                                    {
                                                        item.features.map((item) => {
                                                            return (
                                                                <div key={item.id}>

                                                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />{item.text}</p>
                                                                    <br />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    <br />
                                                    <div className=''>
                                                        <div className='font-bold w-[100%] flex justify-center '>
                                                            <Green_rounded_btn href={item.actionButton.href}  >{item.actionButton.label}</Green_rounded_btn>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* contact us */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 flex justify-center md:w-11/12  '>
                            <div className='text-[#023A51] flex flex-col items-center text-center w-[100%] md:w-[70%]  ' >
                                <h2 className=' text-[30px] md:text-[36px] font-bold leading-[39px] md:leading-[48px] tracking-[-1px] '>{cotactUs.text}</h2>
                                <br />
                                <p className='text-[22px] text-[#59667d] ' >{cotactUs.text2}</p>
                                <br />
                                <Green_rounded_btn href={cotactUs.actionButton.href} >{cotactUs.actionButton.label}</Green_rounded_btn>
                            </div>
                        </div>
                    </div>
                </section>



                {/* HT Testimonial Bayo */}
                <section className='heading my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='flex flex-col md:flex-row items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[45%] mb-5 order-1 md:order-none ' >
                                    <div className='p-2'>
                                        <Image className='rounded-xl' 
                                        src={bayo_quote.image.data.attributes.url}
                                        alt={bayo_quote.image.data.attributes.name}
                                        width={bayo_quote.image.data.attributes.width}
                                        height={bayo_quote.image.data.attributes.height}
                                         />
                                    </div>
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[45%]  ' >
                                    <Image src={bayo_quote.logo.data.attributes.url}
                                     alt={bayo_quote.logo.data.attributes.name}
                                     width={bayo_quote.logo.data.attributes.width}
                                     height={bayo_quote.logo.data.attributes.height}
                                     />
                                    <p className=' text-[40px] md:text-[50px] font-bold leading-[50px] md:leading-[59px] tracking-[-1px] '>{bayo_quote.heading}</p>
                                    <br />
                                    <ReactMarkdown className='text-[22px] ' >{bayo_quote.message}</ReactMarkdown>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] py-3' ><span className='font-bold text-[#023A51] ' >{bayo_quote.name}</span> <br />{bayo_quote.roll}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Values. */}
                <section className='heading md:my-20  '>
                    <div className=" container w-12/12 bg-[#023A51] shadow-xl py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#fff]  md:flex items-center w-10/12 md:w-11/12 '>
                            <div className='md:w-5/10 ' >
                                <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] font-bold tracking-[-2px] py-10  ' >{ourValue.heading}</p>

                                <p className='text-[20px] pr-10 '  >{ourValue.description}</p>
                            </div>
                            <div className='pt-[40px] md:flex flex-wrap justify-around md:w-5/10 '>
                                <div className='flex flex-wrap justify-around'>
                                    {
                                        ourValue.value_cards.map((item) => {
                                            return (
                                                <div key={item.id} className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] ' >
                                                    <div className=' text-[26px]'>
                                                        {React.createElement(Fontawesome[item.iconClassName ? item.iconClassName : 'FaMinus'])}
                                                    </div>
                                                    <p className='text-[24px] font-bold ' >{item.title}</p>
                                                    <p className='text-[18px]  ' >{item.description}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* Industries we serve */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold my-10 text-[#2cbc63] ' >{IndustriesWeServe.lable.name}</p>
                                    <h2 className=' text-[40px] md:text-[50px] font-bold leading-[50px] md:leading-[59px] tracking-[-1px] '>{IndustriesWeServe.heading}</h2>
                                    <br />
                                    <p className='text-[22px] ' >{IndustriesWeServe.description}</p>
                                    <br />
                                    <Green_rounded_btn href={IndustriesWeServe.actionButton.href} >{IndustriesWeServe.actionButton.label}</Green_rounded_btn>
                                </div>
                                <div className='md:ml-20 md:w-[50%] mt-10 md:mt-0 ' >
                                    <Image className='rounded-xl' 
                                    src={IndustriesWeServe.image.data[0].attributes.url}
                                    alt={IndustriesWeServe.image.data[0].attributes.name}
                                    width={IndustriesWeServe.image.data[0].attributes.width}
                                    height={IndustriesWeServe.image.data[0].attributes.height}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* htDigitalMarketingService */}
                <GetAQuote />
            </Layout>
        </>
    )
}

export const getServerSideProps = async () => {
    var contents;

    const query = qs.stringify({
        populate: {
            header: {
                populate: '*'
            },
            top_section: {
                populate: '*'
            },
            cotactUs: {
                populate: '*'
            },
            bayo_quote: {
                populate: '*'
            },
            ourValue: {
                populate: '*'
            },
            IndustriesWeServe: {
                populate: "*"
            },
            ht_digital_services: {
                populate: '*'
            },
            services_cards: {
                populate: {
                    serviceCards: {
                        populate: '*'
                    }
                }
            },
        },
    })
    await axios.get(`https://humbletitan-strapi.herokuapp.com/api/services-page?${query}`)
        .then(({ data }) => {
            contents = data
        }).catch((error) => {
            console.log(error)
        })
    return {
        props: {
            contents: JSON.parse(JSON.stringify(contents))
        }
    }
} 
