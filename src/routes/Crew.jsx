import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Data from '../data/data.json'
import AnoushehImage from '../assets/crew/image-anousheh-ansari.png'
import DouglasImage from '../assets/crew/image-douglas-hurley.png'
import MarkImage from '../assets/crew/image-mark-shuttleworth.png'
import VictorImage from '../assets/crew/image-victor-glover.png'

const Crew = () => {

  const [image, setImage] = useState(DouglasImage);
  const [name, setName] = useState(Data.crew[0].name);
  const [role, setRole] = useState(Data.crew[0].role);
  const [bio, setBio] = useState(Data.crew[0].bio);

  const DouglasInfo = () => {
    setImage(DouglasImage);
    setName(Data.crew[0].name);
    setRole(Data.crew[0].role);
    setBio(Data.crew[0].bio);
  }

  const MarkInfo = () => {
    setImage(MarkImage);
    setName(Data.crew[1].name);
    setRole(Data.crew[1].role);
    setBio(Data.crew[1].bio);
  }

  const VictorInfo = () => {
    setImage(VictorImage);
    setName(Data.crew[2].name);
    setRole(Data.crew[2].role);
    setBio(Data.crew[2].bio);
  }

  const AnoushehInfo = () => {
    setImage(AnoushehImage);
    setName(Data.crew[3].name);
    setRole(Data.crew[3].role);
    setBio(Data.crew[3].bio);
  }

  return (
    <div className='crew-bg w-full h-screen'>
      <Navbar />
      <h1 className='text-2xl font-["Barlow"] text-white text-center'><span className='text-white/50 mr-2'>02</span>MEET YOUR CREW</h1>
      <div className='flex flex-col-reverse justify-center items-center p-4'>

        {/* Text container */}
        <div className='flex flex-col text-center p-4'>

          {/* Options */}
          <div className='flex justify-evenly mx-auto gap-4'>
            <div onClick={DouglasInfo} className='w-3 h-3 bg-white rounded-full cursor-pointer'></div>
            <div onClick={MarkInfo} className='w-3 h-3 bg-gray-600 rounded-full cursor-pointer'></div>
            <div onClick={VictorInfo} className='w-3 h-3 bg-gray-600 rounded-full cursor-pointer'></div>
            <div onClick={AnoushehInfo} className='w-3 h-3 bg-gray-600 rounded-full cursor-pointer'></div>
          </div>

          <div className='text-white mt-4'>
            <h3 className='text-white/50 font-["Bellefair"] text-2xl'>{role}</h3>
            <h2 className='font-["Bellefair"] text-3xl'>{name}</h2>
            <p className='text-[#d2d8f9] mt-4 font-["Barlow_Condensed"] text-xl'>{bio}</p>
          </div>
        </div>

        {/* Image container */}
        <div className='border-b-2 border-gray-700 w-full'>
          <img className='w-[290px] h-[340px] mx-auto' src={image} alt={name}/>
        </div>

      </div>
    </div>
  )
}

export default Crew