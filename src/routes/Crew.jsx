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
      <h1 className='text-2xl lg:text-3xl font-["Barlow"] pt-8 text-white text-center md:text-left md:px-4'><span className='text-white/50 mr-2'>02</span>MEET YOUR CREW</h1>
      <div className='flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:mt-20 justify-center items-center lg:mx-20'>

        {/* Image container */}
        <div className='border-b-2 border-gray-700 w-full mt-6'>
          <img className='w-[280px] md:w-[21rem] lg:w-[30rem] h-[330px] md:h-auto mx-auto' src={image} alt={Data.crew[member].name}/>
        </div>

        {/* Text container */}
        <div className='flex flex-col md:flex-col-reverse text-center lg:text-left p-4'>

          {/* Options */}
          <div className='flex justify-evenly mx-auto py-8 gap-4'>
            <div onClick={() => {setMember(0), imageHandler()}} className={'crew-option' + (member === 0 ? ' crew-active' : '')}></div>
            <div onClick={() => {setMember(1), imageHandler(1)}} className={'crew-option' + (member === 1 ? ' crew-active' : '')}></div>
            <div onClick={() => {setMember(2), imageHandler(2)}} className={'crew-option' + (member === 2 ? ' crew-active' : '')}></div>
            <div onClick={() => {setMember(3), imageHandler(3)}} className={'crew-option' + (member === 3 ? ' crew-active' : '')}></div>
          </div>

          <div className='text-white mt-4'>
            <h3 className='text-white/50 font-["Bellefair"] text-4xl lg:text-6xl'>{Data.crew[member].role}</h3>
            <h2 className='font-["Bellefair"] text-[2.5rem] lg:text-[4rem]'>{Data.crew[member].name}</h2>
            <p className='text-[#d2d8f9] mt-4 px-8 lg:px-0 font-["Barlow_Condensed"] text-[1.5rem] lg:text-2xl'>{Data.crew[member].bio}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Crew