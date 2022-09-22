import React, {useState} from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4'>
      <Link to="/">
        <img className='' src={Logo} alt="logo"/>
      </Link>
      <div className=''></div>
      <ul className='hidden'>
        <li>
          <Link to="/"><span>00</span> HOME</Link>
        </li>
        <li>
          <Link to="destination"><span>01</span> DESTINATION</Link>
        </li>
        <li>
          <Link to="/crew"><span>02</span> CREW</Link>
        </li>
        <li>
          <Link to="/technology"><span>03</span> TECHNOLOGY</Link>
        </li>
      </ul>

      <FaBars size={25} className="text-white" />

      {/* Mobile Menu */}

      {/* Overlay */}
      <div className='absolute w-full h-screen top-0 left-0 bg-black/60 hidden'></div>

      <div className='absolute top-0 left-0 right-0 text-white w-full h-screen font-["Barlow_Condensed"] hidden'>
        <AiOutlineClose className='absolute top-[1.65rem] right-[.85rem]' size={30}/>
        <ul className='flex flex-col justify-center items-center w-full h-screen'>
          <li className='py-4 text-2xl'>
            <Link to="/"><span>00</span> HOME</Link>
          </li>
          <li className='py-4 text-2xl'>
            <Link to="destination"><span>01</span> DESTINATION</Link>
          </li>
          <li className='py-4 text-2xl'>
            <Link to="/crew"><span>02</span> CREW</Link>
          </li>
          <li className='py-4 text-2xl'>
            <Link to="/technology"><span>03</span> TECHNOLOGY</Link>
          </li>
        </ul>
      </div>


    </nav>
  )
}

export default Navbar