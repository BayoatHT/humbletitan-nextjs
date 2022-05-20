import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'

import TRAMOnlineTrainingBayo from '../../assets/imgs/TRAM-online-training-bayo-1-600x586.jpg'
import TramTechnical1 from '../../assets/imgs/Tram-technical-1.png'
import tramRelevance from '../../assets/imgs/tram-relevance-1.png'
import tramAuthority1 from '../../assets/imgs/tram-authority-1.png'
import TramMonitoring from '../../assets/imgs/Tram-Monitoring-1.png'
import stocks2 from '../../assets/imgs/stocks-2.jpg'
import politics2 from '../../assets/imgs/politics-2.jpg'
import weDeliverExpertise from '../../assets/imgs/we-deliver-expertise.jpg'
import blogInsights from '../../assets/imgs/blog-insights.png'


import { FaChevronRight } from 'react-icons/fa'
import GetAQuote from '../../components/GetAQuote';

export default function TramSeo() {
    return (
        <>
            <Head>
                <title>TRAM SEO Course - Humble Titan</title>
            </Head>
            <Layout>


                {/* hero */}
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>The SEO T.R.A.M Method<span className='text-[#2cbc63]'>.</span></h1>
                                    <br />
                                    <p className='text-[22px] ' >We offer step-by-step SEO knowledge development. We walk you through specific deliverables to solve complex search problems. Plus, we provide the professional coaching you need to work in-house or in a digital marketing agency.</p>
                                    <br />
                                    <button className='green_rounded_btn' >Jump to a Free Lesson</button>

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={TRAMOnlineTrainingBayo} alt="image" />
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
                                    <h2 className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Learn Search Engine Optimization</h2>
                                    <br />
                                    <p className='text-[22px] text-[#59667d] ' >My name is Bayo and SEO has changed my life. It has taken me all over the world where I have had the chance to service businesses of all sizes (From mom and pop shops to fortune 100 household names). The SEO TRAM method is my way of showing appreciation for my craft. It’s my hope you find as much joy in Search Engine Optimization as I do. The sky’s not the limit.</p>
                                    <br />


                                </div>
                                <div className='md:ml-20 md:flex flex-wrap justify-between text-[#023A51] w-[100%] md:w-[65%] ' >
                                    <div className=' w-[100%] border rounded-xl divide-y-4 divide-[#f8cf33] divide-solid p-6 ' style={{ backgroundImage: 'linear-gradient(180deg, #e0ecf0 0%,#ffffff 100%)', backgroundPosition: 'left top', backgroundRepeat: 'no-repeat' }} >
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Begin your SEO Education</p>
                                        <p className=' text-[26px] md:text-[36px] pt-4 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '><span className='italic'>Free</span> Standard Package Offered Below</p>
                                    </div>
                                    <div className='p-6 rounded-lg border shadow my-6 w-[100%] md:w-[49%] '  >
                                        <Image src={TramTechnical1} alt="image" />
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Technical SEO</p>
                                        <p className='text-[22px] text-[#59667d] ' >Ensure your site and network are technically sound. Make sure your site neither hinders the work search engines nor the experience of web users.</p>
                                        <br />
                                        <button className='green_rounded_btn w-[100%] '>Learn Web Tech</button>
                                    </div>
                                    <div className='p-6 rounded-lg border shadow my-6 w-[100%] md:w-[49%] '  >
                                        <Image src={tramRelevance} alt="image" />
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Ranking SEO</p>
                                        <p className='text-[22px] text-[#59667d] ' >Discover search opportunities. Researching keywords, content, and relevant pages that will drive traffic to the site.</p>
                                        <br />
                                        <button className='green_rounded_btn w-[100%] '>Learn to Rank Online</button>
                                    </div>
                                    <div className='p-6 rounded-lg border shadow my-6 w-[100%] md:w-[49%] '  >
                                        <Image src={tramAuthority1} alt="image" />
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Authority SEO</p>
                                        <p className='text-[22px] text-[#59667d] ' >You become an authority in your niche either by getting extremely lucky (we are talking lottery winner luck) or by implementing an intelligent strategy. This section is for those who won’t leave their digital success to chance.</p>
                                        <br />
                                        <button className='green_rounded_btn w-[100%] '>Learn Digital PR</button>
                                    </div>
                                    <div className='p-6 rounded-lg border shadow my-6 w-[100%] md:w-[49%] '  >
                                        <Image src={TramMonitoring} alt="image" />
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Monitoring SEO</p>
                                        <p className='text-[22px] text-[#59667d] ' >Learn how to read, interpret and examine relevant reports to maintain or boost performance. This section is for those who don’t take chances.</p>
                                        <br />
                                        <button className='green_rounded_btn w-[100%] '>Learn Data Analysis</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Choose your TRAM Package */}
                <section className='heading pb-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <p className=' text-[50px] text-[#023A51] md:text-[60px] py-20 text-center leading-[50px] md:leading-[69px] tracking-[-2px] '>Choose your TRAM Package</p>
                            <div className='md:flex mx-auto items-start justify-around' >
                                <div className='text-[#023A51] mb-8 bg-[#f2f3f5] p-2 w-[100%] md:w-[30%] group ' >
                                    <div className='border divide-y-2 divide-solid ' >
                                        <p className='bg-[#65bc7b] text-[#fff] text-[36px] font-bold text-center py-3 ' >Standard</p>
                                        <p className='text-[#65bc7b] flex justify-center text-[50px] md:text-[75px] leading-[79px] font-bold text-center py-4 ' > <span className='text-[#59667d] text-[30px] ' >$</span> Free</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Technical SEO Course [Text]</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Relevance SEO Course [Text]</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Authority SEO Course [Text]</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Monitoring SEO course [Text]</p>
                                        <div className='flex justify-center '>
                                            <button className='green_rounded_btn my-2' >Learn Now</button>

                                        </div>
                                    </div>
                                </div>
                                <div className='text-[#023A51] mb-8 bg-[#f2f3f5] p-2 w-[100%] md:w-[30%] group ' >
                                    <div className='border divide-y-2 divide-solid ' >
                                        <p className='bg-[#65bc7b] text-[#fff] text-[36px] font-bold text-center py-3 ' >Passion Package</p>
                                        <div>
                                            <p className='flex justify-center text-[#65bc7b] leading-[79px] text-[50px] md:text-[75px] font-bold text-center py-4 ' ><span className='text-[#59667d] text-[30px] ' >$</span> 399 <span className='text-[30px] text-[#65bc7b] ' >99</span></p>
                                            <p className='text-[24px] text-center font-bold italic text-[#59667d] pb-4 ' >One Time - Coming 2023</p>
                                        </div>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Technical SEO Course</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Relevance SEO Course</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Authority SEO Course</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Monitoring SEO course</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Video Modules</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Video Guides</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Interactive SEO Quizes</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Course Diploma</p>
                                        <div className='flex justify-center '>
                                            <button className='green_rounded_btn my-2' >Comming Soon</button>

                                        </div>
                                    </div>
                                </div>
                                <div className='text-[#023A51] mb-8 bg-[#f2f3f5] p-2 w-[100%] md:w-[30%] group ' >
                                    <div className='border divide-y-2 divide-solid ' >
                                        <p className='bg-[#65bc7b] text-[#fff] text-[36px] font-bold text-center py-3 ' >Professional Package</p>
                                        <div>
                                            <p className='flex justify-center text-[#65bc7b] leading-[79px] text-[50px] md:text-[75px] font-bold text-center py-4 ' ><span className='text-[#59667d] text-[30px] ' >$</span> 699 <span className='text-[30px] text-[#65bc7b] ' >99</span></p>
                                            <p className='text-[24px] text-center font-bold italic text-[#59667d] pb-4 ' >One Time - Coming 2023</p>
                                        </div>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Technical SEO Course</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Relevance SEO Course</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Authority SEO Course</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' > Monitoring SEO course</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Video Modules</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Video Guides</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Interactive SEO Quizes</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >SEO Excel Training</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Technical Delivable Templates</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Ranking Delivable Templates</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >SEO as a job Module</p>
                                        <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Course Diploma</p>
                                        <div className='flex justify-center '>
                                            <button className='green_rounded_btn my-2' >Comming Soon</button>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='rounded-xl bg-[#d1e8e5] mx-auto md:w-[70%] p-4 md:flex justify-between items-center '>
                                <p className='text-[24px] text-[#2cbc63] font-bold ' >Rather trust us to manage your website?</p>
                                <button className='green_rounded_btn'> Talk to us! </button>
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
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Other Humble Titan Core offerings.</p>
                                    <br />
                                </div>
                                <div className='md:ml-20 md:flex flex-wrap justify-between text-[#023A51] w-[100%] md:w-[65%] ' >
                                    <div className='p-6 rounded-lg border shadow my-6 w-[100%] md:w-[49%] '  >
                                        <Image className='rounded-xl' src={stocks2} alt="image" />
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Business</p>
                                        <p className='text-[22px] text-[#59667d] ' >We provide everything you need to make smarter investments.</p>
                                        <br />
                                        <button className='green_rounded_btn w-[100%] '>Do Due Diligence</button>
                                    </div>
                                    <div className='p-6 rounded-lg border shadow my-6 w-[100%] md:w-[49%] '  >
                                        <Image className='rounded-xl' src={politics2} alt="image" />
                                        <p className=' text-[26px] md:text-[36px] pb-6 font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Politics</p>
                                        <p className='text-[22px] text-[#59667d] ' >Your one-stop shop for the most relevant political information.</p>
                                        <br />
                                        <button className='green_rounded_btn w-[100%] '>Stay Informed</button>
                                    </div>
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
                                    <p className=' text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] '>Explore the Free SEO Course<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[22px] text-[#2cbc63] font-bold ' >Organic search performance provided by an industry-leading expert</p>
                                    <br />
                                    <p className='text-[22px] ' >The S.E.O T.R.A.M method is the all-encompassing guide to high-level search optimization performance. Browse and learn.</p>
                                    <br />
                                    <p className='text-[22px] ' >I’ve dedicated my professional career towards contributing to the success of small, medium-sized, and large businesses. Now, I want to empower anyone that has the vision to excel online</p>
                                    <br />
                                    <p className='text-[22px] ' >This guide is for those who seek true and deep knowledge of search engine optimization. You’ll only find this comprehensive walk-through on Humble Titan.</p>
                                    <br />
                                    <button className='green_rounded_btn' >Learn how to be visible on the internet</button>

                                </div>
                                <div className='md:ml-20 md:w-[50%] mt-10 md:mt-0 ' >
                                    <Image className='rounded-xl p-10' src={weDeliverExpertise} alt="image" />
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
                                    <p className=' text-[40px] text-[#023A51] font-bold md:text-[50px] mb-4 leading-[50px] md:leading-[59px] tracking-[-2px] '>Check out sample TRAM SEO lessons below</p>
                                </div>
                            </div>
                            <div className='md:flex flex-wrap mx-auto items-start justify-center' >
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[24%] p-4 py-10 ' >
                                    <p className=' text-[26px] font-bold md:text-[36px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '><span className='text-[#2cbc63]'>T</span>echnical<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Set up a site on WordPress</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Setting up an SEO Friendly Site Structure</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Account management checklist</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Dealing With 404s and Redirects</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Indexed vs. Non-Indexed URLs</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Internal Links</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />What is a technically sound website</p>
                                    <div className='flex justify-center'>
                                        <button className='green_rounded_btn' > More T …</button>

                                    </div>
                                </div>
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[24%] p-4 py-10 ' >
                                    <p className=' text-[26px] font-bold md:text-[36px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '><span className='text-[#2cbc63]'>R</span>elevance<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />How search engine work</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Keyword map</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Search intent</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />SEO prime factors</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Optimizing images</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Why keyword research is important</p>

                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Header tag optimization</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Customer Acquisition Plan</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Qualities of well-written content</p>
                                    <div className='flex justify-center'>
                                        <button className='green_rounded_btn' > More R …</button>

                                    </div>
                                </div>
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[24%] p-4 py-10 ' >
                                    <p className=' text-[26px] font-bold md:text-[36px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '><span className='text-[#2cbc63]'>A</span>uthority<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Backlinking guide</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Social proof</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Good internal linking structure</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Types of links</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Ranking for Local Search</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Competitor Analysis</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Outreach</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Integrating Social Media</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Offline Channels</p>

                                    <div className='flex justify-center'>
                                        <button className='green_rounded_btn' > More A …</button>

                                    </div>
                                </div>
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[24%] p-4 py-10 ' >
                                    <p className=' text-[26px] font-bold md:text-[36px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '><span className='text-[#2cbc63]'>M</span>onitoring<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />ROI for SEO</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Project Management</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Account management checklist</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Boost direct visits</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Analytics fundamentals</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Search Console</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Google Web Vitals</p>
                                    <p className='text-[19px] text-[#59667d] flex mb-3 ' ><FaChevronRight className='translate-y-2 text-[18px] mr-[12px]' color='#2cbc63' />Rank Tracking</p>
                                    <div className='flex justify-center'>
                                        <button className='green_rounded_btn' > More M …</button>

                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center'>

                                <button className='green_rounded_btn_outlined mt-10'>View All TRAM Lessons</button>
                            </div>
                        </div>
                    </div>
                </section>


                {/* On the cutting edge. */}
                <section className='heading my-10 bg-[#f9fafb] md:my-20'>
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
