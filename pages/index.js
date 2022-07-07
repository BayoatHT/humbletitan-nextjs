import React from 'react'
import Layout from "../components/Layout";
import Image from 'next/image'
import Head from 'next/head'
import heroImg from '../assets/imgs/bayo-ht-homepage-600x586.jpg'
import htgoforit from '../assets/imgs/ht-go-for-it-we-got-you.jpg'
import workTogether from '../assets/imgs/home-page-work-together.jpg'
import humbleLogo from '../assets/imgs/humble-home-logo.png'
import DigitalServices from '../assets/imgs/home-content-Humble-Digital-Services.jpg'
import HumbleTrader from '../assets/imgs/home-content-Humble-Trader.jpg'
import HumbleVoter from '../assets/imgs/home-content-Humble-Voter.jpg'
import TRAMSEO from '../assets/imgs/home-content-TRAM-SEO.jpg'
import Humblemind from '../assets/imgs/home-content-Humble-mind.jpg'
import helloicon from '../assets/imgs/hello-icon.png'
import humbeleTraderBanner from '../assets/imgs/Home-banner-humble-trader-600x625.jpg'
import homePageSeoTram from '../assets/imgs/home-page-seo-tram.jpg'
import homePageSeoCourse from '../assets/imgs/home-page-seo-course.jpg'
import htNewsletterBanner from '../assets/imgs/ht-newsletter-banner.jpg'
import HTHomeVoterBanner from '../assets/imgs/HT-home-voter-banner.jpg'
import HTHomeIndivisual from '../assets/imgs/ht-home-individuals-400x400.png'
import HTHomeBusiness from '../assets/imgs/ht-home-business-400x400.png'
import HTHomeEntrepreneur from '../assets/imgs/ht-home-entrepreneur-400x400.png'
import HTHomeBanner from '../assets/imgs/ht-home-banner-2.jpg'
import homeContentManagementService from '../assets/imgs/home-content-management-service.jpg'
import homeSeoService from '../assets/imgs/home-seo-service.jpg'
import homeWebAndMobileDesign from '../assets/imgs/home-web-and-mobile-design.jpg'
import homeWebManagement from '../assets/imgs/home-web-management.jpg'
import * as Fontawesome from 'react-icons/fa'
import ReactMarkdown from 'react-markdown';
import rocketIcon from '../assets/imgs/rocket-icon.png'


