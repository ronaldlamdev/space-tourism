import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Data from '../data/data.json'
import AnoushehImage from '../assets/crew/image-anousheh-ansari.png'
import DouglasImage from '../assets/crew/image-douglas-hurley.png'
import MarkImage from '../assets/crew/image-mark-shuttleworth.png'
import VictorImage from '../assets/crew/image-victor-glover.png'

const Crew = () => {

  const [image, setImage] = useState(MarkImage);
  const [name, setName] = useState(Data.crew[0].name);
  const [role, setRole] = useState(Data.crew[0].role);
  const [bio, setBio] = useState(Data.crew[0].bio);

  return (
    <div className='crew-bg w-full h-screen'>
      <Navbar />
      <h1 className='text-2xl font-["Barlow"] text-white text-center'><span className='text-white/50 mr-2'>02</span>MEET YOUR CREW</h1>
      <div className='flex flex-col-reverse justify-center items-center p-4'>

        {/* Text container */}
        <div className='flex flex-col'>

          {/* Options */}
          <div className='flex justify-evenly'>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
            <div className='w-4 h-4 bg-white rounded-full'></div>
          </div>

          <div className='text-white'>
            <h3>{role}</h3>
            <h2>{name}</h2>
            <p>{bio}</p>
          </div>
        </div>

        {/* Image container */}
        <div>
          <img className='w-[250px]' src={image} alt={name}/>
        </div>

      </div>
    </div>
  )
}

export default Crew