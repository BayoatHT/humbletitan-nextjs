import Image from 'next/image'
import HT_Standard_Logo from '../assets/imgs/HT-Standard-Logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {

    const backToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <footer className="abcd_footer mt-5_abcd">
                <div className="abcd_container">
                    <div className="abcd_row abcd_justify-between mb-4_abcd">
                        <div className="abcd_col-4 full-width_abcd footer_first_column_abcd">
                            <div className="footer_logo_abcd mb-2_abcd">
                                {/* <img src="https://www.designinguru.com/imgs/HT-Standard-Logo.png" alt="Humble Titan Logo" /> */}
                                <Image src={HT_Standard_Logo} alt="Humble Titan Logo" />
                            </div>
                            <p className="p_abcd">Business and politics made simple. We also deliver elite-level digital marketing
                                services for
                                businesses of all sizes.</p>
                        </div>
                        <div className="abcd_col-2 blue-color_abcd">
                            <ul className="footer_list_abcd ul_abcd">
                                <li className="mb-1_abcd li_abcd"><strong>Overview</strong></li>
                                <li className="li_abcd"> <a href=' /services/' className='blue-color_abcd text_deco_abcd'>Services</a> </li>
                                <li className="li_abcd"> <a href=' /due-diligence/' className='blue-color_abcd text_deco_abcd'> Due Diligence Reports</a></li>
                                <li className="li_abcd"> <a href=' /politics/' className='blue-color_abcd text_deco_abcd'>Politics</a> </li>
                                <li className="li_abcd"> <a href=' /education/' className='blue-color_abcd text_deco_abcd'>Education</a> </li>
                                <li className="li_abcd"> <a href=' /humble-mind/' className='blue-color_abcd text_deco_abcd'>Magazine</a> </li>
                                <li className="li_abcd"> <a href=' /about/' className='blue-color_abcd text_deco_abcd'>Who we are</a> </li>
                            </ul>
                        </div>
                        <div className="abcd_col-2 blue-color_abcd mr-[100px] sm:mr-auto ">
                            <ul className="footer_list_abcd footer_list2_abcd ul_abcd">
                                <li className="li_abcd"> <a href=' /offices/' className='blue-color_abcd text_deco_abcd'>Offices</a> </li>
                                <li className="li_abcd"> <a href=' /tram-seo/' className='blue-color_abcd text_deco_abcd'> TRAM SEO Course</a></li>
                                <li className="li_abcd"> <a href=' /faqs/' className='blue-color_abcd text_deco_abcd'>FAQs</a> </li>
                            </ul>
                        </div>
                        <div className="abcd_col-4 full-width_abcd footer_last_col_abcd ">
                            <p className="mb-1_abcd blue-color_abcd p_abcd"><strong>Business Info</strong></p>
                            <p className="mb-2_abcd p_abcd">Headquartered in Virginia Beach, VA. We work with brands from all over
                                the world.
                                Get in touch.
                            </p>
                            <button className="btn_abcd btn-block_abcd mb-1_abcd">(555) 802-1234</button>
                            <button className="btn_abcd btn-block_abcd">info@company.com</button>
                        </div>
                    </div>
                    <div className="abcd_row abcd_justify-between mb-2_abcd footer_second_row_abcd">
                        <div className="abcd_col-4 font-semibold text-center md:text-left text-[#023A51] full-width_abcd">
                            <span>© 2021 • Humble Titan • Brought to by The Adesina United</span>
                        </div>
                        <div className="abcd_col-4 full-width_abcd mt-15_abcd text-center_abcd">
                            <FaFacebookF color='#023A51' />
                            <FaTwitter color='#023A51' />
                            <FaInstagram color='#023A51' />
                            <FaLinkedinIn color='#023A51' />
                            <FaYoutube color='#023A51' />
                        </div>
                        <div className="abcd_col-4 txt-center_abcd mt-15_abcd full-width_abcd">
                            <span onClick={() => backToTop()} className="text-[16px] text-[#023A51] font-semibold cursor-pointer hover:text-[18px] transition-all duration-150 " >Back to top</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
