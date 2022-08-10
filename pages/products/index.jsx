import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import axios from 'axios'
import qs from 'qs'
import Green_rounded_btn_outlined from '../../components/buttons/Green_rounded_btn_outlined';

import Deliverable1 from '../../assets/imgs/1-Deliverable-Data-Studio.jpg'
import Deliverable2 from '../../assets/imgs/2-Deliverable-onpage.jpg'
import Deliverable3 from '../../assets/imgs/3-Deliverable-schema.jpg'
import Deliverable4 from '../../assets/imgs/4-Deliverable-keyword-map.jpg'
import Deliverable5 from '../../assets/imgs/5-Deliverable-keyword-list.jpg'
import Deliverable6 from '../../assets/imgs/6-Deliverable-site-architechture.jpg'
import Deliverable7 from '../../assets/imgs/7-Deliverable-technical-audit.jpg'
import Deliverable8 from '../../assets/imgs/8-Deliverable-backlink-audit.jpg'
import Deliverable9 from '../../assets/imgs/9-Deliverable-blog-content.jpg'
import Deliverable10 from '../../assets/imgs/10-Deliverable-competitor-analysis.jpg'
import Deliverable11 from '../../assets/imgs/11-Deliverable-competitor-gap-analysis.jpg'
import Deliverable12 from '../../assets/imgs/12-Deliverable-internal-link-audit.jpg'
import Deliverable13 from '../../assets/imgs/13-Deliverable-infographic-design.jpg'
import Deliverable14 from '../../assets/imgs/14-Deliverable-new-landing-design.jpg'
import Deliverable15 from '../../assets/imgs/15-Deliverable-featured-snippet-audit.jpg'
import Deliverable16 from '../../assets/imgs/16-Deliverable-HTML-sitemap-design.jpg'
import Deliverable17 from '../../assets/imgs/17-Deliverable-Search-console-and-analytics.jpg'
import Deliverable18 from '../../assets/imgs/18-Deliverable-core-web-vitals.jpg'
import Deliverable19 from '../../assets/imgs/19-Deliverable-image-optimizations.jpg'
import Deliverable20 from '../../assets/imgs/20-Deliverable-page-speed-optimizations.jpg'
import Deliverable21 from '../../assets/imgs/21-Deliverable-content-planner.jpg'


import serviceIconLong from '../../assets/imgs/service-Icon-long.jpg'
import ProductPolitics from '../../assets/imgs/2-Product-Politics-in-pocket.jpg'
import ProductHumbleTrader from '../../assets/imgs/3-Product-Humble-Trader.jpg'
import ProductHTCMS from '../../assets/imgs/4-Product-HT-CMS.jpg'
import ProductTheHumbleMind from '../../assets/imgs/5-Product-The-Humble-mind.jpg'
import ProductLanguageApp from '../../assets/imgs/6-Product-Language-App.jpg'

import { FaChevronDown } from 'react-icons/fa'
import DiscoverMore from '../../components/DiscoverMore'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn';

