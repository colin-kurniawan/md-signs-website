import phone from '../assets/phone.png'
import home from '../assets/home.png'
import email from '../assets/email.png'

const smallText = "text-gray-100 font-extralight md:text-lg tracking-wider"
const imageStyle = "w-[25px]"

export default function Footer() {
    return (
        <div className="h-[500px] md:grid grid-rows-2 grid-cols-2 bg-[#0E1527] flex-col pb-15 md:pt-0 pt-10">
            <div className="flex flex-col justify-center items-center row-start-1 col-span-2">
                <span className="text-gray-100 font-bold md:text-4xl text-xl tracking-wider mb-1">FOR MORE DETAILS</span>
                <span className="text-gray-100 font-extralight md:text-3xl tracking-wider">OUR EMPLOYEES ARE AVAILABLE TO ASSIST</span>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-end row-start-2 col-start-1 lg:gap-10 items-center pt-5 lg:pt-0 pb-10 gap-2">
                <p className={`${smallText} w-[75%] leading-loose text-center`}>
                    Have A Question? Feel free to email or call us. If you want an estimate or have a file you need to send us, use our Online Estimate Form.
                </p>
                <div className="flex flex-row gap-3 w-[75%] justify-center items-center">
                    <a className={smallText}>Home</a>
                    <span className={smallText}>/</span>
                    <a className={smallText} href="">Portfolio</a>
                    <span className={smallText}>/</span>
                    <a className={smallText}>About Us</a>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center row-start-2 col-start-2 gap-10 lg:-ml-30 mt-3">
                <div className="flex flex-row gap-3">
                    <img className={imageStyle} src={phone} alt="" />
                    <span className={smallText}>+1 (410) 296-SIGN (7446)</span>
                </div>
                <div className="flex flex-row gap-3">
                    <img className={imageStyle} src={home} alt="" />
                    <span className={smallText}>8 Dunman Way, Dundalk, MD 21222</span>
                </div>
                <div className="flex flex-row gap-3">
                    <img className={imageStyle} src={email} alt="" />
                    <span className={smallText}>jobs@mdsignsgraphics.com</span>
                </div>
            </div>
        </div>
    )
}