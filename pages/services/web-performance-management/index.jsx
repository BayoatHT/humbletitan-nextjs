import React from 'react'
import Head from 'next/head'
import Layout from "../../../components/Layout";
import Image from 'next/image'
import { FaChevronRight, FaPoll, FaFireAlt, FaUserTie, FaCheckCircle, FaChartLine, FaStar } from 'react-icons/fa'
import { GiElectric } from 'react-icons/gi'
import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'


import HTWebManagmentFeatured from '../../../assets/imgs/HT-web-managment-featured-600x586.png'
import webManagementExpectations from '../../../assets/imgs/web-management-expectations-600x600.jpg'
import webManagementImpact from '../../../assets/imgs/web-management-impact-600x600.jpg'
import HTLogoRetina from '../../../assets/imgs/HT-Logo-Retina-200x31.png'
import otherSeoService from '../../../assets/imgs/other-seo-service.jpg'
import otherContentMarketingService from '../../../assets/imgs/other-content-marketing-service.jpg'
import otherWebDesignService from '../../../assets/imgs/other-web-design-service.jpg'


export default function WebPerformanceManagement() {
    return (
        <>
            <Head>
                <title>Web Performance Management - Humble Titan</title>
            </Head>
            <Layout>


                {/*Web Performance Management*/}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >Web Performance Management</p>
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>We execute an effective online strategy<span className='text-[#2cbc63]'>.</span></h1>
                                    <br />
                                    <p className='text-[22px] md:text-[26px] ' >We will manage the day-to-day operations of your website. Receive monthly deliverables and reports to stay on track.</p>

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={HTWebManagmentFeatured} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <p className=' text-[40px] md:text-[50px] mb-20 text-[#023A51] font-bold text-center leading-[50px] md:leading-[59px] tracking-[-2px] '>We will manage the day-to-day <br /> operations of your website<span className='text-[#2cbc63]'>.</span></p>
                        <div className='mx-auto md:flex flex-wrap justify-around text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex justify-between md:w-[45%] mb-6  '>
                                <FaUserTie className='text-[#2cbc63] w-[120px] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold  '>1. Understanding client objectives
                                    </p>
                                    <br />
                                    <p className='text-[22px] ' >We take into account the business reality of clients, mapping out campaigns that will help each business achieve its objectives per KPI.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaFireAlt className='text-[#2cbc63] mr-2 w-[150px] text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>
                                        2. Identifying client strengths/weaknesses
                                    </p>
                                    <br />
                                    <p className='text-[22px] '>Don’t get left behind. Reach users on desktop, mobile, and tablet with our responsive designs. Gain full control over your web performance by choosing from 200+ web features.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaPoll className='text-[#2cbc63] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>3. Stay ahead of market trends and competitors
                                    </p>
                                    <br />
                                    <p className='text-[22px] ' >We keep up with the ever-evolving search environment. We monitor niche trends and run frequent audits on competitors to maintain the strategic edge of our clients.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaCheckCircle className='text-[#2cbc63] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>4. Consistent performance monitoring
                                    </p>
                                    <br />
                                    <p className='text-[22px] ' >Receive monthly reports and insights based on current search data (fed directly from the search engine webmaster tools).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Web Management expectations */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={webManagementExpectations} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >What You Can Expect</p>
                                    <p className=' text-[40px] font-bold md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] '>Business and web performance that’s driven in a purposeful way<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >We assess the immediate needs, long-term goals, competition, and situation of our clients.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >We provide data-driven forecasts to clarify the direction we aim to take our clients. Once project plans are agreed on, we provide a monthly statement of work with deliverable due dates.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Our campaigns are designed to reflect the unique ambitions of our clients as their brands grow further into the digital marketing space.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >As we plan, execute and monitor the impact of the activity, we offer support to stakeholders so that their offline business objectives are always aligned with an online strategy.</p>
                                    <br />
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-wrap justify-around my-20 '>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>Management Deliverables</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >50 +</p>

                            </div>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>Plans</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >1 Year Minimum</p>

                            </div>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>Business Niches</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >All</p>

                            </div>
                        </div>


                        <div className='flex flex-col items-center  ' >
                            <div className='md:w-[33%] text-center'>
                                <p className='text-[22px] text-[#59667d] ' >You know your business. Focus on what you do best. Let us handle the rest. We deliver elite web marketing.</p>
                                <button className='green_rounded_btn mt-4 ' >Get a Management Quote </button>

                            </div>
                        </div>
                    </div>
                </section>


                {/* Business Impact */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={webManagementImpact} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >Business Impact</p>
                                    <p className=' text-[40px] font-bold md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] '>Elite web expertise dedicated to your your brand<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >We ensure clients are always empowered with the real-time insights that inform business-critical decisions. Stay ahead of the latest online trends. Rely on the expertise of industry-leading experts. We help clients tap into the limitless opportunities of the modern marketing ecosystem.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >By applying the latest methodologies and technology to business needs, we translate strategy into traffic, leads, conversions and revenue.</p>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Values. */}
                <section className='heading md:my-20  '>
                    <div className=" container w-12/12 bg-[#023A51] shadow-2xl md:rounded-2xl py-10 mx-auto max-w-screen-xl">
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
                <section className='heading bg-[#f9fafb] py-10 md:py-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='flex flex-col items-center mb-20 ' >
                                <div className='md:w-[40%] text-center'>
                                    <p className=' text-[40px] text-[#023A51] font-bold md:text-[50px] mb-4 leading-[50px] md:leading-[59px] tracking-[-2px] '>Our Commitment</p>
                                    <p className='text-[22px] text-[#59667d] ' >We offer a winning strategy backed by careful planning and precise execution. You can trust us to put your objectives first.</p>
                                </div>
                            </div>
                            <div className='md:flex mx-auto justify-center' >
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[40%] p-10 ' >
                                    <p className=' text-[20px] font-bold md:text-[24px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>Web Management Deliverables</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Project Plans</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Search Term Position Tracking</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />On page and Internal Link Audit</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Cannibalization Audit</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Backlink Audit</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Monthly Web Health Check</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Competitor Analysis</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Performance Forecasts</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Weekly/Monthly Calls</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Performance Reports</p>
                                    <br />



                                </div>
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[40%] p-10 ' >
                                    <div className='flex flex-col items-center ' >
                                        <Image src={HTLogoRetina} alt="image" />

                                    </div>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className=' text-[20px] font-bold md:text-[24px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>You’ll always progress as our managed client.</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className='text-[20px] text-center md:text-[22px] text-[#59667d] flex ' >We grow web visibility. Regardless of where your business currently stands, we will drive results.</p>
                                    <br />
                                    <p className='text-[20px] text-center md:text-[22px] text-[#59667d] flex ' >We’ll audit your site and we’ll tell you every single thing you can do to improve. We’ll provide a technical analysis that uncovers the functional and design opportunities you are yet to take advantage of. We reduce client’s reliance on branded and paid search.</p>
                                    <br />
                                    <p className='text-[20px] text-center md:text-[22px] text-[#59667d] flex ' >We consistently scan the marketing landscape for solutions that are most applicable to business objectives.</p>
                                    <br />
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
                            <div className='flex flex-wrap items-center justify-around md:justify-between '>
                                <p className='text-[26px] md:text-[36px] text-[#023A51] mb-10 font-bold tracking-[-1px] ' >Other Humble Titan Digital services<span className='text-[#2cbc63]'>.</span></p>
                                <button className='green_rounded_btn_outlined'>View all services</button>
                            </div>


                            <div className='md:flex flex-wrap justify-around my-20'>
                                <div className='p-10 border rounded-lg text-[#023A51] shadow w-[100%] md:w-[31%] mb-10 '>
                                    <Image className='rounded-xl' src={otherSeoService} alt="image" />
                                    <p className='text-[24px] tracking-[-0.5px] font-bold  '>Search Engine Optimization</p>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] '>Improve organic visibility. Reach more users online.</p>
                                    <br />
                                    <button className='text-[20px] font-bold hover:text-[#2cbc63] transition duration-300 '>Read more</button>
                                </div>
                                <div className='p-10 border rounded-lg text-[#023A51] shadow w-[100%] md:w-[31%] mb-10 '>
                                    <Image className='rounded-xl' src={otherContentMarketingService} alt="image" />
                                    <p className='text-[24px] tracking-[-0.5px] font-bold  '>Content Marketing</p>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] '>Outdo your competitors. Give users the content they need..</p>
                                    <br />
                                    <button className='text-[20px] font-bold hover:text-[#2cbc63] transition duration-300 '>Read more</button>
                                </div>
                                <div className='p-10 border rounded-lg text-[#023A51] shadow w-[100%] md:w-[31%] mb-10 '>
                                    <Image className='rounded-xl' src={otherWebDesignService} alt="image" />
                                    <p className='text-[24px] tracking-[-0.5px] font-bold  '>Web Design</p>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] '>We will build a website that reflects your business objectives.</p>
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
