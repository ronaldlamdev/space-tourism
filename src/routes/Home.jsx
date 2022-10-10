import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home-bg w-full h-screen'>
      <Navbar />
      <div className='grid grid-cols-1 text-center lg:grid-cols-2 lg:mx-20 lg:my-40'>

        {/* 1st Grid Column */}
        <div className='py-24'>
          <h4 className='font-["Barlow"] text-[#d2d8f9] pb-6 tracking-widest lg:text-3xl lg:px-8'>SO, YOU WANT TO TRAVEL TO</h4>
          <h1 className='font-["Bellefair"] text-white text-8xl lg:text-9xl pb-6'>SPACE</h1>
          <p className='font-["Barlow_Condensed"] text-[#d2d8f9] text-xl lg:text-3xl px-16 md:px-40 lg:px-8'>
            Let's face it; if you want to go to space, you might
            as well genuinely go to outer space and not hover kind of on the
            edge of it. Well sit back, and relax because we'll give you 
            a truly out of this world experience!
          </p>
        </div>

        {/* 2nd Grid Column */}
        <div className='flex justify-center py-24'>
          <div className='bg-[#ffffff] rounded-[50%] w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] flex justify-center items-center hover:shadow-[0px_0px_0px_3rem_hsla(0,0%,100%,0.1)] hover:ease-out duration-300'>
            <Link to="/destination">
              <h2 className='font-["Bellefair"] text-3xl lg:text-4xl'>EXPLORE</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home