import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'

import Deliverable1 from '../../assets/imgs/1-Deliverable-Data-Studio.jpg'
import Deliverable2 from '../../assets/imgs/2-Deliverable-onpage.jpg'
import Deliverable3 from '../../assets/imgs/3-Deliverable-schema.jpg'
import Deliverable4 from '../../assets/imgs/4-Deliverable-keyword-map.jpg'
import Deliverable5 from '../../assets/imgs/5-Deliverable-keyword-list.jpg'
import Deliverable6 from '../../assets/imgs/6-Deliverable-site-architechture.jpg'
import Deliverable7 from '../../assets/imgs/7-Deliverable-technical-audit.jpg'
import Deliverable8 from '../../assets/imgs/8-Deliverable-backlink-audit.jpg'
import Deliverable9 from '../../assets/imgs/9-Deliverable-blog-content.jpg'
import Deliverable10 from '../../assets/imgs/10-Deliverable-competitor-analysis.jpg'
import Deliverable11 from '../../assets/imgs/11-Deliverable-competitor-gap-analysis.jpg'
import Deliverable12 from '../../assets/imgs/12-Deliverable-internal-link-audit.jpg'
import Deliverable13 from '../../assets/imgs/13-Deliverable-infographic-design.jpg'
import Deliverable14 from '../../assets/imgs/14-Deliverable-new-landing-design.jpg'
import Deliverable15 from '../../assets/imgs/15-Deliverable-featured-snippet-audit.jpg'
import Deliverable16 from '../../assets/imgs/16-Deliverable-HTML-sitemap-design.jpg'
import Deliverable17 from '../../assets/imgs/17-Deliverable-Search-console-and-analytics.jpg'
import Deliverable18 from '../../assets/imgs/18-Deliverable-core-web-vitals.jpg'
import Deliverable19 from '../../assets/imgs/19-Deliverable-image-optimizations.jpg'
import Deliverable20 from '../../assets/imgs/20-Deliverable-page-speed-optimizations.jpg'
import Deliverable21 from '../../assets/imgs/21-Deliverable-content-planner.jpg'


import serviceIconLong from '../../assets/imgs/service-Icon-long.jpg'
import ProductPolitics from '../../assets/imgs/2-Product-Politics-in-pocket.jpg'
import ProductHumbleTrader from '../../assets/imgs/3-Product-Humble-Trader.jpg'
import ProductHTCMS from '../../assets/imgs/4-Product-HT-CMS.jpg'
import ProductTheHumbleMind from '../../assets/imgs/5-Product-The-Humble-mind.jpg'
import ProductLanguageApp from '../../assets/imgs/6-Product-Language-App.jpg'

import { FaChevronDown } from 'react-icons/fa'
import DiscoverMore from '../../components/DiscoverMore'

