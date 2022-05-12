import React from 'react'
import Head from 'next/head'
import Layout from "../../../components/Layout";
import Image from 'next/image'

import tramFeaturedTech from '../../../assets/imgs/tram-featured-tech-600x586.jpg'
import TRAMGeographicTLDs from '../../../assets/imgs/TRAM-1-Geographic-TLDs-400x282.jpg'
import TRAMSubdomainVsSubdirectory from '../../../assets/imgs/TRAM-2-Subdomain-Vs-Subdirectory-400x282.jpg'
import TRAMGoogleIndexation from '../../../assets/imgs/TRAM-3-Google-Indexation-400x282.jpg'
import TRAMSiteIndexation from '../../../assets/imgs/TRAM-4-Site-Indexation-400x282.jpg'
import TRAMSitestructure from '../../../assets/imgs/TRAM-6-Site-structure-400x282.jpg'
import TRAMSiteArchitecture from '../../../assets/imgs/TRAM-5-Site-Architecture-400x282.jpg'
import TRAMPagination from '../../../assets/imgs/TRAM-7-Pagination-400x282.jpg'
import TRAMFacetedNavigation from '../../../assets/imgs/TRAM-8-Faceted-Navigation-400x282.jpg'
import TRAMComponentsOfGoodSites from '../../../assets/imgs/TRAM-9-Components-of-Good-Sites-400x282.jpg'
import TRAMXmlSitemapVsHtmlSitemap from '../../../assets/imgs/TRAM-10-Xml-Sitemap-Vs-Html-Sitemap-400x282.jpg'
import TRAMRobotstxtFile from '../../../assets/imgs/TRAM-11-Robotstxt-File-400x282.jpg'
import TRAMadvert from '../../../assets/imgs/TRAM-advert-600x1407.jpg'
import TRAMGlobalSEO from '../../../assets/imgs/TRAM-12-Global-SEO-400x282.jpg'
import TRAMMobileFirstIndexing from '../../../assets/imgs/TRAM-13-Mobile-First-Indexing-400x282.jpg'
import TRAMAcceleratedMobilePages from '../../../assets/imgs/TRAM-14-Accelerated-Mobile-Pages-400x282.jpg'
import TRAMProductsStructuredData from '../../../assets/imgs/TRAM-15-Products-structured-Data-400x282.jpg'
import TRAMSchema from '../../../assets/imgs/TRAM-16-Schema-400x282.jpg'
import TRAMHTTPStatusCodes from '../../../assets/imgs/TRAM-17-HTTP-Status-Codes-400x282.jpg'
import TRAM404sandRedirects from '../../../assets/imgs/TRAM-18-404s-and-Redirects-400x282.jpg'
import TRAMCanonicalTags from '../../../assets/imgs/TRAM-19-Canonical-Tags-400x282.jpg'
import TRAMPageLoadSpeed from '../../../assets/imgs/TRAM-20-Page-Load-Speed-400x282.jpg'
import TRAMDocumentObjectModel from '../../../assets/imgs/TRAM-21-Document-Object-Model-400x282.jpg'
import TRAMJavascriptFrameworks from '../../../assets/imgs/TRAM-22-Javascript-Frameworks-400x282.jpg'
import TRAMRegex from '../../../assets/imgs/TRAM-23-Regex-400x282.jpg'
import TRAMSetupWordpressSite from '../../../assets/imgs/TRAM-24-Set-up-Wordpress-Site-400x282.jpg'
import TRAMwebsitemigrations from '../../../assets/imgs/TRAM-25-website-migrations-400x282.jpg'
import otherwebdesignservice from '../../../assets/imgs/other-web-design-service-200x200.jpg'
import othercontentmarketingservice from '../../../assets/imgs/other-content-marketing-service-200x200.jpg'
import otherseoservice from '../../../assets/imgs/other-seo-service-200x200.jpg'
import otherwebmanagementservice from '../../../assets/imgs/other-web-management-service-200x200.jpg'
import GetAQuote from '../../../components/GetAQuote';

