import PortfolioEntry from '../components/PortfolioEntry.jsx'
import bd from '../assets/portfolio/black&Decker.jpeg'
import boxLunch from '../assets/portfolio/boxLunch.jpeg'
import checkCashing from '../assets/portfolio/checkCashing.jpeg'
import church from '../assets/portfolio/church.jpeg'
import golfGalaxy from '../assets/portfolio/golfGalaxy.jpeg'
import golfGalaxy2 from '../assets/portfolio/golfGalaxy2.jpeg'
import golfGalaxy3 from '../assets/portfolio/golfGalaxy3.jpeg'
import groceryOutlet from '../assets/portfolio/groceryOutlet.jpeg'
import homeDepot from '../assets/portfolio/homeDepot.jpeg'
import homeDepot2 from '../assets/portfolio/homeDepot2.jpeg'
import homeDepot3 from '../assets/portfolio/homeDepot3.jpeg'
import labcrop from '../assets/portfolio/labcorp.jpeg'
import marinerFinance from '../assets/portfolio/marinerFinance.jpeg'
import rosedale from '../assets/portfolio/rosedale.jpeg'
import tmobile from '../assets/portfolio/tmobile.jpeg'
import totalWireless from '../assets/portfolio/totalWireless.jpeg'
import totalWireless2 from '../assets/portfolio/totalWireless2.jpeg'
import unitedWay from '../assets/portfolio/unitedWay.jpeg'
import unitedWay2 from '../assets/portfolio/unitedWay2.jpeg'
import walgreens from '../assets/portfolio/walgreens.jpeg'
import wingStop from '../assets/portfolio/wingStop.jpeg'

const headingStyle = "lg:text-6xl text-5xl font-extrabold"

export default function Portfolio() {
    return (
        <div className="flex flex-col items-center justify-center border-t-1 border-gray-200 pt-15 pb-15">
            <h2 className={headingStyle}>Our <span className="text-[#00BCD4]">Portfolio</span></h2>
            <p className="text-xl w-[50%] text-center text-gray-500 mt-5 mb-15">Below are just a few of our happy client's work below. </p>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
                <PortfolioEntry img={bd} title="Black & Decker" />
                <PortfolioEntry img={boxLunch} title="BoxLunch" />
                <PortfolioEntry img={checkCashing} title="Check & Cashing" />
                <PortfolioEntry img={church} title="Christ Apostolic Church" />
                <PortfolioEntry img={golfGalaxy} title="Golf Galaxy" />
                <PortfolioEntry img={golfGalaxy2} title="Golf Galaxy" />
                <PortfolioEntry img={golfGalaxy3} title="Golf Galaxy" />
                <PortfolioEntry img={groceryOutlet} title="Grocery Outlet" />
                <PortfolioEntry img={homeDepot} title="Home Depot" />
                <PortfolioEntry img={homeDepot2} title="Home Depot" />
                <PortfolioEntry img={homeDepot3} title="Home Depot" />
                <PortfolioEntry img={labcrop} title="LabCorp" />
                <PortfolioEntry img={marinerFinance} title="Mariner Finance" />
                <PortfolioEntry img={rosedale} title="Rosedale Plaza" />
                <PortfolioEntry img={tmobile} title="T-Mobile" />
                <PortfolioEntry img={totalWireless} title="Total Wireless" />
                <PortfolioEntry img={totalWireless2} title="Total Wireless" /> 
                <PortfolioEntry img={unitedWay} title="United Way" />
                <PortfolioEntry img={unitedWay2} title="United Way" />
                <PortfolioEntry img={walgreens} title="Walgreens" />
                <PortfolioEntry img={wingStop} title="Wingstop" />
            </div>
        </div>
    )
}