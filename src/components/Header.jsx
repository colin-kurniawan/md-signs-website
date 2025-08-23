import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Phone from '../assets/phone.png'
import Email from '../assets/email.png'
import Location from '../assets/location.png'

const linkStyle = "group relative inline-block"
const navStyles = "inline-block text-[22px] transition-transform duration-300 hover:scale-110 hover:text-[#00BCD4] active:text-[#00BCD4] active:scale-90 tracking-widest"
const underlineStyle = "absolute left-0 -bottom-1 h-[2px] w-0 bg-[#00BCD4] transition-all duration-300 group-hover:w-full"
const hamburgerIconStyle = "block h-0.5 w-10 bg-black"

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    
    return (
        <div className="flex flex-col">
            <div className="w-full h-[40px] bg-[#0E1527] -mb-4 flex justify-between pt-2.5 pl-3">
                <div className="flex flex-row">
                    <img className="w-[18px] h-[18px] translate-y-0.5" src={Phone} alt="phone.png" />
                    <span className="text-white ml-1 -translate-y-0.5">(410) 555-SIGN</span>
                    <img className="w-[18px] h-[18px] translate-y-0.5 ml-10" src={Email} alt="" />
                    <span className="text-white -translate-y-0.5 ml-1">email@email.com</span>
                </div>
                <div className="flex flex-row mr-5">
                    <img className="w-[18px] h-[18px] translate-y-0.5" src={Location} alt="" />
                    <span className="text-white -translate-y-0.5 ml-1">Dundalk, MD</span>
                </div>
            </div>
            <nav className="flex flex-row h-[100px]">
                <div className="DESKTOP-MENU hidden lg:flex flex-row gap-7 pl-10 justify-start items-end w-[50%] h-full p-5 pb-6">
                    <Link className={linkStyle} to="">
                        <span className={navStyles}>Home</span>
                        <span className={underlineStyle}></span>
                    </Link>
                    <Link className={linkStyle} to="/about">
                        <span className={navStyles}>About</span>
                        <span className={underlineStyle}></span>
                    </Link>
                    <Link className={linkStyle} to="/services">
                        <span className={navStyles}>Services</span>
                        <span className={underlineStyle}></span>
                    </Link>
                    <Link className={linkStyle} to="/portfolio">
                        <span className={navStyles}>Portfolio</span>
                        <span className={underlineStyle}></span>
                    </Link>
                    <Link className={linkStyle} to="/contact">
                        <span className={navStyles}>Contact</span>
                        <span className={underlineStyle}></span>
                    </Link>
                </div>
                <div className="pl-10 pt-10 w-[50%]">
                    <section className="MOBILE-MENU flex lg:hidden">
                        <div className="HAMBURGER-ICON space-y-2 translate-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className={hamburgerIconStyle}></span>
                            <span className={hamburgerIconStyle}></span>
                            <span className={hamburgerIconStyle}></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                            >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            </div>
                            <Link className={linkStyle} to="">
                                <span className={`${navStyles} text-[30px]`}><strong>Work</strong></span>
                                <span className={underlineStyle}></span>
                            </Link>
                            <Link className={linkStyle} to="">
                                <span className={`${navStyles} text-[30px]`}><strong>Think</strong></span>
                                <span className={underlineStyle}></span>
                            </Link>
                            <Link className={linkStyle} to="">
                                <span className={`${navStyles} text-[30px]`}>About</span>
                                <span className={underlineStyle}></span>
                            </Link>
                            <Link className={linkStyle} to="">
                                <span className={`${navStyles} text-[30px]`}>Capabilities</span>
                                <span className={underlineStyle}></span>
                            </Link>
                            <Link className={linkStyle} to="">
                                <span className={`${navStyles} text-[30px]`}>Clients</span>
                                <span className={underlineStyle}></span>
                            </Link>
                            <Link className={linkStyle} to="">
                                <span className={`${navStyles} text-[30px]`}>Testimonials</span>
                                <span className={underlineStyle}></span>
                            </Link>
                            <Link className={linkStyle} to="">
                                <span className={`${navStyles} text-[30px]`}>Contact</span>
                                <span className={underlineStyle}></span>
                            </Link>
                        </div>
                    </section>
                </div>
                <div className="flex justify-end items-center w-[50%] p-5 pt-10">
                    <p className="text-3xl font-bold">Maryland <span className="text-[#00BCD4]">Signs</span></p>
                </div>

                <style>{`
                    .hideMenuNav {
                        display: none;
                    }
                    .showMenuNav {
                        display: block;
                        position: absolute;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background: white;
                        z-index: 100;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                `}</style>
            </nav>
        </div>
    )
}