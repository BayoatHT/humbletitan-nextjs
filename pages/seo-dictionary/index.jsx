import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import { FaPlus, FaMinus, FaChevronDown } from 'react-icons/fa';
import { GiClockwork, GiNetworkBars } from 'react-icons/gi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { CgWorkAlt } from 'react-icons/cg'
import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'


import Brands from '../../components/Brands'
import Accordion from '../../components/accordion-dictionary/Accordion';
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn';
import DiscoverMore from '../../components/DiscoverMore';
import GetAQuote from '../../components/GetAQuote';

// Images
import exceptionalResources from '../../assets/imgs/exceptional-resources-400x868.png'
import humblePoliticians from '../../assets/imgs/humble-politicians-400x174.jpg'
import humblePoliticalCampaigns from '../../assets/imgs/humble-political-campaigns-400x174.jpg'
import humbleNgos from '../../assets/imgs/humble-ngos-400x174.jpg'
import humbleCharities from '../../assets/imgs/humble-charities-400x174.jpg'
import homeContentManagementService from '../../assets/imgs/home-content-management-service.jpg'
import homeSeoService from '../../assets/imgs/home-seo-service.jpg'
import homeWebAndMobileDesign from '../../assets/imgs/home-web-and-mobile-design.jpg'
import homeWebManagement from '../../assets/imgs/home-web-management.jpg'
import bayohomepage from '../../assets/imgs/bayo-home-page.png'
import kristinahomepage from '../../assets/imgs/kristina-home-page.png'
import blogInsights from '../../assets/imgs/blog-insights.png'



