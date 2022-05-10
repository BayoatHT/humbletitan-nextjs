import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import { GiClockwork, GiNetworkBars } from 'react-icons/gi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { CgWorkAlt } from 'react-icons/cg'
import GetAQuote from '../../components/GetAQuote'


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




export default function Services() {
    return (
        <>
            <Head>
                <title>Services - Humble Titan</title>
            </Head>
            <Layout>


                {/* services */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold my-10 text-[#2cbc63] ' >Services</p>
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>Humble Titan Digital Services<span className='text-[#2cbc63]'>.</span></h1>
                                    <br />
                                    <p className='text-[22px] ' >We&apos;re here to help. Get in touch to discover how we deliver the remarkable like no other agency can.</p>

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={Digitalmarketingservicesfeatured} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Elite services at your disposal. */}
                <section className='heading bg-[#f9fafb] md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='text-[#023A51] py-12 ' >
                                <h2 className=' text-[40px] md:text-[50px] text-center font-bold leading-[45px] md:leading-[59px] tracking-[-2px] '>Elite services at your disposal. <br /> Make your selection below<span className='text-[#2cbc63]'>...</span></h2>
                                <br />
                                <div className='md:flex justify-around flex-wrap w-[100%] '>
                                    <div className='rounded-lg bg-[#fff] px-10 p-6 shadow-lg md:w-[45%] w-[100%] mb-12 '>
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
                                            <button className='green_roudend_btn font-bold w-[100%] '>Discover More</button>

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
                                            <button className='green_roudend_btn font-bold w-[100%] '>Discover More</button>

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
                                            <button className='green_roudend_btn font-bold w-[100%] '>Discover More</button>

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
                                            <button className='green_roudend_btn font-bold w-[100%] '>Discover More</button>

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
                                            <button className='green_roudend_btn font-bold w-[100%] '>Discover More</button>

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
                                            <button className='green_roudend_btn font-bold w-[100%] '>Discover More</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* contact us */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 flex justify-center md:w-11/12  '>
                            <div className='text-[#023A51] text-center w-[100%] md:w-[70%]  ' >
                                <h1 className=' text-[30px] md:text-[36px] font-bold leading-[39px] md:leading-[48px] tracking-[-1px] '>Have an online desire that needs <br /> addressing<span className='text-[#2cbc63]'>?</span></h1>
                                <br />
                                <p className='text-[22px] text-[#59667d] ' >Backed by 11 years of experience, we are ready to offer simple <br /> and effective solutions to your complex problems.</p>
                                <br />
                                <button className='green_roudend_btn font-bold' >Contact us</button>
                            </div>
                        </div>
                    </div>
                </section>



                {/* HT Testimonial Bayo */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[45%] ' >
                                    <Image className='rounded-xl p-10' src={HTTestimonialBayo} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[45%]  ' >
                                    <Image src={HTLogoIcons} alt='image' />
                                    <p className=' text-[40px] md:text-[50px] font-bold leading-[50px] md:leading-[59px] tracking-[-1px] '>Let us put our passion for business, politics, and marketing to work for you<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[22px] ' >Lots of marketers like to tell you what they can do for you. It’s my hope that this website shows you our level of expertise, and how much we can deliver.</p>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] py-3' ><span className='font-bold text-[#023A51] ' >Bayo Adesina, MBA</span> <br /> Founder - Hemisferio</p>
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
                                <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] font-bold tracking-[-2px] py-10  ' >Humble Titan Digital. Our Values<span className='text-[#2cbc63]'>.</span></p>

                                <p className='text-[20px] pr-10 '  >We believe lasting success is founded on a set of principles clients can always count on. As a family business, we are eager to welcome you as one of our own.</p>
                            </div>
                            <div className='pt-[40px] md:flex flex-wrap justify-around md:w-5/10 '>
                                <div className='md:flex justify-around'>
                                    <div className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] ' >
                                        <GiClockwork className='text-[26px] ' />
                                        <p className='text-[24px] font-bold ' >Creativity</p>
                                        <p className='text-[18px]  ' >We embrace the opportunity to solve your challenge.</p>
                                    </div>
                                    <div className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] '>
                                        <GiNetworkBars className='text-[26px] ' />
                                        <p className='text-[24px] font-bold ' >Passion</p>
                                        <p className='text-[18px]' >Your success means as much to us as it does to you.</p>
                                    </div>
                                </div>
                                <div className='md:flex justify-around'>
                                    <div className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] '>
                                        <VscWorkspaceTrusted className='text-[26px] ' />
                                        <p className='text-[24px] font-bold ' >Professionalism</p>
                                        <p className='text-[18px]' >Respect and Integrity are among our fundamentals.</p>
                                    </div>
                                    <div className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] '>
                                        <CgWorkAlt className='text-[26px] ' />
                                        <p className='text-[24px] font-bold ' >Value-centricity</p>
                                        <p className='text-[18px]' >We cut out the fluff and focus on providing a service that makes a difference.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* Industries we serve */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold my-10 text-[#2cbc63] ' >Industries we serve</p>
                                    <h1 className=' text-[40px] md:text-[50px] font-bold leading-[50px] md:leading-[59px] tracking-[-1px] '>Extensive range of specialty and niche industries experience<span className='text-[#2cbc63]'>.</span></h1>
                                    <br />
                                    <p className='text-[22px] ' >The most sensitive aspect of our work is getting to know you and your vision. Aside from that, we are ready to stun you with our commitment to excellence. Whether you are a for-profit, charity, political campaign, e-commerce, educational platform or other. Get in touch.</p>
                                    <br />
                                    <button className='green_roudend_btn' >View all Industries</button>
                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={industriesniche} alt="image" />
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
