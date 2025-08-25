import calendar from '../assets/calendar.png'
import person from '../assets/person.jpeg'
import people from '../assets/people.png'
import award from '../assets/award.png'

const boxStyles = "flex flex-col rounded-xl shadow-xl justify-center items-center gap-1 translate-all duration-400 hover:scale-105"
const aboutTitle = "font-extrabold text-2xl"
const aboutDescription = "text-sm tracking-widest text-center text-gray-500"
const aboutImage = "h-[30px] w-[30px]"
const headingStyle = "lg:text-6xl text-5xl font-extrabold text-center"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center border-t-1 border-gray-200 pt-15">
            <h2 className={headingStyle}>About <span className="text-[#00BCD4]">Maryland Signs</span></h2>
            <p className="text-xl w-[50%] text-center text-gray-500 mt-5">For over two decades, we've been helping Maryland businesses make their mark with professional signage that commands attention and drives results.</p>
            <div className="flex lg:flex-row flex-col gap-5 m-5 mb-40">
                <div className={`${boxStyles} w-[260px] h-[200px]`}>
                    <div className="w-[50px] h-[50px] bg-[#00BCD4] rounded-full flex justify-center items-center">
                        <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    </div>
                    <h3 className={aboutTitle}>15+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
                <div className={`${boxStyles} w-[260px] h-[200px]`}>
                    <div className="w-[50px] h-[50px] bg-[#00BCD4] rounded-full flex justify-center items-center">
                        <img className={aboutImage} src={people} alt="calendar.jpeg" />
                    </div>
                    <h3 className={aboutTitle}>500+</h3>
                    <p className={aboutDescription}>Happy Clients</p>
                </div>
                <div className={`${boxStyles} w-[260px] h-[200px]`}>
                    <div className="w-[50px] h-[50px] bg-[#00BCD4] rounded-full flex justify-center items-center">
                        <img className={aboutImage} src={award} alt="calendar.jpeg" />
                    </div>
                    <h3 className={aboutTitle}>200+</h3>
                    <p className={aboutDescription}>Jobs Completed</p>
                </div>
            </div>
            <div className="flex flex-col gap-15 justify-center items-center pb-30 pt-15 bg-gray-100">
                <h2 className={headingStyle}>Our <span className="text-[#00BCD4]">Story</span></h2>
                <div className="flex lg:flex-row flex-col justify-center items-center gap-15">
                    <img className="h-[350] w-[550px] rounded-xl shadow-xl" src={person} alt="" />
                    <div className="flex flex-col justify-center items-center tracking-widest leading-widest w-[40%] text-xl">
                        <p>Maryland Signs and Graphics belongs to Sign Biz Network, a nearly 200 worldwide chain of independently-owned sign businesses. We are also a woman owned and minority business enterprise (certifications pending)</p>
                        <br />
                        <p>We aim to provide affordable commercial solutions without the usual overhead of a large manufacturing staff or installation fleet. Check our product gallery, give us a call or simply stop by at our full service shop in Towson to check out our neat graphics and other products. While there, ask us what solutions we have for your signs and graphics needs</p>
                    </div>
                </div>
            </div>
            
            {/*
            <h2 className={`${headingStyle} mt-15`}>Our <span className="text-[#00BCD4]">Values</span></h2>
            <p className="text-xl w-[50%] text-center text-gray-500 mt-5">These core principles guide everything we do, from initial consultation to final installation.</p>
            <div className="flex lg:flex-row flex-col gap-5 m-5">
                <div className={`${boxStyles} w-[250px] h-[300px] p-5`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>Precision</h3>
                    <p className={aboutDescription}>Every measurement, every cut, every installation is executed with meticulous attention to detail.</p>
                </div>
                <div className={`${boxStyles} w-[250px] h-[300px] p-5`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>Innovation</h3>
                    <p className={aboutDescription}>We stay ahead of industry trends, using cutting-edge technology and materials.</p>
                </div>
                <div className={`${boxStyles} w-[250px] h-[300px] p-5`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>Partnership</h3>
                    <p className={aboutDescription}>We build lasting relationships with our clients, becoming their trusted signage partner.</p>
                </div>
                <div className={`${boxStyles} w-[250px] h-[300px] p-5`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>Reliability</h3>
                    <p className={aboutDescription}>When we commit to a timeline and quality standard, you can count on us to deliver.</p>
                </div>
            </div>
            */}
        </div>
    )
}