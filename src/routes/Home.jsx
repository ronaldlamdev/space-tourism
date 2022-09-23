import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home-bg w-full h-screen'>
      <Navbar />
      <div className=''>
        <div className=''>
          <h4 className='font-["Barlow"] text-gray-300'>SO, YOU WANT TO TRAVEL TO</h4>
          <h1 className='font-["Bellefair"] text-white'>SPACE</h1>
          <p className='font-["Barlow_Condensed"] text-gray-300'>
            Let's face it; if you want to go to space, you might
            as well genuinely go to outer space and not hover kind of on the
            edge of it. Well sit back, and relax because we'll give you 
            a truly out of this world experience!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home