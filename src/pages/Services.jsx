import ServiceBox from '../components/ServiceBox.jsx'
import person from '../assets/person.jpeg'

const headingStyle = "lg:text-6xl text-5xl font-extrabold"


export default function Services() {
    return (
        <div className="flex flex-col items-center justify-center border-t-1 border-gray-200 pt-15 pb-15">
            <h2 className={headingStyle}>Our <span className="text-[#00BCD4]">Services</span></h2>
            <p className="text-xl w-[50%] text-center text-gray-500 mt-5 mb-15">For over two decades, we've been helping Maryland businesses make their mark with professional signage that commands attention and drives results.</p>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
                <ServiceBox img={person} title="Storefront Signs" description="Make a lasting first impression with professional storefront signage" benefit1="Illuminated channel letters" benefit2="Non-illuminated dimensional letters" benefit3="LED backlit signs" benefit4="Custom design and fabrication" />
                <ServiceBox img={person} title="Storefront Signs" description="Make a lasting first impression with professional storefront signage" benefit1="Illuminated channel letters" benefit2="Non-illuminated dimensional letters" benefit3="LED backlit signs" benefit4="Custom design and fabrication" />
                <ServiceBox img={person} title="Storefront Signs" description="Make a lasting first impression with professional storefront signage" benefit1="Illuminated channel letters" benefit2="Non-illuminated dimensional letters" benefit3="LED backlit signs" benefit4="Custom design and fabrication" />
                <ServiceBox img={person} title="Storefront Signs" description="Make a lasting first impression with professional storefront signage" benefit1="Illuminated channel letters" benefit2="Non-illuminated dimensional letters" benefit3="LED backlit signs" benefit4="Custom design and fabrication" />
                <ServiceBox img={person} title="Storefront Signs" description="Make a lasting first impression with professional storefront signage" benefit1="Illuminated channel letters" benefit2="Non-illuminated dimensional letters" benefit3="LED backlit signs" benefit4="Custom design and fabrication" />
                <ServiceBox img={person} title="Storefront Signs" description="Make a lasting first impression with professional storefront signage" benefit1="Illuminated channel letters" benefit2="Non-illuminated dimensional letters" benefit3="LED backlit signs" benefit4="Custom design and fabrication" />
            </div>
        </div>
    )
}