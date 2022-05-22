import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import styles from '../../styles/custom.module.css'
import Image from 'next/image'
import { FaPlus, FaMinus, FaChevronDown } from 'react-icons/fa';
import { GiClockwork, GiNetworkBars } from 'react-icons/gi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { CgWorkAlt } from 'react-icons/cg'
import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti'
import Accordion from '../../components/accordion-dictionary/Accordion';
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn';
import DiscoverMore from '../../components/DiscoverMore';
import GetAQuote from '../../components/GetAQuote';

// Images
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
                                                    <th className='border-2'><a  href='#letterA' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> A</a></th>
                                                    <th className='border-2'><a  href='#letterB' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> B</a></th>
                                                    <th className='border-2'><a  href='#letterC' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> C</a></th>
                                                    <th className='border-2'><a  href='#letterD' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> D</a></th>
                                                    <th className='border-2'><a  href='#letterE' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> E</a></th>
                                                    <th className='border-2'><a  href='#letterF' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> F</a></th>
                                                    <th className='border-2'><a  href='#letterG' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> G</a></th>
                                                    <th className='border-2'><a  href='#letterH' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> H</a></th>
                                                    <th className='border-2'><a  href='#letterI' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> I</a></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='border-2'><a  href='#letterJ' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> J</a></td>
                                                    <td className='border-2'><a  href='#letterK' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> K</a></td>
                                                    <td className='border-2'><a  href='#letterL' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> L</a></td>
                                                    <td className='border-2'><a  href='#letterM' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> M</a></td>
                                                    <td className='border-2'><a  href='#letterN' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> N</a></td>
                                                    <td className='border-2'><a  href='#letterO' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> O</a></td>
                                                    <td className='border-2'><a  href='#letterP' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> P</a></td>
                                                    <td className='border-2'><a  href='#letterQ' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> Q</a></td>
                                                    <td className='border-2'><a  href='#letterR' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> R</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='border-2'><a  href='#letterS' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> S</a></td>
                                                    <td className='border-2'><a  href='#letterT' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> T</a></td>
                                                    <td className='border-2'><a  href='#letterU' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> U</a></td>
                                                    <td className='border-2'><a  href='#letterV' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> V</a></td>
                                                    <td className='border-2'><a  href='#letterW' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> W</a></td>
                                                    <td className='border-2'><a  href='#letterX' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> X</a></td>
                                                    <td className='border-2'><a  href='#letterY' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> Y</a></td>
                                                    <td className='border-2'><a  href='#letterZ' className=' flex justify-center items-center text-[18px] font-bold w-[70px] hover:bg-[#f6f6f6] h-[60px]'> Z</a></td>
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
                                        <Accordion title="Above the Fold" content="<p>Content that is visible on the screen of a user before scrolling. <p/>   To ensure that content in this area is kept relevant, Google introduced an algorithm update to penalize sites with too many ads that appear above the fold." />
                                        <Accordion title="Accelerated Mobile Pages (AMP)" content="An open source HTML framework developed by the AMP Open Source Project. It was originally created by Google as a competitor to Facebook Instant Articles and Apple News. AMP is optimized for mobile web browsing and intended to help web pages load faster." />
                                        <Accordion title="Ad Groups" content="An ad group contains one or more ads that share similar targets. <p>
                                        Each of your campaigns is made up of one or more ad groups. Use ad groups to organize your ads by a common theme. For example, try separating ad groups into the different product or service types you offer. <br/><br/>
                                        <a className={styles.a} href='https://support.google.com/google-ads/answer/6298'>Learn more about ad groups </a></p>
                                        " />
                                        <Accordion title="AJAX" content="From the perspective of web users, they don’t have to reload a page to receive new information. Data is served dynamically and can also be sent to a server without leaving a page." />
                                        <Accordion title="Algorithm" content="A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer. In the cases of search engines, these complex computer programs are to retrieve data, process and deliver the most relevant search results for a query. <br/><br/>
                                        Algorithms are used to implement the ranking factors that determine the visibility of  indexable webpages.
                                        " />
                                        <Accordion title="Algorithm Change" content='Search algorithms are constantly modified to better serve users. The frequency of algorithm changes are debated as many go undetected, while the effects of others drastically impact rankings. <br/><br/> There are three types of Algorithmic changes to consider <br/><br/> Algorithm Update: Modifications to  signals of an existing algorithm. <br/><br/> Algorithm Refresh: A new roll out of an existing algorithm using the exact same signals as last time. <br/><br/> New Algorithm: A new roll out of an existing algorithm using the exact same signals as last time. <br/><br/> ' />
                                        <Accordion title="Alt Attribute" content="Also referred to as,  Alt Text. This HTML code provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader). <br/><br/> By describing respective images, Alt attributes also assist the understanding of content by visually imparied." />
                                        <Accordion title="Analytics" content="The systematic computational analysis of data or statistics. In SEO, this pertains to the practice of collecting, analyzing, and interpreting data to draw insights and map out strategic actions for the future of a brand." />
                                        <Accordion title="Analytics Solutions" content="Refers to an umbrella term encompassing all products — both paid and free — that are part of the Google Analytics product family. Users can differentiate between a paid product and a free product easily: paid products include the “360” modifier after the product name, free products do not. <br/> For example: <br/><br/> <li>Google Analytics 360 (paid product)</li> <li>Google Analytics (free product)</li> <br/> <a  href='https://support.google.com/analytics/answer/7390017?hl=en' >Learn more about Analytics Solutions </a> " />
                                        <Accordion title="Analytics Tag (Referring to Google Analytics)" content="The Analytics tag is a snippet of JavaScript that collects and sends data to Analytics from a website.<br/><br/> You can add the Analytics tag directly to the HTML of each page on your site, or indirectly using a tag management system such as Google Tag Manager. <br/><br/> <a  href='https://support.google.com/analytics/answer/6086097'> Learn more about Analytics Tag </a> + <a  href='https://support.google.com/analytics/answer/1008080' > even more info</a> " />
                                        <Accordion title="Anchor Text" content="Refers to the clickable words used to link one web page to another. <br/><br/> When optimized correctly, the anchor text should provide a user with contextual information about the page that is being linked to." />
                                        <Accordion title="Answerthepublic" content="A free tool that allows marketers to discover instant, raw search insights, direct from the minds of customers. By entering answerthepublic.com and entering a head term, marketers can discover popular questions being asked in relation to their target idea." />
                                        <Accordion title="Application Programming Interface (API)" content="A computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc. It can also provide extension mechanisms so that users can extend existing functionality in various ways and to varying degrees. <br/><br/> An API can be entirely custom, specific to a component, or it can be designed based on an industry-standard to ensure interoperability. Through information hiding, APIs enable modular programming, which allows users to use the interface independently of the implementation. <br/><br/> <a  href='https://en.wikipedia.org/wiki/API' > Learn more about API </a> " />
                                        <Accordion title="Artificial Intelligence (AI)" content="A machine learning process with the ability to conduct cognitive functions such as perceiving, learning, reasoning and solving problems. <br/><br/> AI is a science that seeks to make critical decisions without human intervention. <br/><br/> Below are the three general level of artificial intelligence: <br/><br/> Narrow AI: the machine can perform a specific task better than a human.  <br/><br/> General AI: the machine can perform any intellectual task with the same accuracy as a human  <br/><br/> Strong AI: the machine can beat humans in many tasks " />
                                        <Accordion title="Attribution (Referring to Google Analytics)" content="The process of assigning credit for sales and conversions to touchpoints in conversion paths. <br/><br/> Attribution allows marketers to quantify each channel’s contribution to sales and conversions. For example, many people may purchase on your site after searching for your brand on Google. However, they may have been introduced to your brand via a display ad or a blog. A marketer uses attribution to appropriately distribute monetary credit for purchases among the many marketing channels that may have contributed to each sale. <br/><br/> <a  href='https://support.google.com/analytics/answer/6086134'> Learn more about Attribution </a> + <a  href='https://support.google.com/analytics/answer/1662518'> more here <a/>" />
                                        <Accordion title="Attribution model (Referring to Google Analytics)" content="A rule, or set of rules, that determines how credit for sales and conversions is assigned to touchpoints in conversion paths. <br/><br/> An attribution model is the rule, or set of rules, that determines how credit for sales and conversions is assigned to touchpoints in conversion paths. For example, Last Interaction attribution assigns 100% credit to the final touchpoints (i.e., clicks) that immediately precede sales or conversions. First Interaction attribution assigns 100% credit to touchpoints that initiate conversion paths. <br/><br/> <a  href='https://support.google.com/analytics/answer/6086214'> Learn more about Attribution model  <a/>" />
                                        <Accordion title="Authority" content="A ranking signal that’s typically informed by the quality of backlink profile and strength of a brand name. Search engines use it to determine the ranking of indexable web pages." />
                                        <Accordion title="Automated Bid managers (ABMs)" content="Advertising tools used to manage budgets on pay per click (PPC) campaigns. ABMs allow users to prioritize keywords listings and bids. Many ABMs have timestamp controls as well as position monitors. ABMs are designed to allow a user either to maintain a certain position on a PPC list or to keep to a specific budget. ABMs come in a variety of formats and can be customized to meet the scale of an application." />
                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Behavioral Targeting" content="A marketing strategy that uses historical behavior to personalize the types of ads consumers see. <br/><br/> Historical behavior is sourced through powerful datasets that illustrate how audiences behave. Marketers can then use this to create ads and campaigns that match each consumer’s actual behavior. <a  href='https://www.tamoco.com/blog/what-is-behavioral-targeting/'>Learn more about behaviora marketing </a> " />
                                        <Accordion title="Bidirectional Encoder Representations from Transformers (BERT)" content="A neural network-based technique for natural language processing pre-training. In plain English, it can be used to help Google better discern the context of words in search queries. <br/><br/> Bert is a natural language processing pre-training approach that can be used on a large body of text. It handles tasks such as entity recognition, part of speech tagging, and question-answering among other natural language processes. Bert helps Google understand natural language text from the Web. <br/><br/> Google has open sourced this technology, and others have created variations of BERT. <br/><br/> <a  href='https://www.searchenginejournal.com/google-bert-update/332161/'>Learn more about BERT  </a> " />
                                        <Accordion title="Bing" content="Bing is a web search engine owned and operated by Microsoft. Bing, Microsoft’s replacement for Live Search, was unveiled by Microsoft CEO Steve Ballmer on May 28, 2009. In July 2009, Microsoft and Yahoo! announced a deal in which Bing would power Yahoo! Search." />
                                        <Accordion title="Black Box" content="A term used to describe a complex system or device whose internal workings are hidden or not readily understood. Inputs and outputs can be observed, but there is no access to the process itself due to its confidential nature. For example, Google’s algorithm is a black box." />
                                        <Accordion title="Black Hat SEO" content="The deliberate manipulation of search engine indexes. It involves a number of methods, such as link building and repeating unrelated phrases, to manipulate the relevance or prominence of resources indexed, in a manner inconsistent with the purpose of the indexing system. <br/><br/> Generally, risky tactics that go against Google’s Webmaster Guidelines. " />
                                        <Accordion title="Boolean search" content="Uses a combination of keywords and the three main Boolean operators (AND, OR and NOT) to organise and sift through your searches. It produces more accurate and relevant results, <br/><br/> allowing you to navigate through appropriate candidates, while disregarding the unrelated. <br/><br/> The first important thing to appreciate about Boolean is that there are only five elements of syntax to understand. These are: AND, OR, NOT, (), “” <br/><br/> <a  href='https://www.socialtalent.com/blog/recruitment/the-beginners-guide-to-boolean-search-terms'>Learn more about Boolean search  </a>  " />
                                        <Accordion title="Blog" content="A publication of content, sorted in chronological order. <br/><br/> In 1997, Jorn Barger, blogger for Robot Wisdom, coined the term “weblog”, which was meant to describe his process for “logging the web” as he surfed the internet. The term “weblog” was shortened to “blog” in 1999, by programmer Peter Merholz.  with the most recent content appearing at the top. <br/><br/> The content reflects personal or corporate interests, and can be written by an individual or a group of contributors. " />
                                        <Accordion title="Bounce Rate" content="It represents the percentage of visitors who enter the site and then leave (“bounce”) rather than continuing to view other pages within the same site. Bounce rate is calculated by counting the number of single page visits and dividing that by the total visits. It is then represented as a percentage of total visits. <br/><br/>  Bounce rate is a measure of “stickiness.” The thinking being that an effective website will engage visitors deeper into the website. Encouraging visitors to continue with their visit. It is expressed as a percentage and represents the proportion of single page visits to total visits. <br/><br/> Bounce rate (%) = Visits that access only a single page (#) ÷ Total visits (#) to the website " />
                                        <Accordion title="Bot" content="A software program that can execute commands, reply to messages, or perform routine tasks, as online searches, either automatically or with minimal human intervention. <br/><br/> Typically they do repetitive tasks, and they can do them much faster than human users could. <br/><br/> Bots usually operate over a network; more than half of Internet traffic is bots scanning content, interacting with web pages, chatting with users, or looking for attack targets. Some bots are useful, such as search engine bots that index content for search or customer service bots that help users.  " />
                                        <Accordion title="Branded Keyword" content="A branded keyword, or a branded search, is any query via a search engine that includes the name of your company, business or brand." />
                                        <Accordion title="Branding" content="An important marketing tool that plays a critical  role in search engine optimization. Branding refers to the market development and expansion of brand awareness. " />
                                        <Accordion title="Breadcrumb" content="A type of text-based Web site navigation that breaks the site into links of categories and subcategories allowing major categories of information to be linked in a range of sequential order. Breadcrumb navigation is displayed to the user, so they can easily see exactly where that Web page is located within the Web site." />
                                        <Accordion title="Broken Link" content="Broken or dead link, a link that, having suffered link rot, points to a webpage or server that is no longer available on the World Wide Web" />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Content Delivery Network (CDN)" content="A geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end users. CDNs came into existence in the late 1990s as a means for alleviating the performance bottlenecks of the Internet. <br/><br/> <a  href='https://en.wikipedia.org/wiki/Content_delivery_network'>Learn more about CDNs </a> " />
                                        <Accordion title="ccTLD" content="A country code top-level domain (ccTLD) is an Internet top-level domain generally used or reserved for a country, sovereign state, or dependent territory identified with a country code. All ASCII ccTLD identifiers are two letters long, and all two-letter top-level domains are ccTLDs. <br/><br/> For example, a brand based in Spain would have a domain like this: www.example.es, where “es” is the ccTLD. " />
                                        <Accordion title="Channel Grouping (Referring to Google Analytics)" content="A roll-up of traffic sources in the Acquisition reports that groups several marketing activities together. Channel groupings allow you to view and compare aggregated metrics by channel name, as well as individual traffic source, medium, or campaign name. <br/><br/> In the Acquisition section’s Overview and Channels reports, you can see your data organized according to the Default Channel Grouping, a rule-based grouping of the most common sources of traffic, like Paid Search and Direct. This allows you to quickly check the performance of each of your traffic channels. <br/><br/> <a  href='https://support.google.com/analytics/answer/6086078'>Learn more about Channel Grouping</a> " />
                                        <Accordion title="Chrome User Experience Report" content="Provides user experience metrics for how real-world Chrome users experience popular destinations on the web. <br/><br/> <a  href='https://developers.google.com/web/tools/chrome-user-experience-report'>Learn more about CrUX</a>  " />
                                        <Accordion title="Click Bait" content="Content that is designed to entice people to click, typically by overpromising or being intentionally misleading in headlines, so publishers can earn advertising revenue." />
                                        <Accordion title="Click-Through Rate (CTR)" content="The ratio of users who click on the link of an organic search result to the number of total users who view the link. Typically expressed as a percentage, the number is calculated by dividing the total number of organic clicks by the total number of impressions then multiplying by 100. <br/><br/> Webmasters rely on CTR to gauge the effectiveness of rankings, meta titles and meta descriptions." />
                                        <Accordion title="Cloaking" content="A violation of Google’s Webmaster Guidelines, this is a technique in which the content presented to the search engine spider is different from that presented to the user’s browser. <br/><br/> This is done by delivering content based on the IP addresses or the User-Agent HTTP header of the user requesting the page. When a user is identified as a search engine spider, a server-side script delivers a different version of the web page, one that contains content not present on the visible page, or that is present but not searchable. <br/><br/> The purpose of cloaking is sometimes to deceive search engines so they display the page when it would not otherwise be displayed (black hat SEO). " />
                                        <Accordion title="Closing Tag" content="An HTML tag indicating that a previously executed command should end. The closing tag usually takes the form of <tag>" />
                                        <Accordion title="Content Management System (CMS)" content="A CMS is a computer software used to manage the creation and modification of digital content." />
                                        <Accordion title="Co-Citation" content="The frequency with which two or more web pages are mentioned together by a third-party website, even if those first two items don’t link to (or reference) each other. <br/><br/> Co-citation, like Bibliographic Coupling, is a semantic similarity measure for web pages that makes use of citation relationships. Search engines use this to establish subject similarity. <br/><br/> If at least one third party site cites two different domains on a common page, the two domains are said to be co-cited. The more co-citations two websites receive, the higher their co-citation strength, and the more likely they are semantically related. " />
                                        <Accordion title="Comment Spam" content="A term referencing a broad category of spambot or spam postings which abuse web-based forms to post unsolicited advertisements as comments on forums, blogs, wikis and online guestbooks. <br/><br/> Related topics include: <br/><br/> Forum spam, posts on Internet forums that contains related or unrelated advertisements, links to malicious websites, and abusive or otherwise unwanted information <br/><br/> Newsgroup spam, a type of spam where the targets are Usenet newsgroups <br/><br/> Social spam, unwanted spam content appearing on social networks and any website with user-generated content <br/><br/> Spam in blogs, a form of spamdexing done by posting random comments, copied material, or promotion of commercial services <br/><br/> Spam in blogs, a form of spamdexing done by posting random comments, copied material, or promotion of commercial services <br/><br/> Hit-and-run posting, a tactic where a poster at an Internet forum enters, makes a post, only to disappear immediately after <br/><br/> Sockpuppet (Internet), an online identity used for purposes of deception <br/><br/> Astroturfing, the practice of masking the sponsors of a message or organization <br/><br/>  " />
                                        <Accordion title="Competition (SEO)" content="Search factors that render it relatively difficult to perform well for any SEO metric. <br/><br/> There are three main types of competition considered by SEOs: <li>Keyword Competition:  The measure of how difficult it will be to rank for a particular keyword. The competition for a keyword can vary depending on how popular the keyword is and industry competition. </li> <li> Direct Competitors: Brands that provide similar offerings, serve similar needs and target a similar audience.  </li> <li> SEO Competitors: Online brands that contend for the same keywords and organic search visibility </li> " />
                                        <Accordion title="Content" content="The information and experiences that are directed toward an end-user or audience. <br/><br/> Content is “something that is to be expressed through some medium, as speech, writing or any of various arts”. <br/><br/> Content can be delivered via many different media including the Internet, cinema, television, radio, smartphones, audio CDs, books, e-books, magazines, and live events, such as speeches, conferences, and stage performances. <br/><br/> Particularly in the case of the internet, web content is the textual, visual, or aural content that is encountered as part of the user experience on websites. It may include—among other things—text, images, sounds, videos, and animations. " />
                                        <Accordion title="Content Grouping (Referring to Google Analytics)" content="A roll-up of content in the Behavior reports that groups several pages or screens together to better reflect the structure of your site or app. Content groupings allow you to view and compare aggregated metrics by content group name, as well as individual URL, page title, or screen name. <br/><br/> Content Grouping lets you group content into a logical structure that reflects how you think about your site or app, and then view and compare aggregated metrics by group name in addition to being able to drill down to the individual URL, page title, or screen name. For example, you can see the aggregated number of pageviews for all pages in a group like Men/Shirts, and then drill in to see each URL or page title. <br/><br/> <a  href='https://support.google.com/analytics/answer/6086050'> Learn more about Content Grouoing </a> " />
                                        <Accordion title="Content Consolidation" content="Learn more about Content Grouoing" />
                                        <Accordion title="Content is King" content="Popularized by Bill Gates, “Content is King” is a phrase that was outlined in a book in 1974 by Sumner Redstone. Today, we use the term to refer to the idea that organic search success hinges on the creation of fresh, unique and relevant content." />
                                        <Accordion title="Conversion" content="A process in which the web user executes a desired action. A completed activity, online or offline, that is important to the success of your business. Examples include a completed sign-up for your email newsletter (a Goal conversion) and a purchase (a transaction, sometimes called an Ecommerce conversion). <br/><br/> <a  className={styles.a} href='https://support.google.com/analytics/answer/6086209'> Learn more about conversions </a> " />
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
                                        <Accordion title="Custom Dimension (Referring to Google Analytics)" content="A user-defined descriptive attribute or characteristic of data. Custom dimensions can be used to describe data not included in the default dimensions in Analytics.<br/><br/> There are several ways to get custom data into Analytics, such as modifying your tracking code, uploading it using Data Import, or sending it via the Management API or Measurement Protocol. <br/><br/> <a  href='https://support.google.com/analytics/answer/6186991'> Learn more about custom dimension </a>  " />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Digital Millennium Copyright Act Notice (DMCA Notice)" content="DMCA notice and takedown process is a tool for copyright holders to get user-uploaded material that infringes their copyrights taken down off of websites. The process entails the copyright owner (or the owner’s agent) sending a takedown notice to a service provider requesting the provider to remove material that is infringing their copyright(s). A service provider can be an internet service provider (e.g., Comcast), website operator (e.g, eBay), search engine (e.g., Google), a web host (e.g., GoDaddy) or other type of online site-operator. <br/><br/> <a  href='https://copyrightalliance.org/ca_faq_post/dmca-notice-and-takedown-process/'> Learn more about DMCA Notices </a> " />
                                        <Accordion title="Data Set (Referring to Google Analytics)" content="A container that holds the data you upload to Analytics. <br/><br/>Data Sets are an essential component of the Data Import feature. <br/><br/> A Data Set’s type corresponds to the specific type of data you want to import. For example, there are Data Set types for User Data, Cost Data, Content Data, etc. <br/><br/> When you create a Data Set, you define a schema, which is the structure that joins the data you upload with the existing data in your hits. <br/><br/> <a  href='https://support.google.com/analytics/answer/6085271'> Learn more about Data Set  </a> " />
                                        <Accordion title="De-index (Delisting)" content="A process in which search engines temporarily or permanently remove sites from their index and search results. <br/><br/> This may happen for a number of reasons, the webmaster of the site may indicate that they prefer to remove a URL from the index, search engines may deem that a URL is in violation of it’s guidelines, or or for other reasons, such as if the sites detract from users’ ability to locate relevant information. <br/><br/> For those monitoring performance on Google’s search console, indexing information is available for review.  " />
                                        <Accordion title="Dimension (Referring to Google Analytics)" content="A descriptive attribute or characteristic of data. Browser, Landing Page and Campaign are all examples of default dimensions in Analytics. <br/><br/> A dimension is a descriptive attribute or characteristic of an object that can be given different values. For example, a geographic location could have dimensions called Latitude, Longitude, or City Name. Values for the City Name dimension could be San Francisco, Berlin, or Singapore. <br/><br/> Browser, Exit Page, Screens, and Session Duration are all examples of dimensions that appear by default in Analytics. Dimensions appear in all of your reports, though you might see different ones depending on the specific report. Use them to help organize, segment, and analyze your data. <br/><br/> <a  href='https://support.google.com/analytics/answer/6086074?hl=en&ref_topic=6083659'> Learn more about Dimensions  </a> " />
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
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="E-A-T (Expertise, Authority and Trust)" content="E-A-T stands for Expertise, Authority, and Trust — three factors that Google uses to measure how much trust it should place in a brand or website. Google wants to give its customers (search engine users) the best experience possible, so it only wants to promote websites that it fully trusts. <br/><br/> <a  href='https://exposureninja.com/blog/what-is-eat/'> Learn more about E-A-T  </a> " />
                                        <Accordion title="eCommerce" content="The activity of electronically buying or selling of products on online services or over the Internet." />
                                        <Accordion title="Editorial Link (Natural Link)" content="An external backlink that is earned by a site without payment or exchange of favors. These are typically the results of creating great content that may be outreached." />
                                        <Accordion title="Exact Match Domain (EMD)" content="A domain name that precisely matches a search query that will likely drive traffic to your website." />
                                        <Accordion title="External Link" content="A link from one website to another. Search engines use the number of quality backlinks pointing to a page/site as a ranking signal. This is because each link represents a vote of confidence that the page being linked to is of value. Enough backlinks, point to a page and search engines tend to assume the content must be worth the attention of users. <br/><br/> External links are used to improve the visibility of a site.  " />
                                        <Accordion title="Event (Referring to Google Analytics)" content="Event is a type of hit used to track user interactions with content. Examples of user interactions commonly tracked with Events include downloads, mobile ad clicks, gadgets, Flash elements, AJAX embedded elements, and video plays. <br/><br/> <a  href='https://support.google.com/analytics/answer/6086196'> Learn more about events  </a>" />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Fallback JS" content="A tiny library that allows you to load both JavaScript and CSS libraries after your page has already loaded. <br/><br/> <a  href='http://fallback.io/'> Learn more about Fall  back JS  </a>" />
                                        <Accordion title="Featured Snippet (Position Zero)" content="Featured Snippet is a summary of an answer to a user’s query. This snippet appears at the top of organic results on SERP. Google supports the following types of featured snippets: <br/><br/> Paragraph snippet – Paragraph clearly comes from a longer list it gives brief answers through relevant keywords. <br/><br/> Numbered / Bulleted – List of items that a user is searching to find those list or bulleted items are represented by Google through the user’s query. <br/><br/> Table snippet – Answers are displayed based on required comparison. Google extracts the data from content and reformats it into table snippets. <br/><br/> Video – Google can show an exact video snippet from YouTube that corresponds to the search query and users can play it in the SERP." />
                                        <Accordion title="File Transfer Protocol (FTP)" content="A standard network protocol used for the transfer of computer files between a client and server on a computer network. <br/><br/> FTP is built on a client-server model architecture using separate control and data connections between the client and the server. FTP users may authenticate themselves with a clear-text sign-in protocol, normally in the form of a username and password, but can connect anonymously if the server is configured to allow it. For secure transmission that protects the username and password, and encrypts the content, FTP is often secured with SSL/TLS (FTPS) or replaced with SSH File Transfer Protocol (SFTP). " />
                                        <Accordion title="Follow Meta Tag" content="A meta tag that let’s crawlers index and follow the links on your page. In addition, following the links in this manner passes all-important link juice, which further boosts the page receiving it." />
                                        <Accordion title="Footer" content="The bottom section of a HTML page (seperate from the header and body), usually contains links that help point the user to key pages on the site. They also usually contain information on the copyright and the date on which the site was created." />
                                        <Accordion title="Footer Link" content="Though their SEO value is disputed, footer links that appear in the bottom section (footer) of a website. <br/><br/> Some websites may also include basic navigation links, such as “About Us,” “Contact,” and “Help.” Corporate website footers often include additional links to “Terms of Use,” “Privacy Guidelines,” and “Advertising” pages as well. " />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Goal (Referring to Google Analytics)" content="A configuration setting that allows you to track the valuable actions, or conversions, that happen on your site or mobile app. <br/><br/> Goals allow you to measure how well your site or app fulfills your target objectives. You can set up individual Goals to track discrete actions, like transactions with a minimum purchase amount or the amount of time spent on a screen. Each time a user completes a Goal, a conversion is logged in your Analytics account. <br/><br/> <a  href='https://support.google.com/analytics/answer/6086076'>Learn more about Goals </a> " />
                                        <Accordion title="Geo-IP Redirection" content="Automatically redirects users to a different version of a page based on their location and IP address. Usually used to serve content in the native language of the user. " />
                                        <Accordion title="Geo-targeting" content="Setting up the technical infrastructure of a site to organically attract traffic from a particular geographic area " />
                                        <Accordion title="Google Analytics" content="Launched in November 2005, Google Analytics is a free web analytics service offered by Google (as a part of their Marketing Platforms). <br/><br/> It  tracks and reports website traffic, along with recording data based on several criteria of metrics. This allows webmasters to gauge the overall performance of a website. <br/><br/>As of 2019, Google Analytics is the most widely used web analytics service on the web." />
                                        <Accordion title="Google Bomb" content="The black hat technique typically used for comedic or controversial effect. This involves a practice of causing a website to rank highly in web search engine results for irrelevant, unrelated or off-topic search terms by linking heavily. " />
                                        <Accordion title="Google Keyword Planner" content="A free keyword research tool that may help with keyword selection. It allows marketers to request keyword variants of an entered term, it can also provide several numerical values on search volume, competition and the respective CPC (cost per click). " />
                                        <Accordion title="Google Quality Rater Guidelines" content="167 page document that specifies how the 10,000 Google manual reviewers rate websites <br/><br/> <a  href='https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf'>Read the Google Quality Rater Guidelines </a>  " />
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
                                        <Accordion title="Google Webmaster Guidelines" content="General best practices to help your site appear in Google Search, as well as quality guidelines that, if not followed, can cause your page or site to be omitted from Search. <br/><br/> <a  href='https://support.google.com/webmasters/answer/35769'> Here is a link to Google’s webmaster guidelines </a>" />
                                        <Accordion title="Google Webmaster Central Blog" content="Official news on crawling and indexing sites for the Google index <br/><br/> <a  href=https://webmasters.googleblog.com/'> Here is a link to Google’s Webmaster Central Blog </a>" />
                                        <Accordion title="Gray Hat SEO" content="This is in between black hat and white hat approaches to search engine optimization, where the methods employed avoid the site being penalized but do not act in producing the best content for users. <br/><br/> Grey hat SEO is entirely focused on improving search engine rankings, by bending, as opposed to breaking the rules. <br/><br/> Beware, though search engines may not immediately catch on to grey hat techniques, they eventually will. In these cases, the quasi ethical methodology may result in more damage than benefit.  " />
                                        <Accordion title="Guest Posting" content="A technique used by webmasters to earn an external backlink by creating content for another site.<br/><br/> In this case, the owners of one website will write a blog post to be posted on another external website. Hyperlinks are then placed within the guest post page, pointing to the website of the creator. " />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Heading" content={`<p>HTML header tags are used to separate content of a page into sections, with headers (h1) and subheaders (h2-h6).</p> <h1>to</h1> <strong>tags are used to define the hierarchy of content, helping users and search engines navigate the content of a page. The most important heading tag is the h1 tag and least important is the h6 tag.</strong> <p>See below for samples:</p> <h1 style='font-size: 50px; color: #023A51; ' >Sample of Heading 1</h1> <h2 style='font-size: 44px; color: #023A51; ' >>Sample of Heading 2</h2> <h3 style='font-size: 36px; color: #023A51; ' >>Sample of Heading 3</h3> <h4 style='font-size: 30px; color: #023A51; ' >>Sample of Heading 4</h4> <h5 style='font-size: 26px; color: #023A51; ' >>Sample of Heading 5</h5> <h6 style='font-size: 20px; color: #023A51; ' >>Sample of Heading 6</h6> `} />
                                        <Accordion title="Hidden Text" content={`<p>Any text that can’t be seen by a user that is intended to manipulate search rankings by loading web pages with content-rich keywords and copy. This technique is against Google’s Webmaster Guidelines and can result in a manual action. For example, adding text that is:</p> <li>Too small to read</li><li>The same color as the background</li> <li>Using CSS to push the text off-screen</li> `} />
                                        <Accordion title="Hilltop Algorithm" content={`<p>The Hilltop algorithm works by crediting URLs with ranking authority, not based on their overall backlink profile but by their mention(links) on resource pages created by trustworthy non-affiliated sites who collate a list of recommended sites for a particular query. Sounds confusing, we know.</p><br/> <p>Here’s a wikipedia description:</p><br/> <p>The Hilltop algorithm is an algorithm used to find documents relevant to a particular keyword topic. Created by Krishna Bharat while he was at Compaq Systems Research Center and George A. Mihăilă University of Toronto, it was acquired by Google in February 2003.</p><br/><p>When you enter a query or keyword into the Google search engine, the Hilltop algorithm helps to find relevant keywords whose results are more informative about the query or keyword.</p><br/><p>The algorithm operates on a special index of expert documents. These are pages that are about a specific topic and have links to many non-affiliated pages on that topic. Pages are defined as non-affiliated if they are authored by people from non-affiliated organizations. Results are ranked based on the match between the query and relevant descriptive text for hyperlinks on expert pages pointing to a given result page. Websites which have backlinks from many of the best expert pages are authorities and are ranked well.</p><br/><p>Basically, it looks at the relationship between the “expert” and “authority” pages: an “expert” is a page that links to many other relevant documents; an “authority” is a page that has links pointing to it from the “expert” pages. Here they mean pages about a specific topic with links to many non-affiliated pages on that topic. If a website has backlinks from many of the best expert pages it will be an “authority”.</p>`} />
                                        <Accordion title="Hit (Referring to Google Analytics)" content={`
                                        <p>An interaction that results in data being sent to Analytics. Common hit types include page tracking hits, event tracking hits, and ecommerce hits.</p><br/><p>Each time the tracking code is triggered by a user’s behavior (for example, a user loads a page on a website or a screen in a mobile app), Analytics records that activity. Each interaction is packaged into a hit and sent to Google’s servers. Examples of hit types include:</p><li>page tracking hits</li><li>event tracking hits</li><li>ecommerce tracking hits</li><li>social interaction hits</li><br/><a  href="https://support.google.com/analytics/answer/6086082">Learn more about hits</a>
                                        `} />
                                        <Accordion title="HITS Algorithm (also known as hubs and authorities)" content={`<p>An abbreviation of Hyperlink-Induced Topic Search, a link analysis algorithm that rates Web pages, developed by Jon Kleinberg. The idea behind Hubs and Authorities stemmed from a particular insight into the creation of web pages when the Internet was originally forming; that is, certain web pages, known as hubs, served as large directories that were not actually authoritative in the information that they held, but were used as compilations of a broad catalog of information that led users direct to other authoritative pages. In other words, a good hub represents a page that points to many other pages, while a good authority represents a page that is linked by many different hubs.</p><br/><p>The scheme therefore assigns two scores for each page: its authority, which estimates the value of the content of the page, and its hub value, which estimates the value of its links to other pages.</p>`} />
                                        <Accordion title="Homepage" content={`<p>The introductory page of a website, typically serving as a table of contents for the site.</p>`} />
                                        <Accordion title="Hreflang Tag" content={`<p>Tells Google which language you are using on a specific page, so the search engine can serve that result to users searching in that language.</p><br/><p>Code Sample: </p><br/><p>link rel=”alternate” href=”http://example.com” hreflang=”en-us” /></p><br/><a  href="https://moz.com/learn/seo/hreflang-tag">Learn more about Hreflang Tag</a>`} />
                                        <Accordion title="HTTP Strict Transport Security (HSTS)" content={`<p>A method used by websites to declare that they should only be accessed using a secure connection (HTTPS). If a website declares an HSTS policy, the browser must refuse all HTTP connections and prevent users from accepting insecure SSL certificates.</p><br/><a  href="https://www.acunetix.com/blog/articles/what-is-hsts-why-use-it/">Learn more about HSTS</a>`} />
                                        <Accordion title=".HTACCESS File" content={`<p><a  href="https://www.askapache.com/htaccess/htaccess-wikipedia/">(Hypertext Access)</a> is the default name of Apache’s directory-level configuration file. It provides the ability to customize configuration directives defined in the main configuration file. The configuration directives need to be in .htaccess context and the user needs appropriate permissions.</p>`} />
                                        <Accordion title="Hypertext Markup Language (HTML)" content={`<p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p><br/><p>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p>`} />
                                        <Accordion title="HTTP/HTTPS" content={`<p>HTTP stands for Hypertext Transfer Protocol, while HTTPS stands for Hypertext Transfer Protocol Secure. Both transfer data between a website and a protocol. However, HTTPS uses a Secure Sockets Layer (SSL) to encrypt during a data transfer.</p><br/><p>Google would prefer for webmasters to secure their site with HTTPS, it’s considered a ranking factor. </p>`} />
                                        <Accordion title="Hub Page (Content Hub)" content={`<p>A collection of links published by a website to group to other pages of related ideas. These links may include different types of content, but are generally centered around the same head term. </p><br/><p>Collating content and links which focus on a specific topic, it’s easier for users to discover content related to a central idea. This also makes  it easier for search engines to properly index and attribute relevance to these pages.</p>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Impressions" content={`<p>A link URL records an impression when it appears in a search result for a user. Whether or not the link must actually be scrolled into view or otherwise visible depends on the type of search element that contains the link</p>`} />
                                        <Accordion title="Inbound Link (Backlink)" content={`<p>A link from another webpage that points to your site.</p>`} />
                                        <Accordion title="Inclusion protocol" content={`<p>A protocol that tells search engines what they should include in their indexes for your site.</p>`} />
                                        <Accordion title="Index" content={`<p>A database maintained by search engines so they may store, process and retrieve information as they continue to crawl websites. Retrieval from index is how iweb users may be served results per their search query. </p>`} />
                                        <Accordion title="Indexability" content={`<p>The likelihood that a webpage can be stored and retrieved from a search engine index.</p>`} />
                                        <Accordion title="Indexed" content={`<p>Referring to pages whose data has been crawled and stored on a search index. These pages may then be presented as results to websites if they are relevant to searched queries. </p>`} />
                                        <Accordion title="Information Architecture" content={`<p>Refers to the way pages of a website are structured on a site. It’s important to ensure that the most critical web pages of a site can be found easily by both web users and search engine bots.</p><br/>`} />
                                        <Accordion title="Internal Link" content={`<p>Hyperlinks that are generated from a specific website and point to another webpage within that specific website. Executing proper design if internal links can help search engines establish ranking while maximizing the chances that web users discover key web pages. </p><br/>`} />
                                        <Accordion title="Internal Search Pages" content={`<p>URLs (Pages) created as a results of user searches within a website, these ideally should be no indexed</p><br/>`} />
                                        <Accordion title="Interstitial" content={`<p>An advertisement that appears while a chosen website or page is downloading.</p><br/>`} />
                                        <Accordion title="IP Address" content={`<p>A numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. An IP address serves two main functions: host or network interface identification and location addressing.</p><br/><p>For the sake of hosting a website, it’s worth understanding that your domain will have an IP address which makes it possible to find which server hosts your web data.</p>`} />
                                        <Accordion title="Internet Service Provider (ISP)" content={`<p>An organization that provides services for accessing, using, or participating in the Internet. Internet service providers can be organised in various forms, such as commercial, community-owned, non-profit, or otherwise privately owned.</p><br/><p>Internet services typically provided by ISPs can include Internet access, Internet transit, domain name registration, web hosting, Usenet service, and colocation. </p><br/><p>An ISP typically serves as the access point or the gateway that provides a user, access to everything available on the Internet.</p><br/><a  href="https://en.wikipedia.org/wiki/Internet_service_provider">Learn more about Internet service providers</a>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="JavaScript (JS)" content={`<p>An object-oriented computer programming language commonly used to create interactive effects within web browsers. It facilitates the dynamic insertions of content, links, meta data, or other elements, on websites. </p><br/><p>Though search engines have begun to improve their ability to crawl, render and index data processed through javascript, web managers are cautioned to test the readability of content delivered through the programming language.</p>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Keyword (Keyterm, Keyphrase, Index Term)" content={`<p>From the perspective of SEO professionals and digitally minded marketers, a keyword is a word or phrase that’s targeted for web ranking purposes.</p><br/><p>The intention is generally to create pages that will rank for keywords that closely match the search queries entered by web users as they browse various search engines.  </p><br/><p>Key Terms give webmasters a chance to create content for a particular topic. They also help search engines establish relevance in their index.</p><br/>`} />
                                        <Accordion title="Keyword Cannibalization" content={`<p>For SEO professionals keyword cannibalization refers specifically to a site competing against itself for clicks and ranking on search engine results pages. This occurs when a website more than one page ranks for the same query. This can be problematic for a site as traffic, relevance and authority is shared amongst multiple pages as opposed to being focused on only one page per term.</p><br/><p>Here is a kickass tool to help you<a  href='https://strategiq.co/how-to-identify-keyword-cannibalisation/'> detect keyword cannbalization on a site</a></p>`} />
                                        <Accordion title="Keyword Density" content={`<p>The percentage of times a keyword or phrase appears on a web page compared to the total number of words on the page. In the context of search engine optimization, keyword density can be used to determine whether a web page is relevant to a specified keyword or keyword phrase.</p><br/><p>In the late 1990s, the early days of search engines, keyword density was an important factor in page ranking. However, as webmasters discovered how to implement optimum keyword density, search engines began giving priority to other factors beyond the direct control of webmasters. Today, the overuse of keywords, a practice called keyword stuffing, will cause a web page to be penalized.</p><br/><p>It’s worth noting that the concept of keyword density shouldn’t be implemented as part of a ranking strategy. It’s best to write naturally as search engines are much more adept at filtering out unnatural patterns of speech. </p><br/><a  herf='https://en.wikipedia.org/wiki/Keyword_density'>Learn more about Keyword density</a>`} />
                                        <Accordion title="Keyword Focus" content={`<p>Typically a consideration for a site’s subpages, this refers to managing onpage optimisations towards the maximum visibility one target head term.</p><br/>`} />
                                        <Accordion title="Keyword Research" content={`<p>A process implemented by  SEO professionals to identify relevant terms worth ranking for. </p><br/><p>This discovery is intended to help design the ranking relevance of a website in an effort to attract maximum traffic from search engines. By creating pages that rank for high search volume terms, a brand may improve organic visibility. Professionals will also consider ranking competitiveness as they build out the potential target terms of a site. </p><br/><p>In addition, finding the right keyword will help websites establish a presence within the search index. Keyword research informs the ranking priories of any online brand.</p><br/><p>Plus, if Google knows a website covers all relevant search queries pertaining to a subject, product, or service, they are likely to reward the site with valuable ranking positions. </p><br/><p>Professionals may rely on a number of free and paid tools to conduct keyword research.</p>`} />
                                        <Accordion title="Keyword Set" content={`<p>A brand’s collated list of important target terms</p><br/>`} />
                                        <Accordion title="Keyword Stuffing" content={`<p>A black hat SEO technique in which keywords are loaded into a web page’s meta tags, visible content, or backlink anchor text in an attempt to gain an unfair rank advantage in search engines. Keyword stuffing may lead to a website being banned or penalized on major search engines either temporarily or permanently. The repetition of words in meta tags may explain why many search engines no longer use these tags. Nowadays, search engines focus more on the content that is unique, comprehensive, relevant, and helpful that overall makes the quality better which makes keyword stuffing useless, but it is still practiced by many webmasters.</p><br/> <p>Many major search engines have implemented algorithms that recognize keyword stuffing, and reduce or eliminate any unfair search advantage that the tactic may have been intended to gain, and oftentimes they will also penalize, demote or remove websites from their indexes that implement keyword stuffing.</p><br/> <p>Changes and algorithms specifically intended to penalize or ban sites using keyword stuffing include the Google Florida update (November 2003) Google Panda (February 2011) Google Hummingbird (August 2013) and Bing’s September 2014 update.</p><br/>`} />
                                        <Accordion title="Knowledge Graph (Knowledge Panel)" content={`<p>A knowledge base used by Google and its services to enhance its search engine’s results with information gathered from a variety of sources. The information is presented to users in an infobox next to the search results. These infoboxes were added to Google’s search engine in May 2012, starting in the United States, with international expansion by the end of the year. Google has referred to these infoboxes, which appear to the right (top on mobile) of search results, as “knowledge panels”.</p><br/><p>The information covered by Google’s Knowledge Graph grew quickly after launch, tripling its size within seven months (covering 570 million entities and 18 billion facts). By mid-2016, Google reported that it held 70 billion facts and answered “roughly one-third” of the 100 billion monthly searches they handled. By May 2020, this had grown to 500 billion facts on 5 billion entities.</p>`} />
                                        <Accordion title="Knowledge Panel" content={`<p>Information boxes that appear at the top of, or on the right sidebar of  Google search results. They display when the user searches for an entity (which can be a person, place, organization, event, etc.) that is in Google’s Knowledge Graph.</p><br/>`} />
                                        <Accordion title="Key Performance Indicator (KPI)" content={`<p>A type of performance measurement. KPIs evaluate the success of an organization or of a particular activity (such as projects, programs, products and other initiatives) in which it engages.</p><br/><p>Stands for key performance indicator. A measurement method businesses use to gauge whether marketing and business objectives, targets, and goals are being reached.</p>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Landing Page" content={`<p>The first page you “land on” after clicking a link. In this sense, a landing page could be almost anything: your home page, a blog post, a product page, or a lead capture page. Learn more about landing pages</p>`} />
                                        <Accordion title="Latent Semantic Indexing (LSI)" content={`<p>LSI is a process found in Natural Language Processing (NLP). NLP is a subset of linguistics and information engineering, with a focus on how machines interpret human language. A key part of this study is distributional semantics. This model helps us understand and classify words with similar contextual meanings within large data sets. It refers to a machine’s ability to process the hidden relationship between words.</p>`} />
                                        <Accordion title="Lead" content={`<p>A person who shows interest in a brand’s products or services, which makes the person a potential customer. The primary goal of any company is to generate as many leads as possible. A company must guide prospects down the sales funnel with relevant content and offers towards their purchase.</p><br/><a  href='https://sendpulse.com/support/glossary/marketing-lead'>Learn more about Leads</a>`} />
                                        <Accordion title="Lighthouse" content={`<p>An open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more.</p><br/><a  href='https://developers.google.com/web/tools/lighthouse'>Learn more about Lighthouse</a>`} />
                                        <Accordion title="Link (Backlink)" content={`<p>A hyperlink connection from one website to another. Search engines use the number of quality backlinks pointing to a page/site as a ranking signal. This is because each link represents a vote of confidence that the page being linked to is of value. Enough backlinks, point to a page and search engines tend to assume the content must be worth the attention of users.  </p><br/><p>Links are used to improve the organic visibility and navigation of a site.</p>`} />
                                        <Accordion title="Link Bait" content={`<p>Link Bait is providing valuable content on your website so that other websites will naturally reference/link to it without you ever having to ask. Linkable content can be anything from an in depth research project, to an evergreen guide, to a popular video.</p><br/><a  href='https://moz.com/blog/10-extraordinary-examples-of-effective-link-bait'>Learn more about Link Bait</a>`} />
                                        <Accordion title="Link Building" content={`<p>Link building refers to the marketing efforts to get links from other websites to your website. It’s seen as one of the most powerful tools to achieve higher rankings for your site in search engines. If a lot of high-quality links lead to a certain page, search engines will consider it a popular or meaningful article, and, therefore, they’ll rank it higher.</p><br/><a  href='https://yoast.com/what-is-link-building/'>Learn more about Link Building</a>`} />
                                        <Accordion title="Link Equity (Link Juice)" content={`<p>A term used to describe the amount of authority a backlink passes onto another site.  The more equity a page is said to have, the more it may straighten the backlink profile of the site it links to. </p>`} />
                                        <Accordion title="Link Farm (Link Network, Blog Network, Private Blog Network)" content={`<p>A black hat SEO spam tactic where a group of websites hyperlink to other sites in the group for the purpose of increasing SEO rankings. In graph theoretic terms, a link farm is a clique. Although some link farms can be created by hand, most are created through automated programs and services. A link farm is a form of spamming the index of a web search engine (sometimes called spamdexing). Other link exchange systems are designed to allow individual websites to selectively exchange links with other relevant websites and are not considered a form of spamdexing.</p>`} />
                                        <Accordion title="Link Profile" content={`<p>An aggregate estimate of the quality of the links that point to a specific webpage.</p>`} />
                                        <Accordion title="Link Reclamation" content={`<p>Finding, fixing, and replacing online content where your brand or company has been improperly linked.</p><br/><a  href='https://www.searchenginejournal.com/link-building-guide/reclaim-lost-broken-links/'>Learn more about Link Reclamation</a>`} />
                                        <Accordion title="Link Velocity" content={`<p>The spread at which a page attracts links.</p>`} />
                                        <Accordion title="Log File" content={`<p>A file generated by a web server. It records all requests that a server has received including the information of users:  IP address, URLs requested, type of browser used, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and more.</p>`} />
                                        <Accordion title="Log File Analysis" content={`<p>Log file analysis allows you to understand exactly how search engines crawl your website as every request made on the hosting web server is saved. You just need to filter by user-agent and the client IP to access crawl details for search engine bots. You can thus analyze crawlers’ behavior on your website by examining when, how frequently, and on what pages crawlers are present.</p><br/><a  href='https://www.oncrawl.com/technical-seo/an-introduction-to-log-file-analysis/'>Learn more about Log File Analysis</a>`} />
                                        <Accordion title="Long-Tail Keyword" content={`<p>A relatively longer term (containing more words than the typical term in a niche) which typically has low search volume and less ranking competition.</p>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Machine Learning" content={`<p>The study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence. Machine learning algorithms build a mathematical model based on sample data, known as “training data”, in order to make predictions or decisions without being explicitly programmed to do so.</p><br/>`} />
                                        <Accordion title="Manual Action" content={`<p>Manual actions are Google’s method of penalising, demoting or sometimes entirely removing websites from their search index if they’re found to be breaking the Google Webmaster Guidelines. The ‘manual’ part comes from the action being applied by a human reviewer, unlike standard algorithmic penalties.</p><br/><p>Google employs thousands of human reviewers (quality raters) who review websites against a lengthy quality rating document as well as the Webmaster Guidelines. Sites which receive manual actions often reach these reviewers by way of algorithmic detection or submission of spam reports.</p><br/><p>Google has entire teams (like the quality raters) dedicated to fighting spam and the manipulation of search, and applying manual actions are one component of this ongoing battle.</p><br/><p>If you receive a manual action, you should take it very seriously.</p><br/><a  href='https://www.evoluted.net/thinktank/search-engine-optimisation/google-manual-action-penalties-how-to-recover-case-study' >Read full discussion on manual actions </a>`} />
                                        <Accordion title="Measurement Protocol (Referring to Google Analytics)" content={`<p>A standard set of rules for collecting and sending hits from any internet-connected device to Analytics.</p><br/><p>The Measurement Protocol lets you send data to Analytics from any internet-connected device. It’s particularly useful when you want to send data to Analytics from a kiosk, a point of sale system, or anything that is not a website or mobile app. Because, while the Analytics JavaScript and mobile SDKs automatically build hits to send data to Analytics from websites and mobile apps, you must manually build data collection hits for other kinds of devices. The Measurement Protocol defines how to construct the hits and how to send them to Analytics.</p><br/><a  href='https://developers.google.com/analytics/devguides/collection/protocol/v1/' >Learn more about Measurement Protocol</a>`} />
                                        <Accordion title="Meta Description" content={`<p>A meta description is an attribute within your meta tags that helps describe your page. This snippet of text may appear in the search engine results under your headline, though sometimes, search engines will pull a snippet of text from the main body copy of the page instead.</p><br/><a  href='https://www.wordstream.com/meta-description' >Read full article on Meta Description </a>`} />
                                        <Accordion title="Meta Keywords" content={`<p>Meta keywords are atag option that could be used to give more information to search engines on what a page is about.</p><br/><p>Atag defines what different types of metadata are about in an HTML document. These meta tags can be found in the source pages of a website, which is what search engine crawlers scan to determine what a page is about.</p><br/><a  href='https://www.semrush.com/blog/meta-keywords/'>Read full article on Meta Keywords</a><br/>`} />
                                        <Accordion title="Meta Tags" content={`<p>Thetag defines metadata about an HTML document. Metadata is data (information) about data.</p><br/><p>tags always go inside theelement, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.</p><br/><p>Metadata will not be displayed on the page, but is machine parsable.</p><br/><p>Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.</p><br/><a  href='https://www.w3schools.com/tags/tag_meta.asp'>Read more on Meta Tags</a><br/>`} />
                                        <Accordion title="Metric" content={`<p>Recorded measure of data that informs various aspects of web performance. Helps to gauge success of organic campaigns</p><br/>`} />
                                        <Accordion title="Mobile First Indexing" content={`<p>Means Google predominantly uses the mobile version of the content for indexing and ranking. Historically, the index primarily used the desktop version of a page’s content when evaluating the relevance of a page to a user’s query. Since the majority of users now access Google Search with a mobile device, Googlebot primarily crawls and indexes pages with the smartphone agent going forward.</p><br/><a  href="https://developers.google.com/search/mobile-sites/mobile-first-indexing">Learn more about Mobile first indexing </a>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Natural Language API" content={`<p>Offers the same deep machine learning technology that powers both Google Search’s ability to answer specific user questions and the language-understanding system behind Google Assistant.</p><br/><a  href="https://cloud.google.com/natural-language" >Learn more about the Natural Language API </a>`} />
                                        <Accordion title="NAP (Name, Address and Phone Number)" content={`<p>The Name, Address and Phone number of businesses are the details that need to be entered with consistency when optimizing the local presence of a brand. NAP is typically entered into local web directories. This way search engines are able to attribute the correct listing information for respective businesses.</p><br/>`} />
                                        <Accordion title="Negative SEO" content={`<p>Any malicious practice aimed at sabotaging search rankings of a competitor’s website. Webspam is typically used to hinder rankings of competing sites. This is generally considered “black hat SEO” for its malevolent nature.</p><br/><a  href='https://www.semrush.com/blog/what-is-negative-seo/'>Learn more about Negative SEO</a>`} />
                                        <Accordion title="Niche" content={`<p>Refers to marketing within a distinct or specified area.</p><br/><p>The more you focus on such markets, the more you’ll be able to attract and target the really interested readers/viewers/buyers or just the audience in general. Attract a passionate subset of people who are affianodos of the same subject. </p><br/><p>Usually this is done in the web through creating a niche site.A specific market or area of interest consisting of a small group of highly-passionate people.</p><br/><a  href="https://seo-hacker.com/niche-marketing/" >Learn more about Niches</a><br/>`} />
                                        <Accordion title="Noarchive Tag" content={`<p>A meta tag that tells search engines not to store a cached version of your webpage.</p><br/><p>< META NAME=”ROBOTS” CONTENT=”NOARCHIVE” ></p><br/>`} />
                                        <Accordion title="Nofollow Meta Tag" content={`<p>A meta tag that tells search engines the links set up on a page should not pass link equity or otherwise boost the PageRank of the page the link is going to.</p><br/><p>This is done in cases when a website doesn’t want to pass authority to another webpage or because it’s a paid link. The nofollow attribute looks like this:</p><br/><p>< meta name=”robots” content=”noindex,nofollow” ></p><br/>`} />
                                        <Accordion title="Noindex Tag" content={`<p>A meta tag that’s used to let a search engine know that they should not index this specific webpage.</p><br/><p>< meta name=”robots” content=”noindex” ></p>`} />
                                        <Accordion title="Noreadaloud Tag" content={`<p>A meta tag that prevents web browsers from reading aloud the tagged page using the Google Assistant voice commands “Read this page” and “Read it.”</p><br/><p>A meta tag that prevents web browsers from reading aloud the tagged page using the Google Assistant voice commands “Read this page” and “Read it.”</p><br/>`} />
                                        <Accordion title="Nosnippet Tag" content={`<p>A meta tag that tells search engines not to show a description with your listing.</p><br/><p>< meta name=”robots” content=”nosnippet” ></p><br/>`} />
                                        <Accordion title="Notranslate Tag" content={`<p>When Google recognizes that the contents of a page are not in the language that the user is likely to want to read, Google often provides a link to a translation in the search results. In general, this gives you the chance to provide your unique and compelling content to a much larger group of users. However, there may be situations where this is not desired. This meta tag tells Google that you don’t want us to provide a translation for this page.</p><br/><p>< meta name=”google” content=”notranslate” / ></p><br/>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Off-Page SEO" content={`<p>Refers to all SEO tactics that take place outside of a brand’s website. Though Link Building is a popular off-page process, there are many others including the use of offline channels: TV, radio,print, etc</p><br/><a  href='https://www.semrush.com/blog/off-page-seo/'>Learn more about off-page SEO</a>`} />
                                        <Accordion title="Opening Tag" content={`<p>An HTML tag indicating that a command is coming. The opening tag usually takes the form of</p><br/>`} />
                                        <Accordion title="On-Page SEO" content={`<p>These are the content and HTML elements of a webpage that a webmaster wmay directly manage to affect web performance. The aim is to optimize individual web pages so they may rank and attract organic search traffic.   Examples of onpage features are the meta title, description, header, copy.</p><br/>`} />
                                        <Accordion title="Organic Search Results" content={`<p>The query results which are calculated strictly algorithmically, and not affected by advertiser payments. They are the natural listings indexed and provided on SERPs according to the ranking preferences of search engines.</p><br/><p>Organic results are distinguished from various kinds of sponsored results, whether they are explicit pay per click advertisements, shopping results, or other results where the search engine is paid either for showing the result, or for clicks on the result.</p>`} />
                                        <Accordion title="Organic Search" content={`<p>Refers to  search results that are determined and provided by search engines without the influence of sponsorship. The listed pages, or content, are crawled, indexed and displayed when there is a relevant match to a users search query. </p><br/>`} />
                                        <Accordion title="Orphan Page" content={`<p>Any page on a site that is not linked to by any other pages on that website.</p><br/>`} />
                                        <Accordion title="Outbound Link" content={`<p>A link generated from one website, directing users to a page on an external website.</p><br/>`} />
                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="PageRank" content={`<p>The query results which are calculated strictly algorithmically, and not affected by advertiser payments. They are distinguished from various kinds of sponsored results, whether they are explicit pay per click advertisements, shopping results, or other results where the search engine is paid either for showing the result, or for clicks on the result.</p><br/><a  href='https://www.woorank.com/en/blog/what-is-pagerank'>Learn more about PageRank</a>`} />
                                        <Accordion title="Page Speed" content={`<p>A measure of how long it takes for a web page to load on a user’s device.</p><br/>`} />
                                        <Accordion title="Pageview (Referring to Google Analytics)" content={`<p>A pageview (or pageview hit, page tracking hit) is an instance of a page being loaded (or reloaded) in a browser. Pageviews is a metric defined as the total number of pages viewed.</p><br/><a  href='https://support.google.com/analytics/answer/6086080?hl=en'>Learn more about page view</a>`} />
                                        <Accordion title="Paid Search" content={`<p>A form of digital marketing where brands sponsor search results by paying for Pay-per-click advertisements. Search engines will typically feature these sponsored links above organic results on search engine results pages (SERPs).</p><br/>`} />
                                        <Accordion title="Private Blog Network (PBN) or Link Farm" content={`<p>A black hat SEO spam tactic where a group of websites hyperlink to other sites in the group for the purpose of increasing SEO rankings. In graph theoretic terms, a link farm is a clique. Although some link farms can be created by hand, most are created through automated programs and services. A link farm is a form of spamming the index of a web search engine (sometimes called spamdexing). Other link exchange systems are designed to allow individual websites to selectively exchange links with other relevant websites and are not considered a form of spamdexing.</p><br/>`} />
                                        <Accordion title="PDF (Portable Document Format)" content={`<p>A commonly used file which may contain text, images, links, videos, and other elements.</p><br/>`} />
                                        <Accordion title="Penalty (Manual Action)" content={`<p>An instance when search engines demote or entirely remove websites from their search index if they’re found to be breaking the Google Webmaster Guidelines.</p><br/>`} />
                                        <Accordion title="Permissions (Referring to Google Analytics)" content={`<p>The right to perform administrative and configuration tasks, to create and share assets, and to read and interact with report data.</p><br/><p>In order to use certain features in Analytics, you must have the appropriate permission. There are 4 permissions:</p><br/><li>Manage Users</li><li>Edit</li><li>Collaborate</li><li>Read & Analyze</li><br/><p>Each permission can be granted at one or more levels: account, property or view.</p><br/><a  href='https://support.google.com/analytics/answer/2884495'>Learn more about Permissions</a>`} />
                                        <Accordion title="Persona (Buyer Persona, Marketing Persona)" content={`<p>A fictional representation of a brand’s ideal online audience. The persona is typically based on research and designed around the needs, motivations, demographics, psychographics, behaviors and patterns of the preferred group.</p><br/>`} />
                                        <Accordion title="PHP (Hypertext Preprocessor)" content={`<p>A server scripting language, and a powerful tool for making dynamic and interactive Web pages.</p><br/><a  href='https://www.w3schools.com/php/php_intro.asp'>Learn more about PHP </a>`} />
                                        <Accordion title="Pogo-sticking" content={`<p>Pogo sticking occurs when a user performs a search, clicks on a result, very quickly clicks back to the search result page, and clicks on a different result. This type of behavior is a direct result of immediate dissatisfaction in the search result, and—unlike bounce rate—pogo sticking is always a bad thing.</p><br/><a  href='https://www.fosterwebmarketing.com/faqs/whats-the-difference-between-pogo-sticking-and-bounce-rate-.cfm'>Learn more about pogo-sticking </a>`} />
                                        <Accordion title="Position" content={`<p>The search ranking occupied by a webpage on search engine results pages</p><br/>`} />
                                        <Accordion title="Pay Per Click (PPC)" content={`<p>A model of internet marketing in which advertisers pay a fee each time one of their ads is clicked. Essentially, it’s a way of buying visits to your site, rather than attempting to “earn” those visits organically.</p><br/><p>Search engine advertising is one of the most popular forms of PPC. It allows advertisers to bid for ad placement in a search engine’s sponsored links when someone searches on a keyword that is related to their business offering. For example, if we bid on the keyword “PPC software,” our ad might show up in the very top spot on the Google results page.<p><br/><a  href='https://www.wordstream.com/ppc'>Learn more about PPC </a>`} />
                                        <Accordion title="Property (Referring to Google Analytics)" content={`<p>A sub-component of an Analytics account that determines which data is organized and stored together. Any resource tagged with the same Property ID is collected and stored together. A single property can be used to track one website or mobile app, or be a roll-up of the data from multiple sites or mobile apps.</p><br/><a  href="https://support.google.com/analytics/answer/2649554">Learn more about Properties</a>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Query Deserves Freshness Algorithm" content={`<p>Google’s ability to identify search queries that require the most current and accurate posts to be relevant. For instance, news related search queries such as “Middle East Peace Treaty” will require more up to date information to be useful to a user. </p><br/><p>QDF is practically a search engine’s ability to detect queries that are newsworthy. Once these are entered, a search engine will display recently published articles from reputable sources, as opposed to prioritising pages with the strongest backlink profile. </p>`} />
                                        <Accordion title="Quality Link" content={`<p>Generated from a relatively authoritative, trustworthy and relevant site, this is an external backlink that targets the page of a website.</p><br/>`} />
                                        <Accordion title="Query" content={`<p>A search term entered by users into web search engines</p><br/>`} />
                                        <Accordion title="Query String (URL Parameter)" content={`<p>A query string is a part of a uniform resource locator (URL) that assigns values to specified parameters. A query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form.</p><br/><p>A web server can handle a Hypertext Transfer Protocol (HTTP) request either by reading a file from its file system based on the URL path or by handling the request using logic that is specific to the type of resource. In cases where special logic is invoked, the query string will be available to that logic for use in its processing, along with the path component of the URL.</p><br/><a  href='https://en.wikipedia.org/wiki/Query_string'>Learn more about Query Strings</a><br/>`} />
                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Rank" content={`<p>The search positions occupied by a webpage on search engine results pages</p><br/>`} />
                                        <Accordion title="Ranking Factor (Ranking Signal)" content={`<p>A variable used by search engines to determine the relance and trustworthiness of indexed webpages.  These pages are then presented to users of search engines results pages in response to various user search queries.</p><br/><p>Here’s a collated list of<a  href='https://backlinko.com/google-ranking-factors'> Google Ranking Factors</a></p><br/>`} />
                                        <Accordion title="Ranking Fluctuations" content={`<p>Refers to changes in ranking positions on search results pages. There are a host of reasons why a page may fail to maintain a position: competition, search intent, algorithm updates</p><br/>`} />
                                        <Accordion title="Reciprocal Links" content={`<p>A backlink that targets an external site because that external site returns the favor with a backlink pointing towards the original site.</p><br/>`} />
                                        <Accordion title="Redirect" content={`<p>A redirect is an HTTP Status code assigned to the current/old page which tells Google to display the newer one instead. So basically, you add a redirect into your web server to indicate the new URL that will replace the old one, and search engines then display the newer page on the visitor’s browser instead of the old one.</p><br/><p>Essentially, it automatically directs visitors to another page without them even noticing; well, it shouldn’t be noticeable, but we’ll talk about that later. To sum up: the same website will send both visitors and search engines to a different URL than the one users either typed in on their browser or picked from the Google results.</p><br/><a  href='https://www.fandangoseo.com/seo/redirects/'>Read more about redirects</a><br/>`} />
                                        <Accordion title="Reinclusion" content={`<p>The process of using webmaster tools to ask a search engine to re-index a site, after the site was flagged or penalized for unfavorable ranking conditions.</p><br/>`} />
                                        <Accordion title="Relevance" content={`<p>The extent to which the content of a webpage matches the search query and intent of a user</p><br/>`} />
                                        <Accordion title="Reporting API (Referring to Google Analytics)" content={`<p>A set of protocols and tools designed to extract data from your Analytics account into custom scripts or programs for more automated and efficient reporting and analysis. </p><br/><a  href='https://developers.google.com/analytics/devguides/reporting/'>Learn more about Reporting API</a><br/>`} />
                                        <Accordion title="Reputation Management" content={`<p>The practice of managing what the public sees in search results about a business.</p><br/><a  href='https://pixelcutlabs.com/blog/seo-reputation-management/'>Learn more about Reputation management</a><br/>`} />
                                        <Accordion title="Responsive Website (Responsive web Design)" content={`<p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones).</p><br/><a  href='https://www.w3schools.com/html/html_responsive.asp'>Learn more about responsive web design</a><br/>`} />
                                        <Accordion title="Return on Investment (ROI)" content={`<p>A measure of SEO performance which considers the financial efficiency of direct search marketing efforts. </p><br/><p>ROI tries to directly measure the amount of return on a particular investment, relative to the investment’s cost. </p><br/><p>ROI is calculated by dividing how much revenue a brand earns via organic search by the cost of the total investment.  The result is expressed as a percentage or a ratio.</p><br/>`} />
                                        <Accordion title="Rich Snippet" content={`<p>Rich Snippets is the term used to describe structured data markup that site operators can add to their existing HTML, which in turn allow search engines to better understand what information is contained on each web page. However, the major search engines have taken this a step further, and now use this markup to present richer search results, enabling users to more easily find the information they are looking for.</p><br/><a  href='https://unamo.com/blog/seo/beginners-guide-rich-snippets'>Learn more about Rich Snippets </a><br/>`} />
                                        <Accordion title="RSS feed (RDF Site Summary or Really Simple Syndication)" content={`<p>A web feed that allows users and applications to access updates to websites in a standardized, computer-readable format. These feeds can, for example, allow a user to keep track of many different websites in a single news aggregator.</p><br/><a  href='https://en.wikipedia.org/wiki/RSS'>Learn more about RSS Feeds</a><br/>`} />
                                        <Accordion title="Robots.txt" content={`<p>This  Robots Exclusion Protocol (or Standard) is a text file that tells search engine crawlers which pages or files the crawler can or can’t request from your site. Essentially, the robots.txt file tells search engine crawlers which areas of a website should be ignored.</p><br/><p>This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google. To keep a web page out of Google, you should use noindex directives, or password-protect your page.</p><br/><a  href='https://support.google.com/webmasters/answer/6062608?hl=en'>Learn more about robots.txt </a><br/>`} />
                                        <Accordion title="Roll-Up Reporting (Referring to Google Analytics)" content={`<p>A feature of Roll-Up Properties, which aggregate data from multiple source properties into a single property.</p><br/><p>Roll-Up Reporting is a special kind of reporting that lets you analyze the aggregated data that’s in a Roll-Up Property. Roll-Up Reporting is only available for Analytics 360 Accounts, and only works on designated Roll-Up Properties.</p><br/>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Sampling" content={`<p>The practice of selecting a subset of data from your traffic and reporting on the trends detected in that sample set. Sampling is widely used in statistical analysis because analyzing a subset of data gives similar results to an analysis of a complete data set, but can produce these results with a smaller computational burden and a reduced processing time.</p><br/><a  href='https://support.google.com/analytics/answer/1042498'>Learn more about sampling </a><br/>`} />
                                        <Accordion title="Schema (Schema.org)" content={`<p>A collaborative community activity with a mission to “create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond.” Webmasters use this shared vocabulary to structure metadata on their websites and to help search engines understand the published content.</p><br/><a  href='https://ahrefs.com/blog/schema-markup/'>Read more about Schema</a><br/>`} />
                                        <Accordion title="Scrape (Web scraping)" content={`<p>The automated process of extracting and saving web data for personal use, via a web scraping software, browser extension, or script. This may be used to copy website content and is a simplistic way of viewing the work conducted by search engines to index the content available on the web. </p><br/>`} />
                                        <Accordion title="Scraper Bot" content={`<p>Software that crawls around the Internet for content to steal</p><br/>`} />
                                        <Accordion title="Scraper Site" content={`<p>A site where scraper content is collected</p><br/>`} />
                                        <Accordion title="Screaming Frog" content={`<p>A website crawler that helps you improve onsite SEO, by extracting data & auditing for common SEO issues.</p><br/><a  href='https://www.screamingfrog.co.uk/seo-spider/'>Learn more about Screaming Frog</a><br/>`} />
                                        <Accordion title="Search Engine" content={`<p>A software system that is designed to carry out web search (Internet search), which means to search the World Wide Web in a systematic way for particular information specified in a textual web search query. The search results are generally presented in a line of results, often referred to as search engine results pages (SERPs). </p><br/><p>The information may be a mix of links to web pages, images, videos, infographics, articles, research papers, and other types of files. Some search engines also mine data available in databases or open directories. Unlike web directories, which are maintained only by human editors, search engines also maintain real-time information by running an algorithm on a web crawler. Internet content that is not capable of being searched by a web search engine is generally described as the deep web.</p>`} />
                                        <Accordion title="Search Engine Marketing (SEM)" content={`<p>Search engine marketing (SEM) is a form of Internet marketing that involves the promotion of websites by increasing their visibility in search engine results pages (SERPs) primarily through paid advertising.</p><br/><p>SEM may incorporate search engine optimization (SEO), which adjusts or rewrites website content and site architecture to achieve a higher ranking in search engine results pages to enhance pay per click (PPC) listings.</p><br/>`} />
                                        <Accordion title="Search Engine Optimization (SEO)" content={`<p>The process of optimizing a website – as well as all the content on that website – so it will appear in prominent positions in the organic results of search engines. SEO requires an understanding of how search engines work, what people search for (i.e., keywords and keyphrases), and why people search (intent). Successful SEO makes a site appealing to users and search engines. It is a combination of technical (on-page SEO) and marketing (off-page SEO).</p><br/><p>See: On-Page SEO, Off-Page SEO</p><br/>`} />
                                        <Accordion title="Search Engine Results Page (SERP)" content={`<p>The pages displayed by search engines in response to a query by a user. The main component of the SERP is the listing of results that are returned by the search engine in response to a keyword query.</p><br/><p>There are generally two types of search results, organic and paid. </p><br/><p>Organic results are prioritised by ranking factors determined by a search engine’s algorithm. Paid results are advertisements paid for by online brands. </p><br/><p>The results are normally ranked by relevance to the query. Each result displayed on the SERP normally includes a meta title, a link that points to the actual page on the Web, and a meta short description.</p><br/><p>Users will usually find  10 organic results per search query. Depending on the query, other search features may be shown, including:</p><br/><li>Sitelinks</li><li>Images</li><li>Featured snippets (a.k.a., Position Zero)</li><li>Shopping results</li><li>Knowledge panels</li><li>Local Pack (with map)</li><li>News</li><li>Related questions</li><li>Tweets</li><li>Videos</li><li>Related searches</li><li>AdWords Ads (above and below the organic search results)</li>`} />
                                        <Accordion title="Search History (Web Browsing History, Web History)" content={`<p>The list of web pages a user has visited recently, as well as associated data such as page title and time of visit, which is recorded by web browser software as standard for a certain period of time. Web browser software does this in order to provide the user with a back button and a history list to go back to pages they have visited previously as well as displaying visited links (typically by coloring them purple) rather than relying on the user to remember where they have been on the web.</p><br/><p>In addition to the web browser software itself, third-party services can also record a user’s web browsing history (completely or partially). For example, in Google Web History, the clicks of registered users are recorded and stored in individual user histories, each of which are browsable and searchable by that user (this is in addition to the click-tracking Google records for its own internal purposes, such as advertising click tracking).</p>`} />
                                        <Accordion title="Search Intent (User intent, Audience intent) " content={`<p>The general purpose or motivation of an online search. </p><br/><p>The four types of search intent are:</p><br/><li>Informational intent</li><li>Navigational Intent</li><li>Commercial Intent</li><li>Transactional Intent</li>`} />
                                        <Accordion title="Search Operator" content={`<p>Specific commands you can use in search engines to refine search results.</p><br/><a  href='https://raventools.com/marketing-glossary/search-operators/'>Learn more about search Operators </a><br/>`} />
                                        <Accordion title="Search Market" content={`<p>Defines the place where demand and supply meet. Online this is a virtual location where users search via search engines for companies or suppliers who offer and sell products, services, ideas.</p><br/>`} />
                                        <Accordion title="Search Profiling" content={`<p>A method by which marketers can use the behaviors and actions of internet users to target other users with similar interests and lifestyles. </p><br/>`} />
                                        <Accordion title="Search Query" content={`<p>The string of words and characters used to execute a search on search engines</p><br/>`} />
                                        <Accordion title="Seeded" content={`<p>The process of “loading” a search crawler with URLs to examine</p><br/>`} />
                                        <Accordion title="Segment (Referring to Google Analytics)" content={`<p>A subset of sessions or users that share common attributes. Segments allow you to isolate and analyze groups of sessions or users for better analysis.</p><br/><p>Segmentation allows you to isolate and analyze subsets of your data. For example, you might segment your data by marketing channel so that you can see which channel is responsible for an increase in purchases. Drilling down to look at segments of your data helps you understand what caused a change to your aggregated data.</p><br/><a  href='https://support.google.com/analytics/answer/3123951'>Learn more about segments</a><br/>`} />
                                        <Accordion title="Session (Referring to Google Analytics)" content={`<p>The period of time a user is active on your site or app. By default, if a user is inactive for 30 minutes or more, any future activity is attributed to a new session. Users that leave your site and return within 30 minutes are counted as part of the original session.</p><br/><a  href="https://support.google.com/analytics/answer/2731565">Learn more about sessions</a><br/>`} />
                                        <Accordion title="Share of Voice" content={`<p>The percentage of voice search impressions a brand generates compared to the total impressions that the brand’s competitors receive for those same search terms.</p><br/>`} />
                                        <Accordion title="Sitelinks (On Bing these are called Deep Links)" content={`<p>Up to six hyperlinks to website subpages that appear under certain Google listings in order to help users navigate the site. The site owner cannot add any sitelinks; Google adds them through its own secret automated algorithms. If you have a Google Adwords program you can create campaign and ad group level sitelinks. The site owner can, however, block individual sitelinks, which may be useful if he deems them unhelpful.</p><br/><p>In Google, there are a minimum of one and a maximum of ten sitelinks per site. According to John I Jerkovic, “Every site should strive to get sitelinks, as they imply authority as well as web presence. Sitelinks also occupy additional search results screen real estate, the space that pushes your competitors further down the results page — something to be desired.”</p><br/><p><a  href="https://en.wikipedia.org/wiki/Sitelink">Sitelinks are </a>also said to appear “on some search results where Google thinks one result is far more relevant than other results (like navigational or brand related searches)”.</p><br/><p>Search engine optimization experts consider sitelinks to be an important measure of how “trusted” a site is, and accordingly have attempted to deduce what causes them to appear.</p><br/>`} />
                                        <Accordion title="Sitemap" content={`<p>A list of web pages within a domain.</p><br/><p>Below are the two types of sitemap:</p><br/><li><span style="font-weight: bold;">HTML: </span>HTML sitemaps ostensibly serve website visitors. The sitemaps include every page on the website – from the main pages to lower-level pages.An HTML sitemap is just a clickable list of pages on a website. In its rawest form, it can be an unordered list of every page on a site – but don’t do that.This is a great opportunity to create some order out of chaos, so it’s worth making the effort.This type of sitemap, typically organized by topics, helps site users navigate a website.</li><li><span style="font-weight: bold;">XML: </span>XML sitemaps help search engines and spiders discover the pages on your website.These sitemaps give search engines a website’s URLs and offer data a complete map of all pages on a site. This helps search engines prioritize pages that they will crawl.There is information within the sitemap that shows page change frequency on one URL versus others on that website, but it is unlikely that this has any effect on rankings.</li>`} />
                                        <Accordion title="Site Mirroring" content={`<p>Including an exact duplicate of a web site in another location, usually stored on another server</p><br/>`} />
                                        <Accordion title="Sitewide Links" content={`<p>A link that appears on every page of a website. These links will typically be found in the universal navigation and footer of a site.</p><br/>`} />
                                        <Accordion title="Social Bookmarking" content={`<p>A way for web users to store, classify, share, and search Internet bookmarks.</p><br/>`} />
                                        <Accordion title="Social Media" content={`<p>Websites and applications that enable users to interact, create and share content or to participate in social networking.</p><br/>`} />
                                        <Accordion title="Social Media Optimization" content={`<p>A set of methods for generating publicity through social media, and online communities.</p><br/>`} />
                                        <Accordion title="Social Networks" content={`<p>A social structure made of nodes (which are generally individuals or organizations) that are tied by one or more specific types of relations, such as values, visions, ideas, financial exchanges, friends,  etc.</p><br/>`} />
                                        <Accordion title="Source Code" content={`<p>The basic code around which a program or application is designed.</p><br/>`} />
                                        <Accordion title="Social Signal" content={`<p>The engagement—likes, shares, and comments—your content receives on social media platforms like Facebook, Twitter, Instagram, and Pinterest. When it comes to social media marketing, this is the most important metric for many companies. Many SEO experts believe it’s a waste of time to focus on social signals for SEO purposes, but I adamantly disagree with that sentiment, and I’ll explain why.</p><br/><a  href='https://www.seohermit.com/articles/how-social-signals-help-seo/'>Learn more about social signals </a><br/>`} />
                                        <Accordion title="Spam (Webspam)" content={`<p>Blackhat ranking methods that look to manipulate the ranking of URLs on Search indexes by abusing search engine algorithms and/or the trust of users. A few spam examples listed by Google include:</p><br/><p style="font-weight: bold;">Web page spam</p><br/><p>Webspam pages try to get better placement in Google’s search results by using various tricks such as hidden text, doorway pages, cloaking, or sneaky redirects. These techniques attempt to compromise the quality of our results and degrade the search experience for everyone.</p><br/><p style="font-weight: bold;">Paid links spam</p><br/><p>Buying or selling links that pass PageRank can dilute the quality of search results. Participating in link schemes violates the Google’s Webmaster Guidelines and can negatively impact a site’s ranking in search results.</p><br/><p style="font-weight: bold;">Rich snippets spam</p><br/><p>A rich result may be considered spam if it harms the user experience by highlighting falsified or misleading information. For example, a rich result promoting a travel package as an Event or displaying fabricated Reviews would be considered spam.</p><br/><p style="font-weight: bold;">Malware</p><br/><p>If you believe a site is infected with malware or distributing malicious or unwanted software, notify us.</p><br/><p style="font-weight: bold;">Phishing</p><br/><p>If you believe you’ve encountered a page designed to look like another page in an attempt to steal users’ personal information, please complete the form below to report the page to the Google Safe Browsing team.</p><br/><a  href="https://support.google.com/webmasters/answer/93713?hl=en">Learn more about Spam</a>`} />
                                        <Accordion title="Split Testing (A/B Testing)" content={`<p>A user experience research methodology which relies on controlled experiments. </p><br/><p>Split tests consist of a randomized experiment with two variants, A and B.It includes application of statistical hypothesis testing or “two-sample hypothesis testing” as used in the field of statistics. A/B testing is a way to compare two versions of a single variable, typically by testing a subject’s response to variant A against variant B, and determining which of the two variants is more effective.</p><br/>`} />
                                        <Accordion title="SQL (Structured Query Language)" content={`<p>Domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.</p><br/>`} />
                                        <Accordion title="SSI (Server Side Includes)" content={`<p>Directives that are placed in HTML pages, and evaluated on the server while the pages are being served. They let you add dynamically generated content to an existing HTML page, without having to serve the entire page via a CGI program, or other dynamic technology.</p><br/><p>The decision of when to use SSI, and when to have your page entirely generated by some program, is usually a matter of how much of the page is static, and how much needs to be recalculated every time the page is served. </p><br/><p>SSI is a great way to add small pieces of information, such as the current time. But if a majority of your page is being generated at the time that it is served, you need to look for some other solution.</p><br/><a  href="https://httpd.apache.org/docs/2.2/en/howto/ssi.html">Learn more about Server Side</a><br/>`} />
                                        <Accordion title="SSL Certificate" content={`<p>SSL is an abbreviation for Secure Sockets Layer. This is a digital certificate which secures the transmission of sensitive data between systems. Whether data is being transferred between a server and a client, or if the connection is between two servers, SSLs use encryption to make information impossible to read by hackers. </p><br/>`} />
                                        <Accordion title="Static Web pages" content={`<p>Web pages that remains the same</p><br/>`} />
                                        <Accordion title="Status Codes" content={`<p>Status codes are issued by a server in response to a client’s request made to the server. It includes codes from IETF Request for Comments (RFCs), other specifications, and some additional codes used in some common applications of the HTTP. The first digit of the status code specifies one of five standard classes of responses. The message phrases shown are typical, but any human-readable alternative may be provided.</p><br/><p style="font-weight: bold;">Here are the five classes of Status Codes:</p><br/><p><span style="font-weight: bold;">1xx informational response </span>– the request was received, continuing process</p><br/><p><span style="font-weight: bold;">2xx successful </span>– the request was successfully received, understood, and accepted</p><br/><p><span style="font-weight: bold;">3xx redirection </span>– further action needs to be taken in order to complete the request</p><br/><p><span style="font-weight: bold;">4xx client error</span>– the request contains bad syntax or cannot be fulfilled</p><br/><p><span style="font-weight: bold;">5xx server error </span>– the server failed to fulfil an apparently valid request</p><br/><a  href='https://en.wikipedia.org/wiki/List_of_HTTP_status_codes'>Learn more about Status Codes </a><br/>`} />
                                        <Accordion title="Stop Word" content={`<p>A frequently used word. </p><br/><p>Stop words are words which are filtered out before or after processing of natural language data (text). Though “stop words” usually refers to the most common words in a language, there is no single universal list of stop words used by all natural language processing tools, and indeed not all tools even use such a list. Some tools specifically avoid removing these stop words to support phrase search.</p><br/><p>Any group of words can be chosen as the stop words for a given purpose. For some search engines, these are some of the most common, short function words, such as the, is, at, which, and on. In this case, stop words can cause problems when searching for phrases that include them, particularly in names such as “The Who”, “The The”, or “Take That”. </p><br/><p>Other search engines remove some of the most common words—including lexical words, such as “want”—from a query in order to improve performance.</p><br/><p>Search engines have become much more intelligent, more accurately determining when a stopword may add relevance to the search query. Thus, Stop words are not universally ignored by search engines. </p><br/>`} />
                                        <Accordion title="Subdomain" content={`<p>In the Domain Name System (DNS) hierarchy, a subdomain is a domain that is a part of another (main) domain. For example, if a domain offered an online store as part of their website example.com, you might use the subdomain shop.example.com</p><br/>`} />
                                        <Accordion title="Subfolder" content={`<p>A subfolder is similar to a subdomain in that it allows you to create categories of content, but they are set up differently on servers.</p><br/><p>Unlike subdomains, there is no server partitioning involved with subfolders.</p><br/><p>A subfolder is housed on the same server and any of its link juice goes back to the domain.</p><br/><a  href='https://www.impactplus.com/blog/subdomains-vs-subfolders'>Learn more about subfolders</a><br/>`} />
                                        <Accordion title="Submission Tools" content={`<p>Software applications that automatically submit a web site to search engines and directories</p><br/>`} />
                                        <Accordion title="Syntax" content={`<p>The rules governing the construction of search expressions in search engines and directories</p><br/>`} />
                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Tag (Referring to Google Analytics)" content={`<p>A snippet of JavaScript that sends information to a third party, such as Google. The Analytics tracking code is an example of a tag.</p><br/><p>A tag is a snippet of JavaScript that sends information to a third party, such as Google. Tags collect data, target your ad campaigns, track ads, and perform other functions. The Analytics tracking code is an example of a tag. If you don't use a tag management solution such as Google Tag Manager, you need to add these snippets of JavaScript directly to the source code of your site.</p><br/><a  href='https://support.google.com/analytics/answer/1008080'>Learn more about Tags</a>`} />
                                        <Accordion title="Taxonomy SEO" content={`<p>The process of optimizing pages in a way that maximizes discoverability on search engines. This is done by managing onpage elements such as organizational structure, categories and  meta tags</p><br/><a  href='https://www.tribalcore.com/2019/05/wordpress-taxonomy-seo-guide/'>Learn more about taxonomy SEO</a><br/>`} />
                                        <Accordion title="Target group (Target Market, Audience)" content={`<p>A group of online customers within a brand’s niche at which the business aims its marketing efforts and resources. It is a subset of the total market for a product or service.</p><br/><p>The target group typically consists of consumers who exhibit similar characteristics (such as age, location, income or lifestyle) and are considered most likely to engage the offerings of a webpage. </p><br/><p>Once the audience of a particular niche has been identified, the online may develop a user persona which helps to map the online taste of potential customers. Keyword research, page design and content will typically be fashioned to satisfy this group of individuals.</p><br/>`} />
                                        <Accordion title="Text Delimited Excel Filed " content={`<p>Excel files that retain data formatting</p><br/>`} />
                                        <Accordion title="TF-IDF (Term frequency–inverse document frequency)" content={`<p>A numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus. It is often used as a weighting factor in searches of information retrieval, text mining, and user modeling.</p><br/>`} />
                                        <Accordion title="Throw-away domains" content={`<p>A registered Internet domain name that is used to temporarily test a new application or for spamming. In the latter case, the domain may last for only an hour and never be used again.</p><br/>`} />
                                        <Accordion title="Title Tag" content={`<p>An HTML meta tag that allows you to demonstrate the title of a web page. If search engines choose to display a page on SERP, the title is typically the link presented for users to click and engage. Thus, webmasters ought to take the time to learn best practices when creating page titles.</p><br/><p>They also play a crucial role in helping search engines to understand the relevance of specific pages.</p><br/><p>< title>Example Title</title ></p><br/>`} />
                                        <Accordion title="Top-Level Domain (TLD)" content={`<p>The domains at the highest level in the hierarchical Domain Name System of the Internet.</p><br/><p>The top-level domain names are installed in the root zone of the name space.</p><br/><p>Also refers to the last segment of a domain name, or the part that follows immediately after the “dot” symbol. Examples include:</p><br/><li>.com</li><li>.org</li><li>.net</li><li>.gov</li><li>.biz</li><li>.edu</li><br/><p>There are also many more industry and country-specific options.</p><br/><p>Also known as: gTLD (Generic Top-Level Domain); Domain Extension.</p><br/>`} />
                                        <Accordion title="Traffic" content={`<p>The number of users that click on the link to a website or the amount of initiated sessions on a given webpage</p><br/>`} />
                                        <Accordion title="TrustRank" content={`<p>An algorithm that conducts link analysis to separate useful web pages from spam and helps search engine rank pages in SERPs (Search Engine Results Pages). </p><br/><p>Google TrustRank helps Google and other search engines combat web spam. Specifically, TrustRank measures so-called “trust signals”. These trust signals help them evaluate whether or not core ranking signals (like links and content) are legitimate.</p><br/><a  href="https://backlinko.com/google-trustrank">Learn more about Trust Rank</a><br/>`} />
                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="User ID views (Referring to Google Analytics)" content={`<p>A special type of reporting view that only includes data about the subset of traffic that has a user ID assigned.</p><br/><p>User ID views include a set of Cross Device reports, which aren’t available in other reporting views. The Cross Device reports give you the tools you need to analyze how users engage with your content on different devices over the course of multiple sessions. All other standard reports and tools are also available in User ID views.</p><br/><p>User ID views do not include all of your data. To analyze all of your data, use a different type of reporting view.</p><br/><p>User ID views are only available to Universal Analytics properties in which the User ID is enabled. You must also create User ID views. They do not exist by default in your account.</p><br/><a  href='https://support.google.com/analytics/answer/3123669'>Learn more about User ID Views</a><br/>`} />
                                        <Accordion title="User-Generated Content (UGC)" content={`<p>Any form of content, such as images, videos, text, and audio, that has been posted by users on online platforms such as social media and wikis. It is a product consumers create to disseminate online products or the firm that markets it.</p><br/><p>User-generated content is used for a wide range of applications, including problem processing, news, entertainment, advertising, gossip and research.</p><br/>`} />
                                        <Accordion title="Universal Analytics" content={`<p>Universal Analytics is the most current data collection technology for web-based Analytics. It uses the analytics.js tracking code for websites, an SDK for mobile apps, and the Measurement Protocol for other digital devices.</p><br/><a  href='https://support.google.com/analytics/answer/2790010'>Learn more about Universal Analytics</a>`} />
                                        <Accordion title="Universal Search (Blended Search)" content={`<p>Refers to when search engines satisfy a specific search query by populating search engine results pages with a mixture of results which may include images, videos, news, shopping, and other types of results.</p><br/>`} />
                                        <Accordion title="Unnatural Link" content={`<p>A suspicious link which is the likely result of manipulative black hat SEO techniques, general spam or hacking attempts. Google patrols the internet on the lookout for unnatural links, those sites looking to benefit from the use of these links are quite often penalized with a manual action.</p><br/>`} />
                                        <Accordion title="URL (Uniform Resource Locator)" content={`<p>Colloquially termed a web address, is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it. A URL is a specific type of Uniform Resource Identifier (URI), although many people use the two terms interchangeably. URLs occur most commonly to reference web pages (http), but are also used for file transfer (ftp), email (mailto), database access (JDBC), and many other applications.</p><br/>`} />
                                        <Accordion title="Usability" content={`<p>The capacity of a website to provide a condition for its users to perform the tasks safely, effectively, and efficiently while enjoying the experience.</p><br/>`} />
                                        <Accordion title="User Agent" content={`<p>Any software that retrieves, renders and facilitates end user interaction with Web content, or whose user interface is implemented using Web technologie</p><br/><a  href='https://www.w3.org/WAI/UA/work/wiki/Definition_of_User_Agent'>Learn more about user agent</a><br/>`} />
                                        <Accordion title="User Experience (UX)" content={`<p>The overall experience of a person who engages a website or computer application, especially in terms of ease and general satisfaction.</p><br/>`} />
                                        <Accordion title="UTF-8 (Unicode Transformation Format, 8 bit UCS)" content={`<p>A variable-width character encoding used for electronic communication. Defined by the Unicode Standard, the name is derived from Unicode (or Universal Coded Character Set) Transformation Format – 8-bit.</p><br/>`} />
                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="View (Referring to Google Analytics)" content={`<p>A view or reporting view is a subset of an Analytics account property that can have its own unique configuration settings. You can create multiple views for a single property and configure each view to show a different subset of data for the property.</p><br/><a  href='https://support.google.com/analytics/answer/2649553'>Learn more about views</a><br/>`} />
                                        <Accordion title="Viral Content" content={`<p>Material, such as an article, an image or a video that spreads rapidly online through website links and social sharing.</p><br/>`} />
                                        <Accordion title="Viral Marketing (Viral advertising)" content={`<p>A business strategy that uses existing social networks to promote a product. Its name refers to how consumers spread information about a product with other people, much in the same way that a virus spreads from one person to another. </p><br/><p>It can be delivered by word of mouth, or enhanced by the network effects of the Internet and mobile networks. They are used to amplify brand awareness, through self-replicating viral processes, analogous to the spread of pathological and computer viruses. </p><br/>`} />
                                        <Accordion title="Vertical Search" content={`<p>As opposed to general web search engines that display a broad range of results per search query, Vertical searches [eg.YouTube (video), Amazon (shopping), Kayak (travel), Yelp (business reviews)] focus on a specific segment of online content, or media.</p><br/>`} />
                                        <Accordion title="Virtual Assistant" content={`<p>A software agent that can perform tasks or services for an individual based on commands or questions. Sometimes the term “chatbot” is used to refer to virtual assistants generally or specifically accessed by online chat. </p><br/><p>In some cases, online chat programs are exclusively for entertainment purposes. Some virtual assistants are able to interpret human speech and respond via synthesized voices. Users can ask their assistants questions, control home automation devices and media playback via voice, and manage other basic tasks such as email, to-do lists, and calendars with verbal commands.</p><br/><p>Examples are, Apple’s Siri or Microsoft’s Cortana.</p><br/>`} />
                                        <Accordion title="Visibility" content={`<p>A weighted measure of a site’s prominence on search indexes. </p><br/><p>Visibility gauges organic search performance based on a site’s ranking URLs, other domains, ranking terms, the search volume for the respective ranking terms. </p>`} />
                                        <Accordion title="Visual Crawl Map" content={`<p>A bird’s eye view of a site’s internal web structure. Visually demonstrates the relationship between pages, content hubs and links on a site.</p><br/>`} />
                                        <Accordion title="Voice Search" content={`<p>Also called voice-enabled, allows the user to use a voice command to search the Internet, a website, or an app.</p><br/><p>In a broader definition, voice search includes open-domain keyword query on any information on the Internet, for example in Google Voice Search, Cortana, Siri and Amazon Echo.</p><br/>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Web 2.0 (Participatory Web and Social Web)" content={`<p>Refers to websites that emphasize user-generated content, ease of use, participatory culture and interoperability (i.e., compatible with other products, systems, and devices) for end users. A website may be considered web 2.0 if it aims to facilitate collaboration and sharing.</p><br/>`} />
                                        <Accordion title="Webpage" content={`<p>A web page (or webpage) is a specific collection of information provided by a website and displayed to a user in a web browser. A website typically consists of many web pages linked together in a coherent fashion. The name “web page” is a metaphor of paper pages bound together into a book.</p><br/><p>The core element of a web page is one or more text files written in the Hypertext Markup Language (HTML). Many web pages also make use of JavaScript code for dynamic behavior and Cascading Style Sheets (CSS) code for presentation semantics. Images, videos, and other multimedia files are also often embedded in web pages.</p><br/>`} />
                                        <Accordion title="Webmaster" content={`<p>A person who designs and maintains a website</p><br/>`} />
                                        <Accordion title="Website" content={`<p>A collection of web pages and related content that is identified by a common domain name and published on at least one web server.</p><br/>`} />
                                        <Accordion title="Website Navigation (Internal Links, Internal Linking, Site Architecture)" content={`<p>Internal links that link from pages on your website going to other pages on your website. </p><br/><p>In the same way as all other links on the web, they are used by search engines to find, crawl and index new and existing pages.</p><br/><p>As well as a pathway to a particular URL, and in the same way as for external links, internal links also represent votes of authority to a page which help search engines establish how important the page is. As such the more internal links a page has from within your site, the more important that page will be perceived to be by search engines.</p><br/>`} />
                                        <Accordion title="Website Subduction" content={`<p>The effect of publishing blog content in chronological order, older content gets pushed deeper into the website. To avoid wasting the value of evergreen content. Consider creating hub pages that group related content higher up in the site hierarchy.</p><br/>`} />
                                        <Accordion title="White Hat" content={`<p>Search engine optimisation methodology that strictly adheres to best practices laid out by webmaster search guidelines.</p><br/>`} />
                                        <Accordion title="WHOIS Information" content={`<p>A database of information that lists who owns what domain name on the web.</p><br/><p>Essentially, WHOIS is a  query and response protocol that is widely used for querying databases that store the registered users or assignees of an Internet resource, such as a domain name, an IP address block or an autonomous system, but is also used for a wider range of other information. The protocol stores and delivers database content in a human-readable format.</p><br/>`} />
                                        <Accordion title="WordPress" content={`<p>Released on May 27, 2003, by its founders, Matt Mullenweg and Mike Little, wordpress is a free and open-source content management system. It also happens to be the most popular CMS of its kind, powering more than 60 million websites, including 33.6% of the top 10 million websites as of April 2019. </p><br/><p>Its features include a plugin architecture and a template system, referred to within WordPress as Themes. WordPress was originally created as a blog-publishing system but has evolved to support other types of web content including more traditional mailing lists and forums, media galleries, membership sites, learning management systems (LMS) and online stores.</p><br/>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="x-default hreflang" content={`<p>Used when no other language/region matches the user’s browser setting. This value is optional, but recommended, as a way for you to control the page when no languages match. A good use is to target your site’s homepage where there is a clickable map that enables the user to select their country.</p><br/><a  href='https://support.google.com/webmasters/answer/189077?hl=en'>Learn more about x-default hreflang </a><br/>`} />
                                        <Accordion title="XML (Extensible Markup Language)" content={`<p>Designed to store and transport data, XML is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.</p><br/>`} />
                                        <Accordion title="XML Sitemap" content={`<p>Google introduced the Sitemaps protocol so web developers can publish lists of links from across their sites. The basic premise is that some sites have a large number of dynamic pages that are only available through the use of forms and user entries. The XML Sitemap file contains URLs to these pages so that web crawlers can find them. Bing, Google, Yahoo and Ask now jointly support the Sitemaps protocol.</p><br/><p>Since the major search engines use the same protocol, having a Sitemap lets them have the updated page information. Sitemaps do not guarantee all links will be crawled, and being crawled does not guarantee indexing.</p><br/>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <Accordion title="Yahoo Search" content={`<p>Originally, “Yahoo Search” referred to a Yahoo-provided interface that sent queries to a searchable index of pages supplemented with its directory of websites. The results were presented to the user under the Yahoo! brand. Originally, none of the actual web crawling and data housing was done by Yahoo! itself.</p><br/><p>In 2001, the searchable index was powered by Inktomi and later by Google until 2004, when Yahoo! Search became independent. On July 29, 2009, Microsoft and Yahoo! announced a deal in which Bing would henceforth power Yahoo! Search.</p><br/><a  href='https://en.wikipedia.org/wiki/Yahoo!_Search'>Learn more about Yahoo Search</a><br/>`} />
                                        <Accordion title="Yandex Search" content={`<p>Founded in September 1997 and owned by the Russian corporation Yandex, Yandex is the most popular search engine in Russia. </p><br/><p>The search technology provides local search results in more than 1,400 cities. Yandex Search also features “parallel” search that presents results from both main web index and specialized information resources, including news, shopping, blogs, images and videos on a single page.</p><br/>`} />
                                        <Accordion title="YMYL (Your Money Your Life)" content={`<p>Stands for “your money or your life” and this is how Google’s refers to web pages and content that could have a negative impact on the quality of people’s lives and/or their finances. Or, as Google describes them in its Search Quality Rating Guidelines, “pages or topics [that] could potentially impact a person’s future happiness, health, financial stability, or safety”.</p><br/><a  href='https://www.thedrum.com/opinion/2019/10/07/no-nonsense-guide-using-ymyl-and-e-t-seo'>Learn more asbout YMYL</a><br/>`} />

                                    </div>
                                    <a  className='text-center font-bold hover:text-[#2cbc63] ' href="#top">Back to top</a>
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
                                        <a  className='text-[26px] mx-2' title='Facebook' href="https://www.facebook.com/FansOfKindness"><FaFacebookF /></a>
                                        <a  className='text-[26px] mx-2' title='Twitter' href="https://twitter.com/bonds_kindness"><TiSocialTwitter /></a>
                                        <a  className='text-[26px] mx-2' title='Instagram' href="https://www.instagram.com/thequotecouple"><TiSocialInstagram /></a>

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
                                        <a  className='text-[26px] mx-2' title='Facebook' href="https://www.facebook.com/FansOfKindness"><FaFacebookF /></a>
                                        <a  className='text-[26px] mx-2' title='Twitter' href="https://twitter.com/bkmag_es"><TiSocialTwitter /></a>
                                        <a  className='text-[26px] mx-2' title='Instagram' href="https://www.instagram.com/thequotecouple"><TiSocialInstagram /></a>

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
