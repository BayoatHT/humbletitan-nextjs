import React from 'react'
import Head from 'next/head'
import Layout from "../../../components/Layout";
import Image from 'next/image'

import tramfeaturedmonitoring from '../../../assets/imgs/tram-featured-monitoring-600x586.jpg'
import TRAMIntrotoSEO from '../../../assets/imgs/TRAM-71-Intro-to-SEO-400x282.jpg'
import TRAMSearchEngineMarketShare from '../../../assets/imgs/TRAM-72-Search-Engine-Market-Share-400x282.jpg'
import TRAMGoogleSearch from '../../../assets/imgs/TRAM-73-Google-Search-400x282.jpg'
import TRAMSearchEngines from '../../../assets/imgs/TRAM-74-Search-Engines-400x282.jpg'
import TRAMGoogleOperators from '../../../assets/imgs/TRAM-75-Google-Operators-400x282.jpg'
import TRAMGoogleCoreUpdates from '../../../assets/imgs/TRAM-76-Google-Core-Updates-400x282.jpg'
import TRAMCompetitors from '../../../assets/imgs/TRAM-77-Competitors-400x282.jpg'
import TRAMSEObusinessgoal from '../../../assets/imgs/TRAM-78-SEO-business-goal-400x282.jpg'
import TRAMSEOplan from '../../../assets/imgs/TRAM-79-SEO-plan-400x282.jpg'
import TRAMROIforSEO from '../../../assets/imgs/TRAM-80-ROI-for-SEO-400x282.jpg'
import TRAMSEOCustomerAcquisitionPlan from '../../../assets/imgs/TRAM-81-SEO-Customer-Acquisition-Plan-400x282.jpg'
import TRAMSEOKPI from '../../../assets/imgs/TRAM-82-SEO-KPI-400x282.jpg'
import TRAMSEOreporting from '../../../assets/imgs/TRAM-83-SEO-reporting-400x282.jpg'
import TRAMSEOAccountManagement from '../../../assets/imgs/TRAM-84-SEO-Account-Management-400x282.jpg'
import TRAMGoogleSearchConsole from '../../../assets/imgs/TRAM-85-Google-Search-Console-400x282.jpg'
import TRAMGoogleAnalytics from '../../../assets/imgs/TRAM-86-Google-Analytics-400x282.jpg'
import TRAMGoogleAnalyticsRealtimeReports from '../../../assets/imgs/TRAM-87-Google-Analytics-Real-time-Reports-400x282.jpg'
import TRAMGoogleAnalyticsAudienceReports from '../../../assets/imgs/TRAM-88-Google-Analytics-Audience-Reports-400x282.jpg'
import TRAMGoogleAnalyticsAcquisitionReports from '../../../assets/imgs/TRAM-89-Google-Analytics-Acquisition-Reports-400x282.jpg'
import TRAMGoogleAnalyticsBehaviourReports from '../../../assets/imgs/TRAM-90-Google-Analytics-Behaviour-Reports-400x282.jpg'
import TRAMGoogleAnalyticsConversions from '../../../assets/imgs/TRAM-91-Google-Analytics-Conversions-400x282.jpg'
import TRAMWebsiteAuditing from '../../../assets/imgs/TRAM-92-Website-Auditing-400x282.jpg'
import TRAMTechnicalAuditChecklist from '../../../assets/imgs/TRAM-93-Technical-Audit-Checklist-400x282.jpg'
import TRAMPPCVSSEO from '../../../assets/imgs/TRAM-104-PPC-VS-SEO-400x282.jpg'
import TRAMDisplayMarketing from '../../../assets/imgs/TRAM-95-Display-Marketing-400x282.jpg'
import TRAMOutdoorMarketing from '../../../assets/imgs/TRAM-96-Outdoor-Marketing-400x282.jpg'
import TRAMSEOandSocialMedia from '../../../assets/imgs/TRAM-97-SEO-and-Social-Media-400x282.jpg'
import TRAMPaidSocialMarketing from '../../../assets/imgs/TRAM-98-Paid-Social-Marketing-400x282.jpg'
import TRAMProgrammaticMarketing from '../../../assets/imgs/TRAM-99-Programmatic-Marketing-400x282.jpg'
import TRAMBrandpublishing from '../../../assets/imgs/TRAM-100-Brand-publishing-400x282.jpg'
import TRAMRadioMarketing from '../../../assets/imgs/TRAM-101-Radio-Marketing-400x282.jpg'
import TRAMVirtualReality from '../../../assets/imgs/TRAM-102-Virtual-Reality-400x282.jpg'
import TRAMMachineLearning from '../../../assets/imgs/TRAM-103-Machine-Learning-400x282.jpg'
import TRAMWordpressAdsenseAds from '../../../assets/imgs/TRAM-105-Wordpress-Adsense-Ads-400x282.jpg'
import TRAMBlogIncome from '../../../assets/imgs/TRAM-106-Blog-Income-400x282.jpg'
import TRAMProjectManagement from '../../../assets/imgs/TRAM-107-Project-Management-400x282.jpg'
import TRAMCommunicationsPlanning from '../../../assets/imgs/TRAM-108-Communications-Planning-400x282.jpg'
import TRAMConversionRateOptimization from '../../../assets/imgs/TRAM-109-Conversion-Rate-Optimization-400x282.jpg'
import TRAMAffiliateMarketing from '../../../assets/imgs/TRAM-110-Affiliate-Marketing-400x282.jpg'

