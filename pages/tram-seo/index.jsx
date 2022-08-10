import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import * as Fontawesome from 'react-icons/fa'
import ReactMarkdown from 'react-markdown';
import blogInsights from '../../assets/imgs/blog-insights.png'
import qs from 'qs'


import { FaChevronRight } from 'react-icons/fa'
import GetAQuote from '../../components/GetAQuote';
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn';
import Green_rounded_btn_outlined from '../../components/buttons/Green_rounded_btn_outlined';

export default function TramSeo({ contents }) {
    const { header, Hero, exploreFreeCourse, ht_digital_services, otherCoreOfferings, seo_courses_cards, tramPackages, tramSeoLessons } = contents.data.attributes

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


                {/* hero */}
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>{Hero.heading}</h1>
                                    <br />
                                    <p className='text-[22px] ' >{Hero.description}</p>
                                    <br />
                                    <div className='my-6'>
                                        <Green_rounded_btn href={Hero.actionButton.href} className='green_rounded_btn' >{Hero.actionButton.label}</Green_rounded_btn>

                                    </div>

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl' 
                                    src={Hero.image.data[0].attributes.url} 
                                    alt={Hero.image.data[0].attributes.name}
                                    width={Hero.image.data[0].attributes.width}
                                    height={Hero.image.data[0].attributes.height}
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Begin your SEO Education */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] md:w-[31%]  ' >
                                    <h2 className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>{seo_courses_cards.heading}</h2>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >{seo_courses_cards.description}</p>
                                    <br />


                                </div>
                                <div className='md:ml-20 md:flex flex-wrap justify-between text-[#023A51] w-[100%] md:w-[65%] ' >
                                    <div className=' w-[100%] border rounded-xl divide-y-4 divide-[#f8cf33] divide-solid p-6 ' style={{ backgroundImage: 'linear-gradient(180deg, #e0ecf0 0%,#ffffff 100%)', backgroundPosition: 'left top', backgroundRepeat: 'no-repeat' }} >
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>{seo_courses_cards.heading2}</p>
                                        <p className=' text-[26px] md:text-[36px] pt-4 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>{seo_courses_cards.heading3}</p>
                                    </div>
                                    {
                                        seo_courses_cards.seoCourseCards.map((item) => {
                                            return (
                                                <div key={item.id} className='p-6 rounded-lg border shadow my-6 w-[100%] lg:w-[49%] '  >
                                                    <div className='flex justify-center'>
                                                        <Image 
                                                            src={item.image.data.attributes.url} 
                                                            alt={item.image.data.attributes.name}
                                                            width={item.image.data.attributes.width}
                                                            height={item.image.data.attributes.height}
                                                        />

                                                    </div>
                                                    <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>{item.title}</p>
                                                    <p className='text-[22px] text-[#59667d] ' >{item.description}</p>
                                                    <br />
                                                    <div className='flex justify-center'>
                                                        <Green_rounded_btn href={item.actionButton.href} className='green_rounded_btn w-[100%] '>{item.actionButton.label}</Green_rounded_btn>

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


                {/* Choose your TRAM Package */}
                <section className='heading pb-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <p className=' text-[50px] text-[#023A51] md:text-[60px] py-20 text-center leading-[50px] md:leading-[69px] tracking-[-2px] '>{tramPackages.heading}</p>
                            <div className='md:flex mx-auto items-start justify-around' >
                                {
                                    tramPackages.tramSinglePackage.map((item) => {
                                        return (
                                            <div key={item.id} className='text-[#023A51] mb-8 bg-[#f2f3f5] p-2 w-[100%] md:w-[30%] group ' >
                                                <div className='border divide-y-2 divide-solid ' >
                                                    <p className='bg-[#65bc7b] text-[#fff] text-[36px] font-bold text-center py-3 ' >{item.title}</p>
                                                    <div>
                                                        {
                                                            item.Price.toLowerCase() == 'free' ? (
                                                                <p className='text-[#65bc7b] flex justify-center text-[50px] md:text-[75px] leading-[79px] font-bold text-center py-4 ' >{item.Price} </p>
                                                            ) : (
                                                                <p className='text-[#65bc7b] flex justify-center text-[50px] md:text-[75px] leading-[79px] font-bold text-center py-4 ' ><span className='text-[#59667d] text-[30px] ' >$</span>{item.Price}<span className='text-[30px] text-[#65bc7b] ' >99</span> </p>

                                                            )
                                                        }
                                                        {
                                                            item.description && (
                                                                <p className='text-[24px] text-center font-bold italic text-[#59667d] pb-4 ' >{item.description}</p>
                                                            )
                                                        }
                                                    </div>

                                                    {
                                                        item.packageFeatures.map((item) => {
                                                            return (
                                                                <p key={item.id} className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >{item.name}</p>

                                                            )
                                                        })
                                                    }
                                                    <div className='flex justify-center '>
                                                        <Green_rounded_btn href={item.actionButton.href} className='green_rounded_btn my-2' >{item.actionButton.label}</Green_rounded_btn>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>


                            <div className='rounded-xl bg-[#d1e8e5] mx-auto md:w-[70%] p-4 md:flex justify-between items-center '>
                                <p className='text-[24px] text-[#2cbc63] font-bold ' >Rather trust us to manage your website?</p>
                                <br />
                                <Link href="/contact" passHref>
                                    <a className='green_rounded_btn'> Talk to us! </a>

                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Humble Titan Core offerings. */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] md:w-[31%]  ' >
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>{otherCoreOfferings.heading}</p>
                                    <br />
                                </div>
                                <div className='md:ml-20 md:flex flex-wrap justify-between text-[#023A51] w-[100%] md:w-[65%] ' >
                                    {
                                        otherCoreOfferings.otherOfferingsCards.map((item) => {
                                            return (
                                                <div key={item.id} className='p-6 rounded-lg border shadow my-6 w-[100%] md:w-[49%] '  >
                                                    <div className='flex flex-col items-center'>
                                                        <Image className='rounded-xl' 
                                                        src={item.image.data.attributes.url} 
                                                        alt={item.image.data.attributes.name}
                                                        width={item.image.data.attributes.width}
                                                        height={item.image.data.attributes.height}
                                                         />
                                                        <p className=' text-[26px] md:text-[36px] py-4 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>{item.title}</p>
                                                    </div>
                                                    <p className='text-[22px] text-[#59667d] ' >{item.description}</p>
                                                    <br />
                                                    <div className='flex justify-center'>
                                                        <Green_rounded_btn href={item.actionButton.href} className='green_rounded_btn w-[100%] '>{item.actionButton.label}</Green_rounded_btn>
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


                {/* Explore the Free SEO Course. */}
                <section className='heading bg-[#023a51] py-20 text-[#fff] '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className=' w-[100%] md:w-[50%]  ' >
                                    <p className=' text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] '>{exploreFreeCourse.heading}</p>
                                    <br />
                                    <p className='text-[22px] text-[#2cbc63] font-bold ' >{exploreFreeCourse.description}</p>
                                    <br />
                                    <ReactMarkdown
                                        components={{
                                            p: ({ node, ...props }) => <p className="text-[22px] mb-6" {...props} />
                                        }}
                                    >
                                        {exploreFreeCourse.details}
                                    </ReactMarkdown>

                                    <br />
                                    <Green_rounded_btn href={exploreFreeCourse.actionButton.href} >{exploreFreeCourse.actionButton.label}</Green_rounded_btn>

                                </div>
                                <div className='md:ml-20 md:w-[50%] mt-10 md:mt-0 ' >
                                    <Image className='rounded-xl' 
                                    src={exploreFreeCourse.image.data.attributes.url} 
                                    alt={exploreFreeCourse.image.data.attributes.name}
                                    width={exploreFreeCourse.image.data.attributes.width}
                                    height={exploreFreeCourse.image.data.attributes.height}
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Check out sample TRAM SEO lessons below */}
                <section className='heading bg-[#f9fafb] py-10 md:py-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='flex flex-col items-center mb-20 ' >
                                <div className='md:w-[50%] text-center'>
                                    <p className=' text-[40px] text-[#023A51] font-bold md:text-[50px] mb-4 leading-[50px] md:leading-[59px] tracking-[-2px] '>{tramSeoLessons.heading}</p>
                                </div>
                            </div>
                            <div className='md:flex flex-wrap mx-auto items-start justify-center' >
                                {
                                    tramSeoLessons.seoLessonCard.map((item) => {
                                        return (
                                            <div key={item.id} className=' text-[#023A51] shadow bg-[#fff] rounded w-[100%] md:w-[25%] p-4 py-10 mb-8 ' >
                                                <p className='green-first text-[26px] font-bold md:text-[36px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>{item.title}</p>
                                                <br />
                                                {
                                                    item.features.map((item) => {
                                                        return (
                                                            <p key={item.id} className='text-[18px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[14px] mr-[12px]' color='#2cbc63' />{item.text}</p>
                                                        )
                                                    })
                                                }
                                                <br />

                                                <div className='flex justify-center'>
                                                    <Green_rounded_btn href={item.actionButton.href} >{item.actionButton.label}</Green_rounded_btn>

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex justify-center mt-10'>

                                <Green_rounded_btn_outlined href={tramSeoLessons.viewAllBtn.href} >{tramSeoLessons.viewAllBtn.label}</Green_rounded_btn_outlined>
                            </div>
                        </div>
                    </div>
                </section>


                {/* On the cutting edge. */}
                <section className='heading my-10 py-10 bg-[#f9fafb] md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto items-center justify-around' >
                                <div className='text-[#023A51] w-[100%] md:w-[64%]  ' >
                                    <h2 className=' text-[40px] text-center md:text-[50px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>On the cutting edge<span className='text-[#2cbc63]'>.</span></h2>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus. Quisque eros quam, aliquet.</p>
                                    <br />
                                    <div className='flex flex-wrap justify-around'>
                                        <div className=' text-center w-[48%] mb-6 '>
                                            <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>30</p>
                                            <p className='text-[22px] text-[#59667d] ' >Years of experience</p>
                                        </div>
                                        <div className=' text-center w-[48%] mb-6 '>
                                            <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>4,054</p>
                                            <p className='text-[22px] text-[#59667d] ' >Connections</p>
                                        </div>
                                        <div className=' text-center w-[48%] mb-6 '>
                                            <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>1200</p>
                                            <p className='text-[22px] text-[#59667d] ' >Clients</p>
                                        </div>
                                        <div className=' text-center w-[48%] mb-6 '>
                                            <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>89</p>
                                            <p className='text-[22px] text-[#59667d] ' >Countries Served</p>
                                        </div>

                                    </div>


                                </div>
                                <div className='md:ml-20 md:flex flex-wrap justify-between text-[#023A51] w-[100%] md:w-[33%] ' >

                                    <div className='p-6 bg-[#fff] rounded-lg border shadow my-6 w-[100%]'  >
                                        <Image src={blogInsights} alt="image" />
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Business Insights</p>
                                        <p className='text-[22px] text-[#59667d] ' >Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus quisque.</p>
                                        <br />
                                        <button className='green_rounded_btn w-[100%] '>Read the blog</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



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
            Hero: {
                populate: '*'
            },
            seo_courses_cards: {
                populate: {
                    seoCourseCards: {
                        populate: "*"
                    }
                }
            },
            tramPackages: {
                populate: {
                    tramSinglePackage: {
                        populate: "*"
                    }
                }
            },
            otherCoreOfferings: {
                populate: {
                    otherOfferingsCards: {
                        populate: "*"
                    }
                }
            },
            exploreFreeCourse: {
                populate: '*'
            },
            tramSeoLessons: {
                populate: {
                    seoLessonCard: {
                        populate: '*'
                    },
                    viewAllBtn: {
                        populate: '*'
                    }
                }
            },
            ht_digital_services: {
                populate: '*'
            },
        },
    })
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/tram-seo?${query}`)
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
