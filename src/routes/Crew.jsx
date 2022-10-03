import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Data from '../data/data.json'
import AnoushehImage from '../assets/crew/image-anousheh-ansari.png'
import DouglasImage from '../assets/crew/image-douglas-hurley.png'
import MarkImage from '../assets/crew/image-mark-shuttleworth.png'
import VictorImage from '../assets/crew/image-victor-glover.png'
import { data } from 'autoprefixer'

const Crew = () => {

  const [member, setMember] = useState(0);
  const [image, setImage] = useState(DouglasImage);

  const imageHandler = (member) => {
    (member === 1) ? setImage(MarkImage) :
    (member === 2) ? setImage(VictorImage) :
    (member === 3) ? setImage(AnoushehImage) :
    setImage(DouglasImage)
  }

  return (
    <div className='crew-bg w-full h-screen'>
      <Navbar />
      <h1 className='text-2xl font-["Barlow"] pt-4 text-white text-center'><span className='text-white/50 mr-2'>02</span>MEET YOUR CREW</h1>
      <div className='flex flex-col-reverse justify-center items-center p-4'>

        {/* Text container */}
        <div className='flex flex-col text-center p-4'>

          {/* Options */}
          <div className='flex justify-evenly mx-auto gap-4'>
            <div onClick={() => {setMember(0), imageHandler()}} className={'crew-option' + (member === 0 ? ' crew-active' : '')}></div>
            <div onClick={() => {setMember(1), imageHandler(1)}} className={'crew-option' + (member === 1 ? ' crew-active' : '')}></div>
            <div onClick={() => {setMember(2), imageHandler(2)}} className={'crew-option' + (member === 2 ? ' crew-active' : '')}></div>
            <div onClick={() => {setMember(3), imageHandler(3)}} className={'crew-option' + (member === 3 ? ' crew-active' : '')}></div>
          </div>

          <div className='text-white mt-4'>
            <h3 className='text-white/50 font-["Bellefair"] text-2xl'>{Data.crew[member].role}</h3>
            <h2 className='font-["Bellefair"] text-3xl'>{Data.crew[member].name}</h2>
            <p className='text-[#d2d8f9] mt-4 font-["Barlow_Condensed"] text-xl'>{Data.crew[member].bio}</p>
          </div>
        </div>

        {/* Image container */}
        <div className='border-b-2 border-gray-700 w-full'>
          <img className='w-[280px] h-[330px] mx-auto' src={image} alt={Data.crew[member].name}/>
        </div>

      </div>
    </div>
  )
}

export default Crew