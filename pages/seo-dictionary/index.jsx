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
                                        <Accordion title="Business to Consumer (B2C)" content="An abbreviation of business-to-consumer. Relating to or involving the sale of goods or services directly to customers for their own use, rather than to businesses." />
                                        <Accordion title="Backlink (Link)" content="A link from one website to another. Search engines use the number of quality backlinks pointing to a page/site as a ranking signal. This is because each link represents a vote of confidence that the page being linked to is of value. Enough backlinks, point to a page and search engines tend to assume the content must be worth the attention of users. <br/><br/> Backlinks are used to improve the visibility of a site.  " />
                                        <Accordion title="Baidu" content=" Baidu is a Chinese multinational technology company specializing in Internet-related services and products and artificial intelligence (AI). As a search engine, Baidu has the second largest search engine in the world, and holds a 76.05% market share in China’s search engine market." />
                                        <Accordion title="Behavioral Targeting" content="A marketing strategy that uses historical behavior to personalize the types of ads consumers see. <br/><br/> Historical behavior is sourced through powerful datasets that illustrate how audiences behave. Marketers can then use this to create ads and campaigns that match each consumer’s actual behavior. <a href='https://www.tamoco.com/blog/what-is-behavioral-targeting/'>Learn more about behaviora marketing </a> " />
                                        <Accordion title="Bidirectional Encoder Representations from Transformers (BERT)" content="A neural network-based technique for natural language processing pre-training. In plain English, it can be used to help Google better discern the context of words in search queries. <br/><br/> Bert is a natural language processing pre-training approach that can be used on a large body of text. It handles tasks such as entity recognition, part of speech tagging, and question-answering among other natural language processes. Bert helps Google understand natural language text from the Web. <br/><br/> Google has open sourced this technology, and others have created variations of BERT. <br/><br/> <a href='https://www.searchenginejournal.com/google-bert-update/332161/'>Learn more about BERT  </a> " />
                                        <Accordion title="Bing" content="Bing is a web search engine owned and operated by Microsoft. Bing, Microsoft’s replacement for Live Search, was unveiled by Microsoft CEO Steve Ballmer on May 28, 2009. In July 2009, Microsoft and Yahoo! announced a deal in which Bing would power Yahoo! Search." />
                                        <Accordion title="Black Box" content="A term used to describe a complex system or device whose internal workings are hidden or not readily understood. Inputs and outputs can be observed, but there is no access to the process itself due to its confidential nature. For example, Google’s algorithm is a black box." />
                                        <Accordion title="Black Hat SEO" content="The deliberate manipulation of search engine indexes. It involves a number of methods, such as link building and repeating unrelated phrases, to manipulate the relevance or prominence of resources indexed, in a manner inconsistent with the purpose of the indexing system. <br/><br/> Generally, risky tactics that go against Google’s Webmaster Guidelines. " />
                                        <Accordion title="Boolean search" content="Uses a combination of keywords and the three main Boolean operators (AND, OR and NOT) to organise and sift through your searches. It produces more accurate and relevant results, <br/><br/> allowing you to navigate through appropriate candidates, while disregarding the unrelated. <br/><br/> The first important thing to appreciate about Boolean is that there are only five elements of syntax to understand. These are: AND, OR, NOT, (), “” <br/><br/> <a href='https://www.socialtalent.com/blog/recruitment/the-beginners-guide-to-boolean-search-terms'>Learn more about Boolean search  </a>  " />
                                        <Accordion title="Blog" content="A publication of content, sorted in chronological order. <br/><br/> In 1997, Jorn Barger, blogger for Robot Wisdom, coined the term “weblog”, which was meant to describe his process for “logging the web” as he surfed the internet. The term “weblog” was shortened to “blog” in 1999, by programmer Peter Merholz.  with the most recent content appearing at the top. <br/><br/> The content reflects personal or corporate interests, and can be written by an individual or a group of contributors. " />
                                        <Accordion title="Bounce Rate" content="It represents the percentage of visitors who enter the site and then leave (“bounce”) rather than continuing to view other pages within the same site. Bounce rate is calculated by counting the number of single page visits and dividing that by the total visits. It is then represented as a percentage of total visits. <br/><br/>  Bounce rate is a measure of “stickiness.” The thinking being that an effective website will engage visitors deeper into the website. Encouraging visitors to continue with their visit. It is expressed as a percentage and represents the proportion of single page visits to total visits. <br/><br/> Bounce rate (%) = Visits that access only a single page (#) ÷ Total visits (#) to the website " />
                                        <Accordion title="Bot" content="A software program that can execute commands, reply to messages, or perform routine tasks, as online searches, either automatically or with minimal human intervention. <br/><br/> Typically they do repetitive tasks, and they can do them much faster than human users could. <br/><br/> Bots usually operate over a network; more than half of Internet traffic is bots scanning content, interacting with web pages, chatting with users, or looking for attack targets. Some bots are useful, such as search engine bots that index content for search or customer service bots that help users.  " />
                                        <Accordion title="Branded Keyword" content="A branded keyword, or a branded search, is any query via a search engine that includes the name of your company, business or brand." />
                                        <Accordion title="Branding" content="An important marketing tool that plays a critical  role in search engine optimization. Branding refers to the market development and expansion of brand awareness. " />
                                        <Accordion title="Breadcrumb" content="A type of text-based Web site navigation that breaks the site into links of categories and subcategories allowing major categories of information to be linked in a range of sequential order. Breadcrumb navigation is displayed to the user, so they can easily see exactly where that Web page is located within the Web site." />
                                        <Accordion title="Broken Link" content="Broken or dead link, a link that, having suffered link rot, points to a webpage or server that is no longer available on the World Wide Web" />

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
                                        <Accordion title="Cache" content="A hardware or software component that stores data so that future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation or a copy of data stored elsewhere. <br/><br/> A cache hit occurs when the requested data can be found in a cache, while a cache miss occurs when it cannot. Cache hits are served by reading data from the cache, which is faster than recomputing a result or reading from a slower data store; thus, the more requests that can be served from the cache, the faster the system performs. <br/><br/> Caching is primarily used to reduce future page loading times. " />
                                        <Accordion title="Cached Page" content="A view of a page and it’s content as it appeared when it was crawled and indexed by a search engine." />
                                        <Accordion title="Canonical Tag (Canonical Link, rel=canonical)" content="An HTML element that helps webmasters prevent duplicate content issues in search engine optimization by specifying the “canonical” or “preferred” version of a web page. This is primarily used to decrease web bloat or duplicate content issues." />
                                        <Accordion title="Cascading Style Sheets (CSS)" content="CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. <br/><br/> CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. <br/><br/> CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. <br/><br/> This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting. " />
                                        <Accordion title="Content Delivery Network (CDN)" content="A geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end users. CDNs came into existence in the late 1990s as a means for alleviating the performance bottlenecks of the Internet. <br/><br/> <a href='https://en.wikipedia.org/wiki/Content_delivery_network'>Learn more about CDNs </a> " />
                                        <Accordion title="ccTLD" content="A country code top-level domain (ccTLD) is an Internet top-level domain generally used or reserved for a country, sovereign state, or dependent territory identified with a country code. All ASCII ccTLD identifiers are two letters long, and all two-letter top-level domains are ccTLDs. <br/><br/> For example, a brand based in Spain would have a domain like this: www.example.es, where “es” is the ccTLD. " />
                                        <Accordion title="Channel Grouping (Referring to Google Analytics)" content="A roll-up of traffic sources in the Acquisition reports that groups several marketing activities together. Channel groupings allow you to view and compare aggregated metrics by channel name, as well as individual traffic source, medium, or campaign name. <br/><br/> In the Acquisition section’s Overview and Channels reports, you can see your data organized according to the Default Channel Grouping, a rule-based grouping of the most common sources of traffic, like Paid Search and Direct. This allows you to quickly check the performance of each of your traffic channels. <br/><br/> <a href='https://support.google.com/analytics/answer/6086078'>Learn more about Channel Grouping</a> " />
                                        <Accordion title="Chrome User Experience Report" content="Provides user experience metrics for how real-world Chrome users experience popular destinations on the web. <br/><br/> <a href='https://developers.google.com/web/tools/chrome-user-experience-report'>Learn more about CrUX</a>  " />
                                        <Accordion title="Click Bait" content="Content that is designed to entice people to click, typically by overpromising or being intentionally misleading in headlines, so publishers can earn advertising revenue." />
                                        <Accordion title="Click-Through Rate (CTR)" content="The ratio of users who click on the link of an organic search result to the number of total users who view the link. Typically expressed as a percentage, the number is calculated by dividing the total number of organic clicks by the total number of impressions then multiplying by 100. <br/><br/> Webmasters rely on CTR to gauge the effectiveness of rankings, meta titles and meta descriptions." />
                                        <Accordion title="Cloaking" content="A violation of Google’s Webmaster Guidelines, this is a technique in which the content presented to the search engine spider is different from that presented to the user’s browser. <br/><br/> This is done by delivering content based on the IP addresses or the User-Agent HTTP header of the user requesting the page. When a user is identified as a search engine spider, a server-side script delivers a different version of the web page, one that contains content not present on the visible page, or that is present but not searchable. <br/><br/> The purpose of cloaking is sometimes to deceive search engines so they display the page when it would not otherwise be displayed (black hat SEO). " />
                                        <Accordion title="Closing Tag" content="An HTML tag indicating that a previously executed command should end. The closing tag usually takes the form of <tag>" />
                                        <Accordion title="Content Management System (CMS)" content="A CMS is a computer software used to manage the creation and modification of digital content." />
                                        <Accordion title="Co-Citation" content="The frequency with which two or more web pages are mentioned together by a third-party website, even if those first two items don’t link to (or reference) each other. <br/><br/> Co-citation, like Bibliographic Coupling, is a semantic similarity measure for web pages that makes use of citation relationships. Search engines use this to establish subject similarity. <br/><br/> If at least one third party site cites two different domains on a common page, the two domains are said to be co-cited. The more co-citations two websites receive, the higher their co-citation strength, and the more likely they are semantically related. " />
                                        <Accordion title="Comment Spam" content="A term referencing a broad category of spambot or spam postings which abuse web-based forms to post unsolicited advertisements as comments on forums, blogs, wikis and online guestbooks. <br/><br/> Related topics include: <br/><br/> Forum spam, posts on Internet forums that contains related or unrelated advertisements, links to malicious websites, and abusive or otherwise unwanted information <br/><br/> Newsgroup spam, a type of spam where the targets are Usenet newsgroups <br/><br/> Social spam, unwanted spam content appearing on social networks and any website with user-generated content <br/><br/> Spam in blogs, a form of spamdexing done by posting random comments, copied material, or promotion of commercial services <br/><br/> Spam in blogs, a form of spamdexing done by posting random comments, copied material, or promotion of commercial services <br/><br/> Hit-and-run posting, a tactic where a poster at an Internet forum enters, makes a post, only to disappear immediately after <br/><br/> Sockpuppet (Internet), an online identity used for purposes of deception <br/><br/> Astroturfing, the practice of masking the sponsors of a message or organization <br/><br/>  " />
                                        <Accordion title="Competition (SEO)" content="Search factors that render it relatively difficult to perform well for any SEO metric. <br/><br/> There are three main types of competition considered by SEOs: <li>Keyword Competition:  The measure of how difficult it will be to rank for a particular keyword. The competition for a keyword can vary depending on how popular the keyword is and industry competition. </li> <li> Direct Competitors: Brands that provide similar offerings, serve similar needs and target a similar audience.  </li> <li> SEO Competitors: Online brands that contend for the same keywords and organic search visibility </li> " />
                                        <Accordion title="Content" content="The information and experiences that are directed toward an end-user or audience. <br/><br/> Content is “something that is to be expressed through some medium, as speech, writing or any of various arts”. <br/><br/> Content can be delivered via many different media including the Internet, cinema, television, radio, smartphones, audio CDs, books, e-books, magazines, and live events, such as speeches, conferences, and stage performances. <br/><br/> Particularly in the case of the internet, web content is the textual, visual, or aural content that is encountered as part of the user experience on websites. It may include—among other things—text, images, sounds, videos, and animations. " />
                                        <Accordion title="Content Grouping (Referring to Google Analytics)" content="A roll-up of content in the Behavior reports that groups several pages or screens together to better reflect the structure of your site or app. Content groupings allow you to view and compare aggregated metrics by content group name, as well as individual URL, page title, or screen name. <br/><br/> Content Grouping lets you group content into a logical structure that reflects how you think about your site or app, and then view and compare aggregated metrics by group name in addition to being able to drill down to the individual URL, page title, or screen name. For example, you can see the aggregated number of pageviews for all pages in a group like Men/Shirts, and then drill in to see each URL or page title. <br/><br/> <a href='https://support.google.com/analytics/answer/6086050'> Learn more about Content Grouoing </a> " />
                                        <Accordion title="Content Consolidation" content="Learn more about Content Grouoing" />
                                        <Accordion title="Content is King" content="Popularized by Bill Gates, “Content is King” is a phrase that was outlined in a book in 1974 by Sumner Redstone. Today, we use the term to refer to the idea that organic search success hinges on the creation of fresh, unique and relevant content." />
                                        <Accordion title="Conversion" content="A process in which the web user executes a desired action. A completed activity, online or offline, that is important to the success of your business. Examples include a completed sign-up for your email newsletter (a Goal conversion) and a purchase (a transaction, sometimes called an Ecommerce conversion). <br/><br/> <a className={styles.a} href='https://support.google.com/analytics/answer/6086209'> Learn more about conversions </a> " />
                                        <Accordion title="Conversion Rate" content="The proportion of visitors to a website who take an action desired by the SEO marketer. Typically expressed as a  percentage, this is calculated by dividing the total number of conversions by traffic, then multiplying by 100. " />
                                        <Accordion title="Conversion Rate Optimization (CRO)" content="The process of improving the number or quality of conversions that occur on a website. Some popular CRO tactics include testing changes to website design, copy, images, price, call-to-action, and messaging." />
                                        <Accordion title="Cost Per Acquisition" content="The amount it costs for a web site to acquire a new visitor" />
                                        <Accordion title="Cost Per Click" content="A bid, placed on a keyword advertisement, that is charged each time a visitor clicks the advertisement" />
                                        <Accordion title="Cost Per Conversion" content="The average cost of acquiring a conversion" />
                                        <Accordion title="Crawl Budget" content="The number of URLS a search engine can and wants to crawl on a site on any given day. This number is subject to change daily. Google especially advises that brands with less than a few thousand pages ought not to worry about crawl budget, pages will typically be crawled efficiently on smaller sites. <br/><br/> The budget assigned to a specific site typically depends on the size of the site, the crawl limit assigned, the public demand for content provided by the site and competition. " />
                                        <Accordion title="Crawl Demand" content="Demand from search indexing that’s dependent on popularity of a URL and the staleness of the page. " />
                                        <Accordion title="Crawl Error" content="Issues faced by crawlers as they look to crawl a URL. this may be flagged by various status code errors." />
                                        <Accordion title="Crawler (Spider, Bot)" content="Sometimes called a spider or spider bot and often shortened to crawler, is an Internet bot that systematically browses the World Wide Web, typically for the purpose of Web indexing (web spidering). <br/><br/> Google essentially relies on crawlers to update it it’s index. <br/><br/> Web search engines and some other websites use Web crawling or spidering software to update their web content or indices of other sites’ web content. Web crawlers copy pages for processing by a search engine, which indexes the downloaded pages so that users can search more efficiently. " />
                                        <Accordion title="Crawling" content="The process in which search engines send crawlers to discover web pages (or images, videos, PDFs, other web medi).  Upon discovery, depending on directives, crawlers may render, index, organise, update pages, as links are made available on search results pages." />
                                        <Accordion title="Custom Dimension (Referring to Google Analytics)" content="A user-defined descriptive attribute or characteristic of data. Custom dimensions can be used to describe data not included in the default dimensions in Analytics.<br/><br/> There are several ways to get custom data into Analytics, such as modifying your tracking code, uploading it using Data Import, or sending it via the Management API or Measurement Protocol. <br/><br/> <a href='https://support.google.com/analytics/answer/6186991'> Learn more about custom dimension </a>  " />

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
                                        <Accordion title="Data" content="Characteristics or information, usually numerical, that are collected through observation. In a more technical sense, data is a set of values of qualitative or quantitative variables about one or more persons or objects, while a datum (singular of data) is a single value of a single variable. <br/><br/> Data is used to monitor SEO performance, as well as shape strategy." />
                                        <Accordion title="Digital Millennium Copyright Act Notice (DMCA Notice)" content="DMCA notice and takedown process is a tool for copyright holders to get user-uploaded material that infringes their copyrights taken down off of websites. The process entails the copyright owner (or the owner’s agent) sending a takedown notice to a service provider requesting the provider to remove material that is infringing their copyright(s). A service provider can be an internet service provider (e.g., Comcast), website operator (e.g, eBay), search engine (e.g., Google), a web host (e.g., GoDaddy) or other type of online site-operator. <br/><br/> <a href='https://copyrightalliance.org/ca_faq_post/dmca-notice-and-takedown-process/'> Learn more about DMCA Notices </a> " />
                                        <Accordion title="Data Set (Referring to Google Analytics)" content="A container that holds the data you upload to Analytics. <br/><br/>Data Sets are an essential component of the Data Import feature. <br/><br/> A Data Set’s type corresponds to the specific type of data you want to import. For example, there are Data Set types for User Data, Cost Data, Content Data, etc. <br/><br/> When you create a Data Set, you define a schema, which is the structure that joins the data you upload with the existing data in your hits. <br/><br/> <a href='https://support.google.com/analytics/answer/6085271'> Learn more about Data Set  </a> " />
                                        <Accordion title="De-index (Delisting)" content="A process in which search engines temporarily or permanently remove sites from their index and search results. <br/><br/> This may happen for a number of reasons, the webmaster of the site may indicate that they prefer to remove a URL from the index, search engines may deem that a URL is in violation of it’s guidelines, or or for other reasons, such as if the sites detract from users’ ability to locate relevant information. <br/><br/> For those monitoring performance on Google’s search console, indexing information is available for review.  " />
                                        <Accordion title="Dimension (Referring to Google Analytics)" content="A descriptive attribute or characteristic of data. Browser, Landing Page and Campaign are all examples of default dimensions in Analytics. <br/><br/> A dimension is a descriptive attribute or characteristic of an object that can be given different values. For example, a geographic location could have dimensions called Latitude, Longitude, or City Name. Values for the City Name dimension could be San Francisco, Berlin, or Singapore. <br/><br/> Browser, Exit Page, Screens, and Session Duration are all examples of dimensions that appear by default in Analytics. Dimensions appear in all of your reports, though you might see different ones depending on the specific report. Use them to help organize, segment, and analyze your data. <br/><br/> <a href='https://support.google.com/analytics/answer/6086074?hl=en&ref_topic=6083659'> Learn more about Dimensions  </a> " />
                                        <Accordion title="Directory (Web Directory, Link Directory)" content="An online list or catalog of websites. <br/><br/> Historically, directories typically listed entries on people or businesses, and their contact information; such directories are still in use today. A web directory includes entries about websites, including links to those websites, organized into categories and subcategories. <br/><br/> Besides a link, each entry may include the title of the website, and a description of its contents. In most web directories, the entries are about whole websites, rather than individual pages within them. " />
                                        <Accordion title="Disavow" content="The attempt to improve the quality of a site’s backlink profile by removing (disassociating) harmful, spammy, artificial, or low-quality inbound links that may be hindering rankings. <br/><br/> You may update your site’s disavow file through Google’s Search Console. " />
                                        <Accordion title="Do-follow" content="The default state of a hyperlink. This HTML attribute allows search bots to follow the path created by the link on to another page. This allows for the pass of link equity to the target page and informs search engines that they may explore the contents of the target page. " />
                                        <Accordion title="Domain Age" content="The amount of time during which a domain name has been registered." />
                                        <Accordion title="Domain Authority" content="Describes a website’s strength and relevance for a specific subject area or industry. This ranking strength has a direct impact on a page’s ability to rank on search engine results pages. Attracting quality links to a website is typically regarded as the most effective way to increase domain authority to a webpage. " />
                                        <Accordion title="Domain Cloaking" content="A strategy that allows you to redirect users to your existing web page while maintaining your URL on the browser’s address bar" />
                                        <Accordion title="Domain Name" content="An identification string that defines a realm of administrative autonomy, authority or control within the Internet. Domain names are used in various networking contexts and for application-specific naming and addressing purposes. Put simply, it is the address of your website that people type in the browser URL bar to visit a site. <br/><br/> They typically end  in  an extension like .com, .org, or .net.  " />
                                        <Accordion title="Doorway Page (Jump pages, Gateway pages)" content="Web pages that are created for the deliberate manipulation of search engine indexes (spamdexing). A doorway page will affect the index of a search engine by inserting results for particular phrases while sending visitors to a different page. <br/><br/> Doorway pages that redirect visitors without their knowledge use some form of cloaking. This usually falls under Black Hat SEO. " />
                                        <Accordion title="DuckDuckGo" content="Founded September 28, 2008, DuckDuckgo, an internet search engine that emphasizes protecting searchers’ privacy and avoiding the filter bubble of personalized search results. <br/><br/> DuckDuckGo relies on more than 400 sources to serve its search results, including vertical search engines, its own crawler, DuckDuckBot, Bing, and Yandex. It especially distinguishes itself from other search engines by not profiling its users and by showing all users the same search results for a given search term. " />
                                        <Accordion title="Duplicate Content" content="Refers to content that appears on more than one web page. <br/><br/> Search engines may penalize sites for duplicate content when a substantial amount of content contained on one webpage matches content that exists elsewhere on the same website or a completely different website. <br/><br/> In most cases, the penalty may be as simple as removing duplicate pages from the search index. " />
                                        <Accordion title="Dwell Time" content="The amount of time that elapses between when a user clicks on a search result and then returns to the SERP from a website. <br/><br/> Short dwell time can be an indicator of low-quality content. Though not popularly admitted, it is very likely that this is a ranking factor as search engines are in the business of serving the most relevant content to web users. " />

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
                                        <Accordion title="E-A-T (Expertise, Authority and Trust)" content="E-A-T stands for Expertise, Authority, and Trust — three factors that Google uses to measure how much trust it should place in a brand or website. Google wants to give its customers (search engine users) the best experience possible, so it only wants to promote websites that it fully trusts. <br/><br/> <a href='https://exposureninja.com/blog/what-is-eat/'> Learn more about E-A-T  </a> " />
                                        <Accordion title="eCommerce" content="The activity of electronically buying or selling of products on online services or over the Internet." />
                                        <Accordion title="Editorial Link (Natural Link)" content="An external backlink that is earned by a site without payment or exchange of favors. These are typically the results of creating great content that may be outreached." />
                                        <Accordion title="Exact Match Domain (EMD)" content="A domain name that precisely matches a search query that will likely drive traffic to your website." />
                                        <Accordion title="External Link" content="A link from one website to another. Search engines use the number of quality backlinks pointing to a page/site as a ranking signal. This is because each link represents a vote of confidence that the page being linked to is of value. Enough backlinks, point to a page and search engines tend to assume the content must be worth the attention of users. <br/><br/> External links are used to improve the visibility of a site.  " />
                                        <Accordion title="Event (Referring to Google Analytics)" content="Event is a type of hit used to track user interactions with content. Examples of user interactions commonly tracked with Events include downloads, mobile ad clicks, gadgets, Flash elements, AJAX embedded elements, and video plays. <br/><br/> <a href='https://support.google.com/analytics/answer/6086196'> Learn more about events  </a>" />

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
                                        <Accordion title="Fallback JS" content="A tiny library that allows you to load both JavaScript and CSS libraries after your page has already loaded. <br/><br/> <a href='http://fallback.io/'> Learn more about Fall  back JS  </a>" />
                                        <Accordion title="Featured Snippet (Position Zero)" content="Featured Snippet is a summary of an answer to a user’s query. This snippet appears at the top of organic results on SERP. Google supports the following types of featured snippets: <br/><br/> Paragraph snippet – Paragraph clearly comes from a longer list it gives brief answers through relevant keywords. <br/><br/> Numbered / Bulleted – List of items that a user is searching to find those list or bulleted items are represented by Google through the user’s query. <br/><br/> Table snippet – Answers are displayed based on required comparison. Google extracts the data from content and reformats it into table snippets. <br/><br/> Video – Google can show an exact video snippet from YouTube that corresponds to the search query and users can play it in the SERP." />
                                        <Accordion title="File Transfer Protocol (FTP)" content="A standard network protocol used for the transfer of computer files between a client and server on a computer network. <br/><br/> FTP is built on a client-server model architecture using separate control and data connections between the client and the server. FTP users may authenticate themselves with a clear-text sign-in protocol, normally in the form of a username and password, but can connect anonymously if the server is configured to allow it. For secure transmission that protects the username and password, and encrypts the content, FTP is often secured with SSL/TLS (FTPS) or replaced with SSH File Transfer Protocol (SFTP). " />
                                        <Accordion title="Follow Meta Tag" content="A meta tag that let’s crawlers index and follow the links on your page. In addition, following the links in this manner passes all-important link juice, which further boosts the page receiving it." />
                                        <Accordion title="Footer" content="The bottom section of a HTML page (seperate from the header and body), usually contains links that help point the user to key pages on the site. They also usually contain information on the copyright and the date on which the site was created." />
                                        <Accordion title="Footer Link" content="Though their SEO value is disputed, footer links that appear in the bottom section (footer) of a website. <br/><br/> Some websites may also include basic navigation links, such as “About Us,” “Contact,” and “Help.” Corporate website footers often include additional links to “Terms of Use,” “Privacy Guidelines,” and “Advertising” pages as well. " />

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
                                        <Accordion title="Goal (Referring to Google Analytics)" content="A configuration setting that allows you to track the valuable actions, or conversions, that happen on your site or mobile app. <br/><br/> Goals allow you to measure how well your site or app fulfills your target objectives. You can set up individual Goals to track discrete actions, like transactions with a minimum purchase amount or the amount of time spent on a screen. Each time a user completes a Goal, a conversion is logged in your Analytics account. <br/><br/> <a href='https://support.google.com/analytics/answer/6086076'>Learn more about Goals </a> " />
                                        <Accordion title="Geo-IP Redirection" content="Automatically redirects users to a different version of a page based on their location and IP address. Usually used to serve content in the native language of the user. " />
                                        <Accordion title="Geo-targeting" content="Setting up the technical infrastructure of a site to organically attract traffic from a particular geographic area " />
                                        <Accordion title="Google Analytics" content="Launched in November 2005, Google Analytics is a free web analytics service offered by Google (as a part of their Marketing Platforms). <br/><br/> It  tracks and reports website traffic, along with recording data based on several criteria of metrics. This allows webmasters to gauge the overall performance of a website. <br/><br/>As of 2019, Google Analytics is the most widely used web analytics service on the web." />
                                        <Accordion title="Google Bomb" content="The black hat technique typically used for comedic or controversial effect. This involves a practice of causing a website to rank highly in web search engine results for irrelevant, unrelated or off-topic search terms by linking heavily. " />
                                        <Accordion title="Google Keyword Planner" content="A free keyword research tool that may help with keyword selection. It allows marketers to request keyword variants of an entered term, it can also provide several numerical values on search volume, competition and the respective CPC (cost per click). " />
                                        <Accordion title="Google Quality Rater Guidelines" content="167 page document that specifies how the 10,000 Google manual reviewers rate websites <br/><br/> <a href='https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf'>Read the Google Quality Rater Guidelines </a>  " />
                                        <Accordion title="Google Search" content="A search engine developed by Google LLC (by Larry Page and Sergey Brin in September 1998). It is the most used search engine on the World Wide Web across all platforms, with 92.62% market share as of June 2019, handling more than 5.4 billion searches each day." />
                                        <Accordion title="Google Suggest (Autocomplete)" content="A Google feature, powered by AJAX technology, that makes suggestions of similar search terms (or prefixes) once a keyword is entered into a search browser. Google may also suggest spelling corrections if it detects an error. Overall, this search function can be useful to  marketers who are looking to create content for ideas that are related to a head term. " />
                                        <Accordion title="Googlebot" content="The web crawler software used by Google, which collects documents from the web to build a searchable index for the Google Search engine. This name is actually used to refer to two different types of web crawlers: a desktop crawler (to simulate desktop users) and a mobile crawler (to simulate a mobile user)." />
                                        <Accordion title="Google Florida Algorithm Update" content="Announced in November 2003, the Google Florida update destroyed the value of 1990s SEO tactics and ushered in a new era of search engine optimization. <br/><br/> Here Google sought to eliminate the ranking effectiveness of spam sites. Afterwards, it was much less likely that a rented, purchased or junk link would appear at the top of search results. <br/><br/> More than ever it was important to populate the web with relevant pages to stand a chance of ranking on Google’s search engine results pages." />
                                        <Accordion title="Google Hummingbird Algorithm Update" content="Announced in September 2013, the Google Hummingbird update enabled more semantic search and more effective use of the Knowledge Graph in the future. <br/><br/> The rollout of this update was intended to enrich the experience of those users executing search queries through Google.<br/><br/> As opposed to displaying results simply because they matched a keyword, results would now consider the semantic context of the search. This produced search results that were more likely to match the expectations of users. " />
                                        <Accordion title="Google Images" content="A search service owned by Google that allows users to search the World Wide Web for image content. It was introduced on July 12, 2001 due to a demand for pictures of Jennifer Lopez’s green Versace dress that the regular Google search couldn’t handle. In 2011, reverse image search functionality was added. <br/><br/> When searching for an image, a thumbnail of each matching image is displayed. When the user clicks on a thumbnail, the image is displayed in a larger size, and users may visit the page on which the image is used. " />
                                        <Accordion title="Google Panda Algorithm Update" content="Rolled out in February 2011,the Google Panda Update was implemented for the purpose of improving the visibility of high value content. This was achieved by identifying and devaluing low quality pages (especially content farms). <br/><br/> Google Panda has since been tweaked a few times since it’s launch, and continues to be improved (adapting to new balck hat techniques). It  is now a major determining factor in the organic visibility of sites. When we say good “content in king,” you can thank Google panda for paving the way. <br/><br/>An entire site can be penalized for running afoul of the Panda update, especially in those cases where a webmaster may sneakily publish a few spam pages to benefit a site." />
                                        <Accordion title="Google Penguin Algorithm" content="Released in April 2012, this major algorithm update aimed to penalize sites that excessively abused optimisation techniques. It has since been followed by a series of updates and refreshes, ensuring that webpages aren’t ranking due spam." />
                                        <Accordion title="Google Pigeon Update" content="Launched in July 2014, the Pigeon update sought to boost the relevance of local searches such as searches related to events or businesses near one. <br/><br/> The Pigeon update gives more weight to various search signals to deliver more relevant local results." />
                                        <Accordion title="Google RankBrain" content="A machine learning-based search engine algorithm that helps Google to process search results and provide more relevant search results for users. It helps google determine search intent for brand new queries. <br/><br/>There are over 200 different ranking factors which make up the ranking algorithm, whose exact functions in the Google algorithm are not fully disclosed. Behind content and links, RankBrain is considered the third most important signal in determining ranking on Google search. <br/><br/> If RankBrain sees a word or phrase it isn’t familiar with, the machine can make a guess as to what words or phrases might have a similar meaning and filter the result accordingly, making it more effective at handling never-before-seen search queries or keywords. " />
                                        <Accordion title="Google Sandbox Effect" content="A name given to an observation of the way Google ranks web pages in its index. It is the subject of much debate—its existence has been written about since 2004 but not confirmed, with several statements to the contrary. <br/><br/> According to the theory of the sandbox effect, links which may normally be weighted by Google’s ranking algorithm, not least improving the position of a webpage in Google’s index, may be subjected to filtering to prevent their having a full impact. Some observations have suggested that two important factors for causing this filter to come into play are the active age of a domain, and the competitiveness of the keywords used in links. <br/><br/> Active age of a domain should not be confused with the date of registration on a domain’s WHOIS record, but instead refers to the time when Google first indexed pages on the domain. Keyword competitiveness refers to the search frequency of a word on Google search, with observation suggesting that the higher the search frequency of a word, the increasing likelihood that the sandbox filter effect will come into play. <br/><br/> While the presence of the Google Sandbox has been long debated, Google has made no direct disclosure on the matter. <br/><br/> It’s theorized that the best way to overcome the sandbox effect is to target relatively unpopular terms in the infancy of a site’s existence (point in time the site is first indexed). Otherwise, new websites that aim to rank for popular terms will be thrown to the back of the ranking queue even if they are able to attract links.  " />
                                        <Accordion title="Google Search Console" content="A free service offered by Google that helps you monitor, maintain, and troubleshoot your site’s presence in Google Search results. You don’t have to sign up for Search Console to be included in Google Search results, but Search Console helps you understand and improve how Google sees your site. <br/><br/> Search Console offers tools and reports for the following actions: <li>Confirm that Google can find and crawl your site.</li><li>Fix indexing problems and request re-indexing of new or updated content. </li> <li>View Google Search traffic data for your site: how often your site appears in Google Search, which search queries show your site, how often searchers click through for those queries, and more. </li> <li>Receive alerts when Google encounters indexing, spam, or other issues on your site.</li> <li>Show you which sites link to your website.</li> <li>Troubleshoot issues for AMP, mobile usability, and other Search features</li> " />
                                        <Accordion title="Google Trends" content="A website by Google that analyzes the popularity of top search queries in Google Search across various regions and languages. <br/><br/> The website uses graphs to compare the search volume of different queries over time.  " />
                                        <Accordion title="Google Webmaster Guidelines" content="General best practices to help your site appear in Google Search, as well as quality guidelines that, if not followed, can cause your page or site to be omitted from Search. <br/><br/> <a href='https://support.google.com/webmasters/answer/35769'> Here is a link to Google’s webmaster guidelines </a>" />
                                        <Accordion title="Google Webmaster Central Blog" content="Official news on crawling and indexing sites for the Google index <br/><br/> <a href=https://webmasters.googleblog.com/'> Here is a link to Google’s Webmaster Central Blog </a>" />
                                        <Accordion title="Gray Hat SEO" content="This is in between black hat and white hat approaches to search engine optimization, where the methods employed avoid the site being penalized but do not act in producing the best content for users. <br/><br/> Grey hat SEO is entirely focused on improving search engine rankings, by bending, as opposed to breaking the rules. <br/><br/> Beware, though search engines may not immediately catch on to grey hat techniques, they eventually will. In these cases, the quasi ethical methodology may result in more damage than benefit.  " />
                                        <Accordion title="Guest Posting" content="A technique used by webmasters to earn an external backlink by creating content for another site.<br/><br/> In this case, the owners of one website will write a blog post to be posted on another external website. Hyperlinks are then placed within the guest post page, pointing to the website of the creator. " />

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
                                        <Accordion title="Heading" content="<p>HTML header tags are used to separate content of a page into sections, with headers (h1) and subheaders (h2-h6).</p> to <p> tags are used to define the hierarchy of content, helping users and search engines navigate the content of a page. The most important heading tag is the h1 tag and least important is the h6 tag. </p> <br/><br/> <p> See below for samples: </p> <h1 className='text-[50px] text-[#023A51]' >Sample of Heading 1 </h1> <h2 className='text-[44px] text-[#023A51] >Sample of Heading 2 </h2>  <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>  " />
                                        <Accordion title="Hidden Text" content="" />
                                        <Accordion title="Hilltop Algorithm" content="" />
                                        <Accordion title="Hit (Referring to Google Analytics)" content="" />
                                        <Accordion title="HITS Algorithm (also known as hubs and authorities)" content="" />
                                        <Accordion title="Homepage" content="" />
                                        <Accordion title="Hreflang Tag" content="" />
                                        <Accordion title="HTTP Strict Transport Security (HSTS)" content="" />
                                        <Accordion title=".HTACCESS File" content="" />
                                        <Accordion title="Hypertext Markup Language (HTML)" content="" />
                                        <Accordion title="HTTP/HTTPS" content="" />
                                        <Accordion title="Hub Page (Content Hub)" content="" />

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
                                        <Accordion title="Impressions" content="" />
                                        <Accordion title="Inbound Link (Backlink)" content="" />
                                        <Accordion title="Inclusion protocol" content="" />
                                        <Accordion title="Index" content="" />
                                        <Accordion title="Indexability" content="" />
                                        <Accordion title="Indexed" content="" />
                                        <Accordion title="Information Architecture" content="" />
                                        <Accordion title="Internal Link" content="" />
                                        <Accordion title="Internal Link" content="" />
                                        <Accordion title="Interstitial" content="" />
                                        <Accordion title="IP Address" content="" />
                                        <Accordion title="Internet Service Provider (ISP)" content="" />

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
                                        <Accordion title="JavaScript (JS)" content="" />

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
                                        <Accordion title="Keyword (Keyterm, Keyphrase, Index Term)" content="" />
                                        <Accordion title="Keyword Cannibalization" content="" />
                                        <Accordion title="Keyword Density" content="" />
                                        <Accordion title="Keyword Focus" content="" />
                                        <Accordion title="Keyword Research" content="" />
                                        <Accordion title="Keyword Set" content="" />
                                        <Accordion title="Keyword Stuffing" content="" />
                                        <Accordion title="Knowledge Graph (Knowledge Panel)" content="" />
                                        <Accordion title="Knowledge Panel" content="" />
                                        <Accordion title="Key Performance Indicator (KPI)" content="" />

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
                                        <Accordion title="Landing Page" content="" />
                                        <Accordion title="Latent Semantic Indexing (LSI)" content="" />
                                        <Accordion title="Lead" content="" />
                                        <Accordion title="Lighthouse" content="" />
                                        <Accordion title="Link (Backlink)" content="" />
                                        <Accordion title="Link Bait" content="" />
                                        <Accordion title="Link Bait" content="" />
                                        <Accordion title="Link Equity (Link Juice)" content="" />
                                        <Accordion title="Link Farm (Link Network, Blog Network, Private Blog Network)" content="" />
                                        <Accordion title="Link Profile" content="" />
                                        <Accordion title="Link Reclamation" content="" />
                                        <Accordion title="Link Velocity" content="" />
                                        <Accordion title="Log File" content="" />
                                        <Accordion title="Log File Analysis" content="" />
                                        <Accordion title="Long-Tail Keyword" content="" />

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
                                        <Accordion title="Machine Learning" content="" />
                                        <Accordion title="Manual Action" content="" />
                                        <Accordion title="Measurement Protocol (Referring to Google Analytics)" content="" />
                                        <Accordion title="Meta Description" content="" />
                                        <Accordion title="Meta Keywords" content="" />
                                        <Accordion title="Meta Tags" content="" />
                                        <Accordion title="Metric" content="" />
                                        <Accordion title="Mobile First Indexing" content="" />

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
                                        <Accordion title="Natural Language API" content="" />
                                        <Accordion title="NAP (Name, Address and Phone Number)" content="" />
                                        <Accordion title="Negative SEO" content="" />
                                        <Accordion title="Niche" content="" />
                                        <Accordion title="Noarchive Tag" content="" />
                                        <Accordion title="Nofollow Meta Tag" content="" />
                                        <Accordion title="Noindex Tag" content="" />
                                        <Accordion title="Noreadaloud Tag" content="" />
                                        <Accordion title="Nosnippet Tag" content="" />
                                        <Accordion title="Notranslate Tag" content="" />

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
                                        <Accordion title="Off-Page SEO" content="" />
                                        <Accordion title="Opening Tag" content="" />
                                        <Accordion title="On-Page SEO" content="" />
                                        <Accordion title="Organic Search Results" content="" />
                                        <Accordion title="Organic Search" content="" />
                                        <Accordion title="Orphan Page" content="" />
                                        <Accordion title="Outbound Link" content="" />
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
                                        <Accordion title="PageRank" content="" />
                                        <Accordion title="Page Speed" content="" />
                                        <Accordion title="Pageview (Referring to Google Analytics)" content="" />
                                        <Accordion title="Paid Search" content="" />
                                        <Accordion title="Private Blog Network (PBN) or Link Farm" content="" />
                                        <Accordion title="PDF (Portable Document Format)" content="" />
                                        <Accordion title="Penalty (Manual Action)" content="" />
                                        <Accordion title="Permissions (Referring to Google Analytics)" content="" />
                                        <Accordion title="Persona (Buyer Persona, Marketing Persona)" content="" />
                                        <Accordion title="PHP (Hypertext Preprocessor)" content="" />
                                        <Accordion title="Pogo-sticking" content="" />
                                        <Accordion title="Position" content="" />
                                        <Accordion title="Pay Per Click (PPC)" content="" />
                                        <Accordion title="Property (Referring to Google Analytics)" content="" />

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
                                        <Accordion title="Query Deserves Freshness Algorithm" content="" />
                                        <Accordion title="Quality Link" content="" />
                                        <Accordion title="Query" content="" />
                                        <Accordion title="Query String (URL Parameter)" content="" />
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
                                        <Accordion title="Rank" content="" />
                                        <Accordion title="Ranking Factor (Ranking Signal)" content="" />
                                        <Accordion title="Ranking Fluctuations" content="" />
                                        <Accordion title="Reciprocal Links" content="" />
                                        <Accordion title="Redirect" content="" />
                                        <Accordion title="Reinclusion" content="" />
                                        <Accordion title="Relevance" content="" />
                                        <Accordion title="Reporting API (Referring to Google Analytics)" content="" />
                                        <Accordion title="Reputation Management" content="" />
                                        <Accordion title="Responsive Website (Responsive web Design)" content="" />
                                        <Accordion title="Return on Investment (ROI)" content="" />
                                        <Accordion title="Rich Snippet" content="" />
                                        <Accordion title="RSS feed (RDF Site Summary or Really Simple Syndication)" content="" />
                                        <Accordion title="Robots.txt" content="" />
                                        <Accordion title="Roll-Up Reporting (Referring to Google Analytics)" content="" />

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
                                        <Accordion title="Sampling" content="" />
                                        <Accordion title="Schema (Schema.org)" content="" />
                                        <Accordion title="Scrape (Web scraping)" content="" />
                                        <Accordion title="Scraper Bot" content="" />
                                        <Accordion title="Scraper Site" content="" />
                                        <Accordion title="Screaming Frog" content="" />
                                        <Accordion title="Search Engine" content="" />
                                        <Accordion title="Search Engine Marketing (SEM)" content="" />
                                        <Accordion title="Search Engine Optimization (SEO)" content="" />
                                        <Accordion title="Search Engine Results Page (SERP)" content="" />
                                        <Accordion title="Search History (Web Browsing History, Web History)" content="" />
                                        <Accordion title="Search Operator" content="" />
                                        <Accordion title="Search Market" content="" />
                                        <Accordion title="Search Profiling" content="" />
                                        <Accordion title="Search Query" content="" />
                                        <Accordion title="Seeded" content="" />
                                        <Accordion title="Segment (Referring to Google Analytics)" content="" />
                                        <Accordion title="Session (Referring to Google Analytics)" content="" />
                                        <Accordion title="Share of Voice" content="" />
                                        <Accordion title="Sitelinks (On Bing these are called Deep Links)" content="" />
                                        <Accordion title="Sitemap" content="" />
                                        <Accordion title="Site Mirroring" content="" />
                                        <Accordion title="Sitewide Links" content="" />
                                        <Accordion title="Social Bookmarking" content="" />
                                        <Accordion title="Social Media" content="" />
                                        <Accordion title="Social Media Optimization" content="" />
                                        <Accordion title="Social Networks" content="" />
                                        <Accordion title="Source Code" content="" />
                                        <Accordion title="Social Signal" content="" />
                                        <Accordion title="Spam (Webspam)" content="" />
                                        <Accordion title="Split Testing (A/B Testing)" content="" />
                                        <Accordion title="SQL (Structured Query Language)" content="" />
                                        <Accordion title="SSI (Server Side Includes)" content="" />
                                        <Accordion title="SSI (Server Side Includes)" content="" />
                                        <Accordion title="Static Web pages" content="" />
                                        <Accordion title="Status Codes" content="" />
                                        <Accordion title="Stop Word" content="" />
                                        <Accordion title="Subdomain" content="" />
                                        <Accordion title="Subfolder" content="" />
                                        <Accordion title="Submission Tools" content="" />
                                        <Accordion title="Syntax" content="" />
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
                                        <Accordion title="Tag (Referring to Google Analytics)" content="" />
                                        <Accordion title="Taxonomy SEO" content="" />
                                        <Accordion title="Target group (Target Market, Audience)" content="" />
                                        <Accordion title="Text Delimited Excel Filed " content="" />
                                        <Accordion title="TF-IDF (Term frequency–inverse document frequency)" content="" />
                                        <Accordion title="Throw-away domains" content="" />
                                        <Accordion title="Title Tag" content="" />
                                        <Accordion title="Top-Level Domain (TLD)" content="" />
                                        <Accordion title="Traffic" content="" />
                                        <Accordion title="TrustRank" content="" />
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
                                        <Accordion title="User ID views (Referring to Google Analytics)" content="" />
                                        <Accordion title="User-Generated Content (UGC)" content="" />
                                        <Accordion title="Universal Analytics" content="" />
                                        <Accordion title="Universal Search (Blended Search)" content="" />
                                        <Accordion title="Unnatural Link" content="" />
                                        <Accordion title="URL (Uniform Resource Locator)" content="" />
                                        <Accordion title="Usability" content="" />
                                        <Accordion title="User Agent" content="" />
                                        <Accordion title="User Experience (UX)" content="" />
                                        <Accordion title="UTF-8 (Unicode Transformation Format, 8 bit UCS)" content="" />
                                        <Accordion title="View (Referring to Google Analytics)" content="" />
                                        <Accordion title="Viral Content" content="" />
                                        <Accordion title="Viral Marketing (Viral advertising)" content="" />
                                        <Accordion title="Vertical Search" content="" />
                                        <Accordion title="Virtual Assistant" content="" />
                                        <Accordion title="Visibility" content="" />
                                        <Accordion title="Visual Crawl Map" content="" />
                                        <Accordion title="Voice Search" content="" />

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
                                        <Accordion title="View (Referring to Google Analytics)" content="" />
                                        <Accordion title="Viral Content" content="" />
                                        <Accordion title="Viral Marketing (Viral advertising)" content="" />
                                        <Accordion title="Vertical Search" content="" />
                                        <Accordion title="Virtual Assistant" content="" />
                                        <Accordion title="Visibility" content="" />
                                        <Accordion title="Visual Crawl Map" content="" />
                                        <Accordion title="Voice Search" content="" />

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
                                        <Accordion title="Web 2.0 (Participatory Web and Social Web)" content="" />
                                        <Accordion title="Web 2.0 (Participatory Web and Social Web)" content="" />
                                        <Accordion title="Webmaster" content="" />
                                        <Accordion title="Website" content="" />
                                        <Accordion title="Website Navigation (Internal Links, Internal Linking, Site Architecture)" content="" />
                                        <Accordion title="Website Subduction" content="" />
                                        <Accordion title="White Hat" content="" />
                                        <Accordion title="WHOIS Information" content="" />
                                        <Accordion title="WordPress" content="" />

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
                                        <Accordion title="x-default hreflang" content="" />
                                        <Accordion title="XML (Extensible Markup Language)" content="" />
                                        <Accordion title="XML Sitemap" content="" />

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
                                        <Accordion title="Yahoo Search" content="" />
                                        <Accordion title="Yandex Search" content="" />
                                        <Accordion title="YMYL (Your Money Your Life)" content="" />

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
