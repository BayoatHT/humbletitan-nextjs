import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import axios from 'axios'
import qs from 'qs'

import tramfeaturedauthority from '../../assets/imgs/tram-featured-authority-600x586.jpg'
import TRAMTrafficFactors from '../../assets/imgs/TRAM-54-Traffic-Factors-400x282.jpg'
import TRAMRankingFactors from '../../assets/imgs/TRAM-55-Ranking-Factors-400x282.jpg'
import TRAMInternalLinks from '../../assets/imgs/TRAM-56-Internal-Links-400x282.jpg'
import TRAMInternalLinkBuilding from '../../assets/imgs/TRAM-57-Internal-Link-Building-400x282.jpg'
import TRAMAuthorityconcepts from '../../assets/imgs/TRAM-58-Authority-concepts-400x282.jpg'
import TRAMBlackHatSEOVsWhiteHatSEO from '../../assets/imgs/TRAM-59-Black-Hat-SEO-Vs-White-Hat-SEO-400x282.jpg'
import TRAMLinkdisavow from '../../assets/imgs/TRAM-60-Link-disavow-400x282.jpg'
import TRAMOutreach from '../../assets/imgs/TRAM-61-Outreach-400x282.jpg'
import TRAMBacklinks from '../../assets/imgs/TRAM-62-Backlinks-400x282.jpg'
import TRAMLinkbuildingMastersheet from '../../assets/imgs/TRAM-63-Linkbuilding-Mastersheet-1-400x282.jpg'
import TRAMDirectVisits from '../../assets/imgs/TRAM-64-Direct-Visits-400x282.jpg'
import TRAMMaximumWordpressTraffic from '../../assets/imgs/TRAM-65-Maximum-Wordpress-Traffic-400x282.jpg'
import TRAMTimeonSite from '../../assets/imgs/TRAM-66-Time-on-Site-400x282.jpg'
import TRAMUserExperience from '../../assets/imgs/TRAM-67-User-Experience-400x282.jpg'
import TRAMLocalSEO from '../../assets/imgs/TRAM-68-Local-SEO-400x282.jpg'
import TRAMCitations from '../../assets/imgs/TRAM-69-Citations-400x282.jpg'
import TRAMGoogleMyBusinessPage from '../../assets/imgs/TRAM-70-Google-My-Business-Page-400x282.jpg'
import TRAMadvert from '../../assets/imgs/TRAM-advert-600x1407.jpg'
import otherwebdesignservice from '../../assets/imgs/other-web-design-service-200x200.jpg'
import othercontentmarketingservice from '../../assets/imgs/other-content-marketing-service-200x200.jpg'
import otherseoservice from '../../assets/imgs/other-seo-service-200x200.jpg'
import otherwebmanagementservice from '../../assets/imgs/other-web-management-service-200x200.jpg'
import GetAQuote from '../../components/GetAQuote';
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn';

