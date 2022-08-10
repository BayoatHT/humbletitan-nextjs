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
import ContactForm from '../../components/ContactForm';

export default function service({ contents }) {
    const { header, business_impact, contact2, otherServices, ourValue, our_commitment, service_features, service_specialties, tellUs_section, topSection, whatYouCanExpect } = contents.data[0]?.attributes
    return (
        <>
            <Head>
                <title>{header?.title || "Humble Titan"}</title>
                <meta name="description" content={header?.metaDescription || "" } />
                <meta name="keywords" content={header?.keywords || "" }/>
                <meta name="robots" content={header?.robots || ""} />
                <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
                <meta name="language" content={header?.language || ""} />
                <meta name="revisit-after" content={ header?.revisitAfter || "5 days"} />
                <meta name="author" content={header?.author || "humble titan"} />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <meta property="og:locale" content={ header?.og_locale ||"en_US" } />
                <meta property="og:type" content={header?.og_type || "article"} />
                <meta property="og:title" content={header?.og_title || ""} />
                <meta property="og:description" content={header?.og_description || ""} />
                <meta property="og:url" content={header?.org_url || ""} />
                <meta property="og:site_name" content={header?.og_site_name || ""} />
                <meta property="og:image" content={header?.og_image || ""} />
                <meta name="twitter:card" content={header?.twitter_card || ""} />
                <meta name="twitter:site" content={header?.twitter_site || ""} />
                <meta name="twitter:creator" content={header?.twitter_creator || ""} />
                <meta name="twitter:title" content={header?.twitter_title || ""} />
                <meta name="twitter:description" content={header?.twitter_description || ""} />
                <meta name="twitter:domain" content={header?.twitter_domain || ""} />
                <meta name="twitter:image" content={header?.twitter_image} />
                <meta name="twitter:url" content={header?.twitter_url} />
                <meta itemProp="image" content={header?.itemProp_image || ""} />
                <meta itemProp="name" content={header?.itemProp_name || ""} />
                <meta itemProp="description" content={header?.itemProp_description || ""} />
                <meta name="geo.region" content={header?.geo_region || ""} />
                <meta name="geo.placename" content={header?.geo_placename || ""} />
                <meta name="geo.position" content={header?.geo_position || ""} />
                <meta name="ICBM" content="true" />
                <meta name="next-head-count" content="32" />
                <link rel="canonical" href={header?.canonicalUrl || ""} />
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
                                    <Image className='rounded-xl' 
                                    src={topSection.image.data[0].attributes.url}
                                    alt={topSection.image.data[0].attributes.name}
                                    width={topSection.image.data[0].attributes.width}
                                    height={topSection.image.data[0].attributes.height}
                                    />
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
                                        <Image className='rounded-xl' 
                                            src={whatYouCanExpect.image.data[0].attributes.url}
                                            alt={whatYouCanExpect.image.data[0].attributes.name}
                                            width={whatYouCanExpect.image.data[0].attributes.width}
                                            height={whatYouCanExpect.image.data[0].attributes.height}
                                         />
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
                                    <Image className='rounded-xl' 
                                    src={business_impact.image.data[0].attributes.url} 
                                    alt={business_impact.image.data[0].attributes.name}
                                    width={business_impact.image.data[0].attributes.width}
                                    height={business_impact.image.data[0].attributes.height}
                                    />
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
                                        <Image 
                                        src={our_commitment.commitmentCard2.lableImage.data.attributes.url}
                                        alt={our_commitment.commitmentCard2.lableImage.data.attributes.name}
                                        width={our_commitment.commitmentCard2.lableImage.data.attributes.width}
                                        height={our_commitment.commitmentCard2.lableImage.data.attributes.height}
                                         />

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


                {/* contact us */}
        <section className=" py-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto w-11/12 ">
              <div className="mx-auto px-4 md:px-8 justify-between flex flex-wrap  rounded-xl  bg-[#023A51] ">
                <div className="text-[#fff] md:pl-2 py-20 w-[100%] md:w-[50%] ">
                  <p className="text-[40px] md:text-[60px] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ">
                    {tellUs_section.text}
                  </p>

                  {tellUs_section.info.map((item) => {
                    return (
                      <div key={item.id} className="py-6">
                        <div className="flex items-center">
                          <div className="mr-4 text-[26px] text-[#fff]">
                            {React.createElement(Fontawesome[item.iconClass])}
                          </div>
                          <h2 className="text-[30px] py-4 ">{item.name}</h2>
                        </div>
                        <ReactMarkdown
                          components={{
                            p: ({ node, ...props }) => (
                              <p
                                className="mr-4 text-[20px] md:text-[26px] "
                                {...props}
                              />
                            ),
                            a: ({ node, ...props }) => (
                              <a
                                className="hover:text-[#2cbc63] hover:text-underline "
                                {...props}
                              />
                            ),
                          }}
                        >
                          {item.details}
                        </ReactMarkdown>
                      </div>
                    )
                  })}
                </div>
                <div className=" py-6 md:w-[50%] w-[100%] md:py-20">
                  <ContactForm/>
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
                                                <Image className='rounded-xl' 
                                                src={item.image.data.attributes.url} 
                                                alt={item.image.data.attributes.name}
                                                width={item.image.data.attributes.width}
                                                height={item.image.data.attributes.height}
                                                />
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
            navImage: {
                populate: true
            },
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
            },
            otherServices: {
                populate: {
                    otherService: {
                        populate: '*'
                    },
                    actionButton: {
                        populate: "*"
                    }
                }
            },
        },
    });
            
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/services?filters[slug][$eq]=${slug}&${query}`)
        .then(({ data }) => {
            contents = JSON.parse(JSON.stringify(data))
        }).catch((error) => {
            console.log(error)
        })
        
    if(!contents?.data?.length){
        return {
            redirect: {
                destination: '/404/',
            },
        }
    }else{
        return {
            props: {
                contents: contents
            }
        }
    }
} 