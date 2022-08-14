import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import DiscoverMore from '../../components/DiscoverMore'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleDown } from 'react-icons/fa'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import qs from 'qs'


export default function Activism({ contents }) {
  const {
    header,
    hero,
    details,
    types_of_business,
    what_ht_can_do,
  } = contents.data.attributes
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
        <meta name="twitter:image" content={header?.twitter_image || ""} />
        <meta name="twitter:url" content={header?.twitter_url || "" } />
        <meta itemProp="image" content={header?.itemProp_image || ""} />
        <meta itemProp="name" content={header?.itemProp_name || ""} />
        <meta itemProp="description" content={header?.itemProp_description || ""} />
        <meta name="geo.region" content={header?.geo_region || ""} />
        <meta name="geo.placename" content={header?.geo_placename || ""} />
        <meta name="geo.position" content={header?.geo_position || ""} />
        <meta name="ICBM" content="true" />
        <meta name="next-head-count" content="32" />
        <link rel="canonical" href={header?.canonicalUrl || ''} />
      </Head>
      <Layout>
        {/* Hero */}
        <section className="heading py-10 md:py-20 bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto flex justify-center w-10/12 md:w-11/12 ">
              <div className="md:w-7/12">
                <h1 className=" text-[50px] md:text-[60px] text-center text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ">
                  {hero.heading}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Discover our full SEO course */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto  w-10/12 md:w-11/12 ">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <p
                      className="text-[30px] md:text-[40px] text-[#59667d] font-bold leading-[39px] md:leading-[49px] tracking-[-2px] py-10"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <p
                      className="text-[30px] md:text-[40px] text-[#00989e] font-bold leading-[39px] md:leading-[49px] tracking-[-2px] py-10"
                      {...props}
                    />
                  ),
                }}
              >
                {details}
              </ReactMarkdown>

              <div className="flex flex-col text-[#023A51] items-center mb-10">
                <p className="text-[30px] md:text-[40px] font-bold text-[#023A51] ">
                  {types_of_business.title}
                </p>
                <FaAngleDown className="text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold " />
              </div>

              <div className="flex flex-wrap text-[#023A51] justify-around">
                {types_of_business.features.feature.map((item) => {
                  return (
                    <Link
                      key={item.id}
                      href={item.link ? item.link : '#'}
                      passHref
                    >
                      <a className=" rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10">
                        <p className="text-[35px] ">{item.title}</p>
                        <p className="text-[20px] py-3">{item.description}</p>
                        <Image
                          className="rounded-xl"
                          src={item.image.data.attributes.url}
                          alt={item.image.data.attributes.name}
                          width={item.image.data.attributes.width}
                          height={item.image.data.attributes.height}
                        />
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <DiscoverMore title={what_ht_can_do.title} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  var contents
  const query = qs.stringify({
    populate: {
        header: {
            populate: '*'
        },
        hero: {
            populate: '*'
        },
        types_of_business: {
            populate: {
                features: {
                    populate: {
                        feature: {
                            populate: "*"
                        }
                    }
                }
            }
        },
        what_ht_can_do: {
            populate: {
                Offerings: {
                    populate: '*'
                }
            }
        }
    },
  })
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/industries-page?${query}`)
    .then(({ data }) => {
      contents = data
    })
    .catch((error) => {
      console.log(error)
    })
  return {
    props: {
      contents: JSON.parse(JSON.stringify(contents)),
    },
  }
}




// const query = qs.stringify({
//   populate: {
//     header: {
//         populate: '*'
//     },
//     hero: {
//         populate: '*'
//     },
//     types_of_business: {
//         populate: {
//             features: {
//                 populate: {
//                     feature: {
//                         populate: "*"
//                     }
//                 }
//             }
//         }
//     },
//     what_ht_can_do: {
//         populate: {
//             Offerings: {
//                 populate: '*'
//             }
//         }
//     }
// },
// })