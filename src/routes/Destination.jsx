import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import MoonImage from '../assets/destination/image-moon.png';
import MarsImage from '../assets/destination/image-mars.png';
import EuropaImage from '../assets/destination/image-europa.png';
import TitanImage from '../assets/destination/image-titan.png';

const Destination = ({data}) => {

  const [destination, setDestination] = useState(data[0]);
  const [image, setImage] = useState(MoonImage);
  const [active, setActive] = useState(0);

  const handleDestinationInfo = () => {
    setDestination(data[index]);
    setActive(index);

    switch(data[index].name) {
      case 'Moon':
        setImage(MoonImage);
        break;
      case 'Mars':
        setImage(MarsImage);
        break;
      case 'Europa':
        setImage(EuropaImage);
        break;
      case 'Titan':
        setImage(TitanImage);
        break;
    }
  }
  // const [image, setImage] = useState(MoonImage);
  // const [name, setName] = useState(Data.destinations[0].name)
  // const [description, setDescription] = useState(Data.destinations[0].description)
  // const [distance, setDistance] = useState(Data.destinations[0].distance)
  // const [travel, setTravel] = useState(Data.destinations[0].travel)

  // Info for Moon
  // const MoonInfo = () => {
  //   setImage(MoonImage);
  //   setName(Data.destinations[0].name)
  //   setDescription(Data.destinations[0].description)
  //   setDistance(Data.destinations[0].distance)
  //   setTravel(Data.destinations[0].travel)
  // }

  // Info for Mars
  // const MarsInfo = () => {
  //   setImage(MarsImage);
  //   setName(Data.destinations[1].name)
  //   setDescription(Data.destinations[1].description)
  //   setDistance(Data.destinations[1].distance)
  //   setTravel(Data.destinations[1].travel)
  // }

  // Info for Europa
  // const EuropaInfo = () => {
  //   setImage(EuropaImage);
  //   setName(Data.destinations[2].name)
  //   setDescription(Data.destinations[2].description)
  //   setDistance(Data.destinations[2].distance)
  //   setTravel(Data.destinations[2].travel)
  // }

  // Info for Titan
  // const TitanInfo = () => {
  //   setImage(TitanImage);
  //   setName(Data.destinations[3].name)
  //   setDescription(Data.destinations[3].description)
  //   setDistance(Data.destinations[3].distance)
  //   setTravel(Data.destinations[3].travel)
  // }

  return (

    <div className='destination-bg w-full h-screen'>
      <Navbar />
      <div className='grid grid-cols-1 px-4'>

        {/* First grid column */}
        <div className='text-white flex flex-col items-center pt-4'>
          <h1 className='text-2xl font-["Barlow"]'><span className='text-white/50 mr-2'>01</span>PICK YOUR DESTINATION</h1>
          <img className='w-[200px] h-auto py-4' src={image} alt='destination' />
        </div>

        {/* Second grid column */}
        <div className='flex flex-col items-center justify-evenly text-center'>

          {/* Destination options */}
          <ul className='flex text-xl text-white w-full justify-evenly font-["Barlow_Condensed"] py-6'>
            <li onClick={handleDestinationInfo} className="cursor-pointer">Moon</li>
            <li onClick={handleDestinationInfo} className="cursor-pointer">Mars</li>
            <li onClick={handleDestinationInfo} className="cursor-pointer">Europa</li>
            <li onClick={handleDestinationInfo} className="cursor-pointer">Titan</li>
          </ul>

          <h1 className='text-white font-["Bellefair"] text-[3rem]'>{destination.name}</h1>
          <p className='text-[#d2d8f9] font-["Barlow"] text-[1.1rem] py-3'>{destination.description}</p>

          {/* Border */}
          <div className='w-full h-[2px] bg-gray-500'></div>

          <div className='text-white flex flex-col justify-evenly h-full gap-4'>
            <div className=''>
              <h3 className='text-[#d2d8f9] font-["Barlow"]'>AVG DISTANCE</h3>
              <h2 className='font-["Bellefair"] text-4xl py-2'>{destination.distance}</h2>
            </div>
            <div>
              <h3 className='text-[#d2d8f9] font-["Barlow"]'>EST TRAVEL TIME</h3>
              <h2 className='font-["Bellefair"] text-4xl py-2'>{destination.travel}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Destination