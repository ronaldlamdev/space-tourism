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

  const [image, setImage] = useState(PortraitVehicle);
  const [name, setName] = useState(Data.technology[0].name);
  const [description, setDescription] = useState(Data.technology[0].description);

  return (
    <div className='technology-bg w-full h-screen'>
      <Navbar />
      <h1 className='text-2xl text-center font-["Barlow"] text-white'><span className='text-white/50 mr-2'>03</span>SPACE LAUNCH 101</h1>
      <div className='flex flex-col'>

        {/* Image Container */}
        <div>
          <img src={image} alt={name}/>
        </div>

        {/* Text Container */}
        <div>
          
          {/* Options */}
          <div className='text-white'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>

          <div className='text-white'>
            <h2>THE TECHNOLOGY</h2>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Technology