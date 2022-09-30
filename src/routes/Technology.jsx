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

  const [image, setImage] = useState(LandScapeVehicle);
  const [name, setName] = useState(Data.technology[0].name);
  const [description, setDescription] = useState(Data.technology[0].description);

  const VehicleInfo = () => {
    setImage(LandScapeVehicle);
    setName(Data.technology[0].name);
    setDescription(Data.technology[0].description);
  }

  const CapsuleInfo = () => {
    setImage(LandScapeCapsule);
    setName(Data.technology[1].name);
    setDescription(Data.technology[1].description);
  }

  const SpacePortInfo = () => {
    setImage(LandScapeSpacePort);
    setName(Data.technology[2].name);
    setDescription(Data.technology[2].description);
  }

  return (
    <div className='technology-bg w-full h-screen'>
      <Navbar />
      <h1 className='text-2xl text-center font-["Barlow"] text-white'><span className='text-white/50 mr-2'>03</span>SPACE LAUNCH 101</h1>
      <div className='flex flex-col'>

        {/* Image Container */}
        <div className='py-8'>
          <img src={image} alt={name}/>
        </div>

        {/* Text Container */}
        <div className='px-4'>
          
          {/* Options */}
          <div className='text-white font-["Bellefair"] flex justify-center gap-4 items-center'>
            <button onClick={VehicleInfo} className='w-12 h-12 text-xl rounded-full border flex items-center justify-center cursor-pointer bg-white border-[#ffffff40] text-black'>1</button>
            <button onClick={CapsuleInfo} className='w-12 h-12 text-xl rounded-full border flex items-center justify-center cursor-pointer border-[#ffffff40]'>2</button>
            <button onClick={SpacePortInfo} className='w-12 h-12 text-xl rounded-full border flex items-center justify-center cursor-pointer border-[#ffffff40]'>3</button>
          </div>

          <div className='text-white text-center flex flex-col items-center py-8'>
            <h2 className='text-[#d2d8f9] font-["Barlow"]'>THE TECHNOLOGY...</h2>
            <h1 className='font-["Bellefair"] text-4xl'>{name}</h1>
            <p className='font-["Barlow_Condensed"] text-[#d2d8f9] text-xl py-8'>{description}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Technology