export default function Products({ contents }) {
    const { header, hero, explore, other_products, products_list, requestAQuote_section } = contents.data.attributes
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
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='md:w-7/12' >
                                <h1 className=' text-[50px] md:text-[60px] text-center text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >{hero.heading}</h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>{hero.description}</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* We are elite digital marketing experts. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>

                            {/* Choose a solution for your brand’s site below: */}
                            <div className='flex justify-center'>
                                <div className='p-10 bg-[#eefaf3] w-[80%] mt-10 rounded-xl'>
                                    <p className='text-[24px] text-[#2cbc63] font-bold  '>{products_list.heading}</p>
                                </div>
                            </div>


                            <div className='mx-auto text-[#023A51] py-20 flex flex-wrap justify-between '>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6  ' >
                                    <p className='text-[30px] text-[#2cbc63] leading-[35px] p-2' >{products_list.heading2}</p>
                                    <p className='text-[30px] leading-[35px] p-2' >{products_list.description}</p>
                                </div>

                                {
                                    products_list.product_cards.map((item) => {
                                        return (
                                            <div key={item.id} className=' sm:w-[49%] lg:w-[32%] w-[100%] flex flex-col items-center mb-6 border rounded-lg p-5 md:p-10 '>
                                                <Image
                                                    className="rounded-xl"
                                                    src={item.image.data.attributes.url}
                                                    alt={item.image.data.attributes.name}
                                                    width={item.image.data.attributes.width}
                                                    height={item.image.data.attributes.height}
                                                />
                                                <p className=' text-[24px] md:text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >{item.title}</p>
                                                <p className='text-[20px] text-[#59667d] text-left py-2' >{item.description}</p>
                                                <div className='mt-5'>
                                                    <Green_rounded_btn_outlined href={item.link.href} >{item.link.label}</Green_rounded_btn_outlined>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </section>






                {/* We are building cool stuff. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>

                            {/* Keep an eye out for what’s coming: */}
                            <div className='flex justify-center'>
                                <div className='p-10 bg-[#eefaf3] w-[80%] mt-10 rounded-xl'>
                                    <p className='text-[24px] text-[#2cbc63] font-bold  '>{other_products.heading}</p>
                                </div>
                            </div>


                            <div className='mx-auto text-[#023A51] py-20 flex flex-wrap justify-between '>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6  ' >
                                    <p className='text-[30px] text-[#2cbc63] leading-[35px] p-2' >{other_products.heading2}</p>
                                    <p className='text-[30px] leading-[35px] p-2' >{other_products.description}</p>
                                </div>
                                {
                                    other_products.product_cards.map((item) => {
                                        return (
                                            <div key={item.id} className=' sm:w-[49%] lg:w-[32%] w-[100%] flex flex-col items-center mb-6 border rounded-lg p-5 md:p-10 '>
                                                <Image
                                                    className="rounded-xl"
                                                    src={item.image.data.attributes.url}
                                                    alt={item.image.data.attributes.name}
                                                    width={item.image.data.attributes.width}
                                                    height={item.image.data.attributes.height}
                                                />
                                                <p className=' text-[24px] md:text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >{item.title}</p>
                                                <p className='text-[20px] text-[#59667d] text-left py-2' >{item.description}</p>
                                                {
                                                    item.link && (
                                                        <div className='mt-5'>
                                                            <Green_rounded_btn_outlined href={item.link?.href ? item.link?.href : "#"} >{item.link?.label}</Green_rounded_btn_outlined>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </section>

                {/* Request a qoute */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-center  w-10/12 md:w-11/12 '>
                            <p className='text-[40px] font-bold text-[#023A51] md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] md:px-10' >{requestAQuote_section.mainHeading}</p>
                            <p className='text-[26px] text-[#2cbc63] md:text-[35px] mt-4 leading-[35px] md:leading-[44px] tracking-[-2px] md:px-10' >{requestAQuote_section.heading2}</p>
                            <div className='my-6 flex justify-center'>
                                <Green_rounded_btn href={requestAQuote_section.actionButton.href ? requestAQuote_section.actionButton.href : ""} >{requestAQuote_section.actionButton.label}</Green_rounded_btn>
                            </div>
                            <p className='text-[16px] text-[#023A51]'>{requestAQuote_section.textbellow}</p>
                        </div>
                    </div>
                </section>


                <DiscoverMore />
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
            hero: {
                populate: '*'
            },
            products_list: {
                populate: {
                    product_cards: {
                        populate: '*'
                    }
                }
            },
            other_products: {
                populate: {
                    product_cards: {
                        populate: '*'
                    }
                }
            },
            requestAQuote_section: {
                populate: '*'
            },
            explore: {
                populate: {
                    Offerings: {
                        populate: '*'
                    }
                }
            },
        },
    })
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/products-page?${query}`)
        .then(({ data }) => {
            contents = JSON.parse(JSON.stringify(data))
        }).catch((error) => {
            console.log(error)
        })
    return {
        props: {
            contents: contents
        }
    }
}