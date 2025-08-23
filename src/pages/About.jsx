import calendar from '../assets/calendar.jpeg'
import person from '../assets/person.jpeg'

const boxStyles = "flex flex-col rounded-xl shadow-xl justify-center items-center gap-1 translate-all duration-400 hover:scale-105"
const aboutTitle = "font-extrabold text-2xl"
const aboutDescription = "text-md tracking-widest text-center"
const aboutImage = "h-[60px] w-[65px]"
const headingStyle = "lg:text-6xl text-5xl font-extrabold"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center border-t-1 border-gray-200 pt-30 pb-15">
            <h2 className={headingStyle}>About <span className="text-[#00BCD4]">Maryland Signs</span></h2>
            <p className="text-xl w-[50%] text-center text-gray-500 mt-5">For over two decades, we've been helping Maryland businesses make their mark with professional signage that commands attention and drives results.</p>
            <div className="flex lg:flex-row flex-col gap-5 m-5 mb-40">
                <div className={`${boxStyles} w-[260px] h-[200px]`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>20+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
                <div className={`${boxStyles} w-[260px] h-[200px]`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>20+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
                <div className={`${boxStyles} w-[260px] h-[200px]`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>20+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
                <div className={`${boxStyles} w-[260px] h-[200px]`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>20+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
            </div>
            <div className="flex flex-col gap-15 justify-center items-center pb-30 pt-15 bg-gray-100">
                <h2 className={headingStyle}>Our <span className="text-[#00BCD4]">Story</span></h2>
                <div className="flex lg:flex-row flex-col justify-center items-center gap-15">
                    <img className="h-[350] w-[550px] rounded-xl shadow-xl" src={person} alt="" />
                    <div className="flex flex-col justify-center items-center tracking-widest leading-widest w-[40%] text-xl">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, possimus. Laborum quam sint earum suscipit, debitis obcaecati doloribus dolores perferendis sapiente nulla eaque, ea dolorum, non minima? Consequatur, ea beatae?</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero distinctio sunt ipsum beatae praesentium impedit iste unde? Recusandae fugiat, nesciunt cum iure, error ducimus deleniti reprehenderit perspiciatis commodi modi autem?</p>
                    </div>
                </div>
            </div>
            <h2 className={`${headingStyle} mt-15`}>Our <span className="text-[#00BCD4]">Values</span></h2>
            <p className="text-xl w-[50%] text-center text-gray-500 mt-5">These core principles guide everything we do, from initial consultation to final installation.</p>
            <div className="flex lg:flex-row flex-col gap-5 m-5">
                <div className={`${boxStyles} w-[250px] h-[300px]`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>20+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
                <div className={`${boxStyles} w-[250px] h-[300px]`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>20+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
                <div className={`${boxStyles} w-[250px] h-[300px]`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>20+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
                <div className={`${boxStyles} w-[250px] h-[300px]`}>
                    <img className={aboutImage} src={calendar} alt="calendar.jpeg" />
                    <h3 className={aboutTitle}>20+</h3>
                    <p className={aboutDescription}>Years of Experience</p>
                </div>
            </div>
        </div>
    )
}