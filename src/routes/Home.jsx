import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='home-bg w-full h-screen'>
      <Navbar />
      <div className='text-gray-300 font-["Bellefair"]'>
        <h4>SO, YOU WANT TO TRAVEL TO</h4>
        <h1>SPACE</h1>
        <p>
          Let's face it; if you want to go to space, you might
          as well genuinely go to outer space and not hover kind of on the
          edge of it. Well sit back, and relax because we'll give you 
          a truly out of this world experience!
        </p>
      </div>
    </div>
  )
}

export default Home