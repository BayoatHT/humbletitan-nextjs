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
  FaBars,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
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


  const politicsStylesHandler = () => {
    if (!politicsStyles.includes('showDropdown')) {
      setPoliticsStyles(['showDropdown'])
      setPoliticsIcon('rotate')

      setServicesStyles([])
      setServicesIcon('')
      setTramStyles([])
      setTramIcon('')
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
    }
    else {
      setTramStyles([])
      setTramIcon('')
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
                  <li>
                    <a
                      href="https://h-t.vercel.app/offices/"
                      className="a_abcd text-[#023A51] text-[12px]"
                    >
                      Offices
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://h-t.vercel.app/faqs/"
                      className="a_abcd text-[#023A51] text-[12px]"
                    >
                      FAQS
                    </a>
                  </li>
                  <li className="abcd_mainmenu flex abcd_relative">
                    <a
                      href="https://h-t.vercel.app/about/"
                      className="a_abcd text-[#023A51] text-[12px]"
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
                          href="https://h-t.vercel.app/the-team/"
                          className="a_abcd"
                        >
                          THE TEAM
                        </a>{" "}
                      </li>
                    </ul>

                  </li>
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
                    <a href="https://h-t.vercel.app/" className="a_abcd text-[#023A51] text-[18px]">
                      {" "}
                      Home
                    </a>
                  </li>
                  <li className="abcd_mainmenu abcd_relative">
                    <a
                      href="https://h-t.vercel.app/politics/"
                      className=" a_abcd text-[#023A51] text-[18px]"
                    >
                      Politics{" "}
                      <FaChevronDown
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
                          href="https://h-t.vercel.app/due-diligence/"
                          className="a_abcd"
                        >
                          {" "}
                          ABCD Stock
                        </a>
                      </li>
                      <li className="abcd_menu-politics">
                        <a
                          href="https://h-t.vercel.app/bayo-search-consultant/"
                          className="a_abcd"
                        >
                          {" "}
                          Founder & Consultant
                        </a>
                      </li>
                      <li className="abcd_menu-politics">
                        <a
                          href="https://h-t.vercel.app/activism/"
                          className="a_abcd"
                        >
                          {" "}
                          Activism
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://h-t.vercel.app/education/"
                      className="a_abcd text-[#023A51] text-[18px]"
                    >
                      Education
                    </a>
                  </li>
                  <li className="abcd_mainmenu">
                    <a
                      href="https://h-t.vercel.app/services/"
                      className="a_abcd text-[#023A51] text-[18px]"
                    >
                      Services{" "}
                      <FaChevronDown
                        style={{
                          position: "relative",
                          left: '2px',
                          display: 'inline'
                        }}
                      />
                    </a>
                    <ul className="abcd_servicemenu abcd_row ul_abcd">
                      <li className="abcd_servicemenu_li">
                        <div className="abcd_menu_font">
                          {" "}
                          <a
                            href="https://h-t.vercel.app/services/web-design/"
                            className="a_abcd"
                          >
                            {" "}
                            Web Design
                          </a>
                        </div>
                        {/* <img src="https://www.designinguru.com/imgs/web-design-menu-225x300.jpg" alt="" /> */}
                        <Image src={web_design} alt="Web designing" />
                      </li>
                      <li className="abcd_servicemenu_li">
                        <div className="abcd_menu_font">
                          <a
                            href="https://h-t.vercel.app/services/content-marketing/"
                            className="a_abcd"
                          >
                            {" "}
                            Content Marketing
                          </a>
                        </div>
                        {/* <img src="https://www.designinguru.com/imgs/content-marketing-menu-225x300.jpg" alt="" /> */}
                        <Image
                          src={content_marketing_menu}
                          alt="content marketing menu"
                        />
                      </li>
                      <li className="abcd_servicemenu_li">
                        <div className="abcd_menu_font">
                          <a
                            href="https://h-t.vercel.app/services/search-engine-optimization/"
                            className="a_abcd"
                          >
                            {" "}
                            SEO Optimization
                          </a>
                        </div>
                        {/* <img src="https://www.designinguru.com/imgs/seo-menu-225x300.jpg" alt="" /> */}
                        <Image src={seo_menu} alt="Seo menu" />
                      </li>
                      <li className="abcd_servicemenu_li">
                        <div className="abcd_menu_font">
                          <a
                            href="https://h-t.vercel.app/services/web-performance-management/"
                            className="a_abcd"
                          >
                            {" "}
                            Managment Services
                          </a>
                        </div>
                        {/* <img src="https://www.designinguru.com/imgs/management-service-menu-225x300.jpg" alt="" /> */}
                        <Image
                          src={management_services}
                          alt="management services"
                        />
                      </li>
                    </ul>
                  </li>
                  <li className="abcd_mainmenu">
                    <a
                      href="https://h-t.vercel.app/tram-seo/"
                      className="a_abcd text-[#023A51] "
                    >
                      <strong>TRAM SEO Course</strong>{" "}
                      <span className="newbadge_abcd text-[16px] ">New</span>{" "}
                      <FaChevronDown
                        style={{
                          position: "relative",
                          left: "1px",
                          display: 'inline'
                        }}
                      />
                    </a>
                    <ul className="abcd_servicemenu abcd_row ul_abcd">
                      <li className="abcd_servicemenu_li w60">
                        <div className="abcd_row">
                          <div>
                            <div>
                              <FaBookReader />
                            </div>
                            <div className="abcd_button_free">
                              <span className="abcd_free_font">Free</span>
                            </div>
                          </div>
                          <div className="abcd_font_terms">
                            <a
                              href="#"
                              className="a_abcd"
                            >
                              Standard Package
                            </a>
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
                              href="https://h-t.vercel.app/tram-seo/"
                              className="a_abcd"
                            >
                              About the course
                            </a>
                          </div>
                        </div>
                        <br />
                        <div className="abcd_row abcd_justify-between abcd_align-center">
                          <div className="abcd_fontset_para abcd_cursorpointer">
                            <a
                              href="https://h-t.vercel.app/bayo-search-consultant/"
                              className="a_abcd"
                            >
                              About the Founder
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="abcd_servicemenu_li">
                        <div className="abcd_menu_font">
                          {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/1.png" alt="" /> */}
                          <Image src={one_p} alt="P One" />
                        </div>
                        <div className="abcd_menu_font">
                          {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/technical-tram-menu.jpg" alt="" /> */}
                          <Image src={technical_tram} alt="technical tram" />
                        </div>
                        <div className="abcd_16font abcd_cursorpointer ">
                          <a
                            href="https://h-t.vercel.app/tram-seo/technical-course/"
                            className="a_abcd"
                          >
                            {" "}
                            Technical SEO
                          </a>
                        </div>
                        <div className="abcd_menu_font">
                          {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/authority-tram-menu.jpg" alt="" /> */}
                          <Image src={authority_tram} alt="Authority tram" />
                        </div>
                        <div className="abcd_16font abcd_cursorpointer ">
                          <a
                            href="https://h-t.vercel.app/tram-seo/authority-course/"
                            className="a_abcd"
                          >
                            {" "}
                            Authority SEO
                          </a>
                        </div>
                      </li>
                      <li className="abcd_servicemenu_li">
                        <br />
                        <br />
                        <br />
                        <div className="abcd_menu_font">
                          {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/relevance-tram-menu.jpg" alt="" /> */}
                          <Image src={relevent_tram} alt="Relevent tram" />
                        </div>
                        <div className="abcd_16font abcd_cursorpointer ">
                          <a
                            href="https://h-t.vercel.app/tram-seo/ranking-course/"
                            className="a_abcd"
                          >
                            {" "}
                            Ranking SEO
                          </a>
                        </div>
                        <div className="abcd_menu_font">
                          {/* <img className="abcd_imgwidth" src="https://www.designinguru.com/imgs/monitoring-tram-menu.jpg" alt="" /> */}
                          <Image src={monitoring_tram} alt="Monitoring tram" />
                        </div>
                        <div className="abcd_16font abcd_cursorpointer ">
                          <a
                            href="https://h-t.vercel.app/tram-seo/management-course/"
                            className="a_abcd"
                          >
                            {" "}
                            Monitoring SEO
                          </a>
                        </div>
                      </li>
                      <li className="abcd_servicemenu_li w60 orangeBanner">
                        {/* <img className="abcd_tramserach" src="https://www.designinguru.com/imgs/tram-banner-1.png" alt="" /> */}
                        <Image src={tram_banner} alt="tram banner" />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://h-t.vercel.app/humble-mind/"
                      className="a_abcd text-[#023A51] text-[18px] "
                    >
                      Magazine
                    </a>
                  </li>
                  <li className="btn btn-primary">
                    <a
                      href="https://h-t.vercel.app/contact/"
                      className="a_abcd text-[#fff] text-center bg-[#2cbc63] sm:w-[100px] py-[0px] px-[20px] rounded-3xl text-[18px]"
                    >
                      Hire Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="topnav">
          <div className="abcd_col-12 abcd_h-70 abcd_row justify-content">
            <div className="header_main_logo responsive-logo abcd_row abcd_justify-between abcd_relative abcd_h-fit">
              {/* <img c src="https://www.designinguru.com/imgs/HT-Standard-Logo.png" alt="Humble Titan Logo" /> */}
              <Image src={logo_header} alt="Logo" />
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
            <a href="https://h-t.vercel.app/" className="w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ">
              Home
            </a>

            {/* dropdown */}
            <div className="relative w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ">
              <a href="https://h-t.vercel.app/politics" >
                Politics
              </a>
              <div
                className="absolute right-10 top-[22px]"
                onClick={() => politicsStylesHandler()} >
                <FaChevronDown className={politicsIcon} />

              </div>
            </div>

            {/* Dropdown contents */}
            <div className={`w-[100%] hidden ${politicsStyles} `}>
              <a href="https://h-t.vercel.app/due-diligence/" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                ABCD Stock
              </a>
              <a href="https://h-t.vercel.app/bayo-search-consultant/" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Founder & Consultant
              </a>
              <a href="https://h-t.vercel.app/activism" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Activism
              </a>
            </div>
            {/* Dropdown contents ends */}

            <a href="https://h-t.vercel.app/education" className="w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ">
              Education
            </a>

            {/* dropdown */}
            <div className="relative w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ">
              <a href="https://h-t.vercel.app/services" >
                Services
              </a>
              <div
                className="absolute right-10 top-[22px]"
                onClick={() => servicesStylesHandler()} >
                <FaChevronDown className={servicesIcon}
                />

              </div>
            </div>

            {/* Dropdown contents */}
            <div className={`w-[100%] hidden ${servicesStyles} `}>
              <a href="https://h-t.vercel.app/services/web-design/" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Web Design
              </a>
              <a href="https://h-t.vercel.app/services/content-marketing/" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Content Marketing
              </a>
              <a href="https://h-t.vercel.app/search-engine-optimization/" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Search Engine Optimization
              </a>
              <a href="https://h-t.vercel.app/web-performance-management" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Web Management
              </a>
            </div>
            {/* Dropdown contents ends */}


            {/* dropdown */}
            <div className="relative w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ">
              <a href="https://h-t.vercel.app/tram-seo/" >
                Tram SEO Course
              </a>
              <div
                className="absolute right-10 top-[22px]"
                onClick={() => tramStylesHandler()} >
                <FaChevronDown className={tramIcon}
                />

              </div>
            </div>

            {/* Dropdown contents */}
            <div className={`w-[100%]  hidden ${tramStyles}`}>
              <a href="#" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Standard Package
              </a>
              <a href="#" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                Passion Package
              </a>
              <a href="#" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                professional package
              </a>
              <a href="https://h-t.vercel.app/tram-seo" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                About the course
              </a>
              <a href="https://h-t.vercel.app/bayo-search-consultant/" className="w-[100%] border-t border-[#fff] text-[#023A51] text-[16px] hover:text-[#2cbc63] font-bold text-center py-4 transition duration-300 ">
                About the founder
              </a>
            </div>
            {/* Dropdown contents ends */}
            <a href="https://h-t.vercel.app/humble-mind" className="w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ">
              magazine
            </a>
            <a href="https://h-t.vercel.app/contact" className="w-[100%] text-[#023A51] text-[20px] font-bold text-center py-4 hover:bg-[#fff] hover:text-[#2cbc63] transition duration-300 ">
              Hire Us
            </a>


          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