import TRAMSiteHacks from '../../../assets/imgs/TRAM-94-Site-Hacks-400x282.jpg'
import TRAMLinkdisavow from '../../../assets/imgs/TRAM-60-Link-disavow-400x282.jpg'
import TRAMOutreach from '../../../assets/imgs/TRAM-61-Outreach-400x282.jpg'
import TRAMBacklinks from '../../../assets/imgs/TRAM-62-Backlinks-400x282.jpg'
import TRAMLinkbuildingMastersheet from '../../../assets/imgs/TRAM-63-Linkbuilding-Mastersheet-1-400x282.jpg'
import TRAMDirectVisits from '../../../assets/imgs/TRAM-64-Direct-Visits-400x282.jpg'
import TRAMMaximumWordpressTraffic from '../../../assets/imgs/TRAM-65-Maximum-Wordpress-Traffic-400x282.jpg'
import TRAMTimeonSite from '../../../assets/imgs/TRAM-66-Time-on-Site-400x282.jpg'
import TRAMUserExperience from '../../../assets/imgs/TRAM-67-User-Experience-400x282.jpg'
import TRAMLocalSEO from '../../../assets/imgs/TRAM-68-Local-SEO-400x282.jpg'
import TRAMCitations from '../../../assets/imgs/TRAM-69-Citations-400x282.jpg'
import TRAMGoogleMyBusinessPage from '../../../assets/imgs/TRAM-70-Google-My-Business-Page-400x282.jpg'
import TRAMadvert from '../../../assets/imgs/TRAM-advert-600x1407.jpg'
import otherwebdesignservice from '../../../assets/imgs/other-web-design-service-200x200.jpg'
import othercontentmarketingservice from '../../../assets/imgs/other-content-marketing-service-200x200.jpg'
import otherseoservice from '../../../assets/imgs/other-seo-service-200x200.jpg'
import otherwebmanagementservice from '../../../assets/imgs/other-web-management-service-200x200.jpg'
import GetAQuote from '../../../components/GetAQuote';

