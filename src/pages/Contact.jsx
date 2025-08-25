import phone from '../assets/phone.png'
import email from '../assets/email.png'
import message from '../assets/message.png'

const headingStyle = "lg:text-6xl text-5xl font-extrabold mt-10"
const boxStyles = "flex flex-col rounded-xl shadow-xl justify-center items-center gap-2 translate-all duration-400 hover:scale-105"
const contactStyle = "font-extrabold text-xl"
const contactDescription = "font-lg text-gray-400"
const contactButton = "px-4 py-2 rounded w-[250px]"

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center border-t-1 border-gray-200 pb-15">
            <h2 className={headingStyle}>Get In <span className="text-[#00BCD4]">Touch</span></h2>
            <p className="text-xl text-center mt-5 text-gray-500 w-[45%]">Ready to create signage that makes an impact? Contact us for your free consultation and quote.</p>
            <div className="flex flex-col gap-10 lg:flex-row mt-15 mb-15">
                <div className={`${boxStyles} h-[320px] w-[320px]`}>
                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#00BCD4]">
                        <img className="w-[40px] h-[40px]" src={phone} alt="" />    
                    </div>
                    <h3 className={contactStyle}>Call Us Now</h3>
                    <p className={contactDescription}>Speak directly with our team</p>
                    <a href="tel:+14105550123">
                        <button className={`${contactButton} bg-[#00BCD4] text-white hover:bg-blue-500 translate-all duration-300`}>
                            410-296-SIGN
                        </button>
                    </a>
                </div>
                <div className={`${boxStyles} h-[320px] w-[320px]`}>
                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-black">
                        <img className="w-[40px] h-[40px]" src={email} alt="" />    
                    </div>
                    <h3 className={contactStyle}>Email Us Now</h3>
                    <p className={contactDescription}>Speak directly with our team</p>
                    <a href="mailto:jobs@mdsigns.com">
                        <button className={`${contactButton} bg-black text-white hover:bg-gray-500 translate-all duration-300`}>
                            jobs@mdsigns.com
                        </button>
                    </a>
                </div>
                <div className={`${boxStyles} h-[320px] w-[320px]`}>
                    <div className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-green-500">
                        <img className="w-[40px] h-[40px]" src={message} alt="" />    
                    </div>
                    <h3 className={contactStyle}>Call Us Now</h3>
                    <p className={contactDescription}>Speak directly with our team</p>
                    <a href="sms:+14102457739">
                        <button className={`${contactButton} bg-green-500 text-white hover:bg-green-600 translate-all duration-300`}>
                            410-245-7739
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}