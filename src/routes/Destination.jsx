import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import MoonImage from '../assets/destination/image-moon.png';
import MarsImage from '../assets/destination/image-mars.png';
import EuropaImage from '../assets/destination/image-europa.png';
import TitanImage from '../assets/destination/image-titan.png';
import Data from '../data/data.json';

const Destination = () => {

  const [image, setImage] = useState(MoonImage);
  const [alt, setAlt] = useState(Data.destinations[0].name)
  const [name, setName] = useState(Data.destinations[0].name)
  const [description, setDescription] = useState(Data.destinations[0].description)
  const [distance, setDistance] = useState(Data.destinations[0].distance)
  const [travel, setTravel] = useState(Data.destinations[0].travel)

  // Info for Moon
  const MoonInfo = () => {
    setImage(MoonImage);
    setAlt(Data.destinations[0].name)
    setName(Data.destinations[0].name)
    setDescription(Data.destinations[0].description)
    setDistance(Data.destinations[0].distance)
    setTravel(Data.destinations[0].travel)
  }

  // Info for Mars
  const MarsInfo = () => {
    setImage(MarsImage);
    setAlt(Data.destinations[1].name)
    setName(Data.destinations[1].name)
    setDescription(Data.destinations[1].description)
    setDistance(Data.destinations[1].distance)
    setTravel(Data.destinations[1].travel)
  }

  // Info for Europa
  const EuropaInfo = () => {
    setImage(EuropaImage);
    setAlt(Data.destinations[2].name)
    setName(Data.destinations[2].name)
    setDescription(Data.destinations[2].description)
    setDistance(Data.destinations[2].distance)
    setTravel(Data.destinations[2].travel)
  }

  // Info for Titan
  const TitanInfo = () => {
    setImage(TitanImage);
    setAlt(Data.destinations[3].name)
    setName(Data.destinations[3].name)
    setDescription(Data.destinations[3].description)
    setDistance(Data.destinations[3].distance)
    setTravel(Data.destinations[3].travel)
  }

  return (

    <div className='destination-bg w-full h-full'>
      <Navbar />
      <div className='grid grid-cols-1 px-4'>

        {/* First grid column */}
        <div className='text-white flex flex-col items-center pt-8'>
          <h1 className='text-2xl font-["Barlow"]'><span className='text-white/50 mr-2'>01</span>PICK YOUR DESTINATION</h1>
          <img className='w-[250px] my-8' src={image} alt={alt} />
        </div>

        {/* Second grid column */}
        <div className='flex flex-col items-center h-full justify-evenly text-center'>

          {/* Destination options */}
          <ul className='flex text-xl text-white w-full justify-evenly font-["Barlow_Condensed"] my-6'>
            <li onClick={MoonInfo} className='underline underline-offset-8'>Moon</li>
            <li onClick={MarsInfo}>Mars</li>
            <li onClick={EuropaInfo}>Europa</li>
            <li onClick={TitanInfo}>Titan</li>
          </ul>

          <h1 className='text-white font-["Bellefair"] text-6xl my-4'>{name}</h1>
          <p className='text-[#d2d8f9] font-["Barlow"] text-[1.1rem] my-6'>{description}</p>

          {/* Border */}
          <div className='w-full h-[2px] bg-gray-500'></div>

          <div className='text-white py-8 flex flex-col justify-evenly h-full gap-4'>
            <div className=''>
              <h3 className='text-[#d2d8f9] font-["Barlow"] mb-2'>AVG DISTANCE</h3>
              <h2 className='font-["Bellefair"] text-4xl'>{distance}</h2>
            </div>
            <div>
              <h3 className='text-[#d2d8f9] font-["Barlow"] mb-2'>EST TRAVEL TIME</h3>
              <h2 className='font-["Bellefair"] text-4xl'>{travel}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Destination