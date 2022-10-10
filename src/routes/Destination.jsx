import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import MoonImage from '../assets/destination/image-moon.png';
import MarsImage from '../assets/destination/image-mars.png';
import EuropaImage from '../assets/destination/image-europa.png';
import TitanImage from '../assets/destination/image-titan.png';
import Data from '../data/data.json'

const Destination = () => {

  const [destination, setDestination] = useState(0);
  const [image, setImage] = useState(MoonImage);

  const imageHandler = (destination) => {
    (destination === 1) ? setImage(MarsImage) :
    (destination === 2) ? setImage(EuropaImage) :
    (destination === 3) ? setImage(TitanImage) :
    setImage(MoonImage)
  }

  return (

    <div className='destination-bg w-full h-screen'>
      <Navbar />
      <div className='grid grid-cols-1 px-4 w-full lg:grid-cols-2'>

        {/* First grid column */}
        <div className='text-white flex flex-col items-center w-full pt-4 md:pt-8'>
          <h1 className='text-2xl lg:text-3xl font-["Barlow"] md:self-start lg:self-center'><span className='text-white/50 mr-2'>01</span>PICK YOUR DESTINATION</h1>
          <img className='w-[200px] md:w-[300px] lg:w-[400px] h-auto py-12' src={image} alt={Data.destinations[destination].name} />
        </div>

        {/* Second grid column */}
        <div className='flex flex-col items-center justify-evenly text-center lg:text-left lg:mr-20'>

          {/* Destination options */}
          <ul className='flex text-2xl md:text-2xl lg:text-3xl justify-evenly lg:justify-start text-white w-full font-["Barlow_Condensed"] py-3 md:justify-center md:gap-20 lg:gap-16'>
            <li onClick={() => {setDestination(0), imageHandler()}} className={'dest-option' + (destination === 0 ? ' dest-active' : "")}>Moon</li>
            <li onClick={() => {setDestination(1), imageHandler(1)}} className={'dest-option' + (destination === 1 ? ' dest-active' : "")}>Mars</li>
            <li onClick={() => {setDestination(2), imageHandler(2)}} className={'dest-option' + (destination === 2 ? ' dest-active' : "")}>Europa</li>
            <li onClick={() => {setDestination(3), imageHandler(3)}} className={'dest-option' + (destination === 3 ? ' dest-active' : "")}>Titan</li>
          </ul>

          <h1 className='text-white font-["Bellefair"] text-[2.3rem] text-6xl lg:text-8xl py-5 lg:self-start md:py-4'>{Data.destinations[destination].name}</h1>
          <p className='text-[#d2d8f9] font-["Barlow"] pb-6 px-12 md:px-28 lg:px-0 lg:pr-28 md:text-xl lg:text-2xl'>{Data.destinations[destination].description}</p>

          {/* Border */}
          <div className='w-full h-[2px] bg-gray-500'></div>

          <div className='text-white flex flex-col lg:w-full lg:flex-row justify-evenly lg:justify-between gap-4 lg:gap-0 py-20 md:py-8'>
            <div>
              <h3 className='text-[#d2d8f9] font-["Barlow"] lg:text-4xl'>AVG DISTANCE</h3>
              <h2 className='font-["Bellefair"] text-[1.75rem] lg:text-[2.5rem]'>{Data.destinations[destination].distance}</h2>
            </div>
            <div>
              <h3 className='text-[#d2d8f9] font-["Barlow"] lg:text-4xl'>EST TRAVEL TIME</h3>
              <h2 className='font-["Bellefair"] text-[1.75rem] lg:text-[2.5rem]'>{Data.destinations[destination].travel}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Destination