export default function Products() {
    return (
        <>
            <Head>
                <title>Products - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='w-7/12' >
                                <h1 className=' text-[50px] md:text-[60px] text-center text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >Products<span className='text-[#2cbc63]'>.</span></h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>We are the agency that&apos;s doing it all. We&apos;re applying our tech skills to create products for people and businesses.</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* We are elite digital marketing experts. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>

                            {/* Choose a solution for your brand’s site below: */}
                            <div className='flex justify-center'>
                                <div className='p-10 bg-[#eefaf3] w-[80%] mt-10 rounded-xl'>
                                    <p className='text-[24px] text-[#2cbc63] font-bold  '>Choose a solution for your brand’s site below:</p>
                                </div>
                            </div>


                            <div className='mx-auto text-[#023A51] py-20 md:flex flex-wrap justify-between '>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6  ' >
                                    <p className='text-[30px] text-[#2cbc63] leading-[35px] p-2' >We are elite digital marketing experts.</p>
                                    <p className='text-[30px] leading-[35px] p-2' >Select the SEO and tech deliverables to improve web performance.</p>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable1} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Custom Data Studio Dashboards</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >An easy way for anyone to understand business web performance. Automate custom reports to track web KPI.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Track Performance</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable2} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >OnPage Optimization Recommendations</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Identify the most impactful meta titles, descriptions, and headers. Get the most out of each web page.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Attract traffic to more pages</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable3} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Schema Recommendations</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Make sure your site is able to speak directly to search engines. Effectively communicate the value of pages, products, and services.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Schema your site</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable4} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Keyword Map</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Purposefully map out all the queries you’d like your site to rank for. Prepare every single web page for success.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Map online success</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable5} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Keyword List</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Generate a list of all the queries your customers are searching before they find you or your competitors.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Acquire a search list</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable6} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Site Architecture Review</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Ensure the page hierarchy of your site is set up in a way that resonates with search engines and users.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Improve the foundation of your site</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable7} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Technical SEO Audit</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >No point in having a good-looking site if Google doesn’t understand it. We perform thorough web health checks.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Improve your site health</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable8} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Backlink Audit</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Backlinks play a crucial role in web performance. We’ll let you know how much you need to succeed, and clean up toxic links.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Rank higher, faster</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable9} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Blog Content</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >We deliver the content you need to stand out online.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Improve blog strategy</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable10} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Competitor Analysis</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Discover every smart move your competitors have made online. Set up your brand for excellence.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Keep an eye on competitors</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable11} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Content Gap Analysis</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Tell us who your competitors are. We’ll tell you all the pages you need to outperform them.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Cover all web gaps</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable12} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Internal Link Audit</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >The way your site interacts with itself matters to search engines. We document and highlight all opportunities.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Improve the structure of your site</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable13} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Infographic Design</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >We deliver stunning informational graphics that keep users on your site for longer. Attract the interest of news outlets and relevant publications.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Request infographics</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable14} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >New Landing Page Design</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >We combine SEO, UX/UI to deliver prototype pages that are certain to perform.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Design a new landing page</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable15} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Featured Snippet Audit</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Awareness online isn’t just about links on search engines results pages. We map out a plan to claim video, table, list, and other results on position zero.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Feature on search results</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable16} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >HTML Sitemap Design</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >An XML sitemap is easy enough, but an HTML sitemap ought to balance the goals of the brand and the interests of users.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Optimize your sitemap</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable17} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Google Search Console & Analytics Integration</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >We get your site ready to measure performance. We’ll customize segments and conversions to match KPI.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Set up performance tracking</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable18} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Core Web Vitals Optimization</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Set up dashboards that help you identify opportunities to improve the User experience from Google’s perspective.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Optimize for User Experience</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable19} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Image Optimizations</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Ensure your site’s images are optimized for both the visually impaired and search performance.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Optimize your site’s images</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable20} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Page Speed Optimization</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >The way your site interacts with itself matters to search engines. We document and highlight all opportunities.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Improve site speed</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={Deliverable21} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Content Planner</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >We deliver a schedule which highlight what, when and how of new page creation. We also point out the type of positions you may expect to claim.</p>
                                    <button className='text-[#59667d] font-bold text-[24px] cursor-pointer '>Select your content plan</button>
                                </div>

                            </div>

                        </div>





                    </div>
                </section>






                {/* We are building cool stuff. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>

                            {/* Keep an eye out for what’s coming: */}
                            <div className='flex justify-center'>
                                <div className='p-10 bg-[#eefaf3] w-[80%] mt-10 rounded-xl'>
                                    <p className='text-[24px] text-[#2cbc63] font-bold  '>Keep an eye out for what’s coming:</p>
                                </div>
                            </div>


                            <div className='mx-auto text-[#023A51] py-20 md:flex flex-wrap justify-between '>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6  ' >
                                    <p className='text-[30px] text-[#2cbc63] leading-[35px] p-2' >We are building cool stuff.</p>
                                    <p className='text-[30px] leading-[35px] p-2' >We are committed to unleashing the very best of data and tech.</p>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={serviceIconLong} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >The TRAM SEO App</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Our extensive TRAM SEO course adapted to your favorite mobile device</p>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={ProductPolitics} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Politics in your Pocket</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >The Humble voter intends to make political engagement fun.</p>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={ProductHumbleTrader} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Humble Trader App</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Never invest without understanding the value of the company you want to be a part of.</p>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={ProductHTCMS} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >HT CMS</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >A proprietary web and content management system that takes advantage of the latest technologies.</p>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={ProductTheHumbleMind} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >The Humble Mind App</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >Our educational platform aims to educate while offering perspective on the life journey of our users.</p>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[32%] w-[100%] mb-6 border rounded-lg p-10 '>
                                    <Image className='rounded-xl ' src={ProductLanguageApp} alt="image" />
                                    <p className='text-[30px] text-[#023A51] font-bold leading-[35px] py-2' >Language App</p>
                                    <p className='text-[20px] text-[#59667d] text-left py-2' >An ambitious project which aims to teach Spanish to English speakers through an innovative approach.</p>
                                </div>


                            </div>

                        </div>
                    </div>
                </section>

                {/* Request a qoute */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-center  w-10/12 md:w-11/12 '>
                            <p className='text-[40px] font-bold text-[#023A51] md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] md:px-10' >Want to get serious about your business and online strategy<span className='text-[#2cbc63]' >?</span></p>
                            <p className='text-[26px] text-[#2cbc63] md:text-[35px] mt-4 leading-[35px] md:leading-[44px] tracking-[-2px] md:px-10' >Get in touch. Web Design. Content Marketing. SEO. Website Management. </p>
                            <button className='green_roudend_btn my-6' >Request a Quote</button>
                            <p className='text-[16px] text-[#023A51]'> Delighted to help.</p>
                        </div>
                    </div>
                </section>


                <DiscoverMore />
            </Layout>
        </>
    )
}
