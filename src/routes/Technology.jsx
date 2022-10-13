import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import LandScapeVehicle from '../assets/technology/image-launch-vehicle-landscape.jpg';
import PortraitVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import LandScapeCapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import PortraitCapsule from '../assets/technology/image-space-capsule-portrait.jpg';
import LandScapeSpacePort from '../assets/technology/image-spaceport-landscape.jpg';
import PortraitSpacePort from '../assets/technology/image-spaceport-portrait.jpg';
import Data from '../data/data.json';

const Technology = () => {

  const [tech, setTech] = useState(0);
  const [image, setImage] = useState([LandScapeVehicle, PortraitVehicle]);

  const imageHandler = (tech) => {
    (tech === 1) ? setImage([LandScapeCapsule, PortraitCapsule]) :
    (tech === 2) ? setImage([LandScapeSpacePort, PortraitSpacePort]) : 
    setImage([LandScapeVehicle, PortraitVehicle])
  }

  return (
    <div className='technology-bg w-full h-screen'>
      <Navbar />
      <h1 className='text-2xl lg:text-3xl text-center md:text-left font-["Barlow"] pt-8 md:px-4 text-white'><span className='text-white/50 mr-2'>03</span>SPACE LAUNCH 101</h1>
      <div className='flex flex-col lg:flex-row-reverse lg:ml-20 lg:mt-32'>

        {/* Image Container */}
        <div className='py-8 w-full lg:flex lg:justify-end lg:py-0'>
          {/* <img src={image} className="w-full" alt={Data.technology[tech].name}/> */}
          <picture>
            <source srcSet={image[1]} media="(min-width: 1024px)">
            </source>
            <img className='md:w-full lg:h-full' src={image[0]} alt={Data.technology[tech].name}/>
          </picture>
        </div>

        {/* Text Container */}
        <div className='px-4 lg:flex lg:gap-8 lg:items-center'>
          
          {/* Options */}
          <div className='text-white font-["Bellefair"] flex justify-center gap-4 items-center lg:flex-col'>
            <button onClick={() => {setTech(0), imageHandler()}} className={'tech-option' + (tech === 0 ? ' tech-active' : '')}>1</button>
            <button onClick={() => {setTech(1), imageHandler(1)}} className={'tech-option' + (tech === 1 ? ' tech-active' : '')}>2</button>
            <button onClick={() => {setTech(2), imageHandler(2)}} className={'tech-option' + (tech === 2 ? ' tech-active' : '')}>3</button>
          </div>

          <div className='text-white text-center lg:text-left lg:items-start flex flex-col items-center py-8'>
            <h2 className='text-[#d2d8f9] text-2xl lg:text-2xl font-["Barlow"]'>THE TECHNOLOGY...</h2>
            <h1 className='font-["Bellefair"] text-5xl lg:text-6xl'>{Data.technology[tech].name}</h1>
            <p className='font-["Barlow_Condensed"] text-[#d2d8f9] text-2xl py-8'>{Data.technology[tech].description}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Technology