export default function AuthorityCourse({ contents }) {
    console.log(contents)
    const { hero, header, chapters, completeMethod, ht_digital_services, otherServices, tableOfContents, tramStandardPacks } = contents.data[0]?.attributes
    return (
        <>
            <Head>
                <title>{header.title}</title>
            </Head>
            <Layout>


                {/* hero */}
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[22px] font-bold text-[#2cbc63] ' >{hero.label.name}</p>
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>{hero.heading}</h1>
                                    <br />
                                    <p className='text-[26px] ' >{hero.description}</p>
                                    <br />

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <img className='rounded-xl p-10' src={hero.heroImage.data[0].attributes.url} alt="image" />
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
                                <p className='text-[40px] text-center md:text-[50px] font-bold leading-[49px] md:leading-[59px] text-[#2cbc63] ' >{tableOfContents.heading} <br /> {tableOfContents.heading2}</p>
                            </div>
                            <div className='flex flex-wrap mx-auto justify-around' >
                                {
                                    tableOfContents.contentCards?.map((item) => {
                                        return (
                                            <a key={item.id} href={item.href} className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                                <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter {item.chapterNumber}</p>
                                                <p className='text-[#023A51] text-[34px] font-bold  '>{item.name}</p>
                                            </a>
                                        )
                                    })
                                }
                                {/* <a href='#chapter20' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 20</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Domains</p>
                                </a>
                                <a href='#chapter21' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 21</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Internal Authority</p>
                                </a>
                                <a href='#chapter22' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 22</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Concepts</p>
                                </a>
                                <a href='#chapter23' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 23</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Beware</p>
                                </a>
                                <a href='#chapter24' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 24</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Backlinks</p>
                                </a>
                                <a href='#chapter25' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 25</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Traffic</p>
                                </a>
                                <a href='#chapter26' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 26</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>The User</p>
                                </a>
                                <a href='#chapter27' className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                    <p className='text-[#E0C600] text-[24px] font-bold  '>Chapter 27</p>
                                    <p className='text-[#023A51] text-[34px] font-bold  '>Local Search</p>
                                </a> */}

                            </div>

                            <p className='text-[24px] font-bold text-[#2cbc63] my-4 mb-8 ' >{completeMethod.heading}</p>
                            <div className='flex flex-wrap mx-auto justify-around' >
                                {
                                    completeMethod.courseCards?.map((item) => {
                                        return (
                                            <a key={item.id} href={item.href} className='text-[#023A51] mb-4 bg-[#fff] border hover:bg-[#e0ecf0] rounded-lg p-4  w-[95%] md:w-[23%]' style={{ boxShadow: '0px 0px 5px 2px rgba(89,102,125,0.75)' }} >
                                                <p className='text-[#E0C600] text-[24px] font-bold  '>Part {item.partNumber}</p>
                                                <p className='text-[#023A51] text-[34px] font-bold green-first  '>{item.name}</p>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter */}
                {
                    chapters.map((item) => {
                        return (
                            <section key={item.id} id={`chapter${item.chapterNumber}`} className='heading my-10 md:my-20'>
                                <div className=" container w-12/12 mx-auto max-w-screen-xl">
                                    <div className='mx-auto w-10/12 md:w-11/12  '>
                                        <div className='md:flex flex-wrap mx-auto justify-around' >
                                            <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                                <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter {item.chapterNumber}</p>
                                                <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>{item.name}</p>
                                                <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                            </div>
                                            {
                                                item.lessonCards?.map((item) => {
                                                    return (
                                                        <div key={item.id} className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                                            <img className='rounded-xl' src={item.image.data?.attributes?.url} alt="image" />
                                                            <br />
                                                            <p className='text-[22px] font-bold ' >Lesson {item.lessonNumber}</p>
                                                            <br />
                                                            <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>{item.title}</p>
                                                            <br />
                                                            <p className='text-[20px] text-[#59667d] ' >{item.description}</p>
                                                            <br />
                                                            {
                                                                item.actionButton && (
                                                                    <Green_rounded_btn href={item.actionButton?.href ? item.actionButton?.href : '#'} className=' w-[100%] '>{item.actionButton?.label}</Green_rounded_btn>

                                                                )
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    })
                }
                {/* chapter 20 */}
                {/* <section id='chapter20' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 20<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Rank Better<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMTrafficFactors} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Traffic Factors</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMRankingFactors} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Ranking Factors</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}



                {/* Chapter 21 */}
                {/* <section id='chapter21' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 21<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Internal Authority<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMInternalLinks} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Internal Links</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMInternalLinkBuilding} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Internal Link Building</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* T.R.A.M Standard Package. */}
                <section className='heading py-10 md:py-20 bg-[#023A51]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-start mx-auto justify-between' >
                                <div className='text-[#fff] w-[100%] md:w-[50%]  ' >
                                    <p className=' text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] '>{tramStandardPacks.heading}</p>
                                    <br />
                                    <p className=' text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] '>{tramStandardPacks.heading2}</p>
                                    <br />
                                    <p className='text-[24px] ' >{tramStandardPacks.details}</p>
                                    <br />
                                    <div className='md:flex mx-auto items-start justify-around' >
                                        {
                                            tramStandardPacks.tramPackages.map((item) => {
                                                return (
                                                    <div key={item.id} className='text-[#023A51] mb-8 bg-[#f2f3f5] p-2 w-[100%] md:w-[30%] group ' >
                                                        <div className='border divide-y-2 divide-solid ' >
                                                            <p className='bg-[#65bc7b] text-[#fff] text-[36px] font-bold text-center py-3 ' >{item.title}</p>
                                                            <div>
                                                                {
                                                                    item.Price.toLowerCase() == 'free' ? (
                                                                        <p className='text-[#65bc7b] flex justify-center text-[50px] md:text-[75px] leading-[79px] font-bold text-center py-4 ' >{item.Price} </p>
                                                                    ) : (
                                                                        <p className='text-[#65bc7b] flex justify-center text-[50px] md:text-[75px] leading-[79px] font-bold text-center py-4 ' ><span className='text-[#59667d] text-[30px] ' >$</span>{item.Price}<span className='text-[30px] text-[#65bc7b] ' >99</span> </p>

                                                                    )
                                                                }
                                                                {
                                                                    item.description && (
                                                                        <p className='text-[24px] text-center font-bold italic text-[#59667d] pb-4 ' >{item.description}</p>
                                                                    )
                                                                }
                                                            </div>

                                                            {
                                                                item.packageFeatures.map((item) => {
                                                                    return (
                                                                        <p key={item.id} className='text-[#59667d] text-[22px] text-center py-4 bg-[#fff] group-hover:bg-[#f2f3f5] ' >{item.name}</p>

                                                                    )
                                                                })
                                                            }
                                                            <div className='flex justify-center '>
                                                                <Green_rounded_btn href={item.actionButton.href} className='green_rounded_btn my-2' >{item.actionButton.label}</Green_rounded_btn>

                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <div className='text-[#023A51] mb-8 bg-[#f2f3f5] p-2 w-[100%] md:w-[48%] group ' >
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
                                        </div> */}
                                    </div>

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <img className='rounded-xl p-10' src={tramStandardPacks.image.data[0].attributes.url} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Chapter 22 */}
                {/* <section id='chapter22' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 22<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Concepts<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMAuthorityconcepts} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Domain Authority, Trust Flow & Citation Flow</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* Chapter 23 */}
                {/* <section id='chapter23' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 23<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Beware<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMBlackHatSEOVsWhiteHatSEO} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Black Hat SEO Vs. White Hat SEO</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMLinkdisavow} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Link Disavow Process</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}




                {/* Chapter 24 */}
                {/* <section id='chapter24' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 24<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Backlinks<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMOutreach} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Outreach</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMBacklinks} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Backlinks and Link Building</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMLinkbuildingMastersheet} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Linkbuilding Master Sheet</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* Chapter 25 */}
                {/* <section id='chapter25' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 25<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Traffic<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMDirectVisits} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Direct Visits</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMMaximumWordpressTraffic} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Maximum WordPress Traffic</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* Chapter 26 */}
                {/* <section id='chapter26' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-around' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 26<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>The User<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMTimeonSite} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Time on Site</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMUserExperience} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>User Experience</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                {/* Chapter 27 */}
                {/* <section id='chapter27' className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex flex-wrap mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] my-6 md:w-[32%]  ' >
                                    <p className=' text-[22px] md:text-[30px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Chapter 27<span className='text-[#2cbc63]'>.</span></p>
                                    <p className=' text-[26px] md:text-[46px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Local Search<span className='text-[#2cbc63]'>.</span></p>
                                    <a href='#top' className='text-[#2cbc63] cursor-pointer hover:text-[18px] transition-all duration-150 ' >Back to top</a>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMLocalSEO} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 1</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Optimizing for Local</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMCitations} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 2</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Citations</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                                <div className='p-6 rounded-lg border text-[#023A51] shadow my-6 w-[100%] md:w-[32%] '  >
                                    <Image className='rounded-xl' src={TRAMGoogleMyBusinessPage} alt="image" />
                                    <br />
                                    <p className='text-[22px] font-bold ' >Lesson 3</p>
                                    <br />
                                    <p className=' text-[26px] md:text-[36px] font-bold leading-[35px] md:leading-[45px] tracking-[-1px] '>Google My Business Page</p>
                                    <br />
                                    <p className='text-[20px] text-[#59667d] ' >Curabitur ac leo nunc estibul et maur vel ante finibus maximus.</p>
                                    <br />
                                    <button className='green_rounded_btn w-[100%] '>Learn Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* best possible solutions for your business */}
                <section className='heading py-10' >
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='flex justify-center mb-10'>
                                <p className='text-[40px] text-center md:text-[50px] font-bold leading-[49px] md:leading-[59px] text-[#023A51] ' >{otherServices.heading}</p>
                            </div>

                            <div className='md:flex flex-wrap justify-around'>
                                {
                                    otherServices.otherService.map((item) => {
                                        return (
                                            <div key={item.id} className='flex items-center group w-[100%] md:w-[46%] mb-12'>
                                                <img className='rounded-lg' src={item.image.data.attributes.url} alt="image" />
                                                <div className='ml-6'>
                                                    <p className='text-[24px] font-bold text-[#023A51] group-hover:text-[#2cbc63] transition duration-150  '>{item.title}</p>
                                                    <br />
                                                    <p className='text-[22px] text-[#59667d] '>{item.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
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

export const getServerSideProps = async (ctx) => {
    const { query: { slug } } = ctx
    var contents;

    const query = qs.stringify({
        populate: {
            header: {
                populate: '*'
            },
            hero: {
                populate: '*'
            },
            tableOfContents: {
                populate: '*'
            },
            completeMethod: {
                populate: '*'
            },
            chapters: {
                populate: {
                    lessonCards: {
                        populate: '*'
                    }
                }
            },
            tramStandardPacks: {
                populate: {
                    image: {
                        populate: "*"
                    },
                    tramPackages: {
                        populate: '*'
                    }
                }
            },
            otherServices: {
                populate: {
                    otherService: {
                        populate: '*'
                    }
                }
            },
            ht_digital_services: {
                populate: '*'
            },
        },
    }, {
        encodeValuesOnly: true, // prettify URL
    });

    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/courses?filters[slug][$eq]=${slug}`)
        .then(({ data }) => {
            contents = JSON.parse(JSON.stringify(data))
        }).catch((error) => {
            console.log(error)
        })
    return {
        props: {
            contents: contents
        }
    }
} 