export default function TechnicalCourse() {
    return (
        <>
            <Head>
                <title>Technical SEO Course - Humble Titan</title>
            </Head>
            <Layout>


                {/* hero */}
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[22px] font-bold text-[#2cbc63] ' >Technical SEO Course</p>
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>Master the fundamentals of being found online<span className='text-[#2cbc63]'>.</span></h1>
                                    <br />
                                    <p className='text-[26px] ' >Ensure your site and network are technically sound. Make sure your site neither hinders the work search engines nor the experience of web users.</p>
                                    <br />

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <Image className='rounded-xl p-10' src={tramFeaturedTech} alt="image" />
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
                                <p className='text-[40px] text-center md:text-[50px] font-bold leading-[49px] md:leading-[59px] text-[#2cbc63] ' >TRAM SEO - Technical <br /> <span className='text-[#023A51] ' >Table of Contents</span> <span className='text-[#2cbc63]'>.</span></p>
                            </div>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <a href='#chapter1' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 1</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Domains</p>
                                </a>
                                <a href='#chapter2' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 2</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Indexation</p>
                                </a>
                                <a href='#chapter3' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 3</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Page Build</p>
                                </a>
                                <a href='#chapter4' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 4</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Site Assets</p>
                                </a>
                                <a href='#chapter5' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 5</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>International SEO</p>
                                </a>
                                <a href='#chapter6' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 6</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Mobile SEO</p>
                                </a>
                                <a href='#chapter7' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 7</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Structured Markup</p>
                                </a>
                                <a href='#chapter8' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 8</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Links & Tech</p>
                                </a>
                                <a href='#chapter9' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 9</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Behind the Web Page</p>
                                </a>
                                <a href='#chapter10' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 10</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Coding SEO</p>
                                </a>
                                <a href='#chapter11' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 11</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Launch a Site</p>
                                </a>
                                <a href='#chapter12' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 12</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Migrations</p>
                                </a>
                                <a href='#chapter13' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 13</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Advanced Tech</p>
                                </a>
                            </div>

                            <p className='text-[24px] font-bold text-[#2cbc63] mb-4 ' >The Complete Method</p>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <a href='#chapter1' className='text-[#023A51] mb-4 bg-[#e0ecf0] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
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
                                <a href='#chapter4' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Part 4</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '><span className='text-[#2cbc63]'>M</span>anaging SEO</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 1 */}
                <section id='chapter1' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 1<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Domains<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGeographicTLDs} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>TLDs and their SEO Impact</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Using Geographic TLDs might not have direct SEO benefits but it can assure service availability in a specific location and boost conversion.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSubdomainVsSubdirectory} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Subdomains and Subdirectories</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Making a choice between Subdomain vs. Subdirectory is easy. Few SEO experts can’t agree, but subdirectories are a better choice.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Chapter 2 */}
                <section id='chapter2' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 2<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Indexation<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleIndexation} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Get Indexed by Google</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >If Google doesn’t know your site exists, your site might as well not exist.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSiteIndexation} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Faster Site Indexing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Getting Google to crawl and index a new website takes time. Here we explain all the considerations available to speed up the process.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Chapter 3 */}
                <section id='chapter3' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 3<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Site Page Builds<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSitestructure} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>SEO Friendly Site Structures</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >An SEO Friendly Site Structure today is more important than ever. Your site’s structure should be easy to navigate and hierarchical.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSiteArchitecture} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Anatomy of a Site Build</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >The better your site architecture, the higher will be its chances to rank in the search engines. Discover everything you need to design a successful web structure.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 4 */}
                <section id='chapter4' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 4<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Site Technical Assets<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMPagination} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Pagination for SEO</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Pagination is a web term used to describe a series of content that is broken up into a multi-page list. We go over everything you need to manage them properly.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMFacetedNavigation} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Faceted Navigation</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >For many SEOs managing eCommerce sites, optimizing the faceted navigation is critical to success. We clarify what can become a rather messy challenge.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMComponentsOfGoodSites} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Faceted Navigation</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >For many SEOs managing eCommerce sites, optimizing the faceted navigation is critical to success. We clarify what can become a rather messy challenge.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMXmlSitemapVsHtmlSitemap} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Faceted Navigation</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >For many SEOs managing eCommerce sites, optimizing the faceted navigation is critical to success. We clarify what can become a rather messy challenge.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMRobotstxtFile} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Faceted Navigation</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >For many SEOs managing eCommerce sites, optimizing the faceted navigation is critical to success. We clarify what can become a rather messy challenge.</p>
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


                {/* Chapter 5 */}
                <section id='chapter5' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 5<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Indexation<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGlobalSEO} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Global Search Engine Optimization</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >For those looking to attract online users from outside their local market, we’ve put together an easy-to-follow guide for international SEO.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 6 */}
                <section id='chapter6' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 6<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Mobile SEO<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMMobileFirstIndexing} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google’s Mobile-First Indexing</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Mobile-first indexing means that Google will first consider the mobile version of the page for indexing and ranking.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMAcceleratedMobilePages} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Accelerated Mobile Pages</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >AMPs are quickly becoming the standard for how a fast-loading page should be built. Learn everything you need to supercharge your website.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 7 */}
                <section id='chapter7' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 7<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Structured Markup<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMProductsStructuredData} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Structured Data for Product Snippets</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Google uses structured data for building rich snippets in the search results. Learn how to take advantage for your eCommerce brand.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSchema} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Schema</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Communicate directly with search algorithms. Schema helps search engines like google better understand your site.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 8 */}
                <section id='chapter8' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 8<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Links and Tech<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMHTTPStatusCodes} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>HTTP Status Codes</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Optimize the accessibility of your site to users and crawlers.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAM404sandRedirects} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>404s and Redirects</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Learn everything you need to know about 404s and redirects. We’re happy to share the industry’s best practices with our fellow SEOs.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMCanonicalTags} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Canonicals</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Canonical tags are a simple but powerful way of cleaning up possible organic ranking issues.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 9 */}
                <section id='chapter9' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 9<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Behind the Web Page<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMPageLoadSpeed} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Page Load Speed</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Pages that have a longer load time tend to have lower dwell time and higher bounce rates.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMDocumentObjectModel} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Document Object Model</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Where SEO starts to blend in gently with the world of developers. Get stuck in the code.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMJavascriptFrameworks} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Javascript Frameworks</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >There is much more to SEO than Meta Data, content, and links. Various scripts affect websites in different ways.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Chapter 10 */}
                <section id='chapter10' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 10<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Coding SEO<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMRegex} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Get Indexed by Google</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >If Google doesn’t know your site exists, your site might as well not exist.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 11 */}
                <section id='chapter11' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 11<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Launch a site<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMSetupWordpressSite} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Launching with WordPress</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >There are many ways of launching a site, we decided to focus on the easiest and most popular.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 12 */}
                <section id='chapter12' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 12<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Migrations<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMwebsitemigrations} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>How to Migrate a Site</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Let’s discuss the process where a site undergoes changes in terms of its technology and setup.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 13 */}
                <section id='chapter13' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 13<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Advanced Tech SEO<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
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
                                <div className='flex group w-[100%] md:w-[46%] mb-12'>
                                    <Image className='rounded-lg' src={otherwebdesignservice} alt="image" />
                                    <div className='ml-6'>
                                        <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>Web Design</p>
                                        <br />
                                        <p className='text-[22px] text-[#59667d] '>We will build a website that reflects your business objectives.</p>
                                    </div>
                                </div>
                                <div className='flex group w-[100%] md:w-[46%] mb-12'>
                                    <Image className='rounded-lg' src={othercontentmarketingservice} alt="image" />
                                    <div className='ml-6'>
                                        <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>Content Marketing</p>
                                        <br />
                                        <p className='text-[22px] text-[#59667d] '>Outdo your competitors. Give users the content they need.</p>
                                    </div>
                                </div>
                                <div className='flex group w-[100%] md:w-[46%] mb-12'>
                                    <Image className='rounded-lg' src={otherseoservice} alt="image" />
                                    <div className='ml-6'>
                                        <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>Search Engine Optimization</p>
                                        <br />
                                        <p className='text-[22px] text-[#59667d] '>Improve organic visibility. Reach more users online.</p>
                                    </div>
                                </div>
                                <div className='flex group w-[100%] md:w-[46%] mb-12'>
                                    <Image className='rounded-lg' src={otherwebmanagementservice} alt="image" />
                                    <div className='ml-6'>
                                        <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>Website Management</p>
                                        <br />
                                        <p className='text-[22px] text-[#59667d] '>We will manage the day-to-day operations of your website.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <button className='green_rounded_btn_oulined'> View All Services</button>
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