export default function SeoDictionary() {
    return (
        <>
            <Head>
                <title>SEO Dictionary - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='md:w-8/12' >
                                <p className='text-[22px] font-bold pb-4 text-[#2cbc63] '>SEO Dictionary</p>
                                <h1 className=' text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >The A - Z of SEO Explained<span className='text-[#2cbc63]'>.</span></h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>You don&apos;t need a college degree to be great at SEO. But it helps to be pointed in the right direction. Get started with a our SEO dictionary</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* The SEO Dictionary. */}
                <section id='top' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap items-center justify-around'>
                                <div className='bg-[#fff] text-[#023A51] transition p-4 md:p-10 rounded mb-2 md:w-[69%] overflow-x-hidden ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] pt-3 leading-[63px] md:leading-[85px] ' >The SEO Dictionary</h2>
                                    <div className='p-4 md:p-8 border-2 mt-14 overflow-x-scroll md:overflow-x-auto '>
                                        <table className='border-collapse'>
                                            <thead>
                                                <tr >
                                                    <th className='border-2'><a href='#letterA' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> A</a></th>
                                                    <th className='border-2'><a href='#letterB' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> B</a></th>
                                                    <th className='border-2'><a href='#letterC' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> C</a></th>
                                                    <th className='border-2'><a href='#letterD' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> D</a></th>
                                                    <th className='border-2'><a href='#letterE' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> E</a></th>
                                                    <th className='border-2'><a href='#letterF' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> F</a></th>
                                                    <th className='border-2'><a href='#letterG' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> G</a></th>
                                                    <th className='border-2'><a href='#letterH' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> H</a></th>
                                                    <th className='border-2'><a href='#letterI' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> I</a></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='border-2'><a href='#letterJ' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> J</a></td>
                                                    <td className='border-2'><a href='#letterK' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> K</a></td>
                                                    <td className='border-2'><a href='#letterL' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> L</a></td>
                                                    <td className='border-2'><a href='#letterM' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> M</a></td>
                                                    <td className='border-2'><a href='#letterN' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> N</a></td>
                                                    <td className='border-2'><a href='#letterO' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> O</a></td>
                                                    <td className='border-2'><a href='#letterP' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> P</a></td>
                                                    <td className='border-2'><a href='#letterQ' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> Q</a></td>
                                                    <td className='border-2'><a href='#letterR' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> R</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='border-2'><a href='#letterS' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> S</a></td>
                                                    <td className='border-2'><a href='#letterT' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> T</a></td>
                                                    <td className='border-2'><a href='#letterU' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> U</a></td>
                                                    <td className='border-2'><a href='#letterV' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> V</a></td>
                                                    <td className='border-2'><a href='#letterW' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> W</a></td>
                                                    <td className='border-2'><a href='#letterX' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> X</a></td>
                                                    <td className='border-2'><a href='#letterY' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> Y</a></td>
                                                    <td className='border-2'><a href='#letterZ' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> Z</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Go Home</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter A */}
                <section id='letterA' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >A</h2>
                                    <div className='my-10'>
                                        <Accordion title="Above the Fold" content="Content that is visible on the screen of a user before scrolling. <br/>  To ensure that content in this area is kept relevant, Google introduced an algorithm update to penalize sites with too many ads that appear above the fold." />
                                        <Accordion title="Accelerated Mobile Pages (AMP)" content="An open source HTML framework developed by the AMP Open Source Project. It was originally created by Google as a competitor to Facebook Instant Articles and Apple News. AMP is optimized for mobile web browsing and intended to help web pages load faster." />
                                        <Accordion title="Ad Groups" content="An ad group contains one or more ads that share similar targets. <br/><br/>
                                        Each of your campaigns is made up of one or more ad groups. Use ad groups to organize your ads by a common theme. For example, try separating ad groups into the different product or service types you offer. <br/><br/>
                                        <a href='https://support.google.com/google-ads/answer/6298'  >Learn more about ad groups
                                        " />
                                        <Accordion title="AJAX" content="From the perspective of web users, they don’t have to reload a page to receive new information. Data is served dynamically and can also be sent to a server without leaving a page." />
                                        <Accordion title="Algorithm" content="A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer. In the cases of search engines, these complex computer programs are to retrieve data, process and deliver the most relevant search results for a query. <br/><br/>
                                        Algorithms are used to implement the ranking factors that determine the visibility of  indexable webpages.
                                        " />
                                        <Accordion title="Algorithm Change" content='Search algorithms are constantly modified to better serve users. The frequency of algorithm changes are debated as many go undetected, while the effects of others drastically impact rankings. <br/><br/> There are three types of Algorithmic changes to consider <br/><br/> Algorithm Update: Modifications to  signals of an existing algorithm. <br/><br/> Algorithm Refresh: A new roll out of an existing algorithm using the exact same signals as last time. <br/><br/> New Algorithm: A new roll out of an existing algorithm using the exact same signals as last time. <br/><br/> ' />
                                        <Accordion title="Alt Attribute" content="Also referred to as,  Alt Text. This HTML code provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader). <br/><br/> By describing respective images, Alt attributes also assist the understanding of content by visually imparied." />
                                        <Accordion title="Analytics" content="The systematic computational analysis of data or statistics. In SEO, this pertains to the practice of collecting, analyzing, and interpreting data to draw insights and map out strategic actions for the future of a brand." />
                                        <Accordion title="Analytics Solutions" content="Refers to an umbrella term encompassing all products — both paid and free — that are part of the Google Analytics product family. Users can differentiate between a paid product and a free product easily: paid products include the “360” modifier after the product name, free products do not. <br/> For example: <br/><br/> <li>Google Analytics 360 (paid product)</li> <li>Google Analytics (free product)</li> <br/> <a href='https://support.google.com/analytics/answer/7390017?hl=en' >Learn more about Analytics Solutions </a> " />
                                        <Accordion title="Analytics Tag (Referring to Google Analytics)" content="The Analytics tag is a snippet of JavaScript that collects and sends data to Analytics from a website.<br/><br/> You can add the Analytics tag directly to the HTML of each page on your site, or indirectly using a tag management system such as Google Tag Manager. <br/><br/> <a href='https://support.google.com/analytics/answer/6086097'> Learn more about Analytics Tag </a> + <a href='https://support.google.com/analytics/answer/1008080' > even more info</a> " />
                                        <Accordion title="Anchor Text" content="Refers to the clickable words used to link one web page to another. <br/><br/> When optimized correctly, the anchor text should provide a user with contextual information about the page that is being linked to." />
                                        <Accordion title="Answerthepublic" content="A free tool that allows marketers to discover instant, raw search insights, direct from the minds of customers. By entering answerthepublic.com and entering a head term, marketers can discover popular questions being asked in relation to their target idea." />
                                        <Accordion title="Application Programming Interface (API)" content="A computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. It can also provide extension mechanisms so that users can extend existing functionality in various ways and to varying degrees. <br/><br/> An API can be entirely custom, specific to a component, or it can be designed based on an industry-standard to ensure interoperability. Through information hiding, APIs enable modular programming, which allows users to use the interface independently of the implementation. <br/><br/> <a href='https://en.wikipedia.org/wiki/API' > Learn more about API </a> " />
                                        <Accordion title="Artificial Intelligence (AI)" content="A machine learning process with the ability to conduct cognitive functions such as perceiving, learning, reasoning and solving problems. <br/><br/> AI is a science that seeks to make critical decisions without human intervention. <br/><br/> Below are the three general level of artificial intelligence: <br/><br/> Narrow AI: the machine can perform a specific task better than a human.  <br/><br/> General AI: the machine can perform any intellectual task with the same accuracy as a human  <br/><br/> Strong AI: the machine can beat humans in many tasks " />
                                        <Accordion title="Attribution (Referring to Google Analytics)" content="The process of assigning credit for sales and conversions to touchpoints in conversion paths. <br/><br/> Attribution allows marketers to quantify each channel’s contribution to sales and conversions. For example, many people may purchase on your site after searching for your brand on Google. However, they may have been introduced to your brand via a display ad or a blog. A marketer uses attribution to appropriately distribute monetary credit for purchases among the many marketing channels that may have contributed to each sale. <br/><br/> <a href='https://support.google.com/analytics/answer/6086134'> Learn more about Attribution </a> + <a href='https://support.google.com/analytics/answer/1662518'> more here <a/>" />
                                        <Accordion title="Attribution model (Referring to Google Analytics)" content="A rule, or set of rules, that determines how credit for sales and conversions is assigned to touchpoints in conversion paths. <br/><br/> An attribution model is the rule, or set of rules, that determines how credit for sales and conversions is assigned to touchpoints in conversion paths. For example, Last Interaction attribution assigns 100% credit to the final touchpoints (i.e., clicks) that immediately precede sales or conversions. First Interaction attribution assigns 100% credit to touchpoints that initiate conversion paths. <br/><br/> <a href='https://support.google.com/analytics/answer/6086214'> Learn more about Attribution model  <a/>" />
                                        <Accordion title="Authority" content="A ranking signal that’s typically informed by the quality of backlink profile and strength of a brand name. Search engines use it to determine the ranking of indexable web pages." />
                                        <Accordion title="Automated Bid managers (ABMs)" content="Advertising tools used to manage budgets on pay per click (PPC) campaigns. ABMs allow users to prioritize keywords listings and bids. Many ABMs have timestamp controls as well as position monitors. ABMs are designed to allow a user either to maintain a certain position on a PPC list or to keep to a specific budget. ABMs come in a variety of formats and can be customized to meet the scale of an application." />
                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Humble Mind Mag</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* SEO By TRAM */}
                <section className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >Also, Explore SEO By TRAM</h2>
                                    <div className='flex flex-wrap mt-6 justify-around '>
                                        <div className='text-center sm:w-[48%] w-[100%] p-4 mb-4 border rounded-lg ' >
                                            <Image src={homeWebAndMobileDesign} alt="image" />
                                            <h1 className='text-[30px] py-2' >Web & Mobile <br /> Design</h1>
                                            <p className='text-[18px]  p-4' >More than design. We transform your vision into an online reality.</p>
                                        </div>
                                        <div className='text-center sm:w-[48%] w-[100%] p-4 mb-4 border rounded-lg '>
                                            <Image src={homeSeoService} alt="image" />
                                            <h1 className='text-[30px] py-2' >Search Engine Optimization</h1>
                                            <p className='text-[18px] p-4' >Extend your brand&apos;s organic reach. Attract thousands of new visitors to your website.</p>
                                        </div>
                                        <div className='text-center sm:w-[48%] w-[100%] p-4 mb-4 border rounded-lg '>
                                            <Image src={homeContentManagementService} alt="image" />
                                            <h1 className='text-[30px] py-2' >Content <br /> Marketing</h1>
                                            <p className='text-[18px] p-4' >With a focus on engagement, we specialize in brand elevating web content.</p>
                                        </div>
                                        <div className='text-center sm:w-[48%] w-[100%] p-4 mb-4 border rounded-lg '>
                                            <Image src={homeWebManagement} alt="image" />
                                            <h1 className='text-[30px] py-2' >Website <br /> Management</h1>
                                            <p className='text-[18px] p-4' >Let&apos;s take care of your bsuiness. We will manage the day-to-day operations of your website.</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#eefaf3] rounded-xl mt-10 p-8 '>
                                        <p className='text-[#2cbc63] text-[26px] font-bold '>Discover what the internet can do for your business or idea.</p>
                                        <Green_rounded_btn>Talk to us!</Green_rounded_btn>
                                    </div>

                                </div>
                                <div className=' mb-2 md:w-[30%] md:mt-[200px] '>
                                    <div className=' rounded-xl p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[36px] text-[#2cbc63] font-bold  '>Our Services<span className='text-[#023A51]'>.</span></p>
                                        <p className='text-[36px] font-bold text-[#023A51] ' >Don’t miss out on what else we can do for you<span className='text-[#2cbc63]'>.</span></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Letter B */}
                <section id='letterB' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >B</h2>
                                    <div className='my-10'>
                                        <Accordion title="Business to Business (B2B)" content="An abbreviation of business-to-business. Relating to business arrangements or trade between different businesses, rather than between businesses and the public, especially when this takes place over the internet." />
                                        <Accordion title="Business to Consumer (B2C)" content="" />
                                        <Accordion title="Backlink (Link)" content="" />
                                        <Accordion title="Baidu" content="" />
                                        <Accordion title="Behavioral Targeting" content="" />
                                        <Accordion title="Bidirectional Encoder Representations from Transformers (BERT)" content="" />
                                        <Accordion title="Bing" content="" />
                                        <Accordion title="Black Box" content="" />
                                        <Accordion title="Black Hat SEO" content="" />
                                        <Accordion title="Boolean search" content="" />
                                        <Accordion title="Blog" content="" />
                                        <Accordion title="Bounce Rate" content="" />
                                        <Accordion title="Bot" content="" />
                                        <Accordion title="Branded Keyword" content="" />
                                        <Accordion title="Branding" content="" />
                                        <Accordion title="Breadcrumb" content="" />
                                        <Accordion title="Broken Link" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Biographies</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Letter C */}
                <section id='letterC' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >C</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter D */}
                <section id='letterD' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >D</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Letter E */}
                <section id='letterE' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >E</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Letter F */}
                <section id='letterF' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >F</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Letter G */}
                <section id='letterG' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >G</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Letter H */}
                <section id='letterH' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >H</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter I */}
                <section id='letterI' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >I</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter J */}
                <section id='letterJ' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >J</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter K */}
                <section id='letterK' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >K</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter L */}
                <section id='letterL' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >L</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter M */}
                <section id='letterM' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >M</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter N */}
                <section id='letterN' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >N</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter O */}
                <section id='letterO' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >O</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter P */}
                <section id='letterP' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >P</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter Q */}
                <section id='letterQ' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >Q</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter R */}
                <section id='letterR' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >R</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter S */}
                <section id='letterS' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >S</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter T */}
                <section id='letterT' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >T</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter U */}
                <section id='letterU' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >U</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter V */}
                <section id='letterV' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >V</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter W */}
                <section id='letterW' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >W</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter X */}
                <section id='letterX' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >X</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter Y */}
                <section id='letterY' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >Y</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Letter Z */}
                <section id='letterZ' className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-around'>
                                <div className='bg-[#fff] text-[#023A51] rounded mb-2 md:w-[69%] ' >
                                    <h2 className='text-[52px] font-bold font-poppins md:text-[72px] leading-[63px] md:leading-[85px] ' >Z</h2>
                                    <div className='my-10'>
                                        <Accordion title="" content="" />

                                    </div>
                                    <a className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
                                </div>
                                <div className=' mb-2 md:w-[30%] '>
                                    <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7]' >
                                        <p className='text-[35px] '>Quotes</p>
                                        <p className='text-[20px] py-3 text-[#59667d] ' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                        <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                {/* We Speak Spanish */}
                <section className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex flex-wrap justify-center'>
                                <div className=' md:w-[25%] flex flex-col items-center '>
                                    <Image className='p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' src={bayohomepage} alt="bayo-home-page.png" />
                                    <p className='text-[36px] font-bold  '>Bayo</p>
                                    <p className='text-[#59667d] text-center text-[18px] my-4 '>I believe we should all get to live the life of our dreams. We are here for you.</p>
                                    <div className='flex px-4 justify-center'>
                                        <a className='text-[26px] mx-2' title='Facebook' href="https://www.facebook.com/FansOfKindness"><FaFacebookF /></a>
                                        <a className='text-[26px] mx-2' title='Twitter' href="https://twitter.com/bonds_kindness"><TiSocialTwitter /></a>
                                        <a className='text-[26px] mx-2' title='Instagram' href="https://www.instagram.com/thequotecouple"><TiSocialInstagram /></a>

                                    </div>
                                </div>
                                <div className=' md:w-[25%] md:ml-4 pb-4 text-center md:mx-5 '>
                                    <p className='text-[36px] font-bold font-bold  '>We Speak Spanish</p>
                                    <button className='green_rounded_btn'>B&K Español</button>
                                    <p className='text-[#59667d] text-[18px]'>Echale un Vistazo a nuestro Contenido y Servicios en Español</p>
                                </div>
                                <div className=' md:w-[25%] flex flex-col items-center '>
                                    <Image className='p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' src={kristinahomepage} alt="kristina-home-page.png" />
                                    <p className='text-[36px] font-bold  '>Kristina</p>
                                    <p className='text-[#59667d] text-center text-[18px] my-4 '>We’ve created Bonds & Kindness to help you make the most out of your life.</p>
                                    <div className='flex px-4 justify-center'>
                                        <a className='text-[26px] mx-2' title='Facebook' href="https://www.facebook.com/FansOfKindness"><FaFacebookF /></a>
                                        <a className='text-[26px] mx-2' title='Twitter' href="https://twitter.com/bkmag_es"><TiSocialTwitter /></a>
                                        <a className='text-[26px] mx-2' title='Instagram' href="https://www.instagram.com/thequotecouple"><TiSocialInstagram /></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* Educational Dictionaries */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>


                            <p className=' text-[60px] md:text-[70px] text-[#00989e] font-bold leading-[65px] md:leading-[79px] tracking-[-2px] py-20 ' >Educational Dictionaries</p>


                            <div className='flex flex-wrap text-[#023A51] justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Business Dictionary</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Economics Dictionary</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>SEO Dictionary</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Politics Dictionary</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                </div>

                            </div>

                        </div>
                    </div>
                </section>


                {/* Discover our full SEO course */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover our full SEO course</p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* Learn SEO & Online Success */}


                            <p className=' text-[50px] md:text-[60px] text-[#00989e] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ' >Learn SEO & Online Success</p>


                            <div className='flex flex-wrap text-[#023A51] justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Technical SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Relevance SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Authority SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Monitoring SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                {/* On the cutting edge. */}
                <section className='heading py-10 my-10 bg-[#f9fafb] md:my-20'>
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

                                    <div className='p-6 bg-[#fff] rounded-lg shadow my-6 w-[100%]'  >
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

                {/* discover More */}
                <DiscoverMore />


                <GetAQuote />
            </Layout>
        </>
    )
}
