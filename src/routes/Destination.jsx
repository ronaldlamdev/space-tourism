import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import MoonImage from '../assets/destination/image-mars.png';
import MarsImage from '../assets/destination/image-moon.png';
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

  return (

    <div className='destination-bg w-full h-screen'>
      <Navbar />
      <div className='grid grid-cols-1'>

        {/* First grid column */}
        <div className='text-white flex flex-col items-center py-8'>
          <h1 className='text-[1.35rem] font-["Barlow"]'><span className='text-gray-700 mr-2'>01</span>PICK YOUR DESTINATION</h1>
          <img className='w-[250px] my-8' src={image} alt={alt} />
        </div>

        {/* Second grid column */}
        <div className='flex flex-col items-center'>

          {/* Destination options */}
          <ul className='flex text-white w-full justify-evenly'>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </ul>

          <h1 className='text-white'>{name}</h1>
          <p className='text-white'>{description}</p>

          <div className='text-white'>
            <div>
              <h3>AVG DISTANCE</h3>
              <h2>{distance}</h2>
            </div>
            <div>
              <h3>EST TRAVEL TIME</h3>
              <h2>{travel}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Destination