export default function ManagementCourse() {
    return (
        <>
            <Head>
                <title>Management SEO Course - Humble Titan</title>
            </Head>
            <Layout>


                {/* hero */}
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[22px] font-bold text-[#2cbc63] ' >Management SEO Course</p>
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>Keep your site on track for success<span className='text-[#2cbc63]'>.</span></h1>
                                    <br />
                                    <p className='text-[26px] ' >Learn how to read, interpret and examine relevant reports to maintain or boost performance. This section is for those who don’t take chances.</p>
                                    <br />

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={tramfeaturedmonitoring} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* table of contents */}
                <section className='heading py-10' id="top" >
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='flex justify-center mb-10'>
                                <p className='text-[40px] text-center md:text-[50px] font-bold leading-[49px] md:leading-[59px] text-[#2cbc63] ' >TRAM SEO - Management <br /> <span className='text-[#023A51] ' >Table of Contents</span> <span className='text-[#2cbc63]'>.</span></p>
                            </div>
                            <div className='flex flex-wrap mx-auto justify-around' >
                                <a href='#chapter28' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 28</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Basics</p>
                                </a>
                                <a href='#chapter29' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 29</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Search Engines</p>
                                </a>
                                <a href='#chapter30' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 30</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Algorithms</p>
                                </a>
                                <a href='#chapter31' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 31</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Strategy</p>
                                </a>
                                <a href='#chapter32' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 32</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Professional SEO</p>
                                </a>
                                <a href='#chapter33' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 33</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Search Reporting</p>
                                </a>
                                <a href='#chapter34' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 34</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Audits</p>
                                </a>
                                <a href='#chapter35' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 35</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Website Threats</p>
                                </a>
                                <a href='#chapter36' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 36</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>More than SEO</p>
                                </a>

                            </div>

                            <p className='text-[24px] font-bold text-[#2cbc63] my-4 mb-8 ' >The Complete Method</p>
                            <div className='flex flex-wrap mx-auto justify-around' >
                                <a href='#chapter1' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Part 1</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '><span className='text-[#2cbc63]'>T</span>echnical SEO</p>
                                </a>
                                <a href='#chapter2' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Part 2</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '><span className='text-[#2cbc63]'>R</span>anking SEO</p>
                                </a>
                                <a href='#chapter3' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Part 3</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '><span className='text-[#2cbc63]'>A</span>uthority SEO</p>
                                </a>
                                <a href='#chapter4' className='text-[#023A51] mb-4 bg-[#e0ecf0] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Part 4</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '><span className='text-[#2cbc63]'>M</span>anaging SEO</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 28 */}
                <section id='chapter28' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 28<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Basics<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMIntrotoSEO} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Intro to SEO</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Chapter 29 */}
                <section id='chapter29' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 29<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Search Engines<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSearchEngineMarketShare} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Search Engine Market Share</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleSearch} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Function of Google Search</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >What exactly is Google trying to achieve? Besides earning money ofcourse.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSearchEngines} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Search Engines & Your Website</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Focus on value, quality, and relevance. With time, the search engines will respond in your favor.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleOperators} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 4</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google Search Operators</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >You can use symbols or words in your Google search to make your search results more precise.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* T.R.A.M Standard Package. */}
                <section className='heading py-10 md:py-20 bg-[#023A51]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-start mx-auto justify-between' >
                                <div className='text-[#fff] w-[100%] md:w-[50%]  ' >
                                    <p className=' text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] '>T.R.A.M <br /> <span className='text-[#f7f7a8]' >Standard Package</span><span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <p className=' text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] '>We teach you all of search marketing,<span className='text-[#2cbc63]'>free!</span></p>
                                    <br />
                                    <p className='text-[24px] ' >But for those who want a University level education in Search Marketing, we are working on the following TRAM packages.</p>
                                    <br />
                                    <div className='md:flex mx-auto items-start justify-around' >
                                        <div className='text-[#023A51] mb-8 bg-[#f2f3f5] p-2 w-[100%] md:w-[48%] group ' >
                                            <div className='border divide-y-2 divide-solid ' >
                                                <p className='bg-[#65bc7b] text-[#fff] text-[36px] font-bold text-center py-3 ' >Passion Package</p>
                                                <div>
                                                    <p className='flex justify-center text-[#65bc7b] leading-[79px] text-[50px] md:text-[75px] font-bold text-center py-4 ' ><span className='text-[#59667d] text-[30px] ' >$</span> 399 <span className='text-[30px] text-[#65bc7b] ' >99</span></p>
                                                    <p className='text-[24px] text-center font-bold italic text-[#59667d] pb-4 ' >One Time - Coming 2023</p>
                                                </div>
                                                <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Video Modules</p>
                                                <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Video Guides</p>
                                                <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Interactive SEO Quizes</p>
                                                <p className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >Course Diploma</p>
                                                <div className='flex justify-center '>
                                                    <button className='green_rounded_btn my-2' >Comming Soon</button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-[#023A51] mb-8 bg-[#f2f3f5] p-2 w-[100%] md:w-[48%] group ' >
                                            <div className='border divide-y-2 divide-solid ' >
                                                <p className='bg-[#65bc7b] text-[#fff] text-[36px] font-bold text-center py-3 ' >Professional Package</p>
                                                <div>
                                                    <p className='flex justify-center text-[#65bc7b] leading-[79px] text-[50px] md:text-[75px] font-bold text-center py-4 ' ><span className='text-[#59667d] text-[30px] ' >$</span> 699 <span className='text-[30px] text-[#65bc7b] ' >99</span></p>
                                                    <p className='text-[24px] text-center font-bold italic text-[#59667d] pb-4 ' >One Time - Coming 2023</p>
                                                </div>
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

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={TRAMadvert} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 30 */}
                <section id='chapter30' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 30<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Algorithms<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleCoreUpdates} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google Core Updates</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Through Google Algorithm Updates, Google tells us what it wants to prevent and accomplish.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 31 */}
                <section id='chapter31' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 31<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Strategy<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMCompetitors} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Finding Online Competitors</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Part of getting ahead online is knowing who your brand is competing against.  Start here, not from scratch.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSEObusinessgoal} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>SEO Business Goals</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >SEO Business Goals</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSEOplan} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>SEO Plan</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >For SEO success you’re going to have to come up with a comprehensive strategy that enables you to pinpoint and resolve problems.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMROIforSEO} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 4</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>ROI for SEO</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >SEO is an organic channel, which means free traffic. Wouldn’t it be great to turn free into money?</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSEOCustomerAcquisitionPlan} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 5</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>SEO Customer Acquisition Plan</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >This is an admitted TRAM special, a full-blown take on marketing your website as a digital asset.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* Chapter 32 */}
                <section id='chapter32' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 24<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Backlinks<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSEOKPI} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>SEO KPIs</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Best to align the performance of your website with the ambitions of your company.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSEOreporting} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Reporting on SEO</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >There is a whole world to understand here. We provide a taste of the benefits of monitoring search performance.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSEOAccountManagement} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>SEO Account Management</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 33 */}
                <section id='chapter33' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 33<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Reporting<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleSearchConsole} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Configure Google Search Console</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Without exaggeration, Google’s Search console is a TRAM monitoring favorite. Pure organic data at your fingertips.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleAnalytics} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Enabling Google Anlayitics</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleAnalyticsRealtimeReports} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google Analytics Real-time Reports</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleAnalyticsAudienceReports} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 4</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google Analytics Audience Reports</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleAnalyticsAcquisitionReports} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 5</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google Analytics Acquisition Reports</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleAnalyticsBehaviourReports} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 6</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google Analytics Behaviour Reports</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleAnalyticsConversions} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 7</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google Analytics’ Conversions</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 34 */}
                <section id='chapter34' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 34<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Audits<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMWebsiteAuditing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Website Auditing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMTechnicalAuditChecklist} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Technical Audit Checklist</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 35 */}
                <section id='chapter35' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 35<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Website Threats<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSiteHacks} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Dealing with Site Hacks</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 36 */}
                <section id='chapter36' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 36<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>More than SEO<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMPPCVSSEO} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>PPC VS. SEO</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMDisplayMarketing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Display Marketing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMOutdoorMarketing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Outdoor Marketing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSEOandSocialMedia} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 4</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>SEO & Social Media</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMPaidSocialMarketing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 5</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Paid Social Marketing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMProgrammaticMarketing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 6</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Programmatic Marketing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMBrandpublishing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 7</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Brand Publishing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMRadioMarketing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 8</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Radio Marketing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMVirtualReality} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 9</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Virtual Reality</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMMachineLearning} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 10</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>AI & Machine Learning</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMWordpressAdsenseAds} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 11</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>WordPress Adsense Ads</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMBlogIncome} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 12</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Blog Income</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMProjectManagement} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 13</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Project Management</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMCommunicationsPlanning} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 14</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Communications Planning</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMConversionRateOptimization} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 15</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Conversion Rate Optimization</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMAffiliateMarketing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 16</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Affiliate Marketing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* best possible solutions for your business */}
                <section className='heading py-10' >
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='flex justify-center mb-10'>
                                <p className='text-[40px] text-center md:text-[50px] font-bold leading-[49px] md:leading-[59px] text-[#023A51] ' ><span className=' text-[#2cbc63] ' >Humble Titan Digital</span> brings you the best possible solutions for your business <span className='text-[#2cbc63]'>.</span></p>
                            </div>

                            <div className='md:flex flex-wrap justify-around'>
                                <div className='flex items-center group w-[100%] md:w-[46%] mb-12'>
                                    <Image className='rounded-lg' src={otherwebdesignservice} alt="image" />
                                    <div className='ml-6'>
                                        <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>Web Design</p>
                                        <br />
                                        <p className='text-[22px] text-[#59667d] '>We will build a website that reflects your business objectives.</p>
                                    </div>
                                </div>
                                <div className='flex items-center group w-[100%] md:w-[46%] mb-12'>
                                    <Image className='rounded-lg' src={othercontentmarketingservice} alt="image" />
                                    <div className='ml-6'>
                                        <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>Content Marketing</p>
                                        <br />
                                        <p className='text-[22px] text-[#59667d] '>Outdo your competitors. Give users the content they need.</p>
                                    </div>
                                </div>
                                <div className='flex items-center group w-[100%] md:w-[46%] mb-12'>
                                    <Image className='rounded-lg' src={otherseoservice} alt="image" />
                                    <div className='ml-6'>
                                        <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>Search Engine Optimization</p>
                                        <br />
                                        <p className='text-[22px] text-[#59667d] '>Improve organic visibility. Reach more users online.</p>
                                    </div>
                                </div>
                                <div className='flex items-center group w-[100%] md:w-[46%] mb-12'>
                                    <Image className='rounded-lg' src={otherwebmanagementservice} alt="image" />
                                    <div className='ml-6'>
                                        <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>Website Management</p>
                                        <br />
                                        <p className='text-[22px] text-[#59667d] '>We will manage the day-to-day operations of your website.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <button className='green_rounded_btn_outlined'> View All Services</button>
                            </div>
                        </div>
                    </div>
                </section>



                {/* get a quote */}

                <GetAQuote />

            </Layout>

        </>
    )
}
