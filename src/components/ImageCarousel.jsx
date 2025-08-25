import './ImageCarousel.css';
import truck from '../assets/truck.jpg';
import Countdown from '../components/Countdown'
import { Link } from 'react-router-dom'
import boxLunch from '../assets/portfolio/boxLunch.jpeg'
import wingStop from '../assets/portfolio/wingStop.jpeg'
import rosedale from '../assets/portfolio/rosedale.jpeg'
import homeDepot2 from '../assets/portfolio/homeDepot2.jpeg'
import groceryOutlet from '../assets/portfolio/groceryOutlet.jpeg'

const images = [boxLunch, wingStop, rosedale, homeDepot2, groceryOutlet];

const ImageCarousel = () => {
  return (
    <div className="carousel relative z-0 h-[640px]">
      <div className="carousel-track">
        {images.map((img, idx) => (
        <img key={idx} src={img} alt={`carousel-${idx}`} />
        ))}
        <div className="absolute inset-0 bg-blue-950/40 z-10"></div>
        {images.map((img, idx) => (
        <img key={idx + images.length} src={img} alt={`carousel-duplicate-${idx}`} />
        ))}
        <div className="absolute inset-0 bg-blue-950/40 z-10"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col z-10" style={{ fontFamily: 'sans-serif, Orbitron', fontSize: '6rem' }}>
        <div className="w-full flex justify-center items-center">
          <Countdown />
        </div>
        <div className="flex items-center justify-center text-center px-4 w-full">
          <p className="text-white text-2xl md:text-4xl lg:text-6xl leading-snug font-extrabold">
            You've got only <span className="text-[#00BCD4]">3 SECONDS</span> to make an impression.
          </p>
        </div>
        <div className="flex justify-center items-center m-3">
          <p className="text-lg md:text-xl text-white font-medium">
            Your sign better be <span className="text-[#00BCD4]"><strong className="text-3xl">CUT OUT</strong></span> for it
          </p>
        </div>
        <div className="flex justify-center items-center m-3">
          <Link className="flex justify-center items-center bg-[#00BCD4] rounded-3xl text-white w-[300px] h-[50px] text-2xl font-bold hover:bg-blue-300 transition-all duration-300" to="/about">Learn More About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;