import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import Green_rounded_btn from '../components/buttons/Green_rounded_btn';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Home({ contents }) {
    console.log(contents)
    const { Header, Hero, TRAMSearchEngine, WeAreAFullService, beHumbleVoter, explore, last_words, no_matter_who_you_are, ourServices, services_gallery, tellUs_section, theHumbleTrader, weBoostSection } = contents?.data?.attributes
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{Header.title}</title>
            </Head>
            <Layout >
                {/* Hero */}
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto items-center md:flex justify-between w-10/12 md:w-11/12 '>
                            <div className='md:w-[50%] '>
                                <h1 className='text-[50px] md:text-[60px] text-[#023A51] md:pt-10 leading-[55px] md:leading-[69px] tracking-[-3px] ' >{Hero.heading} </h1>
                                <h2 className='text-[24px]  text-[#023A51] leading-7 py-8 ' >{Hero.description}</h2>
                                <Green_rounded_btn href={Hero.actionButton.href} >{Hero.actionButton.label}</Green_rounded_btn>
                            </div>
                            <div className='mt-10 md:mt-0 md:h-[50%]' >
                                <img src={Hero.heroImage.data[0].attributes.url} alt="image" />
                            </div>
                        </div>
                    </div>
                </section>



                {/* We boost */}
                <section className='heading my-20  '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex flex-wrap justify-around w-10/12 md:w-11/12 '>
                            <div className='pt-[40px] md:w-[50%] '>
                                <div className='flex items-center ' >
                                    <img className='rounded-xl' src={weBoostSection.images.data[0].attributes.url} alt="img" />
                                    <div className='ml-8'  >
                                        <img className='rounded-xl' src={weBoostSection.images.data[1].attributes.url} alt="img" />
                                        <div>
                                            <img className='rounded-xl block ' src={weBoostSection.images.data[2].attributes.url} alt="img" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='mt-10 md:w-[50%] md:pl-10'>
                                <div className='md:flex items-center' >
                                    <img src={weBoostSection.title_with_picture.smallPicture.data.attributes.url} alt="img" />
                                    <p className='text-[20px] extralight text-[#023A51] ' >{weBoostSection.title_with_picture.title}</p>
                                </div>

                                <p className='text-[50px] md:text-[60px] text-[#023A51] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ' >{weBoostSection.heading}</p>

                                <div className=' md:flex justify-between items-center '>
                                    <p className='text-[22px] extralight text-[#023A51] ' >{weBoostSection.description}</p>
                                    <div className='my-6'>
                                        <Green_rounded_btn href={weBoostSection.actionButton.href} >{weBoostSection.actionButton.label}</Green_rounded_btn>
                                    </div>
                                </div>

                                <a className=' text-[18px] font-semibold md:text-[20px] hover:text-[#2cbc63] extralight text-[#023A51] py-10  ' href={weBoostSection.link?.href}>{weBoostSection.link?.label}</a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* explore */}
                <section className=' '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12 text-[#023A51] '>
                            <h1 className=' text-[50px] md:text-[80px] text-center md:text-left font-bold ' >{explore.headingBig}</h1>
                            <h2 className='text-[24px] py-4 block font-semibold text-center ' >{explore.heading_1}</h2>
                            <h2 className='text-[24px] block font-semibold text-center '>{explore.heading_2}</h2>

                            <div className='flex justify-around flex-wrap py-10 ' >
                                {
                                    explore.Offerings?.map((item, index) => {
                                        return (
                                            <div key={index} className=' md:w-[19%] sm:w-[30%] w-[100%] flex flex-col items-center ' >
                                                <img className=' rounded-xl hover:drop-shadow-lg hover:scale-105 transition duration-300 cursor-pointer ' src={item.image.data.attributes.url} alt="image" />
                                                <p className='text-[22px] leading-[30px] text-center mb-6 w-[100%]' >{item.description}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Services */}
                <section className='heading ' >
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12 ' >
                            <h1 className=' text-[50px] md:text-[80px] text-center md:text-left text-[#023A51] font-bold' >{ourServices.headingBig}</h1>
                        </div>

                        <div className=' mx-auto flex justify-center sm:justify-start flex-wrap md:w-11/12 text-[#023A51]' style={{ backgroundImage: `url(${ourServices.BackgroundImage.data.attributes.url})`, width: '100%', height: '100%', backgroundPosition: 'cover', backgroundRepeat: 'no-repeat' }}>

                            <div className='bg-[#fff] rounded-xl p-10 mt-10 flex flex-col items-center md:ml-10 drop-shadow-md w-[90%] md:w-[40%] ' >
                                <p className='text-[40px] md:text-[60px] font-bold text-[#023A51] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ' >
                                    {ourServices.marketSmarter.heading}
                                </p>
                                <p className='text-[20px] mb-4 ' >{ourServices.marketSmarter.discription}</p>
                                <Green_rounded_btn href={ourServices.marketSmarter.actionButton.href}>{ourServices.marketSmarter.actionButton.label}</Green_rounded_btn>
                            </div>

                        </div>


                        <div className='mx-auto text-[#023A51] py-20 flex flex-wrap justify-around text-center w-10/12 md:w-11/12 '>
                            {services_gallery.single_service.map((item) => {
                                return (
                                    <div key={item.id} className=' sm:w-[50%] lg:w-[25%] w-[100%]' >
                                        <Image src={item.image.data.attributes.url} width="100%" height="100%" layout="fixed" alt="image" />

                                        <h2 className='text-[32px] py-2' >{item.title}</h2>
                                        <p className='text-[18px]  p-4' >{item.details}</p>
                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </section>

                {/* contact us */}
                <section className=' py-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-11/12 '>
                            <div className='mx-auto px-4 md:px-8 justify-between flex flex-wrap  rounded-xl  bg-[#023A51] '>
                                <div className='text-[#fff] md:pl-2 py-20 w-[100%] md:w-[50%] ' >
                                    <p className='text-[40px] md:text-[60px] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ' >{tellUs_section.text}</p>

                                    {
                                        tellUs_section.info.map((item) => {
                                            return (
                                                <div key={item.id} className='py-6' >
                                                    <div className='flex items-center' >
                                                        <div className='mr-4 text-[26px] text-[#fff]' >
                                                            {React.createElement(Fontawesome[item.iconClass])}
                                                        </div>
                                                        <h2 className='text-[30px] py-4 ' >{item.name}</h2>
                                                    </div>
                                                    <ReactMarkdown components={{
                                                        p: ({ node, ...props }) => <p className="mr-4 text-[26px] " {...props} />,
                                                        a: ({ node, ...props }) => <a className="hover:text-[#2cbc63] hover:text-underline " {...props} />,
                                                    }} >
                                                        {item.details}
                                                    </ReactMarkdown>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div className=' py-6 md:w-[50%] w-[100%] md:py-20' >
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


                {/* The Humble Trader */}
                {
                    theHumbleTrader && (
                        <section className='heading md:my-20'>
                            <div className=" container w-12/12 mx-auto max-w-screen-xl">
                                <div className='mx-auto flex w-10/12 md:w-11/12  '>
                                    <div className='flex flex-col md:flex-row md:items-center mx-auto md:justify-between' >
                                        <div className='md:mr-20 mt-10 md:mt-[0px] md:w-[45%] order-1 md:order-none ' >
                                            <Image className='rounded-xl p-10' src={theHumbleTrader.image.data[0].attributes.url} layout="responsive" width="100%" height="100%" alt="image" />
                                        </div>
                                        <div className='text-[#023A51] w-[100%] md:w-[55%] md:pl-10  ' >
                                            <p className='text-[20px] my-10 ' >{theHumbleTrader.lable.name}</p>
                                            <p className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>{theHumbleTrader.heading}</p>
                                            <p className='text-[22px] my-10 ' >{theHumbleTrader.description}</p>
                                            <Green_rounded_btn href={theHumbleTrader.actionButton.href} >{theHumbleTrader.actionButton.label}</Green_rounded_btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }



                {/* T.R.A.M Search Engine Optimization */}
                {
                    TRAMSearchEngine && (
                        <section className='heading my-20 '>
                            <div className=" container w-12/12 mx-auto max-w-screen-xl">
                                <div className='mx-auto text-[#023A51] flex justify-center flex-wrap w-10/12 md:w-11/12 '>
                                    <div className='w-[100%] md:w-[55%]'>
                                        <div className='flex items-center' >
                                            {
                                                TRAMSearchEngine.title_with_picture && (
                                                    <>
                                                        <img src={TRAMSearchEngine.title_with_picture.smallPicture.data.attributes.url} alt='image' />

                                                        <p className='text-[20px] ml-4  ' >{TRAMSearchEngine.title_with_picture.title}</p>
                                                    </>
                                                )
                                            }
                                        </div>
                                        <h2 className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ' >{TRAMSearchEngine.heading}</h2>
                                        <p className='text-[20px]'  >{TRAMSearchEngine.description}</p>
                                        <div className={'mt-10'}>
                                            <Green_rounded_btn href={TRAMSearchEngine.actionButton.href}  >{TRAMSearchEngine.actionButton.label}</Green_rounded_btn>
                                        </div>
                                    </div>
                                    <div className='pt-[40px] md:pl-20 w-[100%] md:w-[45%] '>
                                        <div className='flex flex-col md:flex-row justify-center md:items-center ' >
                                            <div className='flex justify-center'>
                                                <img className='rounded-xl' src={TRAMSearchEngine.images.data[0].attributes.url} alt="img" />
                                                <div className='ml-8'>
                                                    <img className='rounded-xl' src={TRAMSearchEngine.images.data[1].attributes.url} alt="img" />
                                                    <div>
                                                        <img className='rounded-xl ' src={TRAMSearchEngine.images.data[2].attributes.url} alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }



                {/* We are a full-service digital company */}
                <section className='heading my-20 '>
                    <div className=" container py-20 w-12/12 mx-auto bg-[#e0ecf0] flex justify-center flex-wrap max-w-screen-xl">
                        <div className='px-4 md:w-[50%]' >
                            <img src={WeAreAFullService.image.data[0].attributes.url} alt="image" />
                        </div>
                        <div className='p-6 pl-10 text-[#023A51] md:w-[50%] '>
                            <h1 className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px]  py-10  ' >{WeAreAFullService.heading}</h1>
                            <p className='text-[20px]' >{WeAreAFullService.description}</p>
                            <br />
                            <p className='text-[20px]' >Subscribe below to our magazine, the Humble  Mind for <br /> our latest updates.</p>
                            <h2 className='text-[24px] font-bold py-6 ' >Hear from us first</h2>
                            <input className='block outline-[#2cbc63] p-2 rounded-xl text-[20px] w-[100%]' type="text" placeholder='Enter your email' />
                            <button className='green_rounded_btn my-10' >Subscribe</button>
                        </div>
                    </div>
                </section>


                {/* Be a Humble Voter */}
                <section className='heading my-20 '>
                    <div className=" py-10 flex flex-wrap justify-between items-center container w-12/12 mx-auto max-w-screen-xl">
                        <div className='text-center p-4 md:p-10 text-[#023A51] md:w-[50%] w-[100%] ' >
                            <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] font-semibold ' >{beHumbleVoter.heading}</p>
                            <p className=" text-[20px] text-wrap leading-10 px-10 " >{beHumbleVoter.description}</p>

                        </div>
                        <div className=' md:w-[50%] w-[100%] px-4 ' >
                            <img className='rounded-xl ' src={beHumbleVoter.image.data[0].attributes.url} alt="image" />
                        </div>
                    </div>
                </section>



                {/* No matter who you are, */}
                <section className='heading py-20 bg-[#f9fafb]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <h3 className=' text-[50px] md:text-[60px] text-center leading-[69px] md:leading-[50px] tracking-[-2px] py-20 pt-[80px] text-[#023A51] ' >{no_matter_who_you_are.heading}</h3>
                        <div className='flex flex-wrap text-[#023A51] justify-around' >
                            {
                                no_matter_who_you_are?.vertical_cards?.map((item) => {
                                    return (
                                        <div key={item.id} className=' rounded-xl my-2 p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                            <h2 className='text-[35px] md:text-[40px] font-bold text-center ' >{item.heading}</h2>
                                            <div className='my-6'>
                                                <img className='rounded-xl' src={item.image.data.attributes.url} alt="image" />
                                            </div>
                                            <p className='text-[22px] text-[#59667d] '>{item.qouted_text}</p>
                                            <p className='text-[20px] py-3' ><span className='font-bold' >{item.personName}</span> {item.roll}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* last section */}
                <section className='my-20 '>
                    <div className='container w-12/12 flex justify-center mx-auto max-w-screen-xl' >


                        <div className=" w-10/12">
                            <ReactMarkdown
                                components={{

                                    p: ({ node, ...props }) => <p className="text-[22px] text-[#59667d] " {...props} />,
                                    a: ({ node, ...props }) => <a className="hover:text-[#2cbc63] text-[#59667d] hover:text-underline " {...props} />,
                                }}

                                className=''>{last_words}</ReactMarkdown>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}


export const getServerSideProps = async () => {
    var contents;
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/home`)
        .then(({ data }) => {
            contents = data
        }).catch((error) => {
            console.log(error)
        })
    return {
        props: {
            contents: JSON.parse(JSON.stringify(contents))
        }
    }
}  