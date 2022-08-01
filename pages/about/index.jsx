import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import team1 from '../../assets/imgs/team-1.jpg'
import team2 from '../../assets/imgs/team-2.jpg'
import team3 from '../../assets/imgs/team-3.jpg'
import team4 from '../../assets/imgs/team-4.jpg'
import team5 from '../../assets/imgs/team-5.jpg'
import team6 from '../../assets/imgs/team-6.jpg'
import { TiSocialTwitter } from 'react-icons/ti'
import { IoLogoInstagram } from 'react-icons/io'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import * as Fontawesome from 'react-icons/fa'
import GetAQuoteCopy from '../../components/GetAQuoteCopy'
import Green_rounded_btn_outlined from '../../components/buttons/Green_rounded_btn_outlined'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn_outlined'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'

export default function About({ contents }) {
  const {
    header,
    hero,
    ht_digital_services,
    meetTheTeam_section,
    ourOffices,
    ourValue_section,
    overview,
    section_with_image,
    section_with_image_left,
    trustedByCompanies,
  } = contents.data.attributes
  const router = useRouter()
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
        <meta name="author" content="Bayo adesina" />
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
        <section className="heading  bg-[#e0ecf0]">
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className="mx-auto w-10/12 md:w-11/12 ">
              <div className="pt-[40px] ">
                <h1 className=" text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 md:pt-10 mb-10   leading-[69px] ">
                  {hero.heading}
                </h1>
                <div className="flex flex-col md:flex-row items-center md:mt-20 justify-around mb-20 pb-10 ">
                  {hero.heroImage.data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={` md:mx-3 my-2  ${
                          index == 1 ? 'order-2' : ''
                        }`}
                      >
                        <img
                          className="rounded-xl"
                          src={item.attributes.url}
                          alt={item.attributes.name}
                          width={item.attributes.width}
                          height={item.attributes.height}
                        />
                      </div>
                    )
                  })}
                  {/* <div>
                                        <Image className='rounded-xl' src={aboutAgency2} alt="image" />
                                    </div>
                                    <div className='md:mx-6 hidden md:block '>
                                        <Image className='rounded-xl' src={aboutAgency1} alt="image" />
                                    </div>
                                    <div className='hidden md:block'>
                                        <Image className='rounded-xl' src={aboutAgency3} alt="image" />
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="heading my-10 md:my-20 ">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex justify-center w-10/12 md:w-11/12 ">
              <div className=" md:w-8/12 text-[#023A51] ">
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => (
                      <h2
                        className="text-[45px] md:text-[55px] pt-3 md:pt-10  font-bold leading-[69px] tracking-[-2px] "
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-[45px] md:text-[55px] pt-3 md:pt-10  font-bold leading-[69px] tracking-[-2px] "
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="text-[25px] md:text-[35px] pt-3 md:pt-10 font-bold  md:leading-[50px]"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-[22px] my-4" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        className="text-[22px] text-[#2cbc63] hover:text-underline "
                        {...props}
                      />
                    ),
                  }}
                >
                  {overview}
                </ReactMarkdown>

                {/* <h2 className=' text-[45px] md:text-[55px] text- pt-3 md:pt-10   leading-[69px] tracking-[-2px] ' >Overview<span className='text-[#2cbc63]'>.</span> </h2>
                                <p className='text-[22px] mt-4 '>We’re all affected by business and politics, two critical areas where many look to make the best possible decisions. Still, despite our best efforts, absorbing the noise and making sense of what matters poses a challenge. In response we’ve built Humble Titan as a problem solving three-tiered platform:</p>
                                <br />

                                <h6 className='text-[25px] md:text-[35px] text- pt-3 md:pt-10   md:leading-[50px] tracking-[-2px] ' >Individuals<span className='text-[#2cbc63]'>:</span></h6>

                                <p className='text-[22px] mt-4 ' >When it comes to American Business and Politics, we’re organizing and giving away as much as we possibly can.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >We appreciate that the tools most of us need to live better-informed lives are usually inaccessible. We also get that the main difference between those who are able to sort out their lives and those who can’t is knowledge.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >Trust us to empower you so you never have to bet blindly on the stock market or an election. Count on us to provide you the education that should have been prioritized in our high schools.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >Tell us how we may do more.</p>

                                <h6 className='text-[25px] md:text-[35px] text- pt-3 md:pt-10   md:leading-[50px] tracking-[-2px] ' >Businesses<span className='text-[#2cbc63]'>:</span></h6>

                                <p className='text-[22px] mt-4 ' >We dissect businesses of all industries and sectors on a daily basis. Regardless of vertical, we can explain to you what a healthy balance sheet, income statement, and cash flow should look like. Our Due Diligence reports prove this.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >But we take our obsession a few steps further, we understand which digital marketing strategy resonates with your target audience. Plus, we understand why it works.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >Get in touch to build or improve your brand’s website. As a client, you’ll surpass the standards of a public traded company.</p>


                                <h6 className='text-[25px] md:text-[35px] text- pt-3 md:pt-10   md:leading-[50px] tracking-[-2px] '>For the Dreamer/Entrepreneur<span className='text-[#2cbc63]'>:</span></h6>

                                <p className='text-[22px] mt-4 ' >Here our founder admits a personal vendetta. He’s been labeled a dreamer for the majority of his life. Though he claims to have found strength in the tag, he struggles with the connotation. “People say ‘dreamer’ and dismiss your ideas as pie in the sky. They stop listening.”</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >He contests that the best of s9ociety’s solutions were once dismissed as projects of dreamers. He reflects often on all of those dreams that could have been if only the dreamer could envision a way to success. Bayo accepts that no one can help everyone, but Humble Titan will strive to do its part.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >We welcome the entrepreneur who believes a website will advance their ambitions. We eagerly await those with products, services, or concepts that have a space online. We’d love to work with you.</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="heading md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex w-10/12 md:w-11/12  ">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:ml-20 order-2 md:order-1 my-10">
                  <img
                    className="rounded-xl"
                    src={section_with_image.image.data[0].attributes.url}
                    alt={section_with_image.image.data[0].attributes.name}
                  />
                </div>
                <div className="text-[#023A51] w-[100%] lg:pl-20  ">
                  <p className="text-[26px] font-bold font-bold my-10 text-[#2cbc63] ">
                    {section_with_image.lable.name}
                  </p>
                  <h2 className=" text-[45px] md:text-[55px] font-medium leading-[50px] md:leading-[60px] tracking-[-2px] ">
                    {section_with_image.heading}
                  </h2>
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="text-[22px] my-4" {...props} />
                      ),
                    }}
                  >
                    {section_with_image.description}
                  </ReactMarkdown>
                  {/* <p className='text-[20px] ' >We are all betting real money, you shouldn’t have to work to wall street to know a risky stock from a safe one.</p>
                                    <br />
                                    <p className='text-[20px] ' >We are all equal, you shouldn’t need access to the best business schools to get your ideas in front of the world.</p>
                                    <br />
                                    <p className='text-[20px] '> It is our goal to obliterate all barriers to the success of people and businesses. If you are willing to invest the time to grow, we’d love to provide you a place where you can do just that.</p>
                                    <br />
                                    <p className='text-[20px] ' >We are all betting real money, you shouldn’t have to work to wall street to know a risky stock from a safe one.</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Companies */}
        <section className="heading md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto text-center w-10/12 md:w-11/12 text-[#023A51] ">
              <p className=" text-[26px] md:text-[24px]  py-4 block font-semibold text-center ">
                {trustedByCompanies.title}
              </p>
              <div className="flex flex-col md:flex-row items-center justify-around pb-10 md:py-10 ">
                {trustedByCompanies.companyLogos.data.map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item.attributes.url} alt="image" />
                    </div>
                  )
                })}

                {/* <div >
                                    <Image src={cglobal} alt="image" />
                                </div>
                                <div >
                                    <Image src={digitalbox} alt="image" />
                                </div>
                                <div >
                                    <Image src={hemisferio} alt="image" />
                                </div>
                                <div >
                                    <Image src={next} alt="image" />
                                </div>
                                <div >
                                    <Image src={spaces} alt="image" />
                                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values. */}
        <section className="heading md:my-20 ">
          <div className=" container w-12/12 bg-[#e0ecf0] py-10 mx-auto max-w-screen-xl">
            <div className="mx-auto text-[#023A51]  md:flex items-center w-10/12 md:w-11/12 ">
              <div className="md:w-5/10 ">
                <p className="text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ">
                  {ourValue_section.heading}
                </p>

                <p className="text-[20px] pr-10 ">
                  {ourValue_section.description}
                </p>
              </div>
              <div className="pt-[40px] md:flex  justify-around md:w-5/10 ">
                <div className="md:flex flex-wrap justify-around ">
                  {ourValue_section.value_cards.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-[#fff] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] "
                      >
                        <div className="text-[26px] text-[#2cbc63]">
                          {React.createElement(Fontawesome[item.iconClassName])}
                        </div>
                        <p className="text-[24px] text-[#2cbc63] ">
                          {item.title}
                        </p>
                        <p className="text-[18px]  ">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team. */}
        <section className="heading py-20 bg-[#f9fafb]">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <h1 className=" text-[50px] md:text-[60px] text-center leading-[69px] md:leading-[50px] tracking-[-2px] py-20 pt-[80px] text-[#023A51] ">
              {meetTheTeam_section.heading}
            </h1>
            <div className="flex flex-wrap text-[#023A51] justify-around">
              {meetTheTeam_section.person.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" rounded-xl w-[90%] sm:w-[45%] md:w-[30%]  mb-10 "
                  >
                    <img
                      className="rounded-xl"
                      src={item.image.data.attributes.url}
                      alt="image"
                    />
                    <p className="text-[30px] ">{item.name}</p>
                    <p className="text-[20px] ">{item.roll}</p>
                    <div className=" flex items-center mt-4 ">
                      {item.social_links.map((item) => {
                        return (
                          <div key={item.id} className="text-[24px] mr-4 ">
                            {React.createElement(Fontawesome[item.iconClass])}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
              {/* <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10 ' >
                                <Image className='rounded-xl' src={team1} alt="image" />
                                <p className='text-[30px] '>Richard Park</p>
                                <p className='text-[20px] ' >Director</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team2} alt="image" />
                                <p className='text-[30px] '>Jennifer Venis</p>
                                <p className='text-[20px]' >Office Manager</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team3} alt="image" />
                                <p className='text-[30px] '>Adam Neville</p>
                                <p className='text-[20px]' >Partner</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team4} alt="image" />
                                <p className='text-[30px] '>Pamela Hickson</p>
                                <p className='text-[20px]' >Advisory</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team5} alt="image" />
                                <p className='text-[30px] '>Steve Beadle</p>
                                <p className='text-[20px]' >Tax & Business</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team6} alt="image" />
                                <p className='text-[30px] '>Patricia Worley</p>
                                <p className='text-[20px]' >Litigation Services</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div> */}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="heading md:my-20">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <div className="mx-auto flex w-10/12 md:w-11/12  ">
              <div className="flex flex-col lg:flex-row items-center mx-auto justify-between">
                <div className="lg:ml-20 order-2 md:order-1 mt-10">
                  <img
                    className="rounded-xl"
                    src={section_with_image_left.image.data[0].attributes.url}
                    alt="image"
                  />
                </div>
                <div className="text-[#023A51] w-[100%] md:pl-20  ">
                  <p className="text-[26px] font-bold my-10 text-[#2cbc63] ">
                    {section_with_image_left.lable.name}
                  </p>
                  <p className=" text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] ">
                    {section_with_image_left.heading}
                  </p>
                  <p className="text-[20px] my-10 ">
                    {section_with_image_left.description}
                  </p>
                  {section_with_image_left.actionButton.style ==
                  'green-outlined' ? (
                    <Green_rounded_btn_outlined
                      href={section_with_image_left.actionButton.href}
                    >
                      {section_with_image_left.actionButton.label}
                    </Green_rounded_btn_outlined>
                  ) : (
                    <Green_rounded_btn>
                      {section_with_image_left.actionButton.label}
                    </Green_rounded_btn>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offices */}
        <section className="heading py-20 bg-[#f9fafb]">
          <div className=" container w-12/12 mx-auto max-w-screen-xl">
            <p className=" text-[50px] md:text-[60px] text-center leading-[69px] md:leading-[50px] tracking-[-2px] md:py-20 pt-[80px] text-[#023A51] ">
              {ourOffices.heading}
            </p>
            <div className="flex flex-wrap text-[#023A51] justify-around my-10">
              <div className=" rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ">
                <p>Address</p>
              </div>
              <div className="rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ">
                <p>Address</p>
              </div>
              <div className="rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ">
                <p>Address</p>
              </div>
            </div>

            <div className=" text-[#023A51] ">
              <div className="flex flex-wrap md:flex-row justify-around">
                {ourOffices.office.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] "
                    >
                      <p className="text-[26px] ">{item.title}</p>
                      <p className="text-[20px]">{item.address}</p>
                      <br />
                      <p className="text-[20px] text-[#2cbc63] ">Contact us</p>
                    </div>
                  )
                })}
                {/* <div className=' rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                    <p className='text-[26px] '>Melville, NY</p>
                                    <p className='text-[20px]'>12345 North Main Street, New York, NY 555555</p>
                                    <br />
                                    <p className='text-[20px] text-[#2cbc63] '>Contact us</p>
                                </div>
                                <div className=' rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                    <p className='text-[26px] '>San Francisco, CA</p>
                                    <p className='text-[20px]'>12345 North Main Street, New York, NY 555555</p>
                                    <br />
                                    <p className='text-[20px] text-[#2cbc63] '>Contact us</p>
                                </div>
                                <div className=' rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                    <p className='text-[26px] '>Tampa, FL</p>
                                    <p className='text-[20px]'>12345 North Main Street, New York, NY 555555</p>
                                    <br />
                                    <p className='text-[20px] text-[#2cbc63] '>Contact us</p>
                                </div> */}
              </div>

              <br />
              <div className="text-center">
                <Green_rounded_btn_outlined
                  href={ourOffices.action_button[0].href}
                >
                  {ourOffices.action_button[0].label}
                </Green_rounded_btn_outlined>
              </div>
            </div>
          </div>
        </section>

        {/* Get a Quote */}
        <GetAQuoteCopy data={ht_digital_services} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  var contents
  await axios
    .get(`https://humble-titan-strapi.herokuapp.com/api/about`)
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
