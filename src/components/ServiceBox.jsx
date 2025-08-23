import check from '../assets/check.png'

const boxStyles = "flex flex-col rounded-xl shadow-xl justify-center gap-1 translate-all duration-400 hover:scale-105 h-[450px] w-[350px]"
const serviceImg = "w-full h-full rounded-tr-xl rounded-tl-xl"
const serviceTitle = "text-2xl font-extrabold"
const serviceDescription = "text-sm text-gray-400 w-full"
const serviceCheckList = "flex flex-col justify-start gap-3"
const serviceBenefit = "flex flex-row gap-2 text-gray-500"

const ServiceBox = ({ img, title, description, benefit1, benefit2, benefit3, benefit4 }) => {
    return (
        <div className={`${boxStyles}`}>
        <div className="h-[40%]">
                <img className={serviceImg} src={img} alt="" />
            </div>
            <div className="flex flex-col items-start h-[66%] px-7 pt-3 gap-3 text-">
                <h3 className={serviceTitle}>{title}</h3>
                <p className={serviceDescription}>{description}</p>
                <div className={serviceCheckList}>
                    <div className={serviceBenefit}>
                        <img className="h-[25px] w-[25px]" src={check} alt="" />
                        <p>{benefit1}</p>
                    </div>
                    <div className={serviceBenefit}>
                        <img className="h-[25px] w-[25px]" src={check} alt="" />
                        <p>{benefit2}</p>
                    </div>
                    <div className={serviceBenefit}>
                        <img className="h-[25px] w-[25px]" src={check} alt="" />
                        <p>{benefit3}</p>
                    </div>
                    <div className={serviceBenefit}>
                        <img className="h-[25px] w-[25px]" src={check} alt="" />
                        <p>{benefit4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceBox 