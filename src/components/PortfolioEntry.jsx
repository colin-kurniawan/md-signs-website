const boxStyles = "flex flex-col rounded-xl shadow-xl justify-center gap-1 translate-all duration-400 hover:scale-105 h-[300px] w-[350px]"
const portfolioImg = "w-full h-full rounded-tr-xl rounded-tl-xl"
const portfolioTitle = "text-2xl font-extrabold"
const productStyle = "text-base text-gray-500 w-full"

const PortfolioEntry = ({ img, title }) => {
    return (
        <div className={`${boxStyles}`}>
            <div className="h-[75%]">
                <img className={portfolioImg} src={img} alt="" />
            </div>
            <div className="flex flex-col items-start h-[66%] px-7 pt-3 gap-3 mt-1">
                <h3 className={portfolioTitle}>{title}</h3>
            </div>
        </div>
    )
}

export default PortfolioEntry 