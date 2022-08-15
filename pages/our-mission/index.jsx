import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import qs from 'qs'
// import htMissionThisIsChange from '../../assets/imgs/ht-mission-this-is-change.jpg'
// import htMissionContentCreation from '../../assets/imgs/ht-mission-content-creation-400x174.jpg'
// import htMissionSeo from '../../assets/imgs/ht-mission-seo-400x174.jpg'
// import htMissionWebDevelopment from '../../assets/imgs/ht-mission-web-development-400x174.jpg'
// import htMissionCommunityLeadership from '../../assets/imgs/ht-mission-community-leadership-400x174.jpg'



import { FaAngleDown } from 'react-icons/fa'
import DiscoverMore from '../../components/DiscoverMore';
import ReactMarkdown from 'react-markdown';

export default function OurMission({ contents }) {
    const {
        hero,
        header,
        donate,
        discover_how,
        discover_more,
        discover_those_we_plan_to_impact,
        discover_what_we_teach,
        discover_why_and_where,
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
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='md:w-7/12' >
                                <p className='text-[22px] font-bold pb-4 text-[#2cbc63] '>{hero.label.name}</p>
                                <h1 className=' text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >{hero.heading}</h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>{hero.description}</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Donate to our cause */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='md:flex items-center justify-around'>
                                <div className='bg-[#fff] transition p-4 md:p-10 flex flex-col items-center rounded mb-2 md:w-[50%] ' >

                                    <h2 className='text-[30px] font-bold md:text-[40px] text-[#59667d] pt-3 leading-[38px] md:leading-[48px] ' >{donate.heading1}</h2>
                                    <h2 className='text-[30px] font-bold md:text-[40px] text-[#00989e] pt-3 leading-[38px] md:leading-[48px] ' >{donate.heading2}</h2>
                                </div>
                                <div className=' md:p-10 mb-2 md:w-[48%] '>

                                    <div className='rounded-xl bg-[#f5f5f7] p-10  '>
                                        <p className='text-[30px] font-bold md:text-[40px] text-center text-[#023A51] py-3 leading-[38px] md:leading-[48px] ' >{donate.imageTitle}</p>
                                        <div className='rounded-xl bg-[#fff] p-6  '>
                                            <Image className='rounded-xl' 
                                            src={donate.image.data.attributes.url} 
                                            alt={donate.image.data.attributes.name}
                                            width={donate.image.data.attributes.width}
                                            height={donate.image.data.attributes.height}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* We strive for the remarkable, */}
                            <div className='flex justify-center mt-5'>
                                <div className=' md:w-8/12 text-[#59667d]  '>
                                    <ReactMarkdown components={{
                                        h1: ({ node, ...props }) => <h2 className="text-[45px] md:text-[55px] pt-3 md:pt-10   leading-[69px] tracking-[-2px] " {...props} />,
                                        h2: ({ node, ...props }) => <h2 className="text-[45px] md:text-[55px] pt-3 md:pt-10   leading-[69px] tracking-[-2px] " {...props} />,
                                        h3: ({ node, ...props }) => <h3 className="text-[25px] md:text-[35px] pt-3 md:pt-10   md:leading-[50px]" {...props} />,
                                        p: ({ node, ...props }) => <p className="text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px]" {...props} />,
                                        a: ({ node, ...props }) => <a className="text-[22px] text-[#2cbc63] hover:text-underline " {...props} />,
                                    }} >
                                        {donate.details}
                                    </ReactMarkdown>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* Discover what we’ll teach */}
                <section className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>{discover_what_we_teach.title}</p>
                                <FaAngleDown className='text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* skills we plan to share */}
                            <div className='text-[#59667d] md:w-9/12 my-10 '>
                                <p className=' text-[50px] md:text-[60px] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 ' >{discover_what_we_teach.features.heading}</p>

                                <ReactMarkdown
                                    components={{
                                        p: ({ node, ...props }) => <p className="text-[26px] md:text-[30px] py-3 mb-2 leading-[40px] md:leading-[50px]" {...props} />,
                                    }}
                                >
                                    {discover_what_we_teach.features.description}
                                </ReactMarkdown>

                            </div>


                            <div className='flex flex-wrap text-[#023A51] justify-around' >
                                {
                                    discover_what_we_teach.features.feature.map((item) => {
                                        return (
                                            <Link key={item.id} href={item.link ? item.link : "#"} passHref >
                                                <a className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                                    <p className='text-[35px] '>{item.title}</p>
                                                    <p className='text-[22px] py-3 pb-6 text-[#59667d]' >{item.description}</p>
                                                    <Image className='rounded-xl'
                                                        src={item.image.data.attributes.url} 
                                                        alt={item.image.data.attributes.name}
                                                        width={item.image.data.attributes.width}
                                                        height={item.image.data.attributes.height}
                                                         />
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>




                {/* Discover how */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>{discover_how.title}</p>
                                <FaAngleDown className='text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* How we plan to make an impact */}

                            <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >{discover_how.features.heading}</p>
                            <div className='flex flex-wrap text-[#023A51] justify-around' >
                                {
                                    discover_how.features.feature.map((item) => {
                                        return (
                                            <Link key={item.id} href={item.link ? item.link : "#"} passHref >
                                                <a className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                                    <p className='text-[35px] '>{item.title}</p>
                                                    <p className='text-[22px] py-3 pb-6 text-[#59667d]' >{item.description}</p>
                                                    <Image className='rounded-xl' 
                                                    src={item.image.data.attributes.url} 
                                                    alt={item.image.data.attributes.name}
                                                    width={item.image.data.attributes.width}
                                                    height={item.image.data.attributes.height}
                                                    />
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>

                        </div>





                    </div>
                </section>




                {/* Discover why and where */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>{discover_why_and_where.title}</p>
                                <FaAngleDown className='text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* What drives us */}
                            <div className='text-[#59667d] md:w-9/12 my-10 '>
                                <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >{discover_why_and_where.features.heading2}</p>
                                <ReactMarkdown
                                    components={{
                                        p: ({ node, ...props }) => <p className="text-[26px] md:text-[30px] py-3 mb-2 leading-[40px] md:leading-[50px]" {...props} />,
                                    }}
                                >
                                    {discover_why_and_where.features.description}
                                </ReactMarkdown>
                            </div>



                        </div>





                    </div>
                </section>



                {/* Where we want to work */}
                <section className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >{discover_why_and_where.features.heading}</p>
                            <div className='flex flex-wrap text-[#023A51] justify-around' >
                                {
                                    discover_why_and_where.features.feature.map((item) => {
                                        return (
                                            <Link key={item.id} href={item.link ? item.link : "#"} passHref >
                                                <a className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                                    <p className='text-[35px] '>{item.title}</p>
                                                    <p className='text-[22px] py-3 pb-6 text-[#59667d]' >{item.description}</p>
                                                    <Image className='rounded-xl' 
                                                    src={item.image.data.attributes.url} 
                                                    alt={item.image.data.attributes.name}
                                                    width={item.image.data.attributes.width}
                                                    height={item.image.data.attributes.height}
                                                    />
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>


                        </div>





                    </div>
                </section>



                {/* Discover those we plan to impact */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>{discover_those_we_plan_to_impact.title}</p>
                                <FaAngleDown className='text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* One person at a time */}
                            <div className='text-[#59667d] w-9/12 my-10 '>
                                <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >{discover_those_we_plan_to_impact.features.heading2}</p>

                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >{discover_those_we_plan_to_impact.features.description}</p>
                                <br />
                            </div>


                            {/* We’ll be nurturing the brilliant minds of … */}
                            <div className='text-[#59667d] w-9/12 my-10 '>
                                <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >{discover_those_we_plan_to_impact.features.heading}</p>

                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >We’d like to reduce the number of human beings who experience a fight for survival as a way of life. We provide free training to help turn passion into a living.</p>
                                <br />
                            </div>

                            <div className='flex flex-wrap text-[#023A51] mt-10 justify-around' >
                                {
                                    discover_those_we_plan_to_impact.features.feature.map((item) => {
                                        return (
                                            <Link key={item.id} href={item.link ? item.link : "#"} passHref >
                                                <a className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                                    <p className='text-[35px] '>{item.title}</p>
                                                    <p className='text-[22px] py-3 pb-6 text-[#59667d]' >{item.description}</p>
                                                    <Image className='rounded-xl' 
                                                    src={item.image.data.attributes.url} 
                                                    alt={item.image.data.attributes.name}
                                                    width={item.image.data.attributes.width}
                                                    height={item.image.data.attributes.height}
                                                    />
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>

                        </div>





                    </div>
                </section>





                {/* Discover more */}
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
            donate: {
                populate: '*'
            },
            discover_what_we_teach: {
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
            discover_how: {
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
            discover_why_and_where: {
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
            discover_those_we_plan_to_impact: {
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
            discover_more: {
                populate: {
                    offerings: {
                        populate: '*'
                    }
                }
            },
        },
    })
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/our-mission?${query}`)
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