import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'

import htMissionThisIsChange from '../../assets/imgs/ht-mission-this-is-change.jpg'
import htMissionContentCreation from '../../assets/imgs/ht-mission-content-creation-400x174.jpg'
import htMissionSeo from '../../assets/imgs/ht-mission-seo-400x174.jpg'
import htMissionWebDevelopment from '../../assets/imgs/ht-mission-web-development-400x174.jpg'
import htMissionCommunityLeadership from '../../assets/imgs/ht-mission-community-leadership-400x174.jpg'
import htMissionWebManagement from '../../assets/imgs/ht-mission-web-management-400x174.jpg'
import htMissionDataManagement from '../../assets/imgs/ht-mission-data-management-400x174.jpg'
import htMissionBuildCenters from '../../assets/imgs/ht-mission-build-centers-400x174.jpg'
import htMissionInstallInfrastructure from '../../assets/imgs/ht-mission-install-infrastructure-400x174.jpg'
import htMissionOfferFreeTraining from '../../assets/imgs/ht-mission-offer-free-training-400x174.jpg'
import htMissionSelectTheBest from '../../assets/imgs/ht-mission-select-the-best-400x174.jpg'
import htMissionAfrica from '../../assets/imgs/ht-mission-africa-400x174.jpg'
import htMissionSouthAmerica from '../../assets/imgs/ht-mission-south-america-400x174.jpg'
import htMissionStudents from '../../assets/imgs/ht-mission-students-400x174.jpg'
import htMissionProfessionals from '../../assets/imgs/ht-mission-professionals-400x174.jpg'
import htMissionEntrepreneurs from '../../assets/imgs/ht-mission-entrepreneurs-400x174.jpg'
import htMissionLeaders from '../../assets/imgs/ht-mission-leaders-400x174.jpg'


import { FaAngleDown } from 'react-icons/fa'
import DiscoverMore from '../../components/DiscoverMore';
import ReactMarkdown from 'react-markdown';

export default function OurMission({ contents }) {
    console.log(contents)
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
                                            <img className='rounded-xl' src={donate.image.data.attributes.url} alt="image" />
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
                                                    <img className='rounded-xl' src={item.image.data.attributes.url} alt="image" />
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
                                                    <img className='rounded-xl' src={item.image.data.attributes.url} alt="image" />
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                            </div>

                            {/* <div className='md:flex flex-wrap text-[#023A51] mt-10 justify-around' >
                                
                                <div className=' rounded-xl  md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-12 ' >
                                    <p className='text-[50px] text-[#59667d] '>1.</p>
                                    <div className=' text-center mb-10'>
                                        <p className='text-[30px] md:text-[36px] leading-[40px] md:leading-[46px] py-3 pb-6 text-[#023A51] ' >Build HT Center near universities or in densely populated areas</p>
                                        <Image className='rounded-xl' src={htMissionBuildCenters} alt="image" />
                                    </div>

                                </div>
                                <div className=' rounded-xl  md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-12 ' >
                                    <p className='text-[50px] text-[#59667d] '>2.</p>
                                    <div className=' text-center mb-10'>
                                        <p className='text-[30px] md:text-[36px] leading-[40px] md:leading-[46px] py-3 pb-6 text-[#023A51] ' >Build HT Center near universities or in densely populated areas</p>
                                        <Image className='rounded-xl' src={htMissionInstallInfrastructure} alt="image" />
                                    </div>

                                </div>
                                <div className=' rounded-xl  md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-12 ' >
                                    <p className='text-[50px] text-[#59667d] '>3.</p>
                                    <div className=' text-center mb-10'>
                                        <p className='text-[30px] md:text-[36px] leading-[40px] md:leading-[46px] py-3 pb-6 text-[#023A51] ' >Build HT Center near universities or in densely populated areas</p>
                                        <Image className='rounded-xl' src={htMissionOfferFreeTraining} alt="image" />
                                    </div>

                                </div>
                                <div className=' rounded-xl  md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-12 ' >
                                    <p className='text-[50px] text-[#59667d] '>4.</p>
                                    <div className=' text-center mb-10'>
                                        <p className='text-[30px] md:text-[36px] leading-[40px] md:leading-[46px] py-3 pb-6 text-[#023A51] ' >Build HT Center near universities or in densely populated areas</p>
                                        <Image className='rounded-xl' src={htMissionSelectTheBest} alt="image" />
                                    </div>

                                </div>
                            </div> */}

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
                                                    <img className='rounded-xl' src={item.image.data.attributes.url} alt="image" />
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
                                                    <img className='rounded-xl' src={item.image.data.attributes.url} alt="image" />
                                                </a>
                                            </Link>
                                        )
                                    })
                                }
                                {/* <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Students</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >We prepare young professionals for competition in a digital world. We work with universities to establish paid internships.</p>
                                    <Image className='rounded-xl' src={htMissionStudents} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Professionals</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >We’ve made it clear we plan to teach professional skills. What we haven’t mentioned is as our platform evolves, we hope to establish a space where talent may display their portfolio, making it easier to acquire future work.</p>
                                    <Image className='rounded-xl' src={htMissionProfessionals} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Entrepreneurs</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >There are many ways to generate an income online. We don’t promise wealth but exposure to avenues of generating an online revenue stream.</p>
                                    <Image className='rounded-xl' src={htMissionEntrepreneurs} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Leaders</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >Not only will we go over the theory of becoming an effective leader, but we also aim to offer opportunities that expose talent to real-world responsibilities.</p>
                                    <Image className='rounded-xl' src={htMissionLeaders} alt="image" />
                                </div> */}
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
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/our-mission`)
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