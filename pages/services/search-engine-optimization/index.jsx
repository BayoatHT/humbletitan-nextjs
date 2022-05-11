import React from 'react'
import Head from 'next/head'
import Layout from "../../../components/Layout";
import Image from 'next/image'
import { FaChevronRight, FaTools, FaUserTie, FaChartLine, FaStar, FaClipboardCheck, FaChartPie } from 'react-icons/fa'
import { GiElectric } from 'react-icons/gi'
import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'


import HTSeoSizedFeatured from '../../../assets/imgs/HT-seo-sized-featured-600x586.png'
import seoExpectations from '../../../assets/imgs/seo-expectations-600x600.jpg'
import HTLogoRetina from '../../../assets/imgs/HT-Logo-Retina-200x31.png'
import otherContentMarketingService from '../../../assets/imgs/other-content-marketing-service.jpg'
import otherWebDesignService from '../../../assets/imgs/other-web-design-service.jpg'
import otherWebManagementService from '../../../assets/imgs/other-web-management-service.jpg'
import seoImpact from '../../../assets/imgs/seo-impact-600x600.jpg'

export default function SearchEngineOptimization() {
    return (
        <>
            <Head>
                <title>Search Engine Optimization - Humble Titan</title>
            </Head>
            <Layout>


                {/* Search Engine Optimization */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >Search Engine Optimization</p>
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>We drastically improve Google Search Rankings<span className='text-[#2cbc63]'>.</span></h1>
                                    <br />
                                    <p className='text-[22px] ' >Drive high-value traffic to your website. Convert more users and gain the upper hand against competitors.</p>

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={HTSeoSizedFeatured} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <p className=' text-[40px] md:text-[50px] mb-20 text-[#023A51] font-bold text-center leading-[50px] md:leading-[59px] tracking-[-2px] '>Extend online reach. Attract <br /> thousands of new visitors to <br /> your website<span className='text-[#2cbc63]'>.</span></p>
                        <div className='mx-auto md:flex flex-wrap justify-around text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex justify-between md:w-[45%] mb-6  '>
                                <FaTools className='text-[#2cbc63] w-[120px] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold  '>1. Technical Optimization
                                    </p>
                                    <br />
                                    <p className='text-[22px] ' >Amplify your brand. Tell us your strategy, we’ll make sure it resonates with your target audience.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaClipboardCheck className='text-[#2cbc63] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>2. Relevance Optimization</p>
                                    <br />
                                    <p className='text-[22px] ' >Rank for more terms than ever before. Receive recommendations on new page implementation, on-page metadata optimization, and TF-IDF copy. We deliver great content.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaChartLine className='text-[#2cbc63] mr-2 w-[150px] text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>3. Authority Optimization
                                    </p>
                                    <br />
                                    <p className='text-[22px] '>Improve the expertise, authority, and trustworthiness of your site. We deliver campaigns that attract external links to boost your backlink profile. We establish your reputation, setting your brand apart from online competitors.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaChartPie className='text-[#2cbc63] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>4. Monitoring Performance</p>
                                    <br />
                                    <p className='text-[22px] ' >We keep an eye on real-time data from Google and other search engines. We extract and report on critical insights. We make relevant recommendations that allow you to make well-informed marketing decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Web Design expectations */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={seoExpectations} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >What You Can Expect</p>
                                    <p className=' text-[40px] font-bold md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] '>An uplift of web traffic quality and quantity. Better rankings, more online visits<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >We unlock organic web opportunities, shifting business reliance on branded search and paid channels.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >We diligently work to stay ahead of the ever-evolving digital landscape. Not only do we continue to master how computer-programmed algorithms work, but we are also able to diversify your approach to the search. Take advantage of the many features of search engine results pages: featured snippets, voice search, revenue-driving positions, and local SEO.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Brief us on your brand and objectives. We’ll deliver in-depth research on your market and the needs of your core audience. You’ll be impressed by our ability to translate these insights into an organic campaign that search engines like Google will love.</p>
                                    <br />
                                </div>
                            </div>
                        </div>


                        <div className='md:flex flex-wrap justify-around my-20 '>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>SEO Deliverables</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >25 +</p>

                            </div>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>Delivery</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >2 Weeks Avg.</p>

                            </div>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>Verticals Servede</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >All</p>

                            </div>
                        </div>


                        <div className='flex flex-col items-center  ' >
                            <div className='md:w-[33%] text-center'>
                                <p className='text-[22px] text-[#59667d] ' >Time to get noticed online. Let’s blow you away with our ability to improve web visibility and business revenue.</p>
                                <button className='green_rounded_btn mt-4 ' >Get an SEO Quote</button>

                            </div>
                        </div>
                    </div>
                </section>


                {/* Business Impact */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={seoImpact} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >Business Impact</p>
                                    <p className=' text-[40px] font-bold md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] '>Boost web visibility. Claim a larger share of your search audience<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Make your way up Google’s first search engine results page.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >The first thing most people do when they want to research, solve a problem, or make a purchase, is to look for solutions online. It’s no wonder that over 93% of all online experiences begin with a search engine. SEO is the discipline that allows businesses to place their brand ahead of the general search behavior of a target audience.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Thus, when done well, SEO is the long-term marketing strategy that will continue to drive visitors to your site for years to come. It transforms a website into an indispensable marketing resource.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Values. */}
                <section className='heading md:my-20  '>
                    <div className=" container w-12/12 bg-[#023A51] shadow-2xl rounded-2xl py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#fff]  md:flex items-center w-10/12 md:w-11/12 '>
                            <div className='md:w-5/10 ' >
                                <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] font-bold tracking-[-2px] py-10  ' >Humble Titan Digital. Our Values<span className='text-[#2cbc63]'>.</span></p>

                                <p className='text-[20px] pr-10 '  >We believe lasting success is founded on a set of principles clients can always count on. As a family business, we are eager to welcome you as one of our own.</p>
                            </div>
                            <div className='pt-[40px] md:flex flex-wrap justify-around md:w-5/10 '>
                                <div className='md:flex justify-around'>
                                    <div className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] ' >
                                        <FaStar className='text-[26px] ' />
                                        <p className='text-[24px] font-bold ' >Creativity</p>
                                        <p className='text-[18px]  ' >We embrace the opportunity to solve your challenge.</p>
                                    </div>
                                    <div className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] '>
                                        <GiElectric className='text-[26px] ' />
                                        <p className='text-[24px] font-bold ' >Passion</p>
                                        <p className='text-[18px]' >Your success means as much to us as it does to you.</p>
                                    </div>
                                </div>
                                <div className='md:flex justify-around'>
                                    <div className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] '>
                                        <FaUserTie className='text-[26px] ' />
                                        <p className='text-[24px] font-bold ' >Professionalism</p>
                                        <p className='text-[18px]' >Respect and Integrity are among our fundamentals.</p>
                                    </div>
                                    <div className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] '>
                                        <FaChartLine className='text-[26px] ' />
                                        <p className='text-[24px] font-bold ' >Value-centricity</p>
                                        <p className='text-[18px]' >We cut out the fluff and focus on providing a service that makes a difference.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Commitment */}
                <section className='heading bg-[#f9fafb] md:py-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='flex flex-col items-center mb-20 ' >
                                <div className='md:w-[40%] text-center'>
                                    <p className=' text-[40px] text-[#023A51] font-bold md:text-[50px] mb-4 leading-[50px] md:leading-[59px] tracking-[-2px] '>Our Commitment</p>
                                    <p className='text-[22px] text-[#59667d] ' >If you haven’t heard about search engine optimization, chances are, potential customers haven’t heard of you either. We offer the elite of modern-day marketing.</p>
                                </div>
                            </div>
                            <div className='md:flex mx-auto justify-center' >
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[40%] p-10 ' >
                                    <p className=' text-[20px] font-bold md:text-[24px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>Search Engine Optimization Deliverables</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Local SEO</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />International GEO Targeting</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Technical Optimization</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Research and Analysis</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />On Page Recommendations</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />SERP 2 and 3 Optimizations</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Technical Audits and Insights</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Voice Search Optimization</p>
                                    <br />


                                </div>
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[40%] p-10 ' >
                                    <div className='flex flex-col items-center ' >
                                        <Image src={HTLogoRetina} alt="image" />

                                    </div>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className=' text-[20px] font-bold md:text-[24px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>Online search is the future of business</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className='text-[20px] text-center md:text-[22px] text-[#59667d] flex ' >Never before in history have we been closer to exactly mapping how customers think [about ideas, services, products], discover, and behave. We are proud to be experts in the interdisciplinary skill that is search engine optimization.</p>
                                    <br />
                                    <p className='text-[20px] text-center md:text-[22px] text-[#59667d] flex ' >We specialize in web visibility and positioning. That means we have the technical skills to ensure your site is indexed by search engines. We deliver strategies to develop organic relevance, driving web performance. We establish your site authority and monitor results.</p>
                                    <br />



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
                                <button className='green_rounded_btn font-bold' >Contact us</button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* contact section */}
                <section className='heading py-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-11/12 md:w-11/12 bg-[#023A51] shadow-2xl rounded-xl '>
                            <div className='mx-auto justify-between flex flex-wrap w-10/12 md:w-11/12  bg-[#023A51] '>
                                <div className='text-[#fff] py-20 ' >
                                    <p className='text-[40px] md:text-[60px] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ' >Tell us how we <br /> can help<span className='text-[#2cbc63]'>.</span></p>
                                    <div className='py-6' >
                                        <div className='flex items-center' >
                                            <FaBuilding className='mr-4 text-[26px] ' />
                                            <h2 className='text-[30px] py-4 ' >Office</h2>
                                        </div>

                                        <p className='text-[22px] extralight py-2 '>We work remotely to serve clients <br /> all over the world.</p>
                                        <p className='text-[22px] extralight py-2 ' >HQ: Virginia Beach, Virginia</p>
                                    </div>

                                    <div className='py-6'>
                                        <div className='flex items-center'>
                                            <SiMinutemailer className='mr-4 text-[26px]' />
                                            <h2 className='text-[30px] py-4 '>Contact</h2>
                                        </div>

                                        <p className='text-[22px] extralight py-2 '>support@humbletitan.com</p>
                                        <p className='text-[22px] extralight py-2 '>bayo@humbletitan.com</p>
                                    </div>

                                    <div className='py-6'>
                                        <div className='flex items-center'>
                                            <FaHospitalUser className='mr-4 text-[26px]' />
                                            <h2 className='text-[30px] py-4 ' >Open Hours</h2>
                                        </div>

                                        <p className='text-[22px] extralight py-2 '>Monday - Friday: 9am - 5pm</p>
                                    </div>
                                </div>
                                <div className=' py-6 md:py-20' >
                                    <div className=' bg-[#fff] rounded-xl p-4 md:p-10 '>
                                        <div className='md:flex justify-between py-4' >
                                            <div>
                                                <label className='text-[#34495E] my-6 md:py-3 text-[20px] ' htmlFor="name">Name *</label>
                                                <input className='block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%] ' type="text" required placeholder='John Stuart' />
                                            </div>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px] ' htmlFor="name">Phone *</label>
                                                <input className='block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%] ' type="tel" required placeholder='(123)-456-7890' />
                                            </div>
                                        </div>
                                        <div className='md:flex justify-between py-4'>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px]' htmlFor="name">Email address *</label>
                                                <input className='block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%]' type="text" required placeholder='name@company.com' />
                                            </div>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px]' htmlFor="name">Service interested in *</label>
                                                <select className='block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] md:w-[90%]' required placeholder='(123)-456-7890'>
                                                    <option value="search engine optimization">Search Engine Optimaization</option>
                                                    <option value="web design">Web Design</option>
                                                    <option value="content marketing">Content Marketing</option>
                                                    <option value="website management">Website management</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='py-4 '>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px]' htmlFor="subject">Subject</label>
                                                <input className='block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] ' type="text" placeholder='Quote request for' />
                                            </div>
                                        </div>
                                        <div className='py-4 '>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px]' htmlFor="subject">How can we help?</label>
                                                <textarea className='block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] ' type="text" placeholder='I need help with the next problem'></textarea>
                                            </div>
                                        </div>
                                        <div className='py-4 '>
                                            <div>
                                                <button className='green_rounded_btn'>Get in touch</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Other Digital services. */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12'>
                            <div className='md:flex flex-wrap items-center justify-between '>
                                <p className='text-[26px] md:text-[36px] text-[#023A51] font-bold tracking-[-1px] ' >Other Humble Titan Digital services<span className='text-[#2cbc63]'>.</span></p>
                                <button className='green_rounded_btn_oulined'>View all services</button>
                            </div>


                            <div className='md:flex flex-wrap justify-around my-20'>
                                <div className='p-10 border rounded-lg text-[#023A51] shadow w-[100%] md:w-[31%] '>
                                    <Image className='rounded-xl' src={otherWebDesignService} alt="image" />
                                    <p className='text-[24px] tracking-[-0.5px] font-bold  '>Web Design</p>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] '>We will build a website that reflects your business objectives.</p>
                                    <br />
                                    <button className='text-[20px] font-bold hover:text-[#2cbc63] transition duration-300 '>Read more</button>
                                </div>
                                <div className='p-10 border rounded-lg text-[#023A51] shadow w-[100%] md:w-[31%] '>
                                    <Image className='rounded-xl' src={otherContentMarketingService} alt="image" />
                                    <p className='text-[24px] tracking-[-0.5px] font-bold  '>Content Marketing</p>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] '>Outdo your competitors. Give users the content they need..</p>
                                    <br />
                                    <button className='text-[20px] font-bold hover:text-[#2cbc63] transition duration-300 '>Read more</button>
                                </div>
                                <div className='p-10 border rounded-lg text-[#023A51] shadow w-[100%] md:w-[31%] '>
                                    <Image className='rounded-xl' src={otherWebManagementService} alt="image" />
                                    <p className='text-[24px] tracking-[-0.5px] font-bold  '>Website Management</p>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] '>We will manage the day-to-day operations of your website.</p>
                                    <br />
                                    <button className='text-[20px] font-bold hover:text-[#2cbc63] transition duration-300 '>Read more</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
