import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Accordion from "../../components/accordion/Accordion"
import Typewriter from "typewriter-effect";
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'

import * as Fontawesome from 'react-icons/fa'
import { FaPlus, FaNewspaper, FaPhoneVolume, FaCashRegister, FaChevronDown } from 'react-icons/fa'
import { IoMdCheckmarkCircle, IoMdSearch, } from 'react-icons/io'
import { IoDesktopSharp } from 'react-icons/io5'
import { AiOutlineDesktop } from 'react-icons/ai'
import { GoRadioTower, GoMailRead } from 'react-icons/go'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { RiAdvertisementFill } from 'react-icons/ri'

import BayoFounderPhoto from '../../assets/imgs/bayo-founder-photo.jpg'
import HTStandardLogo from '../../assets/imgs/HT-Standard-Logo.png'
import boxbgsvg from '../../assets/imgs/box-bg-1.svg'
import humbleBrandVisibility from '../../assets/imgs/humble-brand-visibility.jpg'
import humbleConversions from '../../assets/imgs/humble-conversions.jpg'
import humbleCustomerBase from '../../assets/imgs/humble-customer-base.jpg'
import humbleManagement from '../../assets/imgs/humble-management.jpg'
import placeHolderImage from '../../assets/images/PLACE-HOLDER-600x348.jpg'
import humblePoliticians from '../../assets/imgs/humble-politicians-400x174.jpg'
import humblePoliticalCampaigns from '../../assets/imgs/humble-political-campaigns-400x174.jpg'
import humbleNgos from '../../assets/imgs/humble-ngos-400x174.jpg'
import humbleCharities from '../../assets/imgs/humble-charities-400x174.jpg'
import humbleUniversities from '../../assets/imgs/humble-universities-400x174.jpg'
import humbleEnterprises from '../../assets/imgs/humble-enterprises-400x174.jpg'
import bayoInVirginiaBeach from '../../assets/imgs/bayo-in-virginia-beach-600x348.jpg'
import ToTheTop from '../../assets/imgs/1-to-the-top.jpg'
import MyJourneyChapter5 from '../../assets/imgs/My-journey-Chapter-5.jpg'
import MyJourneyChapter4 from '../../assets/imgs/My-journey-Chapter-4.jpg'
import MyJourneyChapter3 from '../../assets/imgs/My-journey-Chapter-3.jpg'
import MyJourneyChapter2 from '../../assets/imgs/My-journey-Chapter-2.jpg'
import MyJourneyChapter1 from '../../assets/imgs/My-journey-Chapter-1.jpg'
import ByBayo from '../../assets/imgs/By-Bayo-200x121.png'
import axios from 'axios'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn';



