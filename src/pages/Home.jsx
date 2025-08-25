import ImageCarousel from '../components/ImageCarousel'
import magnifyingGlass from '../assets/magnifyingGlass.png'
import truck from '../assets/truck.png'
import brush from '../assets/brush.png'
import wrench from '../assets/wrench.png'
import { useState } from 'react'
import person from '../assets/person.jpeg'
import check from '../assets/check.png'
import { Link } from 'react-router-dom'

const circleStyle = "flex justify-center items-center rounded-full h-50 w-50 border-gray-500 border-2 translate-all duration-300 hover:bg-gray-200"
const boxStyles = "rounded-xl w-[450px] h-auto bg-white flex flex-col justify-center items-center gap-2 p-7 translate-all duration-500 hover:translate-y-1 hover:bg-gray-300 group"
const clientBoxes = "rounded-xl w-[350px] h-[50px] h-auto bg-white flex flex-col justify-center items-center shadow-lg p-7"

export default function Home() {
    const [title, setTitle] = useState("Survey")
    const [description, setDescription] = useState("We begin most projects by creating a survey. Whether your location is near or far we will come to you to make sure your sign package is the absolute best that it can be.")
    const [activeIndex, setActiveIndex] = useState(false)
    const circles = [
        {title: "Survey", image: magnifyingGlass, text: "We begin most projects by creating a survey. Whether your location is near or far we will come to you to make sure your sign package is the absolute best that it can be."},
        {title: "Design", image: brush, text: "Our graphic designers will find the best option for you. They will work closely with you to make sure that the final design and scope of your project is optimized and represents your brand to the fullest."},
        {title:"Fabricate", image: wrench, text: "We use only the most advanced technologies to bring your signs to fruition. With bleeding-edge technologies and equipment, our fabrication department makes sure that your sign makes the transition from concept to reality."},
        {title:"Install", image: truck, text: "Our Installation team will make sure that your signs look the best they can once finally in place. Our installation practices make sure your signs will be up for years to come. From large building signs to small indoor signs, we'll install it all!"}
    ]

    return (
        <div>
            <ImageCarousel />
            
            {/* 
            <div className="flex flex-col justify-center items-center bg-gray-100 pt-30 pb-30">
                <h2 className="md:text-5xl text-2xl font-extrabold">Signs That <span className="text-[#00BCD4]">Demand</span> Attention</h2>
                <p className="mt-5 text-gray-600">From concept to installation, we create impactful signage that makes your business impossible to ignore.</p>
                <div className=" flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6 m-5">
                    <div className={`${boxStyles}`}>
                        <img className="h-[25px] w-[25px]" src={brush} alt="" />
                        <h2 className="font-extrabold text-black group-hover:text-[#00BCD4]">StoreFront Signs</h2>
                        <p className="text-gray-600 text-center">Professional illuminated and non-illuminated storefront signage</p>
                    </div>
                    <div className={`${boxStyles}`}>
                        <img className="h-[25px] w-[25px]" src={brush} alt="" />
                        <h2 className="font-extrabold text-black group-hover:text-[#00BCD4]">StoreFront Signs</h2>
                        <p className="text-gray-600 text-center">Professional illuminated and non-illuminated storefront signage</p>
                    </div>
                    <div className={`${boxStyles}`}>
                        <img className="h-[25px] w-[25px]" src={brush} alt="" />
                        <h2 className="font-extrabold text-black group-hover:text-[#00BCD4]">StoreFront Signs</h2>
                        <p className="text-gray-600 text-center">Professional illuminated and non-illuminated storefront signage</p>
                    </div>
                    <div className={`${boxStyles}`}>
                        <img className="h-[25px] w-[25px]" src={brush} alt="" />
                        <h2 className="font-extrabold text-black group-hover:text-[#00BCD4]">StoreFront Signs</h2>
                        <p className="text-gray-600 text-center">Professional illuminated and non-illuminated storefront signage</p>
                    </div>
                </div>
            </div>
            */}

            <div className="flex flex-col gap-15 justify-center items-center pb-30 pt-30 bg-gray-100">
                <h2 className="font-extrabold lg:text-5xl text-4xl">Why <span className="text-[#00BCD4]">Maryland</span> Businesses <span className="text-[#00BCD4]">Choose</span> Us</h2>
                <div className="flex lg:flex-row flex-col justify-center items-center gap-10 lg:gap-50">
                    <div className="flex flex-col gap-7">
                        <div className="flex flex-row gap-3 items-center tracking-widest">
                            <img className="w-[25px] h-[25px]" src={check} alt="" />
                            <p className="text-xl">15+ years of sign industry experience</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center tracking-widest">
                            <img className="w-[25px] h-[25px]" src={check} alt="" />
                            <p className="text-xl">Full-service: design, fabrication, installation</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center tracking-widest">
                            <img className="w-[25px] h-[25px]" src={check} alt="" />
                            <p className="text-xl">Premium materials with warranties</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center tracking-widest">
                            <img className="w-[25px] h-[25px]" src={check} alt="" />
                            <p className="text-xl">Fast Turnaround Times</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center tracking-widest">
                            <img className="w-[25px] h-[25px]" src={check} alt="" />
                            <p className="text-xl">Serving Maryland & Beyond</p>
                        </div>
                        <div className="flex justify-center items-center w-[300px] h-[50px] bg-blue-950 rounded-xl hover:bg-blue-800 translate-all duration-300 ml-15 mt-5">
                            <Link className="text-white tracking-wide font-bold" to="/about">Learn More About Us</Link>
                        </div>
                    </div>
                    <img className="h-[350] w-[550px] rounded-xl shadow-xl" src={person} alt="" />
                </div>
            </div>
            {/*
            <div className="flex flex-col justify-center items-center pt-30 pb-30 gap-10 bg-white">
                <h2 className="font-extrabold lg:text-5xl text-4xl">What Our <span className="text-[#00BCD4]">Clients</span> Say</h2>
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5">
                    <div className={clientBoxes}>
                        <div className="text-[#00BCD4]">★★★★★</div>
                        <p className="italic text-center">"Quote words words words words wrods rowrdssd"</p>
                        <h2 className="font-extrabold text-black">Person's Name</h2>
                        <p className="text-gray-600 text-center">Their business</p>
                    </div>
                    <div className={clientBoxes}>
                    <div className="text-[#00BCD4]">★★★★★</div>
                        <p className="italic text-center">"Quote words words words words wrods rowrdssd"</p>
                        <h2 className="font-extrabold text-black">Person's Name</h2>
                        <p className="text-gray-600 text-center">Their business</p>
                    </div>
                    <div className={clientBoxes}>
                    <div className="text-[#00BCD4]">★★★★★</div>
                        <p className="italic text-center">"Quote words words words words wrods rowrdssd"</p>
                        <h2 className="font-extrabold text-black">Person's Name</h2>
                        <p className="text-gray-600 text-center">Their business</p>
                    </div>        
                </div>
            </div>
            */}
            <div className="flex flex-col gap-10 pt-30 pb-30 bg-white">
                <span className="text-6xl font-extrabold pl-20 tracking-widest">Our <span className="text-[#00BCD4]">Process</span></span>
                <div className="flex flex-row gap-3 pl-20 w-[90%]">
                    <span className="text-black tracking-widest font-bold text-2xl">HOW WE WORK</span>
                    <hr className="lg:block border-t-1 border-black w-[80%] my-4 ml-5 hidden" />
                </div>
                <div className="flex flex-col gap-5 lg:flex-row lg:gap-15 justify-center items-center md:gap-10">
                    {circles.map((circle, index) => (
                        <div key={index} 
                            className={`${circleStyle} ${ activeIndex == index ? "bg-gray-400" : "bg-white"}`} 
                            onClick={() => {
                                setActiveIndex(index)
                                setTitle(circle.title)
                                setDescription(circle.text)
                            }}>
                        <img className="w-[80px]" src={circle.image} alt="" />
                        </div>
                    ))}
                </div>
                <p className="pl-20 font-black text-3xl tracking-widest text-[#00BCD4]">{title}</p>
                <p className="pl-20 font-light -my-8 w-[90%] leading-loose text-xl text-black">{description}</p>
            </div>
        </div>
    )
}