import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import qs from 'qs'
import axios from 'axios'
import * as Fontawesome from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

import HTwebdesignfeatured from '../../assets/imgs/HT-web-design-featured-600x586.png'
import webdesignexpectations from '../../assets/imgs/web-design-expectations-1024x1024.jpg'
import webdesignimpact from '../../assets/imgs/web-design-impact-600x600.jpg'
import HTLogoRetina from '../../assets/imgs/HT-Logo-Retina-200x31.png'
import otherSeoService from '../../assets/imgs/other-seo-service.jpg'
import otherContentMarketingService from '../../assets/imgs/other-content-marketing-service.jpg'
import otherWebManagementService from '../../assets/imgs/other-web-management-service.jpg'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn';
import Green_rounded_btn_outlined from '../../components/buttons/Green_rounded_btn_outlined';

export default function service({ contents }) {
    console.log(contents);
    const { header, business_impact, contact2, otherServices, ourValue, our_commitment, service_features, service_specialties, tellUs_section, topSection, whatYouCanExpect } = contents.data[0]?.attributes
    return (
        <>
            <Head>
                <title>{header.title}</title>
                <meta name="description" content={header?.description} />
                <meta
                name="keywords"
                content="stocks, Marketing Consultant, SEO, polictics,"
                />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="5 days" />
                <meta name="author" content="humbletitan.com" />
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <meta name="robots" content="noindex" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="true" />
                <meta property="og:description" content="true" />
                <meta property="og:url" content="true" />
                <meta property="og:site_name" content="true" />
                <meta property="og:image" content="true" />
                <meta name="twitter:card" content="true" />
                <meta name="twitter:site" content="true" />
                <meta name="twitter:creator" content="true" />
                <meta name="twitter:title" content="true" />
                <meta name="twitter:description" content="true" />
                <meta name="twitter:domain" content="true" />
                <meta name="twitter:image" content="true" />
                <meta name="twitter:url" content="true" />
                <meta itemProp="image" content="true" />
                <meta itemProp="name" content="true" />
                <meta itemProp="description" content="true" />
                <meta name="geo.region" content="true" />
                <meta name="geo.placename" content="true" />
                <meta name="geo.position" content="true" />
                <meta name="ICBM" content="true" />
                <meta name="true" content="true" />
                <meta name="next-head-count" content="32" />
            </Head>
            <Layout>


                {/* Hero */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >{topSection.lable.name}</p>
                                    <h1 className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>{topSection.heading}</h1>
                                    <br />
                                    <p className='text-[22px] ' >{topSection.description}</p>

                                </div>
                                <div className='md:ml-20 md:w-[50%] ' >
                                    <img className='rounded-xl' src={topSection.image.data[0].attributes.url} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='w-[100%] flex justify-center'>
                            <p className=' text-[40px] md:text-[50px] mb-20 md:w-[60%] text-[#023A51] font-bold text-center leading-[50px] md:leading-[59px] tracking-[-2px] '>{service_specialties.heading}</p>

                        </div>
                        <div className='mx-auto md:flex flex-wrap justify-around text-[#023A51] w-10/12 md:w-11/12 '>
                            {
                                service_specialties.specialty.map((item) => {
                                    return (
                                        <div key={item.id} className='flex justify-between md:w-[45%] mb-6  '>
                                            <div className=' text-[#2cbc63] text-[30px] md:text-[60px] '>
                                                {React.createElement(Fontawesome[item.iconClassName ? item.iconClassName : "FaMinus"])}
                                            </div>
                                            <div className='ml-2'>
                                                <p className=' text-[24px] font-semibold  '>{item.title}
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
                </section>



                {/* Service expectations */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[50%] ' >
                                    <div className='p-2'>
                                        <img className='rounded-xl' src={whatYouCanExpect.image.data[0].attributes.url} alt="image" />
                                    </div>
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >{whatYouCanExpect.lable.name}</p>
                                    <p className=' text-[40px] font-bold md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] '>{whatYouCanExpect.heading}</p>
                                    <br />
                                    <ReactMarkdown components={{
                                        p: ({ node, ...props }) => <p className="text-[22px] text-[#59667d] mb-4" {...props} />
                                    }}>
                                        {whatYouCanExpect.description}
                                    </ReactMarkdown>
                                </div>
                            </div>



                            <div className='flex flex-wrap justify-around my-20 '>
                                {
                                    service_features.features.map((item) => {
                                        return (
                                            <div key={item.id} className='md:w-[30%] bg-[#f9fafb] mb-4 rounded-lg p-6 w-[90%] text-center '>
                                                <p className='text-[20px] text-[#59667d]  '>{item.title}</p>
                                                <br />
                                                <hr />
                                                <p className='text-[34px] font-bold text-[#023A51] ' >{item.description}</p>

                                            </div>
                                        )
                                    })
                                }
                            </div>


                            <div className='flex flex-col items-center ' >
                                <div className='md:w-[33%] text-center'>
                                    <p className='text-[22px] text-[#59667d] ' >{service_features.text}</p>
                                    <div className='my-6 flex justify-center'>
                                        <Green_rounded_btn href={service_features.actionButton.href} >{service_features.actionButton.label}</Green_rounded_btn>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Business Impact */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20 md:w-[50%] ' >
                                    <img className='rounded-xl' src={business_impact.image.data[0].attributes.url} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:w-[50%]  ' >
                                    <p className='text-[26px] font-bold mb-5 text-[#2cbc63] ' >{business_impact.lable.name}</p>
                                    <p className=' text-[40px] font-bold md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] '>{business_impact.heading}</p>
                                    <br />
                                    <ReactMarkdown
                                        components={{
                                            p: ({ node, ...props }) => <p className='text-[22px] text-[#59667d] mb-6 ' {...props} />,
                                        }}
                                    >
                                        {business_impact.description}
                                    </ReactMarkdown>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Values. */}
                <section className='heading my-10 md:my-20  '>
                    <div className=" container w-12/12 bg-[#023A51] shadow-2xl md:rounded-2xl py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#fff]  md:flex items-center w-10/12 md:w-11/12 '>
                            <div className='md:w-5/10 ' >
                                <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] font-bold tracking-[-2px] py-10  ' >{ourValue.heading}</p>

                                <p className='text-[20px] pr-10 '  >{ourValue.description}</p>
                            </div>
                            <div className='pt-[40px] flex flex-wrap justify-around '>
                                <div className='md:flex flex-wrap justify-around'>
                                    {
                                        ourValue.value_cards.map((item => {
                                            return (
                                                <div key={item.id} className='bg-[#023A51] p-10 rounded mb-2 md:w-[48%] ' >
                                                    <div className=' text-[26px] '>
                                                        {React.createElement(Fontawesome[item.iconClassName ? item.iconClassName : 'FaMinus'])}
                                                    </div>
                                                    <p className='text-[24px] font-bold ' >{item.title}</p>
                                                    <p className='text-[18px]  ' >{item.description}</p>
                                                </div>
                                            )
                                        }))
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Commitment */}
                <section className='heading bg-[#f9fafb] py-10 md:py-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12  '>
                            <div className='flex flex-col items-center mb-20 ' >
                                <div className='md:w-[40%] text-center'>
                                    <p className=' text-[40px] text-[#023A51] font-bold md:text-[50px] mb-4 leading-[50px] md:leading-[59px] tracking-[-2px] '>{our_commitment.heading}</p>
                                    <p className='text-[22px] text-[#59667d] ' >{our_commitment.description}</p>
                                </div>
                            </div>
                            <div className='md:flex mx-auto justify-center' >
                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[40%] p-10 ' >
                                    <p className=' text-[20px] font-bold md:text-[24px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>{our_commitment.service_deliverables.heading}</p>
                                    <br />
                                    <hr />
                                    <br />
                                    {
                                        our_commitment.service_deliverables.items.map((item) => {
                                            return (
                                                <div key={item.id} className="flex">
                                                    <div className=' text-[26px] text-[#2cbc63]   '>
                                                        {React.createElement(Fontawesome[item.iconClass ? item.iconClass : 'FaMinus'])}
                                                    </div>
                                                    <p className='text-[20px] md:text-[22px] mb-6 text-[#59667d] ml-[12px] ' >{item.text}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className=' text-[#023A51] mr-[2px] shadow bg-[#fff] rounded w-[100%] md:w-[40%] p-10 ' >
                                    <div className='flex flex-col items-center ' >
                                        <img src={our_commitment.commitmentCard2.lableImage.data.attributes.url} alt="image" />

                                    </div>
                                    <br />
                                    <hr />
                                    <br />
                                    <p className=' text-[20px] font-bold md:text-[24px] text-center leading-[29px] md:leading-[35px] tracking-[-1px] '>{our_commitment.commitmentCard2.heading}</p>
                                    <br />
                                    <hr />
                                    <br />
                                    <ReactMarkdown
                                        components={{
                                            p: ({ node, ...props }) => <p className=' text-center text-[22px] text-[#59667d] flex mb-6 ' {...props} />,
                                        }}
                                    >
                                        {our_commitment.commitmentCard2.details}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* contact us */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 flex justify-center md:w-11/12  '>
                            <div className='text-[#023A51] text-center w-[100%] md:w-[70%]  ' >
                                <h1 className=' text-[30px] md:text-[36px] font-bold leading-[39px] md:leading-[48px] tracking-[-1px] '>{contact2.text}</h1>
                                <br />
                                <p className='text-[22px] text-[#59667d] ' >{contact2.text2}</p>
                                <br />
                                <Green_rounded_btn href={contact2.actionButton.href} >{contact2.actionButton.label}</Green_rounded_btn>
                            </div>
                        </div>
                    </div>
                </section>


                {/* contact section */}
                <section className='heading py-10 py-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-11/12 md:w-11/12 bg-[#023A51] shadow-2xl rounded-xl '>
                            <div className='mx-auto justify-between flex flex-wrap w-10/12 md:w-11/12  bg-[#023A51] '>
                                <div className='text-[#fff] py-20 ' >
                                    <p className='text-[40px] md:text-[60px] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ' >{tellUs_section.text}</p>
                                    {
                                        tellUs_section.info.map((item) => {
                                            return (
                                                <div key={item.id} className='py-6' >
                                                    <div className='flex items-center' >
                                                        <div className=' mr-4 text-[26px]   '>
                                                            {React.createElement(Fontawesome[item.iconClass ? item.iconClass : "FaMinus"])}
                                                        </div>
                                                        <h2 className='text-[30px] py-4 ' >{item.name}</h2>
                                                    </div>

                                                    <ReactMarkdown
                                                        components={{
                                                            p: ({ node, ...props }) => <p className=' text-[22px] mb-6 ' {...props} />,
                                                            a: ({ node, ...props }) => <a className=' text-[22px] hover:text-[#2cbc63] mb-6 ' {...props} />,

                                                        }}
                                                    >
                                                        {item.details}
                                                    </ReactMarkdown>

                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <div id='contact' className=' py-6 md:py-20' >
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


                {/* Other Digital services. */}
                <section className='heading my-10 md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12'>
                            <div className='flex flex-wrap items-center justify-around md:justify-between'>
                                <p className='text-[26px] md:text-[36px] text-[#023A51] mb-10 font-bold tracking-[-1px] ' >{otherServices.heading}</p>
                                <Green_rounded_btn_outlined href={otherServices.actionButton.href} >{otherServices.actionButton.label}</Green_rounded_btn_outlined>
                            </div>


                            <div className='md:flex flex-wrap justify-around my-20'>
                                {
                                    otherServices.otherService.map((item) => {
                                        return (
                                            <div key={item} className='p-10 border rounded-lg text-[#023A51] shadow w-[100%] md:w-[31%] mb-10 '>
                                                <img className='rounded-xl' src={item.image.data.attributes.url} alt="image" />
                                                <p className='text-[24px] tracking-[-0.5px] font-bold  '>{item.title}</p>
                                                <br />
                                                <p className='text-[18px] text-[#59667d] '>{item.description}</p>
                                                <br />
                                                <a href={item.link.href} className='text-[20px] font-bold hover:text-[#2cbc63] transition duration-300 '>{item.link.label}</a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>

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
            service_specialties: {
                populate: '*'
            },
            whatYouCanExpect: {
                populate: '*'
            },
            service_features: {
                populate: {
                    features: {
                        populate: "*"
                    },
                    actionButton: {
                        populate: "*"
                    }
                }
            },
            business_impact: {
                populate: '*'
            },
            ourValue: {
                populate: '*'
            },
            topSection: {
                populate: "*"
            },
            our_commitment: {
                populate: {
                    service_deliverables: {
                        populate: '*'
                    },
                    commitmentCard2: {
                        populate: '*'
                    }
                }
            },
            contact2: {
                populate: '*'
            },
            tellUs_section: {
                populate: '*'
            }
        },
    }, {
        encodeValuesOnly: true, // prettify URL
    });

    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/services?filters[slug][$eq]=${slug}`)
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