export default function Bayo_search_consultant({ contents }) {
    const { discover_my_story_text, header, hero, myIntro_section, feedback, my_quote, what_I_offer_section, what_you_get, who_I_am, Iam_trustedBy_section, Im_Impressed_by, chapters, iconClassName, organizations_I_work_with, questions_to_ask, } = contents.data.attributes
    return (
        <>
            <Head>
                <title>{header.title}</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='md:w-[60%]' >
                                <h1 className=' text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 leading-[69px] ' >{hero.heading}</h1>
                                <p className=' text-[24px] text-center md:text-[26px] text-[#023A51] pt-3 leading-[36px] ' >{hero.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='heading py-20 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12 '>
                            <div className='' >
                                <p className=' text-[60px] md:text-[102px] font-bold text-[#00989e] pt-3 leading-[69px] md:leading-[122px] tracking-[-3px] ' >{myIntro_section.heading}</p>
                                <p className=' text-[50px] md:text-[70px] font-semibold pt-3 leading-[59px] md:leading-[79px] tracking-[-2px] ' >{myIntro_section.heading2}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* I ensure organizations succeed online */}
                <section className='heading my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:mr-20 ' >
                                    <p className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>{myIntro_section.titleBig}</p>
                                    <p className='text-[30px] my-10 ' >{myIntro_section.description}</p>
                                    <Green_rounded_btn href={myIntro_section.actionButton.href} >{myIntro_section.actionButton.label}</Green_rounded_btn>
                                    <div className='my-10 md:my-0 '>
                                        {
                                            myIntro_section.abilities?.map((item) => {
                                                return (
                                                    <div key={item.id} className="flex " >
                                                        <div className=' text-[#f86011] text-[22px] translate-y-[22px] '>
                                                            {React.createElement(Fontawesome[item.iconClass])}
                                                        </div>
                                                        <p className='text-[22px] font-light flex py-4 ml-[12px] ' >{item.text}</p>
                                                    </div>


                                                )
                                            })
                                        }
                                    </div>
                                    {/* <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  ' color='#f86011' /> Establish a strong presence online </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Reach more people than ever before </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Amplify and maximize communication on all fronts (traditional & digital) </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Use data to make better marketing decisions </p> */}
                                </div>
                                <div className=' w-[100%] h-[100%]' >
                                    <div className=' relative ' style={{ backgroundImage: `url(${myIntro_section.image.data.attributes.url})`, width: '100%', height: '100%', backgroundPosition: "center top", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

                                        <div className='absolute bottom-0 left-0 text-[#023a51] w-[80%] p-6 bg-[#fff] shadow-xl '>
                                            <img className='' width={150} height={25} src={myIntro_section.my_quote.logo.data.attributes.url} alt="image" />
                                            <p className='text-[20px] font-light '>{myIntro_section.my_quote.text}</p>
                                            <p className='text-[22px] py-3 font-bold' >{myIntro_section.my_quote.name}<span className='text-[#59667d] font-normal text-[20px] block ' >{myIntro_section.my_quote.roll}</span></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What I offer */}
                <section className='heading mt-[1100px] md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <p className=' text-[60px] md:text-[102px] font-bold text-[#00989e] pt-3 leading-[122px] tracking-[-3px] ' >{what_I_offer_section.title}</p>
                            <div className='md:flex justify-around mt-4'>
                                <div className='bg-[#00989e] relative cursor-pointer transition p-10 text-center items-center rounded mb-6 md:mr-4 '  >
                                    <span className='absolute top-0 left-0 border z-0 ' style={{ backgroundImage: `url(${boxbgsvg.src})`, width: '100%', height: '100%', backgroundPosition: 'bottom left', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></span>
                                    <p className='text-[#fff] text-[26px] md:text-[40px] font-semibold' ><span className='mr-4'>1.</span>
                                        {what_I_offer_section.my_offers[0].title}
                                    </p>

                                </div>
                                <div className='bg-[#00989e] cursor-pointer transition p-10 text-center items-center rounded mb-6 md:ml-4 '>
                                    <p className='text-[#fff] text-[26px] md:text-[40px] font-semibold ' ><span className='mr-4'>2.</span>
                                        {what_I_offer_section.my_offers[1].title}

                                    </p>

                                </div>
                            </div>
                            <div className='md:flex justify-around mt-4'>
                                <div className=' transition p-4 md:p-10 md:text-center items-center rounded md:mr-4 '  >
                                    <p className='text-[#59667d] text-[30px]' >
                                        {what_I_offer_section.my_offers[0].description}
                                    </p>

                                </div>
                                <div className=' transition p-4 md:p-10 md:text-center items-center rounded md:ml-4 '>
                                    <p className='text-[#59667d] text-[30px] ' >
                                        {what_I_offer_section.my_offers[1].description}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* What you get */}
                <section className='heading py-20 bg-[#f9fafb]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12' >
                            <p className='text-[55px] md:text-[102px] font-bold text-[#00989e] pt-3 leading-[64px] md:leading-[122px] tracking-[-3px] ' >{what_you_get.heading}</p>
                            <div className='flex mx-auto flex-wrap justify-around text-[#023A51] mt-10' >
                                {
                                    what_you_get.features.map((item) => {
                                        return (
                                            <div key={item.id} className=' border-2 border-collapse md:border-r-0 p-10 w-[90%] sm:w-[25%] mb-4 ' >
                                                <div className=' w-[100%] flex justify-center mb-2 '>
                                                    <img className='rounded-xl' src={item.image.data.attributes.url} alt="image" />
                                                </div>
                                                <p className='text-[20px] font-semibold '>{item.title}</p>
                                                <p className='text-[20px] py-3' >{item.description}</p>
                                            </div>
                                        )
                                    })
                                }
                                {/* <div className=' border-2 border-collapse md:border-r-0 p-10 w-[90%] sm:w-[25%] mb-4 ' >
                                    <Image className='rounded-xl' src={humbleBrandVisibility} alt="image" />
                                    <p className='text-[20px] '>Increased brand visibility</p>
                                    <p className='text-[20px] py-3' >Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt.</p>
                                </div>
                                <div className='border-2 border-collapse md:border-r-0 p-10 w-[90%] sm:w-[25%] mb-4 '  >
                                    <Image className='rounded-xl' src={humbleConversions} alt="image" />
                                    <p className='text-[20px]' >More quality conversions</p>
                                    <p className='text-[20px] py-3' >Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt.</p>
                                </div>
                                <div className='border-2 border-collapse md:border-r-0 p-10 w-[90%] sm:w-[25%] mb-4 ' >
                                    <Image className='rounded-xl' src={humbleCustomerBase} alt="image" />
                                    <p className='text-[20px]' >Growth of customer base</p>
                                    <p className='text-[20px] py-3' >Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt.</p>
                                </div>
                                <div className='border-2 border-collapse p-10 w-[90%] sm:w-[25%] mb-4 ' >
                                    <Image className='rounded-xl' src={humbleManagement} alt="image" />
                                    <p className='text-[20px]' >Monthly management & reporting</p>
                                    <p className='text-[20px] py-3' >Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who I am */}
                <section className='heading md:my-20'>
                    <div className=" container w-10/12 md:w-11/12 mx-auto max-w-screen-xl">
                        <h2 className='text-[60px] md:text-[102px] font-bold text-[#00989e] pt-3 leading-[69px] md:leading-[122px] tracking-[-3px] ' >{who_I_am.heading}</h2>
                        <div className='mx-auto text-[#fff] bg-[#053366] p-10 md:p-20 py-10 mt-10 rounded-xl '>
                            <p className=' text-[30px] md:text-[45px] text-center font-bold leading-[39px] md:leading-[54px] tracking-[-2px] mb-4 '>{who_I_am.title}</p>
                            <p className=' text-[26px] md:text-[40px] text-center font-bold font-poppins leading-[35px] md:leading-[60px] mb-4  '>{who_I_am.title2}</p>
                            <div>
                                <p className=' text-[26px] md:text-[40px] text-center font-bold font-poppins leading-[35px] md:leading-[60px] mb-4 '>
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true
                                        }}
                                        onInit={(typewriter) => {

                                            typewriter
                                                .typeString(who_I_am.typeWriterText[0].text)
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString(who_I_am.typeWriterText[1].text)
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString(who_I_am.typeWriterText[2].text)
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString(who_I_am.typeWriterText[3].text)
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString(who_I_am.typeWriterText[4].text)
                                                .pauseFor(1000)
                                                .deleteAll()
                                                .typeString(who_I_am.typeWriterText[5].text)
                                                .pauseFor(1000)
                                                .start();
                                        }}
                                    />
                                </p>
                            </div>

                            <br />
                            <div>
                                <ReactMarkdown className=''
                                    components={{
                                        p: ({ node, ...props }) => <p className=' text-[24px] md:text-[26px] mb-10' {...props} />
                                    }}
                                >{who_I_am.details}
                                </ReactMarkdown>

                            </div>
                            {/* <p></p>
                            <p className=' text-[26px] py-2 font-light'>My name is Bayo Adesina, the founder of Humble Titan and creator of the SEO TRAM method. </p>
                            <br />
                            <p className=' text-[26px] py-2 font-light '>This means, on one hand, I’m responsible for helping people understand business, economics, and the stock market. While, on the other hand, I created and gave away the highest level of organic search education online.</p>
                            <br />
                            <p className=' text-[26px] py-2 font-light '>What this means for you is access to a talent that’s able to guarantee a drastic improvement in your digital footprint. Plus, I ensure your strategy is competitive with the best in your industry.</p> */}


                            <div className='text-center mt-10'>
                                <Green_rounded_btn href={who_I_am.actionButton.href}>{who_I_am.actionButton.label}</Green_rounded_btn>

                            </div>
                        </div>
                    </div>
                </section>


                {/* I’m trusted by the world’s largest businesses to: */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container flex justify-center w-12/12 mx-auto max-w-screen-xl">
                        <div className='w-[70%] text-[#023A51] '>
                            <p className='text-[26px] md:text-[45px] text-center font-semibold leading-[35px] md:leading-[56px]  ' >{Iam_trustedBy_section.heading}</p>
                            <br />
                            {
                                Iam_trustedBy_section.my_work.map((item) => {
                                    return (
                                        <div key={item.id} className="flex " >
                                            <div className=' text-[#2cbc63] text-[22px] translate-y-[22px] '>
                                                {React.createElement(Fontawesome[item.iconClass])}
                                            </div>
                                            <p className='text-[22px] flex py-4 ml-[12px] ' >{item.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* FeedBack */}
                <section className='heading my-20 '>
                    <div className=" py-10 flex flex-wrap justify-between items-center container w-12/12 mx-auto max-w-screen-xl">
                        <div className=' md:w-[50%] w-[100%] px-4 shadow-xl ' >
                            <img className='rounded-xl ' src={feedback?.image.data.attributes.url} alt="image" />
                        </div>
                        <div className=' p-4 md:p-10 text-[#023A51] md:w-[50%] w-[100%] ' >
                            <p className='text-[26px] md:text-[35px] leading-[35px] md:leading-[44px] md:font-bold ' >{feedback.heading}</p>
                            <p className='text-[20px] pt-3 font-bold' >{feedback.name}</p>
                            <p>{feedback.roll}</p>

                        </div>
                    </div>
                </section>



                {/* Questions to ask */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <p className=' text-[60px] md:text-[100px] font-bold pt-3 leading-[69px] md:leading-[120px] tracking-[-3px] ' >{questions_to_ask.heading}</p>
                            <div className='md:flex justify-between  py-20'>
                                <div className='md:w-[50%] mb-20 '>
                                    <div className='mt-4 w-[90%] mb-10 '>
                                        <p className='text-[32px] md:text-[40px] leading-[39px] md:leading-[49px] font-bold text-[#00989e] mb-6 ' >{questions_to_ask.traditional_marketing_qs.heading}</p>
                                        <p className='text-[26px] md:text-[30px] leading-[35px] md:leading-[39px] ' >{questions_to_ask.traditional_marketing_qs.description}</p>

                                    </div>

                                    <div className=' mb-6  '>
                                        {
                                            questions_to_ask.traditional_marketing_qs.questions.map((item) => {
                                                return (
                                                    <div key={item.id} className="flex mb-10 " >
                                                        <div className=' text-[#f86011] text-[60px] '>
                                                            {React.createElement(Fontawesome[item.iconClassName])}
                                                        </div>
                                                        <div className='ml-3'>
                                                            <p className=' text-[26px] font-semibold  '>{item.title}
                                                            </p>
                                                            <br />
                                                            <p className='text-[22px] ' >{item.details}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        }
                                    </div>

                                </div>

                                <div className='md:w-[50%]'>
                                    <div className='mt-4 w-[90%] mb-10 '>
                                        <p className='text-[32px] md:text-[40px] leading-[39px] md:leading-[49px] font-bold text-[#00989e] mb-6 ' >{questions_to_ask.digital_marketing_qs.heading}</p>
                                        <p className='text-[26px] md:text-[30px] leading-[35px] md:leading-[39px] ' >{questions_to_ask.digital_marketing_qs.description}</p>

                                    </div>

                                    <div className=' mb-6  '>
                                        {
                                            questions_to_ask.digital_marketing_qs.questions.map((item) => {
                                                return (
                                                    <div key={item.id} className="flex mb-10 " >
                                                        <div className=' text-[#f86011] text-[60px] '>
                                                            {React.createElement(Fontawesome[item.iconClassName])}
                                                        </div>
                                                        <div className='ml-3'>
                                                            <p className=' text-[26px] font-semibold  '>{item.title}
                                                            </p>
                                                            <br />
                                                            <p className='text-[22px] ' >{item.details}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Organizations I work with */}
                <section className='heading py-20 bg-[#f9fafb]'>
                    <div className=" container w-10/12 md:w-11/12 mx-auto max-w-screen-xl">

                        <p className='text-[50px] md:text-[102px] font-semibold text-[#00989e] pt-3 leading-[59px] md:leading-[132px] tracking-[-3px] ' >{organizations_I_work_with.heading}</p>

                        <div className='flex flex-wrap text-[#023A51] mt-10 justify-around' >
                            {
                                organizations_I_work_with.feature.map((item) => {
                                    return (
                                        <div key={item.id} className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                            <p className='text-[35px] '>{item.title}</p>
                                            <p className='text-[20px] py-3' >{item.description}</p>
                                            <img className='rounded-xl' src={item.image.data.attributes.url} alt="image" />
                                        </div>
                                    )
                                })
                            }
                            {/* <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                <p className='text-[35px] '>Politicians</p>
                                <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                            </div>
                            <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                <p className='text-[35px] '>Political Campaigns</p>
                                <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                            </div>
                            <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                <p className='text-[35px] '>NGOs</p>
                                <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                <Image className='rounded-xl' src={humbleNgos} alt="image" />
                            </div>
                            <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                <p className='text-[35px] '>Charities</p>
                                <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                <Image className='rounded-xl' src={humbleCharities} alt="image" />
                            </div>
                            <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                <p className='text-[35px] '>Universities</p>
                                <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                <Image className='rounded-xl' src={humbleUniversities} alt="image" />
                            </div>
                            <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                <p className='text-[35px] '>Enterprise Business</p>
                                <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                <Image className='rounded-xl' src={humbleEnterprises} alt="image" />
                            </div> */}

                        </div>
                    </div>
                </section>


                {/* Discover my story */}
                <section className='heading py-20 bg-[#f9fafb]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12'>
                            <div className='flex flex-col text-[#023A51] items-center'>
                                <p className=' text-center text-[40px] font-bold '>{discover_my_story_text}</p>
                                <div className=' text-[#2cbc63] mt-4 text-[70px] '>
                                    {React.createElement(Fontawesome[iconClassName])}
                                </div>
                                {/* <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' /> */}
                            </div>
                        </div>

                        {/* cahpters */}
                        {
                            chapters.map((item) => {
                                return (

                                    <div key={item.id}  >
                                        <div className='mx-auto w-10/12 md:w-11/12' >
                                            <div >
                                                <p className=' text-[50px] md:text-[50px] font-bold leading-[59px] md:leading-[89px] mb-10 mt-20 tracking-[-3px] text-[#f86011]' >{item.chapterIntro.chateperNumber}</p>
                                                <p className=' text-[50px] md:text-[102px] font-bold leading-[50px] md:leading-[122px] tracking-[-3px] text-[#00989e] ' >{item.chapterIntro.heading}</p>
                                                <p className=' text-[30px] md:text-[40px] font-light leading-[39px] md:leading-[49px] tracking-[-2px] py-8 text-[#59667d] ' >{item.chapterIntro.where}</p>
                                                <div className=" py-10 flex flex-wrap items-center justify-between mx-auto ">
                                                    <div className=' md:w-[50%] w-[100%] px-4 ' >
                                                        <img className='rounded-xl ' src={item.chapterIntro.image.data[0].attributes.url} alt="image" />
                                                    </div>
                                                    <div className='text-center p-4 md:p-10 text-[#023A51] md:w-[50%] w-[100%] ' >
                                                        <div>
                                                            <Accordion active="true" title={item.chapterIntro.theChallange} content={item.chapterIntro.challangeDetails} />
                                                            <Accordion
                                                                title={item.chapterIntro.thePlan}
                                                                content={item.chapterIntro.planDetails}
                                                            />
                                                            <Accordion
                                                                title={item.chapterIntro.theAttitude}
                                                                content={item.chapterIntro.attitudeDetails}
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className=' pt-12 md:px-12 '>
                                                    <div className=' rounded shadow-xl bg-[#fff] md:p-10 p-6 rounded text-[#023A51] ' >
                                                        <p className='text-[24px] font-bold text-center'>The Story</p>
                                                        <br />

                                                        <ReactMarkdown components={{
                                                            p: ({ node, ...props }) => <p className='text-[22px] leading-[39px] text-[#59667d]' {...props} />
                                                        }}>
                                                            {item.theStory}
                                                        </ReactMarkdown>
                                                        {/* <p className='text-[22px] leading-[39px] text-[#59667d] '>I’m a Search Professional who does what he was born to do – Lead, teach and solve complex problems online (Not looking to do much else). </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>My journey has been exciting, intimidating, and fulfilling. </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>Like most, my plans have changed over different periods of my life. I tend to switch gears after accomplishing what I set out to achieve. Presently, I’m taking on my most challenging mission. I plan to elevate the digital standards of as many organizations and professionals as possible. </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>That’s what Humble Titan is all about. That’s why I invented the SEO TRAM method (an educational course). And this is what motivates me to service organizations around the world. </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>If you choose to continue reading, you’ll discover why “right now” feels like my time to unleash. </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>As for what I do? If you have a big idea and want it to reach people on the internet, I take care of that. I’m dedicated to precisely that. I start with organic reach, then I work your bespoke strategy into paid and social channels.</p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>As for how I support your ambitions? My practice is to set up teams and organizations for digital success. Plus, I design strategies that establish synergy – once we mature your digital scope, we tap into your traditional approach. This is what I’d consider my edge.</p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>It may help to think of me as the internet whisperer, helpful to those who may have made their fortune through traditional marketing. My work is the most impactful when I can address all marketing considerations before your brand ever engages an online user. My ability to translate complex search and digital marketing concepts to high-level stakeholders sets me apart. </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>But I’m only useful once I get to know you, your organization, and your goals. </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>Till you get in touch, I’d like to offer my story.  </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>Take a look below. I’ve cataloged my very organic (pun intended) journey.</p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>To spice up your reading a bit, I’ve chronicled my adventures in reverse order. </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>We start from all you’ve read above. We continue after this moment of gratitude. </p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>I’m thankful for the trials of each stage of my adventure and for all those I’ve met. To my Family and Cristina, thank you. I hope the story inspires.</p>
                                                        <br />
                                                        <p className='text-[22px] leading-[39px] text-[#59667d] '>By the end of this period of my life, I’d accumulated 11 years of management experience. Now, I’m enjoying the ride. Continue to chapter 4 to learn what got me here.</p>
                                                        <br />
                                                        <br /> */}
                                                        <div className='flex justify-center mt-10'>
                                                            <Green_rounded_btn href={item.getInTouch.href} className='orange_roudend_btn '>{item.getInTouch.label}</Green_rounded_btn>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='py-10 md:py-20'>
                                                    <p className=' text-[50px] md:text-[60px] text-center font-bold leading-[69px] md:leading-[50px] tracking-[-2px] pt-[50px] text-[#023A51] ' >{item.theReturn.heading}</p>
                                                    <p className=' text-[30px] md:text-[40px] text-center font-light leading-[39px] md:leading-[49px] py-8 tracking-[-2px] text-[#59667d] ' >{item.theReturn.description}</p>
                                                    <div className='md:flex justify-around my-10 '>
                                                        <div className='p-4 md:p-10 border-2 md:mr-2'>
                                                            <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >{item.theReturn.reflectionHeading}</p>
                                                            <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >{item.theReturn.reflectionDetails}</p>

                                                        </div>
                                                        <div className='p-4 md:p-10 border-2 mt-4 md:mt-0 md:ml-2'>
                                                            <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >{item.theReturn.lessonsLearnedHeadeing}</p>
                                                            <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >{item.theReturn.lessonsLearnedDetails}</p>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className='py-10'>
                                                    <p className=' text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px]  md:pt-10 text-[#023A51] ' >{item.jumpToChapters.heading}</p>
                                                    <div className='flex md:flex-row flex-col items-center md:justify-around mt-10'>
                                                        {
                                                            item.jumpToChapters.chapterLinks.map((item) => {
                                                                return (
                                                                    <div key={item.id} className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                                        <Link passHref href={item.href}>
                                                                            <a><img className='rounded-xl  ' src={item.imageWithChapterNumber.data.attributes.url} alt="image" /></a>
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        {/* <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                            <Image className='rounded-xl  ' src={ToTheTop} alt="image" />
                                                        </div>
                                                        <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                            <Image className='rounded-xl' src={MyJourneyChapter5} alt="image" />
                                                        </div>
                                                        <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                            <Image className='rounded-xl' src={MyJourneyChapter4} alt="image" />
                                                        </div>
                                                        <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                            <Image className='rounded-xl' src={MyJourneyChapter3} alt="image" />
                                                        </div>
                                                        <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                            <Image className='rounded-xl' src={MyJourneyChapter2} alt="image" />
                                                        </div>
                                                        <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                            <Image className='rounded-xl' src={MyJourneyChapter1} alt="image" />
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='mx-auto'>
                                            <div className=' px-10 md:flex justify-between items-center py-10 md:py-20 bg-[#00989e]' style={{ backgroundImage: 'linear-gradient(105deg, #004188 12%,rgba(255,255,255,0) 77%)', backgroundPosition: 'center center', backgroundRepeat: "no-repeat", }} >
                                                <div>
                                                    <Image src={ByBayo} alt="image" />

                                                </div>
                                                <div className='text-[#fff] md:w-[50%] '>
                                                    <p className='text-[45px] trancking-[-2px] font-poppins font-bold tracking-[-2px] leading-[52px] '>{item.chapterConclusion.text}</p>
                                                    <p className='text-[22px] pt-10 trancking-[-2px] font-poppins font-semibold '>{item.chapterConclusion.text2}</p>

                                                </div>
                                                <div className='mt-6'>
                                                    <Green_rounded_btn href={item.chapterConclusion.actionButton.href} className='text-[#0e6ace] hover:text-[#fff] bg-[#fff] hover:bg-[#2cbc63] text-[20px] text-center rounded-[50px] py-[13px] px-[30px] transition duration-300 '>{item.chapterConclusion.actionButton.label}</Green_rounded_btn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                        }



                        {/* cahpter 4 */}
                        {/* <div>
                            <div className='mx-auto w-10/12 md:w-11/12' >
                                <div >
                                    <p className=' text-[50px] md:text-[50px] font-bold leading-[59px] md:leading-[89px] mb-10 mt-20 tracking-[-3px] text-[#f86011]' >Chapter 4</p>
                                    <p className=' text-[50px] md:text-[102px] font-bold leading-[50px] md:leading-[122px] tracking-[-3px] text-[#00989e] ' >As Associate Director</p>
                                    <p className=' text-[30px] md:text-[40px] font-light leading-[39px] md:leading-[49px] tracking-[-2px] py-8 text-[#59667d] ' >Barcelona, Spain. 2020</p>
                                    <div className=" py-10 flex flex-wrap items-center justify-between mx-auto ">
                                        <div className=' md:w-[50%] w-[100%] px-4 ' >
                                            <Image className='rounded-xl ' src={placeHolderImage} alt="image" />
                                        </div>
                                        <div className='text-center p-4 md:p-10 text-[#023A51] md:w-[50%] w-[100%] ' >
                                            <div>
                                                <Accordion title="The Challenge" content="To get a multinational agency and enterprise client to operate differently while adding more capacity in the relationship + improving efficiency." />
                                                <Accordion
                                                    title="The Plan"
                                                    content="Build and lead a new team through a complex challenge, reassuring myself that I’d achieved at the height of SEO."
                                                />
                                                <Accordion
                                                    title="The Attitude"
                                                    content="I go big or stay home. I’m too curious to stay home. So I’m coming for the world, and it’s most formidable."
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className=' pt-12 md:px-12 '>
                                        <div className=''>
                                            <p className=' text-[50px] md:text-[60px] text-center font-bold leading-[69px] md:leading-[50px] tracking-[-2px] pt-[50px] text-[#023A51] ' >Chapter 4, The Road Back</p>
                                            <p className=' text-[30px] md:text-[40px] text-center font-light leading-[39px] md:leading-[49px] py-8 tracking-[-2px] text-[#59667d] ' >Working at top agencies trains you to be agile, creative, and immediately effective.</p>
                                        </div>
                                        <div className=' rounded shadow-xl bg-[#fff] md:p-10 p-6 rounded text-[#023A51] ' >
                                            <p className='text-[24px] font-bold text-center'>The Story</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>You’ll soon discover I left the United States and moved to Spain in the year 2015. Two years later, I’d leave the Iberian peninsula. Three years after leaving, I’d return to Spain (in the year 2020). Each move meant a step up in my career.  </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>This chapter accounts for my second stint, as an Associate Director of SEO, in Barcelona.  </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I entered this phase of my life with clarity. I came back to Spain to prove (to myself) that I have what it takes to deliver high-value performance at the top of international business. I was actively looking to do things the hard way. My thought process? “Absorb the pain now, and everything to come will seem easy.”  </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Four hours into my first day as an Associate Director, I was asked to conduct an interview to fill two managerial roles. A complete surprise. Thought we’d simply be discussing the massive responsibility of turning around a critical account for one of the largest agencies in the country.  </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>To be fair, no one had promised my first day would be a delight. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Agency life can be relentless. But, I signed up for the grind. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Working at top agencies trains you to be agile, creative, and immediately effective. There are no excuses. You just get on with it. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>A couple of minutes before the interview, it was explained to me that my client had brands in ten different markets. In these ten markets, they’d be releasing a new product that’d be sold in each of its established markets. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>As a kicker, I could only rely on two junior-level direct reports till we filled the two vacant seats. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>The chaos didn’t stop there. My Chief Operating Officer had promised a multifunction workflow that was yet to be established months later. Tricky, tricky. The client had hired a competing agency to service their paid marketing efforts while we managed owned media. Keyword, competing. It was all on me to make it work. And I did.  </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I hit the ground running that first week, and I’m still proud of it.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I was walking a tightrope and was always one step away from failure. I didn’t have time to think – which was, in hindsight, a great thing.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>What luck! Things were way worse than I expected, and I ended up settling year-old issues in my first week. Things were going much better than I could have ever dreamed.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>After three weeks, I’d cleared up issues that lasted for years. I was in my groove. I was interviewing about 6 candidates a week, jumping onto client calls from all over the world, and training my team. It all came second nature (for that, again, I’ll always be grateful. People don’t get to pick the genes that help them overcome adversity). </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>After a month, I was pitching new strategies to directors at my client’s offices. After three months, improved web performance accompanied all our efforts.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>But I did make a few mistakes. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I was so obsessed with the work, I lost sight of my direct reports. Their reactions painted a picture of the effects of my intensity. I reflect on this weakness as an opportunity for improvement. Still, the work got done. And I learned to people first, always.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I am proud of everything I achieved in Spain. So why’d I leave? I move when it makes little sense to stay.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>My account in Barcelona was massive. With that came exposure. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I got to work with SEOs from all over the world, and in doing so, I received the confirmation I needed. I was no longer learning but teaching and adding value to just about every search conversation I was involved in. I was coming up with ideas that the agency was adopting for other accounts. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I wouldn’t say I know it all, absolutely not. The learning never stops. But I noticed I possessed a combination of skills that made me quite formidable.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>While a few technical SEOs could run circles around me once they began to inspect throttle speed in the source code of a page, I could always keep up. I knew enough to confidently point out a better priority, one that would drive results quicker. Plus, I could usually compensate for the knowledge gap with extensive experience in other areas of SEO. I could map out a performance strategy in a few hours, for example.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>If I met someone that could outthink me for digital PR, I possessed strong enough management skills to maintain my edge.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>And if I met a true leader, we felt comfortable in our company.  </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Despite all the above, what reassured me the most was when talking SEO with traditional business people. I had their attention. After a few slides, I had their buy-in. After a few deliverables, I saw their excitement. I felt ready. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I could synch internet strategy with offline channels and deliver results by spotting overlapping data points few professionals could identify. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Soon, I’d be hired by one of the fastest-growing companies in Virginia, USA. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I was tasked to continue the work I started as Associate Director. Except I’d step on a bigger scale, with more autonomy. I was asked to build a sustainable structure for an SEO team. Within three weeks of arriving in the United States, I’d identify most of the companies needs. One week after, I’d be trusted with the budget to make magic happen.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>It was confirmed, my practice is to set up teams and organizations for online success. I focused on executing my plan to elevate the digital standards of as many businesses as possible. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>By the end of this period, I had accumulated 10 years of management experience.  Next stage (<strong>Chapter 5</strong>), I’d revolutionize search. Be sure to stick with the story to see what I was up to before this, <strong>chapter 3</strong>. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '></p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '></p>
                                            <br />
                                            <br />
                                            <div className='flex justify-center mb-10'>
                                                <button className='orange_roudend_btn '>Get in touch</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-10">
                                        <div className='md:flex justify-around'>
                                            <div className='p-4 md:p-10 border-2 md:mr-2'>
                                                <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >Reflections</p>
                                                <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >“Life is simple. It’s people that complicate things.” I have continually repeated this quote without realizing, for a long time, I was a part of a problem. You don’t really get to experience all you can be till you learn to take a step back. I enjoy simplifying some of the most complicated challenges in business. But that’s been an extension of learning how to simplify life.</p>

                                            </div>
                                            <div className='p-4 md:p-10 border-2 mt-4 md:mt-0 md:ml-2'>
                                                <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >Lessons Learned</p>
                                                <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >Hard work pays off when it’s not stubborn. Your vision doesn’t need to account for your entire future. It can’t. Let your human experience surprise you. So long as you give your best, adapt and stay honest, your future will be much better than you could have ever planned. Commit to quality output, character, and growth.</p>

                                            </div>

                                        </div>
                                    </div>

                                    <div className='py-10'>
                                        <p className=' text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px]  pt-10 text-[#023A51] ' >Jump to another chapter</p>
                                        <div className='flex flex-col items-center md:flex-row md:justify-around mt-10'>
                                            <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl  ' src={ToTheTop} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter5} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter4} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter3} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter2} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-4 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter1} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='mx-auto'>
                                <div className=' px-10 md:flex justify-between items-center py-10 md:py-20 bg-[#00989e]' style={{ backgroundImage: 'linear-gradient(105deg, #004188 12%,rgba(255,255,255,0) 77%)', backgroundPosition: 'center center', backgroundRepeat: "no-repeat", }} >
                                    <div>
                                        <Image src={ByBayo} alt="image" />

                                    </div>
                                    <div className='text-[#fff] md:w-[50%] '>
                                        <p className='text-[45px] trancking-[-2px] font-poppins font-bold tracking-[-2px] leading-[52px] '>I don’t dump traditional marketing. I extend and amplify with digital opportunities.</p>
                                        <p className='text-[22px] pt-10 trancking-[-2px] font-poppins font-semibold '>Get in touch with us today and let’s start transforming your business from the ground up.</p>

                                    </div>
                                    <button className='text-[#0e6ace] hover:text-[#fff] bg-[#fff] hover:bg-[#2cbc63] text-[20px] text-center rounded-[50px] py-[13px] px-[30px] transition duration-300 mt-4'>Book A Consultation</button>
                                </div>
                            </div>
                        </div> */}



                        {/* cahpter 3 */}
                        {/* <div>
                            <div className='mx-auto w-10/12 md:w-11/12' >
                                <div >
                                    <p className=' text-[50px] md:text-[50px] font-bold leading-[59px] md:leading-[89px] mt-20 tracking-[-3px] text-[#f86011]' >Chapter 3</p>
                                    <p className=' text-[50px] md:text-[102px] font-bold leading-[50px] md:leading-[122px] tracking-[-3px] text-[#00989e] ' >As a World Class Manager</p>
                                    <p className=' text-[30px] md:text-[40px] font-light leading-[39px] md:leading-[49px] tracking-[-2px] py-8 text-[#59667d] ' >Manchester, UK. 2017</p>
                                    <div className=" py-10 flex flex-wrap items-center justify-between mx-auto ">
                                        <div className=' md:w-[50%] w-[100%] px-4 ' >
                                            <Image className='rounded-xl ' src={placeHolderImage} alt="image" />
                                        </div>
                                        <div className='text-center p-4 md:p-10 text-[#023A51] md:w-[50%] w-[100%] ' >
                                            <div>
                                                <Accordion title="The Challenge" content="Nigeria gave me life and passion. America instilled an innate drive in me to achieve. Spain granted me the fortune of discovering work that felt like play. In three years, I asked for a third country to make another immense contribution to my life – having no contacts, my challenge was to find a way to acquire an elite digital marketing skillset." />
                                                <Accordion
                                                    title="The Plan"
                                                    content="I had no clue how I’d achieve… anything. But I knew I’d commit to learning and contributing my best. Eventually, I’d rise to the top."
                                                />
                                                <Accordion
                                                    title="The Attitude"
                                                    content="Let’s freaken do it. Block the noise, focus, and make things happen."
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className=' pt-12 md:px-12 '>
                                        <div className=''>
                                            <p className=' text-[50px] md:text-[60px] text-center font-bold leading-[69px] md:leading-[50px] tracking-[-2px] pt-[50px] text-[#023A51] ' >Chapter 3, The Ordeal</p>
                                            <p className=' text-[30px] md:text-[40px] text-center font-light leading-[39px] md:leading-[49px] py-8 tracking-[-2px] text-[#59667d] ' >I sought to build a data-backed system that helps marketers get ahead of human thinking.</p>
                                        </div>
                                        <div className=' rounded shadow-xl bg-[#fff] md:p-10 p-6 rounded text-[#023A51] ' >
                                            <p className='text-[24px] font-bold text-center'>The Story</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I had all these ideas and projects that I’d been developing for years. They revolved around topics I am passionate about, politics, education, social reform, and art. But I was tired of scratching the surface and barely making an impact. I wanted to understand how to get more involved in a powerful and impactful way.   </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>After my first stint in Spain, I arrived in England to become one of the best at what I do. This was the year 2017, and I’d commit to sharpening my skills. I made a simple decision to give my absolute all and let nothing come in the way of getting better at my craft. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I entered this phase of my life fueled by passion. At this time, I regarded Manchester as a growing digital force in Europe. I wanted to be a part of it.  </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I am a lucky, lucky, lucky boy. As far as my career goes, Manchester was the best decision I’ve ever made. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>In Manchester, I found opportunities every time I knocked. There, I was embraced. There, it rained all the time, and it never seemed to matter. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I cannot say enough how much I adore the British land, culture and people – thank you!</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Through no fault of Manchester, I suffered. I put too much pressure on myself and thought the best way to deal with my existing stress was to add more pressure. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>But no matter how much I’d deal with (internally), Manchester continued to give and give, whatever I wanted. It was up to me to ask responsibly and healthily manage my life. Unfortunately, I wanted it all, and I was willing to sacrifice my health. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>So, what happened? Less than a month after arriving, I’d land a job at an agency. They weren’t quite sure how my managerial experience in Spain and the United States would translate over to the UK, so I was hired as a web generalist. Looking back on it, they probably wanted to save on my salary, but I thank them for slowing me down a bit. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Our clients were small to mid-sized businesses, and they varied quite significantly. One moment I could be working on an eCommerce site helping to sell doorknobs. The next hour I could be working on a lead gen site for a charity. I was never bored. At my last count, I worked on 47 websites before I left, spread across 16 verticals. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>What’s more, this agency in Manchester invested in its people (in a way I’d never experienced before). If you were up for a challenge, they were happy to back you. So I took the time to remaster the basics of the web. With the experience and knowledge I brought to the table, I could improve drastically.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Four months later, I’d be promoted to an SEO Account manager. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Finally, I didn’t have to worry about building a site, writing copy, managing people who worked in different marketing functions. I was focused on two things, Management strategy, and SEO. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>A month after being trusted as Account Manager, I’d redesign everything: workflow, budget, clients comms, everything. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Two months in, I was an addict. I needed to learn something new in SEO to function.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I was thinking about SEO all the time. I’d read about it, bugged our tech guys about it, bought a tape recorder to interview my peers about it. It was a sickness. I could see and feel its potential all around me. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I figured Google and other search engines were trying to map out the human thought process. The psychology of people and products is why I bothered studying for a Master’s in Business Administration.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Where most professionals were focused on the search algorithm, I was curious about the minds that search engines were coding for. I’d say that’s where I began to move away from the standard SEO. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>With SEO, I believed I could put together something new and exciting for the world. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I knew I wanted to help people fall in love with my craft while helping others achieve their dreams online. It wasn’t a problem that I had no clue how to make anything happen. I was having too much fun being blind, in love, and obsessed. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>But I’m lucky. I seem to have a sixth sense for operational flaws of thinking, organization, structure. You name it, and I am usually processing for weakness. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>After 8 months of directly picking at SEO, I came up with the SEO TRAM method. I would develop it to introduce a high-level discipline to the craft. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>As I worked across many distinct verticals, I sought commonalities I could exploit for rankings and investigated what was unique to each site. The more I explored, the more convinced I became that when you erase all the dressings of different websites, the main difference typically comes down to the target audience and their behavior. So I sought to build a data-backed system that helps marketers get ahead of human thinking. I would design the TRAM SEO method to favor human search as much as it discusses search algorithms. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Where others immediately get tangled up in bots and crawlers, I sought to open professionals to a behavioral science with a reliable marketing process. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Soon enough, I’d realize that my agency could no longer offer the resources I needed to take my passion project further. I either needed more space and time to think of new ideas or access to the very best minds who may have already thought up some fantastic ideas.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I’d eventually leave my first agency for an in-house position that would quickly frustrate me. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Manchester being Manchester would quickly gift me the opportunity to work with the biggest SEO team in the country. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Manchester being Manchester would quickly gift me the opportunity to work with the biggest SEO team in the country. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Here, I discovered SEO in its most complete form. Hired here, I wasn’t hoping to be invited to an SEO meet-up. I was working at an agency hosting its own conferences, teaching, and setting SEO standards. My meetings featured a scheduled catering service of tea and elegance. My clients served champagne when I’d visit London. I was working with the very best. There was no excuse, so I worked my ass off for two years. Boy, did I achieve some great things.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I was moving up quickly. But soon, I’d be forced to consider my options. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>With the reality of Brexit closing in on my future, I decided it was time to leave the United Kingdom. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Though my parents would have loved for me to end my European love affair, I wasn’t ready for homecoming just yet. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>A secondary homecoming made more sense to me. I was possessed by this feeling that Spain and I had unfinished business. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I’d pack my bags and head over to Barcelona as an Associate Director. The plan was to prove I have what it takes to compete and deliver at the very top. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>The goal was to build and lead a new team through a tough challenge. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>By the end of this period, I had accumulated 8 years of management experience. Next stage (<strong>chapter 4</strong>), I’d put it all together. A relief, considering how I discovered the pieces of my talent. Continue to below to <strong>Chapter 2</strong> to uncover the chances I took to get this far. </p>
                                            <br />
                                            <br />
                                            <div className='flex justify-center mb-10'>
                                                <button className='orange_roudend_btn '>Get in touch</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-10" >
                                        <div className='md:flex justify-around'>
                                            <div className='p-4 md:p-10 border-2 md:mr-2'>
                                                <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >Reflections</p>
                                                <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >I consider these years my time of blood, sweat, and tears. I wish I had taken things easier on myself. I wish I didn’t give in to anxiety, depression, and stress, but I made it through.</p>

                                            </div>
                                            <div className='p-4 md:p-10 border-2 mt-4 md:mt-0 md:ml-2'>
                                                <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >Lessons Learned</p>
                                                <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >Be present. Go slow. Whether you rush through your ambitions or develop them patiently, you’ll likely achieve your goals at the same time. It’s a strange phenomenon. I did not need to suffer as I fulfilled my dreams.</p>

                                            </div>

                                        </div>
                                    </div>

                                    <div className='py-10'>
                                        <p className=' text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px]  pt-10 text-[#023A51] ' >Jump to another chapter</p>
                                        <div className='flex flex-col items-center md:flex-row md:justify-around mt-10'>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl  ' src={ToTheTop} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter5} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter4} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter3} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter2} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter1} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='mx-auto'>
                                <div className=' px-10 md:flex justify-between items-center py-10 md:py-20 bg-[#00989e]' style={{ backgroundImage: 'linear-gradient(105deg, #004188 12%,rgba(255,255,255,0) 77%)', backgroundPosition: 'center center', backgroundRepeat: "no-repeat", }} >
                                    <div>
                                        <Image src={ByBayo} alt="image" />

                                    </div>
                                    <div className='text-[#fff] md:w-[50%] '>
                                        <p className='text-[45px] trancking-[-2px] font-poppins font-bold tracking-[-2px] leading-[52px] '>This world has always been about information. These days we say, “data”. Are you taking full advantage?</p>
                                        <p className='text-[22px] pt-10 trancking-[-2px] font-poppins font-semibold '>Get in touch with us today and let’s start transforming your business from the ground up.</p>

                                    </div>
                                    <button className='text-[#0e6ace] hover:text-[#fff] bg-[#fff] hover:bg-[#2cbc63] text-[20px] text-center rounded-[50px] py-[13px] px-[30px] transition duration-300 mt-4'>Book A Consultation</button>
                                </div>
                            </div>
                        </div> */}


                        {/* cahpter 2 */}
                        {/* <div>
                            <div className='mx-auto w-10/12 md:w-11/12' >
                                <div >
                                    <p className=' text-[50px] md:text-[50px] font-bold leading-[59px] md:leading-[89px] mt-20 tracking-[-3px] text-[#f86011]' >Chapter 2</p>
                                    <p className=' text-[50px] md:text-[102px] font-bold leading-[50px] md:leading-[122px] tracking-[-3px] text-[#00989e] ' >As a Website Manager</p>
                                    <p className=' text-[30px] md:text-[40px] font-light leading-[39px] md:leading-[49px] tracking-[-2px] py-8 text-[#59667d] ' >Madrid, Spain. 2015</p>
                                    <div className=" py-10 flex flex-wrap items-center justify-between mx-auto ">
                                        <div className=' md:w-[50%] w-[100%] px-4 ' >
                                            <Image className='rounded-xl ' src={placeHolderImage} alt="image" />
                                        </div>
                                        <div className='text-center p-4 md:p-10 text-[#023A51] md:w-[50%] w-[100%] ' >
                                            <div>
                                                <Accordion title="The Challenge" content="To travel across the Atlantic, leaving everything I knew and loved for the chance at a dream." />
                                                <Accordion
                                                    title="The Plan"
                                                    content="Study International Business Administration and figure out a way to change the world. I was looking for guidance that would point out which skills and projects I needed to develop."
                                                />
                                                <Accordion
                                                    title="The Attitude"
                                                    content="Confront fear. These days, I sense fear, and I leap towards it. I’ve always been a big fan of attacking fear. Well, small fears I tend to explore with the intent to conquer quickly. Big fears, on the other hand, I tend to take my time. I plan and figure out a way to outwit my demons."
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className=' pt-12 md:px-12 '>
                                        <div className=''>
                                            <p className=' text-[50px] md:text-[60px] text-center font-bold leading-[69px] md:leading-[50px] tracking-[-2px] pt-[50px] text-[#023A51] ' >Chapter 2, Crossing the First Threshold</p>
                                            <p className=' text-[30px] md:text-[40px] text-center font-light leading-[39px] md:leading-[49px] py-8 tracking-[-2px] text-[#59667d] ' >No friends, no job, no real plan. No problem.</p>
                                        </div>
                                        <div className=' rounded shadow-xl bg-[#fff] md:p-10 p-6 rounded text-[#023A51] ' >
                                            <p className='text-[24px] font-bold text-center'>The Story</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I entered this phase of my life with incredible enthusiasm and unguided intentions. I was a bull in a china shop, but a bull regardless. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I arrived in Spain for my second Masters’s in Business Administration. Stay tuned – I’d drop out.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Leaving New York City, I didn’t realize how much of society’s Kool-aid I’d drank.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I thought, “the first MBA didn’t deliver the glitz and glamour I was promised. I expected a much better life. Must be the fault of the degree – need another one.”</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I unpacked my bags into a shared room in one of the cheapest and smallest student apartments I could find not too far from Madrid’s city center. Two days later, I was off exploring the different towns Spain has to offer. I had a blast. Not just because I was experiencing new places but also because I discovered many new ways of thinking. My mind was opening on its own. With every interaction, my internal world felt shaken up and nourished. It felt like exponential growth. I remember thinking, “how could I have lasted this long without knowing any of this. How can society be framed in a way that prevents us all from tapping into all of this?” </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>It was as if I’d been living an idea of the world that was much too incomplete. I was grateful to have broken free and eager to jump into all there was to learn. My town hopping adventures would last two weeks. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>When I returned to my campus in Madrid for orientation, I could sense I’d made a mistake. The school’s administrative team was giving it a good go, trying to impress us. We bused to a stunning castle in Segovia. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>We were told we were sitting under the very window where the queen said goodbye to Christopher Columbus before he sailed in search of a new route and promised riches. Then someone made a beautiful analogy about our search for fulfillment and realization. It was a lovely afternoon, but I couldn’t shake the feeling. I fit in but didn’t belong. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Classes would begin, legendary Madrid parties would be attended, a network would be developed, but I felt lost. Though I was chasing a diploma, I felt further away from discovering my purpose than when I left to search for it. I couldn’t rationalize why I’d give up more exploration for what comes down to a piece of paper and a pat on the back.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I came to change the world, and it felt like I had taken a detour that would lead nowhere. As I was figuring things out, I worked with the university’s digital marketing department and noticed how much they weren’t doing. Though I wasn’t ready to design an actionable solution, I was having fun catching opportunities. I’d put it in the back of my mind to learn how to service universities.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Eventually, I followed my instinct and dropped out. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>And though I left the program, I stayed in Spain to explore myself. I couldn’t return to New York empty-handed. But boy, was I in for one very wild ride. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>No friends, no job, no real plan. No problem. Actually, that’s far from true. There were many problems. I faced many, many challenges – most of these were internal battles. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>See, after a few weeks in Valencia, I moved to a small village on the outskirts of Castellon.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I was the only black person for miles in a region whose idea of a dark-skinned person was the image of a refugee selling trinkets on the side of the street. I was coming from two of the world’s most exotic metropolises. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>With no family or friends, just my girlfriend of a few months, I was uncomfortable every time I stepped out of the house. Still, I continued to push myself. I continued to believe that “lost-me” was going to find his way. I felt deeply that I was destined to make a difference.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>To cling to a constant for sanity, I immediately became obsessed with developing my talents. I began to:
                                                <ul className='list-disc ml-10'>
                                                    <li >Write </li>
                                                    <li>Draw</li>
                                                    <li>Take and edit photos</li>
                                                    <li>Record and edit videos</li>
                                                    <li>Run social media accounts</li>
                                                    <li>Design Websites</li>
                                                </ul>
                                            </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '></p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>With SEO, I believed I could put together something new and exciting for the world. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>They say, “fake it till you make it.” I chose to practice ceaselessly till people paid me more for it (all of it).</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I locked myself in my apartment for weeks at a time. I’d come up with ideas and try to learn how to take every aspect of my work to a professional level. Soon, I’d land a few freelance gigs. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Things would start slow, but I’d get lucky. I’d work and get lucky often. My freelance job would quickly lead me to full-time work. I impressed the right someone with my ability to create. Then I impressed others with my management experience. These people trusted me to launch full websites for real businesses. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Worth noting that being a native English speaker played a massive role in my luck during my time in Spain.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>My job came with exciting pressure. My agency charged small business entrepreneurs a lot of money for things I would have done for free. Some of these people were risking their life savings on their dream business. It was my responsibility to build a site for them. I took this challenge personally. As I saw it, the artificial stress helped to focus me.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>As a freelancer, you learn diligence and accountability. At my agency, I was learning about all the heights I could reach in digital marketing. I was learning I’d fallen in love with a field I could hone in on. I immediately began to climb.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Two years later, I decided to take my talents to the United Kingdom. I had outgrown my marketing agency. Plus, Castellon wasn’t exactly teeming with opportunity, neither was Spain.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I did a bit of research and saw that Manchester boasted a fast-growing digital hub, one that could soon become a force. I wanted to become a force. I wanted some of that Manchester magic.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I’d pack my bags again. My plan was to become the best, by working with Europe’s finest. The goal was to mold myself into the ultimate professional.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>By the end of this phase of my life, I’d accumulated 6 years of management experience. Next, I’d embark on a search for something I could believe in, for a legacy I could invest in (<strong>Chapter 3</strong>). Stick with the odyssey to discover the search for meaning that got me here, <strong>chapter 1.</strong> </p>
                                            <br />
                                            <br />
                                            <div className='flex justify-center mb-10'>
                                                <button className='orange_roudend_btn '>Get in touch</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-10" >
                                        <div className='md:flex justify-around'>
                                            <div className='p-4 md:p-10 border-2 md:mr-2'>
                                                <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >Reflections</p>
                                                <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >Wow. I took a chance and got to see what I am made of. I got to learn the different talents I was born with. I took the time to shape these gifts and in turn, they shaped me.  I remember spending almost two weeks on a project, about 90 hours, for 70 euros. I did it because it was about learning for me, not the money. I proved so many things to myself.</p>

                                            </div>
                                            <div className='p-4 md:p-10 border-2 mt-4 md:mt-0 md:ml-2'>
                                                <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >Lessons Learned</p>
                                                <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >Life is what you want to make of it, not what you are told. Consider fear as a clue to investigate, not something to run away from. Just as some fears will hurry you away from snakes and terrible people. Some fears can let you know what matters most to you. If you can overcome them, you are rewarded with all the things you never knew you wanted.</p>

                                            </div>

                                        </div>
                                    </div>

                                    <div className='py-10'>
                                        <p className=' text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px]  pt-10 text-[#023A51] ' >Jump to another chapter</p>
                                        <div className='flex flex-col items-center md:flex-row md:justify-around mt-10'>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl  ' src={ToTheTop} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter5} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter4} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter3} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter2} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter1} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='mx-auto'>
                                <div className=' px-10 md:flex justify-between items-center py-10 md:py-20 bg-[#00989e]' style={{ backgroundImage: 'linear-gradient(105deg, #004188 12%,rgba(255,255,255,0) 77%)', backgroundPosition: 'center center', backgroundRepeat: "no-repeat", }} >
                                    <div>
                                        <Image src={ByBayo} alt="image" />

                                    </div>
                                    <div className='text-[#fff] md:w-[50%] '>
                                        <p className='text-[45px] trancking-[-2px] font-poppins font-bold tracking-[-2px] leading-[52px] '>The limits of your beliefs are the limits of your possibilities. I’d like to show you where you may achieve more.</p>
                                        <p className='text-[22px] pt-10 trancking-[-2px] font-poppins font-semibold '>Get in touch with us today and let’s start transforming your business from the ground up.</p>

                                    </div>
                                    <button className='text-[#0e6ace] hover:text-[#fff] bg-[#fff] hover:bg-[#2cbc63] text-[20px] text-center rounded-[50px] py-[13px] px-[30px] transition duration-300 mt-4'>Book A Consultation</button>
                                </div>
                            </div>
                        </div> */}



                        {/* cahpter 1 */}
                        {/* <div>
                            <div className='mx-auto w-10/12 md:w-11/12' >
                                <div >
                                    <p className=' text-[50px] md:text-[50px] font-bold leading-[59px] md:leading-[89px] mt-20 tracking-[-3px] text-[#f86011]' >Chapter 1</p>
                                    <p className=' text-[50px] md:text-[102px] font-bold leading-[50px] md:leading-[122px] tracking-[-3px] text-[#00989e] ' >As a Soul Searcher</p>
                                    <p className=' text-[30px] md:text-[40px] font-light leading-[39px] md:leading-[49px] tracking-[-2px] py-8 text-[#59667d] ' >New York, United States. 2010</p>
                                    <div className=" py-10 flex flex-wrap items-center justify-between mx-auto ">
                                        <div className=' md:w-[50%] w-[100%] px-4 ' >
                                            <Image className='rounded-xl ' src={placeHolderImage} alt="image" />
                                        </div>
                                        <div className='text-center p-4 md:p-10 text-[#023A51] md:w-[50%] w-[100%] ' >
                                            <div>
                                                <Accordion title="The Challenge" content="To figure out the natural direction of my life." />
                                                <Accordion
                                                    title="The Plan"
                                                    content="To make my family proud. I graduated. I was finally free, and I wanted to become someone special in this world. But I had no idea who I was, what I could become, or what sort of questions I needed to ask myself. I’d try, fail and keep trying."
                                                />
                                                <Accordion
                                                    title="The Attitude"
                                                    content="Never settle. Strive for what is true to you."
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className=' pt-12 md:px-12 '>
                                        <div className=''>
                                            <p className=' text-[50px] md:text-[60px] text-center font-bold leading-[69px] md:leading-[50px] tracking-[-2px] pt-[50px] text-[#023A51] ' >Chapter 1, The Call to Adventure</p>
                                            <p className=' text-[30px] md:text-[40px] text-center font-light leading-[39px] md:leading-[49px] py-8 tracking-[-2px] text-[#59667d] ' >I was essentially getting paid to daydream about the internet.</p>
                                        </div>
                                        <div className=' rounded shadow-xl bg-[#fff] md:p-10 p-6 rounded text-[#023A51] ' >
                                            <p className='text-[24px] font-bold text-center'>The Story</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I started with nothing but an education and a family who continue to love me. And for as long as I can remember, I’ve been attracted to the responsibility of management. My older cousin said to me once, “your friends would come over and just wait in the living room, waiting for you to tell them what to do.” She mockingly calls me “Mr. Manager” whenever we have a family chat, on account of me playing mediator and director of our conversations. Seems to be my tendency. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Even before I had any right to believe I’d be any good at organizing and delegating tasks, it was always an ambition. So much so, I’d pass up more glamorous job offers for anything that would get me closer to my ideal challenge.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Still, I began humbly. My first real job served, mainly, as a taste of the type of roles I didn’t want. I was 18 and worked at a large department store for three weeks (seasonal support). </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I didn’t know much, but I knew I didn’t enjoy the sense of powerlessness as I folded clothes, soon be dismantled by last-minute Christmas shoppers.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I didn’t like that there was a better way of doing things, and I had to listen to confused and panicking adults – simply because they were older than me and had been at the job longer. Solutions are solutions regardless of their origin. I was learning how to lead.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>The following summer, I attended a career fair at my university, where I’d chat my way into a gig as a Management Trainee at Enterprise Rent-a-Car. They sold me on the idea of being on the decision-making side of the business. Instead, I was to be a glorified taxi driver. And very grateful for the experience, really.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I’d drop off and pick up customers, then fill out paperwork. Every now and then, I’d convince someone to sign up for the extra insurance package. But overall, strike two, another thing I didn’t see myself doing again, fall for the allure of a job title.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I did well enough at Enterprise to earn a scholarship for the following semester. But at the age of 19, I did very little appreciating and a lot of plotting on the future.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Two semesters later, I’d finish my undergraduate degree a year early. With a Bachelor’s all wrapped up, I enrolled in a Master’s degree (MBA). Figured as the great recession subsided, I’d buy myself a bit more time in school. Then I’d find a “real job.” But I thought it through. I didn’t know what I was going to become, so I chose to focus on studying things that fascinated me, people, and the selling of ideas. So, I concentrated on Human Resources and Marketing. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>The year was 2010. Outside of the classroom is where things would start to get interesting. I’d unknowingly begin to pave my own way. I started working on passion projects, building websites. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I knew I was learning HTML, but I had no idea I was doing SEO. Just figured I’d finish my MBA in a year and who knows, maybe have the next Facebook ready, avoiding the need for a “real” job.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Having graduated with an undergraduate degree, I was eligible for a managerial role at Abercrombie & Fitch. However, at the time, I was immature, stubborn, and insatiable (Sorry guys). Today, I am thankful for Abercrombie’s trust. Managing people is very complicated. They gave me a chance to make my mistakes early. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I was essentially getting paid to daydream about the internet. I’d reflect on all the things I’d rather be doing with my life (I should have been doing my job). I was always thinking and working on website ideas, pages, coding, you name it. I did everything but excel at the work that paid my bills. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Earning a decent salary with student expenses, I began to save for the first time. I started thinking about how I’d best invest the money, so I didn’t have to work at places like Enterprise or Abercrombie. I’d bet on myself.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I’ve always wanted to run a business, and I’ve always thought a website would be an excellent way to go about it. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Studying for an MBA, I realized I was surrounded by professors and like-minded students. I was experiencing an exciting phase of my life. I’d take group projects a bit more seriously and obsess about ways of creating the next Facebook. It was always about Facebook. The movie “The Social Network” was my Bible.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Along the way, many were right to doubt me. I would fail. I would get up, fall. Stay down, get up, fall. Lots of failures. I’d eventually waste thousands of dollars on web designers, developers, and writers.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Still, that waste of money was one of the best things to happen to me. I was spending, wasting, and stumbling. But I was learning.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Very quickly, I could describe the operational, back and front end of web management. I had no idea what the value of this knowledge was, but I had enough to build on.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>At age 21, after enough failures, I decided I would never again depend on anyone for a website. I mapped out my self-taught digital education:
                                                <ul className='list-decimal ml-10'>
                                                    <li >The value of and how to write HTML</li>
                                                    <li>The ins and outs of various content management systems</li>
                                                    <li>How content works online</li>
                                                    <li>How to create content that works online</li>
                                                    <li>Website Management</li>
                                                </ul>
                                            </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '></p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>Even after I left Abercrombie and landed a job as a Management Trainee at Geico, I’d always work on websites and content. </p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I wasn’t sleeping much. My mother was concerned. But I’d found my passion and had no guidance in how to direct that energy concisely and productively.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I’d eventually be managing a team of ten salespeople. Things moved pretty quickly for me. I’d earn two promotions in three years. But after these three years, three things were certain:
                                                <ul className='list-decimal ml-10'>
                                                    <li >It wasn’t enough to be a manager. I wanted to manage in a field that fulfilled me.</li>
                                                    <li>I am the most alive when I can build and create</li>
                                                    <li>The digital arena is a space that most naturally connects with how I think.</li>
                                                </ul>
                                            </p>
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '></p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>I quit and decided to travel abroad for another Master’s degree. The plan was to study International Business Administration, figure out a way to change the world through the internet. No, that’s not all there was. I was looking for a second chance to discover myself.</p>
                                            <br />
                                            <p className='text-[22px] leading-[39px] text-[#59667d] '>By the end of this phase of my life, I had accumulated 4 years of management experience. Next, I’d embark on a search for my authenticity (<strong>Chapter 2</strong>).</p>
                                            <br />
                                            <br />
                                            <div className='flex justify-center mb-10'>
                                                <button className='orange_roudend_btn '>Get in touch</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-10" >
                                        <div className='md:flex justify-around'>
                                            <div className='p-4 md:p-10 border-2 md:mr-2'>
                                                <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >Reflections</p>
                                                <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >I consider these years a time of ignorance. I felt lost, but I kept trying. I am proud of that. But if I could change anything while keeping all the lessons, I’d change so much.</p>

                                            </div>
                                            <div className='p-4 md:p-10 border-2 mt-4 md:mt-0 md:ml-2'>
                                                <p className=' text-[40px] md:text-[50px] text-center font-bold leading-[49px] md:leading-[59px] tracking-[-2px]  pt-10 text-[#023A51] ' >Lessons Learned</p>
                                                <p className=' text-[20px] md:text-[22px] text-center leading-[29px] md:leading-[31px]  py-10 text-[#59667d] ' >Self-discovery takes time and patience. It requires exploration. Engage your curiosity and trust the direction of things that fulfill you.</p>

                                            </div>

                                        </div>
                                    </div>

                                    <div className='py-10'>
                                        <p className=' text-[30px] md:text-[40px] text-center font-bold leading-[39px] md:leading-[49px]  pt-10 text-[#023A51] ' >Jump to another chapter</p>
                                        <div className='flex flex-col items-center md:flex-row md:justify-around mt-10'>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl  ' src={ToTheTop} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter5} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter4} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter3} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter2} alt="image" />
                                            </div>
                                            <div className='hover:scale-105 mb-10 hover:shadow-xl cursor-pointer rounded-xl transition duration-300' >
                                                <Image className='rounded-xl' src={MyJourneyChapter1} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='mx-auto'>
                                <div className=' px-10 md:flex justify-between items-center py-10 md:py-20 bg-[#00989e]' style={{ backgroundImage: 'linear-gradient(105deg, #004188 12%,rgba(255,255,255,0) 77%)', backgroundPosition: 'center center', backgroundRepeat: "no-repeat", }} >
                                    <div>
                                        <Image src={ByBayo} alt="image" />

                                    </div>
                                    <div className='text-[#fff] md:w-[50%] '>
                                        <p className='text-[45px] trancking-[-2px] font-poppins font-bold tracking-[-2px] leading-[52px] '>Together we can outwit the competition, engage more of your audience and deliver better results.</p>
                                        <p className='text-[22px] pt-10 trancking-[-2px] font-poppins font-semibold '>Get in touch with us today and let’s start transforming your business from the ground up.</p>

                                    </div>
                                    <button className='text-[#0e6ace] hover:text-[#fff] bg-[#fff] hover:bg-[#2cbc63] text-[20px] text-center rounded-[50px] py-[13px] px-[30px] transition duration-300 mt-4'>Book A Consultation</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </Layout>
        </>
    )
}


export const getServerSideProps = async () => {
    var contents;
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/bayo-search-consultant`)
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
