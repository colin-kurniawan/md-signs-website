import person from '../assets/person.jpeg'
import fabricate from '../assets/fabricate.jpg'
import install from '../assets/install.jpg'

const headingStyle = "lg:text-6xl text-5xl font-extrabold"

export default function Services() {
    return (
        <div className="flex flex-col items-center justify-center border-t-1 border-gray-200 pt-15 pb-15">
            <h2 className={headingStyle}>Our <span className="text-[#00BCD4]">Services</span></h2>
            <p className="text-xl w-[50%] text-center text-gray-500 mt-5">For over two decades, we've been helping Maryland businesses make their mark with professional signage that commands attention and drives results.</p>
            <div className="flex flex-col gap-15 justify-center items-center pb-30 pt-15">
                <div className="flex lg:flex-row flex-col justify-center items-center gap-15">
                    <img className="h-[350] w-[550px] rounded-xl shadow-xl" src={install} alt="" />
                    <div className="flex flex-col justify-center items-center tracking-widest leading-widest w-[40%] text-xl">
                        <div className="w-full flex lg:justify-end justify-center">
                            <p className="font-medium text-4xl text-end">Install</p>
                        </div>
                        <br />
                        <p>Installing signs takes skill, planning, and the right tools. Before a sign goes up, the team checks the location for visibility, safety, and code compliance. Surfaces are prepared, equipment is used to lift the sign, and everything is secured with proper hardware. If lighting is needed, electrical connections are made carefully so the sign works reliably in all conditions.</p>
                        <br />
                        <p>A proper installation makes a big difference. Signs that are installed correctly last longer, look better, and stay safe. From storefronts to illuminated channel letters, working with a professional crew ensures the process is smooth and the final product delivers maximum impact for the business.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-15 justify-center items-center pb-30 pt-15">
                <div className="flex lg:flex-row flex-col justify-center items-center gap-15">
                    <div className="flex flex-col justify-center items-center tracking-widest leading-widest w-[40%] text-xl">
                        <div className="w-full flex lg:justify-start justify-center">
                            <p className="font-medium text-4xl">Fabricate</p>
                        </div>
                        <br />
                        <p>Fabricating signs is where design ideas turn into real products. The process involves taking the approved concept and carefully shaping it into a finished piece. Skilled technicians use specialized tools and precise methods to cut, form, and assemble each component. Every detail is handled with care to ensure the final sign is strong, accurate, and ready for installation.</p>
                        <br />
                        <p>Good fabrication means signs not only look great but also stand the test of time. Using durable materials and proper techniques ensures they hold up against weather and daily wear. Whether it’s a large monument sign, custom lettering, or a simple panel, skilled fabrication delivers a professional finish that helps businesses stand out.</p>
                    </div>
                    <img className="h-[350] w-[550px] rounded-xl shadow-xl" src={fabricate} alt="" />
                </div>
            </div>
        </div>
    )
}