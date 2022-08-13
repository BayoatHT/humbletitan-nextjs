import "tailwindcss/tailwind.css";
import logo_header from "../assets/imgs/HT-Standard-Logo.png";
import web_design from "../assets/imgs/web-design-menu-225x300.jpg";
import content_marketing_menu from "../assets/imgs/content-marketing-menu-225x300.jpg";
import seo_menu from "../assets/imgs/seo-menu-225x300.jpg";
import management_services from "../assets/imgs/management-service-menu-225x300.jpg";
import one_p from "../assets/imgs/1.png";
import technical_tram from "../assets/imgs/technical-tram-menu.jpg";
import authority_tram from "../assets/imgs/authority-tram-menu.jpg";
import relevent_tram from "../assets/imgs/relevance-tram-menu.jpg";
import monitoring_tram from "../assets/imgs/monitoring-tram-menu.jpg";
import tram_banner from "../assets/imgs/tram-banner-1.png";
import placeHolderImage from "../assets/imgs/humble-home-logo.png";
import Image from "next/image";
import {
  FaChevronDown,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBookReader,
  FaAngleDown
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router'

const Header = ({courses, services}) => {
  const router = useRouter()
  const [togglerClasses, setTogglerClasses] = useState([])
  const [navListClass, setNavListClass] = useState(['nav-inactive'])

  const navToggle = () => {
    if (!togglerClasses.includes('cross')) {
      setTogglerClasses(['cross'])
      setNavListClass(['nav-active'])
    }
    else {
      setTogglerClasses([])
      setNavListClass(['nav-inactive'])
    }
  }

  const [politicsIcon, setPoliticsIcon] = useState('')
  const [politicsStyles, setPoliticsStyles] = useState([])
  const [tramStyles, setTramStyles] = useState([])
  const [tramIcon, setTramIcon] = useState('')
  const [servicesStyles, setServicesStyles] = useState([])
  const [servicesIcon, setServicesIcon] = useState('')
  const [aboutStyles, setAboutStyles] = useState([])
  const [aboutIcon, setAboutIcon] = useState('')


  const politicsStylesHandler = () => {
    if (!politicsStyles.includes('showDropdown')) {
      setPoliticsStyles(['showDropdown'])
      setPoliticsIcon('rotate')

      setServicesStyles([])
      setServicesIcon('')
      setTramStyles([])
      setTramIcon('')
      setAboutStyles([])
      setAboutIcon('')
    }
    else {
      setPoliticsStyles([])
      setPoliticsIcon('')
    }
  }


  const servicesStylesHandler = () => {
    if (!servicesStyles.includes('showDropdown')) {
      setServicesStyles(['showDropdown'])
      setServicesIcon('rotate')

      setPoliticsStyles([])
      setPoliticsIcon('')
      setTramStyles([])
      setTramIcon('')
      setAboutStyles([])
      setAboutIcon('')
    }
    else {
      setServicesStyles([])
      setServicesIcon('')
    }
  }


  const tramStylesHandler = () => {
    if (!tramStyles.includes('showDropdown')) {
      setTramStyles(['showDropdown'])
      setTramIcon('rotate')

      setServicesStyles([])
      setServicesIcon('')
      setPoliticsStyles([])
      setPoliticsIcon('')
      setAboutStyles([])
      setAboutIcon('')
    }
    else {
      setTramStyles([])
      setTramIcon('')
    }
  }


  const aboutStylesHandler = () => {
    if (!aboutStyles.includes('showDropdown')) {
      setAboutStyles(['showDropdown'])
      setAboutIcon('rotate')

      setServicesStyles([])
      setServicesIcon('')
      setPoliticsStyles([])
      setPoliticsIcon('')
      setTramStyles([])
      setTramIcon('')
    }
    else {
      setAboutStyles([])
      setAboutIcon('')
    }
  }
  return (
    <>
      <header className="abcd_Header">
        <div className="abcd_container abcd_container_menu ">
          <div className="abcd_row abcd_justify-between abcd_relative abcd_align-center abcd_align-center">
            <div className="abcd_col-2">
              <div className="header_main_logo pointer_abcd">
                <Link href={`/`} passHref>
                  <a>

                    <Image src={logo_header} alt="Humble Titan Logo" />
                  </a>
                  {/* <img src="https://www.designinguru.com/imgs/HT-Standard-Logo.png" alt="Humble Titan Logo" /> */}
                </Link>
              </div>
            </div>
            <div className="abcd_col-10  mbl-display_abcd">
              <div className="header__firstrow_abcd abcd_row p-1_abcd ">
                <ul className="abcd_row mr-auto_abcd ul_abcd abcd_align-center">
                  <li className={` hover:bg-[#fff] rounded ${router.pathname == '/products' ? 'rounded bg-[#fff]' : ''} `} >
                    <a

                      href=" /products"
                      className={`a_abcd text-[#023A51] transition duration-300 font-semibold text-[12px]  `}
                    >
                      Products
                    </a>
                  </li>
                  <li className={`hover:bg-[#fff] rounded transition duration-300 ${router.pathname == '/faqs' ? 'rounded bg-[#fff]' : ''} `}>
                    <a
                      href=" /faqs"
                      className="a_abcd font-semibold text-[#023A51] text-[12px]"
                    >
                      FAQS
                    </a>
                  </li>
                  <li className={`hover:bg-[#fff] rounded transition duration-300 ${router.pathname == '/about' ? 'rounded bg-[#fff]' : ''} `}>
                    <a
                      href=" /about"
                      className="a_abcd font-semibold text-[#023A51] text-[12px]"
                    >
                      About us
                    </a>
                  </li>
                  <li className={`hover:bg-[#fff] transition duration-300 rounded ${router.pathname == '/the-team' ? 'rounded bg-[#fff]' : ''} `}>
                    <a
                      href=" /the-team"
                      className="a_abcd font-semibold text-[#023A51] text-[12px]"
                    >
                      The Team
                    </a>
                  </li>
                  {/* <li className={`abcd_mainmenu flex abcd_relative ${router.pathname == '/about' ? 'rounded bg-[#fff] p-2 ' : router.pathname == '/the-team' ? 'rounded bg-[#fff]' : ''}`}>
                    <a
                      href=" /about"
                      className="a_abcd text-[#023A51] font-semibold text-[12px]"
                    >
                      About Us
                    </a>
                    <FaChevronDown
                      style={{
                        position: "relative",
                        top: "3px",
                        left: "1px",
                        cursor: "pointer",
                        marginLeft: "5px",
                        color: '#023A51',
                      }}
                    />
                    <ul
                      className="abcd_submenu ul_abcd"
                      style={{ height: "44.39px", minWidth: "140px" }}
                    >
                      <li
                        className="abcd_menu-politics"
                        style={{ padding: "12px 20px" }}
                      >
                        <a
                          href=" /the-team"
                          className="a_abcd"
                        >
                          THE TEAM
                        </a>{" "}
                      </li>
                    </ul>

                  </li>
                  <li className={`abcd_mainmenu flex abcd_relative ${router.pathname == '/the-team' ? 'rounded bg-[#fff] p-2 ' : router.pathname == '/the-team' ? 'rounded bg-[#fff]' : ''}`}>
                    <a
                      href=" /the-team"
                      className="a_abcd text-[#023A51] font-semibold text-[12px]"
                    >
                      The team
                    </a>
                  </li> */}
                </ul>
                <div className="abcd_row abcd_align-center">
                  <div className="header_search_input_wrapper_abcd">
                    <FaSearch color="#023A51" className="text-[18px] " />
                    <input
                      type="text"
                      placeholder="Search Stocks, Business &amp; Politics"
                    />
                  </div>
                  <ul className="abcd_row social_icons_abcd ml-1_abcd ul_abcd">
                    <li className="li_abcd">
                      {" "}
                      <a className="a_abcd" href="#">
                        <FaFacebookF className="text-[18px]" color="#023A51" />
                      </a>
                    </li>
                    <li className="li_abcd">
                      {" "}
                      <a className="a_abcd" href="#">
                        <FaTwitter className="text-[18px]" color="#023A51" />
                      </a>
                    </li>
                    <li className="li_abcd">
                      {" "}
                      <a className="a_abcd" href="#">
                        <FaInstagram className="text-[18px]" color="#023A51" />
                      </a>
                    </li>
                    <li className="li_abcd">
                      {" "}
                      <a className="a_abcd" href="#">
                        <FaLinkedinIn className="text-[18px]" color="#023A51" />
                      </a>
                    </li>
                    <li className="li_abcd">
                      {" "}
                      <a className="a_abcd" href="#">
                        <FaYoutube className="text-[18px]" color="#023A51" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header__secondrow_abcd abcd_row p-1_abcd abcd_justify-between  ">
                <div className="header_secondrow_logo_abcd displaynone_abcd">
                  {/* <img src="https://www.designinguru.com/imgs/HT-Standard-Logo.png" alt="Humble Titan Logo" /> */}
                  <Image src={logo_header} alt="Humble Titan Logo" />
                </div>
                <ul className="abcd_row abcd_justify-between abcd_nav abcd_align-center ul_abcd">
                  <li>
                    <a href=" /" className={`a_abcd text-[#023A51] font-semibold text-[18px] ${router.pathname == "/" ? "active" : ""}`} >

                      Home
                    </a>
                  </li>
                  <li className="abcd_mainmenu abcd_relative">
                    <a
                      href=" /politics"
                      className={`a_abcd text-[#023A51] font-semibold text-[18px] ${router.pathname.includes('/politics') ? "active" : router.pathname == "/due-diligence" ? "active" : router.pathname == "/bayo-search-consultant" ? "active" : router.pathname == "/activism" ? "active" : ""}`}
                    >
                      Politics{" "}
                      <FaChevronDown
                        size={14}
                        style={{
                          position: "relative",
                          left: '2px',
                          display: 'inline'
                        }}
                      />
                    </a>
                    <ul className="abcd_submenu ul_abcd">
                      <li className="abcd_menu-politics">
                        <a
                          href=" /due-diligence"
                          className={`a_abcd ${router.pathname == "/due-diligence" ? "active" : ""}`}
                        >
                          {" "}
                          Due-diligence
                        </a>
                      </li>
                      <li className="abcd_menu-politics">
                        <a
                          href=" /bayo-search-consultant"
                          className={`a_abcd ${router.pathname == "/bayo-search-consultant" ? "active" : ""}`}
                        >
                          {" "}
                          Founder & Consultant
                        </a>
                      </li>
                      <li className="abcd_menu-politics">
                        <a
                          href=" /activism"
                          className={`a_abcd ${router.pathname == "/activism" ? "active" : ""}`}
                        >
                          {" "}
                          Activism
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href=" /education"
                      className={`a_abcd text-[#023A51] font-semibold text-[18px] ${router.pathname == "/education" ? "active" : ""}`}
                    >
                      Education
                    </a>
                  </li>
                  <li className="abcd_mainmenu">
                    <a
                      href=" /services"
                      className={`a_abcd text-[#023A51] font-semibold text-[18px] ${router.pathname == "/services" ? "active" : router.pathname == "/services/web-design" ? "active" : router.pathname == "/services/content-marketing" ? "active" : router.pathname == "/services/search-engine-optimization" ? "active" : router.pathname == "/services/web-performance-management" ? "active" : ""}`}
                    >
                      Services{" "}
                      <FaChevronDown
                        size={14}
                        style={{
                          position: "relative",
                          left: '2px',
                          display: 'inline'
                        }}
                      />
                    </a>
                    <ul className="abcd_servicemenu flex-wrap justify-center abcd_row ul_abcd ">
                      {
                        services?.map((item)=> {
                          return (
                            <li key={item?.id} className="abcd_servicemenu_li flex flex-col items-center w-[25%]">
                              <div className="abcd_menu_font">
                                <a href={`/services/${item?.attributes?.slug}`} className={`a_abcd ${router.asPath === "/services/" + item?.attributes?.slug+ "/" ? "active" : ""}`}
                                >
                                  {item?.attributes?.name}
                                </a>
                              </div>
                              <Image src={item?.attributes?.navImage?.data?.attributes?.url || placeHolderImage }
                                width={item?.attributes?.navImage?.data?.attributes?.width || 180}
                                height={item?.attributes?.navImage?.data?.attributes?.height || 250}
                                alt={item?.attributes?.navImage?.data?.attributes?.hash}
                               />
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                  <li className="abcd_mainmenu">
                    <a
                      href=" /tram-seo/"
                      className={`a_abcd text-[#023A51] font-semibold text-[18px] ${router.pathname.includes("/tram-seo") ?  "active" : ""}`}
                    >
                      <strong>TRAM SEO Course</strong>{" "}
                      <span className="newbadge_abcd ">New</span>{" "}
                      <FaChevronDown
                        size={14}
                        style={{
                          position: "relative",
                          left: "1px",
                          display: 'inline'
                        }}
                      />
                    </a>
                    <ul className="abcd_servicemenu abcd_row ul_abcd w-[100%] ">
                      <li className="abcd_servicemenu_li w-[40%] ">
                        <div className="abcd_row flex items-center">
                          <div>
                            <div>
                              <FaBookReader size={30} color="#2cbc63" />
                            </div>
                          </div>
                          <div className="abcd_font_terms ">
                            <a
                              href=" /seo-dictionary/"
                              className={`a_abcd ${router.pathname === '/seo-dictionary'? 'active' : ''} `}
                            >
                              Standard Package
                            </a>
                          </div>
                          <div className="abcd_button_free">
                              <span className="abcd_free_font font-semibold">Free</span>
                          </div>
                        </div>
                        <div className="abcd_fontset_para mt-2_abcd">
                          Master the science and art of search. A comprehensive
                          course that offers a step-by-step guide to ranking
                          your website on search engines like Google.
                        </div>
                        <br />
                        <div className="abcd_row abcd_justify-between abcd_align-center">
                          <div className="abcd_fontset_para abcd_cursorpointer">
                            <a
                              href="#"
                              className="a_abcd"
                            >
                              Passion Pakage
                            </a>{" "}
                          </div>
                          <div className="abcd_button_free abcd_coming2023">
                            <span className="abcd_free_font abcd_comingset">
                              Coming 2023
                            </span>
                          </div>
                        </div>
                        <br />
                        <div className="abcd_row abcd_justify-between abcd_align-center">
                          <div className="abcd_fontset_para abcd_cursorpointer">
                            <a
                              href="#"
                              className="a_abcd"
                            >
                              Professional Pakage
                            </a>
                          </div>
                          <div className="abcd_button_free abcd_coming2023">
                            <span className="abcd_free_font abcd_comingset">
                              Coming 2023
                            </span>
                          </div>
                        </div>
                        <br />
                        <div className="abcd_row abcd_justify-between abcd_align-center">
                          <div className="abcd_fontset_para abcd_cursorpointer">
                            <a
                              href=" /tram-seo"
                              className={`a_abcd ${router.pathname == "/tram-seo" ? "active" : ""}`}
                            >
                              About the course
                            </a>
                          </div>
                        </div>
                        <br />
                        <div className="abcd_row abcd_justify-between abcd_align-center">
                          <div className="abcd_fontset_para abcd_cursorpointer">
                            <a
                              href=" /bayo-search-consultant/"
                              className={`a_abcd ${router.pathname == "/bayo-search-consultant" ? "active" : ""}`}
                            >
                              About the Founder
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="abcd_servicemenu_li w-[35%]">
                        <div className="abcd_menu_font">
                          {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/1.png" alt="" /> */}
                          <Image src={one_p} alt="P One" />
                        </div>
                        <div className="w-[100%] flex justify-around flex-wrap">
                          {
                            courses?.map((item)=> {
                              return (
                                <div key={item?.id} className="w-[50%] flex flex-col items-center mb-2 " >
                                  <div className="abcd_menu_font  ">
                                  <Image src={item?.attributes?.navImage?.data?.attributes?.url || placeHolderImage }
                                    width={item?.attributes?.navImage?.data?.attributes?.width || 150}
                                    height={item?.attributes?.navImage?.data?.attributes?.height || 90}
                                    alt={item?.attributes?.navImage?.data?.attributes?.hash}
                                   />
                                  </div>
                                  <div className="abcd_16font abcd_cursorpointer ">
                                    <a
                                      href={`/tram-seo/${item?.attributes?.slug}`}
                                      className={`a_abcd text-[#023A51] ${router.asPath === "/tram-seo/" + item?.attributes?.slug +"/" ? "active" : ""}`}
                                    >
                                      {" "}
                                      {item?.attributes?.name}
                                    </a>
                                  </div>
                                </div>
                              )
                            })
                          }
                          
                         </div>
                      </li>
                      <li className="abcd_servicemenu_li orangeBanner w-[30%] ">
                        <Image src={tram_banner} alt="tram banner" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href=" /humble-mind"
                      className={`a_abcd text-[#023A51] font-semibold text-[18px] ${router.pathname.includes("/humble-mind") ? "active" : ""} `}
                    >
                      Magazine
                    </a>
                  </li>
                  <li className="btn btn-primary">
                    <button
                      onClick={() => router.push("/contact")}
                      className="green_rounded_btn"
                    >
                      Hire Us
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="topnav">
          <div className="abcd_col-12 abcd_h-70 abcd_row justify-content">
            <div className="header_main_logo responsive-logo abcd_row abcd_justify-between abcd_relative abcd_h-fit">
              <Link href="/" passHref>
                <Image src={logo_header} alt="Logo" />
              </Link>
            </div>
            <div className="mt-[25px] mr-[25px] ">
              <button className={togglerClasses} onClick={() => navToggle()}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
          </div>

          <div className={navListClass}>
            <a href=" /" className={`w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ${router.pathname == '/' ? 'bg-[#fff] text-[#2cbc63]' : ''} `}>
              Home
            </a>

            {/* dropdown */}
            <div className={`relative w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ${router.pathname.includes('/politics') ? "active" : router.pathname == "/due-diligence" ? "active" : router.pathname == "/bayo-search-consultant" ? "active" : router.pathname == "/activism" ? "active" : ""} `}>
              <a href=" /politics" >
                Politics
              </a>
              <div
                className="absolute right-0 top-0 h-[100%] flex items-center justify-center w-[60px] hover:bg-[#fff]"
                onClick={() => politicsStylesHandler()} >
                <FaAngleDown size={28} className={politicsIcon} />

              </div>
            </div>

            {/* Dropdown contents */}
            <div className={`w-[100%] hidden ${politicsStyles} `}>
              <a href=" /due-diligence" className={`w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ${router.pathname == '/due-diligence' ? 'bg-[#fff] text-[#2cbc63]' : ''} `}>
                Due-diligence
              </a>
              <a href=" /bayo-search-consultant" className={`w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ${router.pathname == '/bayo-search-consultant' ? 'bg-[#fff] text-[#2cbc63]' : ''}`}>
                Founder & Consultant
              </a>
              <a href=" /activism" className={`w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ${router.pathname == '/activism' ? 'bg-[#fff] text-[#2cbc63]' : ''}`}>
                Activism
              </a>
            </div>

            <a href=" /education" className={`w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ${router.pathname == '/education' ? 'bg-[#fff] text-[#2cbc63]' : ''} `}>
              Education
            </a>

            {/* dropdown */}
            <div className={`relative w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ${router.pathname.includes('/services') ? 'bg-[#fff] text-[#2cbc63]' : ''}`}>
              <a href=" /services" >
                Services
              </a>
              <div
                className="absolute right-0 top-0 h-[100%] flex items-center justify-center w-[60px] hover:bg-[#fff]"
                onClick={() => servicesStylesHandler()} >
                <FaAngleDown size={28} className={servicesIcon}
                />

              </div>
            </div>

            {/* Dropdown contents */}
            <div className={`w-[100%] hidden ${servicesStyles} `}>
            {
              services?.map((item)=> {
                return (
                  <a key={item?.id} href={`/services/${item?.attributes?.slug}`} className={`w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ${router.pathname == '/services/' + item?.attributes?.slug ? 'bg-[#fff] text-[#2cbc63]' : ''} `}>
                {item?.attributes?.name}
              </a>
                )
              })
            }
            </div>
            {/* Dropdown contents ends */}


            {/* dropdown */}
            <div className={`relative w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ${router.pathname.includes('/tram-seo') ? 'bg-[#fff] text-[#2cbc63]' : ''}`}>
              <a href=" /tram-seo" >
                Tram SEO Course
                <span className="newbadge_abcd ">New</span>
              </a>
              <div
                className="absolute right-0 top-0 h-[100%] flex items-center justify-center w-[60px] hover:bg-[#fff]"
                onClick={() => tramStylesHandler()} >
                <FaAngleDown size={28} className={tramIcon}
                />

              </div>
            </div>

            {/* Dropdown contents */}
            <div className={`w-[100%]  hidden ${tramStyles}`}>
              <a href=" /seo-dictionary/" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Standard Package
                <span className="newbadge_abcd ">Free</span>
              </a>
              <a href="#" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Passion Package
                <span className="newbadge_abcd bg-[#eb4962] ">Coming 2023</span>
              </a>
              <a href="#" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                professional package
                <span className="newbadge_abcd bg-[#eb4962] ">Coming 2023</span>
              </a>
              {
                courses?.map((item)=> {
                  return (
                    <a key={item?.id} href={`/tram-seo/${item?.attributes?.slug}`} className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                     {item?.attributes?.name}
                    </a>
                  )
                })
              }
              <a href=" /tram-seo" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                About the course
              </a>
              <a href=" /bayo-search-consultant/" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                About the founder
              </a>
            </div>
            {/* Dropdown contents ends */}


            <a href=" /products" className={`w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ${router.pathname.includes('/products') ? 'bg-[#fff] text-[#2cbc63]' : ''} `}>
              Products
            </a>
            <a href=" /humble-mind" className={`w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ${router.pathname.includes('/humble-mind') ? 'bg-[#fff] text-[#2cbc63]' : ''} `}>
              Magazine
            </a>

            <div className={`relative w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ${router.pathname.includes('/about') ? 'bg-[#fff] text-[#2cbc63]' : ''}`}>
              <a href=" /about" >
                About Us
              </a>
              <div
                className="absolute right-0 top-0 h-[100%] flex items-center justify-center w-[60px] hover:bg-[#fff]"
                onClick={() => aboutStylesHandler()} >
                <FaAngleDown size={28} className={aboutIcon}
                />

              </div>
            </div>

            {/* Dropdown contents */}
            <div className={`hidden ${aboutStyles}`}>
              <a href=" /the-team" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300" >
                The Team
              </a>
              <a href=" /our-mission" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Our Mission
              </a>
              <a href=" /faqs" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                FAQs
              </a>
            </div>

            <div className="flex justify-center">
              <a href=" /contact" className=" max-w-fit green_rounded_btn font-bold my-2">
                Hire Us
              </a>
            </div>


          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
