import React from 'react'
import Head from 'next/head'
import Layout from "../../../components/Layout";
import Image from 'next/image'
import { FaChevronRight, FaBookReader, FaUserTie, FaChartLine, FaStar, FaRoute, FaHandshake } from 'react-icons/fa'
import { GiElectric } from 'react-icons/gi'
import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'


import HTContentMarketingFeatured from '../../../assets/imgs/HT-content-marketing-featured-600x586.png'
import contentMarketingExpectations from '../../../assets/imgs/content-marketing-expectations-600x600.jpg'
import contentMarketingImpact from '../../../assets/imgs/content-marketing-impact-600x600.jpg'
import HTLogoRetina from '../../../assets/imgs/HT-Logo-Retina-200x31.png'
import otherSeoService from '../../../assets/imgs/other-seo-service.jpg'
import otherWebDesignService from '../../../assets/imgs/other-web-design-service.jpg'
import otherWebManagementService from '../../../assets/imgs/other-web-management-service.jpg'

export default function ContentMarketing() {
    return (
        <>
            <Head>
                <title>Content Marketing - Humble Titan</title>
            </Head>
            <Layout>


                {/* Content Marketing */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >Content Marketing</p>
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>We create content that resonates<span className='text-[#2cbc63]'>.</span></h1>
                                    <br />
                                    <p className='text-[22px] ' >Provide information your target audience needs. From blogs to white papers to infographics, we&apos;ve got you covered.</p>

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={HTContentMarketingFeatured} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <p className=' text-[40px] md:text-[50px] mb-20 text-[#023A51] font-bold text-center leading-[50px] md:leading-[59px] tracking-[-2px] '>With a focus on engagement, <br /> we specialize in brand elevating <br /> web content<span className='text-[#2cbc63]'>.</span></p>
                        <div className='mx-auto md:flex flex-wrap justify-around text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex justify-between md:w-[45%] mb-6  '>
                                <FaBookReader className='text-[#2cbc63] w-[120px] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold  '>1. The research stage
                                    </p>
                                    <br />
                                    <p className='text-[22px] ' >Amplify your brand. Tell us your strategy, we’ll make sure it resonates with your target audience.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaRoute className='text-[#2cbc63] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>2. The planning stage
                                    </p>
                                    <br />
                                    <p className='text-[22px] ' >We improve the research, commercial, navigational or transactional stage of your user journey. We strategically map and fit each created page on your site.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaChartLine className='text-[#2cbc63] mr-2 w-[150px] text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>3. The Execution
                                    </p>
                                    <br />
                                    <p className='text-[22px] '>Our team of writers, graphic designers, and editors collaborate to ensure we create assets of business value. Not only do we plan to resonate with users, but we also aim to maximize organic rankings.</p>
                                </div>
                            </div>
                            <div className='flex md:w-[45%] mb-6 '>
                                <FaHandshake className='text-[#2cbc63] mr-2 text-[150px] -translate-y-12 ' />
                                <div>
                                    <p className=' text-[26px] font-semibold'>4. Delivery
                                    </p>
                                    <br />
                                    <p className='text-[22px] ' >We deliver content that appeals to online publications, users, and search engines. You will attract backlinks, more visits, and claim featured snippets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Content Marketing expectations */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={contentMarketingExpectations} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >What You Can Expect</p>
                                    <p className=' text-[40px] font-bold md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] '>Attract more visitors. Convert more users. Grow your customer base<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Content marketing connects businesses with customers. It generates interest by giving people the valuable information they seek.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >We create content that people want to engage with. We prioritize establishing trust, rapport, and brand awareness.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Once we identify the needs of your core audience, we push various media: blogs, video, infographics, e-books, social media posts, list articles, how-to guides, email newsletters, case studies, podcasts, photos, blogs, and more.</p>
                                    <br />
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-wrap justify-around my-20 '>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>Content Types</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >10 +</p>

                            </div>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>Delivery</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >2 Weeks Avg.</p>

                            </div>
                            <div className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                <p className='text-[20px] text-[#59667d]  '>Content Range</p>
                                <br />
                                <hr />
                                <p className='text-[34px] font-bold text-[#023A51] ' >Unlimited</p>

                            </div>
                        </div>


                        <div className='flex flex-col items-center  ' >
                            <div className='md:w-[33%] text-center'>
                                <p className='text-[22px] text-[#59667d] ' >Give users a reason to return to your site. Let’s help strategically broadcast your expertise and value. Time to market content.</p>
                                <button className='green_rounded_btn mt-4 ' >Get a Content Marketing Quote</button>

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
                                    <Image className='rounded-xl p-10' src={contentMarketingImpact} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >Business Impact</p>
                                    <p className=' text-[40px] font-bold md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] '>Your brand will stand out as an authority in your competitive niche<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >There have never been more ways of consuming information than there is today. This means businesses have to sell while keeping up with the numerous interests of their audience.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Content marketing has become the primary strategy to flexibly serve the various needs of a target audience in imaginative ways. Marketers today are converting more unique customers by creating content users are eager to interact with.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >This is your chance to stand out from competitors by demonstrating authority, expertise, and creativity.</p>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >Contact us today. Gain a strategic asset that stands out from competitors.</p>
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
                                    <p className='text-[22px] text-[#59667d] ' >We’re excited to help you resonate with a wider audience. We want users to continuously identify with your site till they trust your brand.</p>
                                </div>
                            </div>
                            <div className='md:flex mx-auto justify-center' >
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[40%] p-10 ' >
                                    <p className=' text-[20px] font-bold md:text-[24px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>Content Marketing Deliverables</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Blog/Magazine  Planning</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Blog and Magazine Content Copy</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Campaign Strategy</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Products Descriptions Copy</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Infographic Design</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Video Production</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Bespoke Landing Pages</p>
                                    <br />
                                    <p className='text-[20px] md:text-[22px] text-[#59667d] flex ' ><FaChevronRight className='translate-y-2  mr-[12px]' color='#2cbc63' />Outreach Campaigns</p>
                                    <br />


                                </div>
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[40%] p-10 ' >
                                    <div className='flex flex-col items-center ' >
                                        <Image src={HTLogoRetina} alt="image" />

                                    </div>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className=' text-[20px] font-bold md:text-[24px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>Content that online users crave.</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className='text-[20px] text-center md:text-[22px] text-[#59667d] flex ' >We specialize in reaching and engaging customers with compelling content. Our strategically designed campaigns are intended to present your brand with the right marketing touch. That means we always have your target persona in mind.</p>
                                    <br />
                                    <p className='text-[20px] text-center md:text-[22px] text-[#59667d] flex ' >Let us handle the scheduling of trending topics in your niche. We’ll plan and deliver everything from blogs, contests, videos,  infographics, quizzes, and much more.</p>
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
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12'>
                            <div className='flex flex-wrap items-center justify-around md:justify-between  '>
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
                                    <Image className='rounded-xl' src={otherWebDesignService} alt="image" />
                                    <p className='text-[24px] tracking-[-0.5px] font-bold  '>Web Design</p>
                                    <br />
                                    <p className='text-[18px] text-[#59667d] '>We will build a website that reflects your business objectives.</p>
                                    <br />
                                    <button className='text-[20px] font-bold hover:text-[#2cbc63] transition duration-300 '>Read more</button>
                                </div>
                                <div className='p-10 border rounded-lg text-[#023A51] shadow w-[100%] md:w-[31%] mb-10 '>
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
