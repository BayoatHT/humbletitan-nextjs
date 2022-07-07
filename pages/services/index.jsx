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


import Digitalmarketingservicesfeatured from '../../assets/imgs/Digital-marketing-services-featured-600x586.jpg'
import WebDesignht from '../../assets/imgs/Web-Design-ht-4-400x400.png'
import SEOht from '../../assets/imgs/SEO-ht-4-400x400.png'
import ContentMarketinght from '../../assets/imgs/Content-Marketing-ht-4-400x400.png'
import webManagmentht from '../../assets/imgs/web-Managment-ht-4-400x400.png'
import DueDiligenceht from '../../assets/imgs/Due-Diligence-ht-4-400x400.png'
import Educationht from '../../assets/imgs/Education-ht-4-400x400.png'
import HTTestimonialBayo from '../../assets/imgs/HT-Testimonial-Bayo-600x585.jpg'
import HTLogoIcons from '../../assets/imgs/HT-Logo-Icons.png'
import industriesniche from '../../assets/imgs/industries-niche.jpg'




export default function Services({ contents }) {
    const { header, IndustriesWeServe, bayo_quote, cotactUs, ht_digital_services, ourValue, services_cards, top_section } = contents.data.attributes
    return (
        <>
            <Head>
                <title>{header.title}</title>
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
                                        <img className='rounded-xl' src={top_section.image.data[0].attributes.url} alt="image" />
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
                                                <div key={item.id} className='rounded-lg bg-[#fff] px-10 p-6 pb-10 shadow-lg md:w-[45%] w-[100%] mb-12 '>
                                                    <div className="flex justify-center w-[100%]">
                                                        <img src={item.image.data.attributes.url} alt="image" />

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
                                    {/* <div className='rounded-lg bg-[#fff] px-10 p-6 shadow-lg md:w-[45%] w-[100%] mb-12 '>
                                        <Image src={WebDesignht} alt="image" />
                                        <h2 className='text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px] tracking-[-2px] ' >Web Design</h2>
                                        <br />
                                        <p className='text-[#59667d] text-[20px] md:text-[22px]  '>More than design. We transform your vision into an online reality.</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Translate your Brand Online</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Establish web presence</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />User-friendly & Modern Design</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' /> The Latest Web Technology </p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' /> Websites for All Verticals </p>
                                        <br />
                                        <div className='flex justify-center'>
                                            <button className='green_rounded_btn font-bold w-[100%] '>Discover More</button>

                                        </div>
                                    </div>
                                    <div className='rounded-lg bg-[#fff] px-10 p-6 shadow-lg md:w-[45%] w-[100%] mb-12 '>
                                        <Image src={SEOht} alt="image" />
                                        <h2 className='text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px] tracking-[-2px] ' >Search Engine Optimization</h2>
                                        <br />
                                        <p className='text-[#59667d] text-[20px] md:text-[22px]  '>Extend your brand’s organic reach. Attract thousands of new visitors to your website.</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Technical Web Optimization</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Meta Data & Content Optimization</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Web Authority Optimization</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' /> Web Performance Monitoring </p>
                                        <br />
                                        <div className='flex justify-center'>
                                            <button className='green_rounded_btn font-bold w-[100%] '>Discover More</button>

                                        </div>
                                    </div>
                                    <div className='rounded-lg bg-[#fff] px-10 p-6 shadow-lg md:w-[45%] w-[100%] mb-12 '>
                                        <Image src={ContentMarketinght} alt="image" />
                                        <h2 className='text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px] tracking-[-2px] ' >Content Marketing</h2>
                                        <br />
                                        <p className='text-[#59667d] text-[20px] md:text-[22px]  '>With a focus on engagement, we specialize in brand elevating web content.</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Diverse Offering of Content</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Decisions backed by Research and Data</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Team of Experienced Professionals</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' /> Thorough Quality Checks</p>
                                        <br />
                                        <div className='flex justify-center'>
                                            <button className='green_rounded_btn font-bold w-[100%] '>Discover More</button>

                                        </div>
                                    </div>
                                    <div className='rounded-lg bg-[#fff] px-10 p-6 shadow-lg md:w-[45%] w-[100%] mb-12 '>
                                        <Image src={webManagmentht} alt="image" />
                                        <h2 className='text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px] tracking-[-2px] ' >Web Management</h2>
                                        <br />
                                        <p className='text-[#59667d] text-[20px] md:text-[22px]  '>Let’s take care of your bsuiness. We will manage the day-to-day operations of your website.</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Deep Client Relationships</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />SWOT Analysis</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Market, Trends, and Competitor Insights</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' /> Constant Reporting and Feedback</p>
                                        <br />
                                        <div className='flex justify-center'>
                                            <button className='green_rounded_btn font-bold w-[100%] '>Discover More</button>

                                        </div>
                                    </div>
                                    <div className='rounded-lg bg-[#fff] px-10 p-6 shadow-lg md:w-[45%] w-[100%] mb-12 '>
                                        <Image src={DueDiligenceht} alt="image" />
                                        <h2 className='text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px] tracking-[-2px] ' >Due Diligence Reports</h2>
                                        <br />
                                        <p className='text-[#59667d] text-[20px] md:text-[22px]  '>Discover the real value of the business behind stocks. Invest wisely.</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Company Profiles</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Financial Ratios</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Historic Performance</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Growth Overview</p>
                                        <br />
                                        <div className='flex justify-center'>
                                            <button className='green_rounded_btn font-bold w-[100%] '>Discover More</button>

                                        </div>
                                    </div>
                                    <div className='rounded-lg bg-[#fff] px-10 p-6 shadow-lg md:w-[45%] w-[100%] mb-6 md:mb-12 '>
                                        <Image src={Educationht} alt="image" />
                                        <h2 className='text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px] tracking-[-2px] ' >Education</h2>
                                        <br />
                                        <p className='text-[#59667d] text-[20px] md:text-[22px]  '>Empower yourself with the knowledge and confidence to manage your future.</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />TRAM SEO Course</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Business Education</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Economics Education</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Politcal Education</p>
                                        <br />
                                        <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaCheck className='translate-y-2  mr-[12px]' color='#2cbc63' />Life Skills</p>
                                        <br />
                                        <div className='flex justify-center'>
                                            <button className='green_rounded_btn font-bold w-[100%] '>Discover More</button>

                                        </div> 
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* contact us */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 flex justify-center md:w-11/12  '>
                            <div className='text-[#023A51] text-center w-[100%] md:w-[70%]  ' >
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
                                        <img className='rounded-xl' src={bayo_quote.image.data.attributes.url} alt="image" />
                                    </div>
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[45%]  ' >
                                    <img src={bayo_quote.logo.data.attributes.url} alt='image' />
                                    <p className=' text-[40px] md:text-[50px] font-bold leading-[50px] md:leading-[59px] tracking-[-1px] '>{bayo_quote.heading}</p>
                                    <br />
                                    <p className='text-[22px] ' >{bayo_quote.message}</p>
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
                                    <img className='rounded-xl' src={IndustriesWeServe.image.data[0].attributes.url} alt="image" />
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
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/services-page`)
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
