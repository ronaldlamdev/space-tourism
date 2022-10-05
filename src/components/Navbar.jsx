import React, {useState} from 'react'
import Logo from '../assets/logo.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {


  // styling for NavLinks
  const activeLink = "mr-8 relative flex items-center h-full mobile-link-active";
  const normalLink = "mr-8 relative flex items-center h-full mobile-link-hover duration-300";

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <nav className='flex justify-between items-center p-4 md:p-0'>
      <Link exact to="/" end>
        <img className='cursor-pointer md:p-4' src={Logo} alt="logo"/>
      </Link>
      <div></div>
      <ul className='hidden md:flex px-12 justify-evenly text-xl items-center font-["Barlow_Condensed"] text-white bg-[#ffffff0a]/5 backdrop-blur-3xl h-[80px]'>
        <NavLink exact className={({isActive}) => (isActive ? activeLink : normalLink)} to="/" end><span className='hidden'>00</span> HOME</NavLink>
        <NavLink className={({isActive}) => (isActive ? activeLink : normalLink)} to="/destination"><span className='hidden'>01</span> DESTINATION</NavLink>
        <NavLink className={({isActive}) => (isActive ? activeLink : normalLink)} to="/crew"><span className='hidden'>02</span> CREW</NavLink>
        <NavLink className={({isActive}) => (isActive ? activeLink : normalLink)} to="/technology"><span className='hidden'>03</span> TECHNOLOGY</NavLink>
      </ul>

      <FaBars onClick={handleNav} size={25} className={!nav ? 'block text-white cursor-pointer hover:text-[#a9b5f7] duration-300 md:hidden' : 'hidden'} />

      {/* Mobile Menu */}

      {/* Overlay */}
      <div className={nav ? 'absolute w-full h-screen top-0 left-0 bg-black/40 backdrop-blur-2xl block md:hidden' : 'absolute w-full h-screen top-0 left-0 bg-black/60 hidden'}></div>

      <div className={
            nav ? 'absolute top-0 left-0 right-0 text-white w-full h-screen font-["Barlow_Condensed"] duration-300' 
            : 
            'absolute top-[-100%] left-0 right-0 text-white w-full h-screen font-["Barlow_Condensed"] duration-300'
          }>
        <AiOutlineClose onClick={handleNav} className='absolute top-[1.65rem] right-[.85rem] cursor-pointer hover:text-[#a9b5f7] duration-300 md:hidden' size={30}/>
        <ul className='flex flex-col justify-center items-center w-full h-screen md:hidden'>
          <li className='py-4 text-3xl cursor-pointer hover:text-[#a9b5f7] duration-300'>
            <Link onClick={handleNav} to="/"><span>00</span> HOME</Link>
          </li>
          <li className='py-4 text-3xl cursor-pointer hover:text-[#a9b5f7] duration-300'>
            <Link onClick={handleNav} to="/destination"><span>01</span> DESTINATION</Link>
          </li>
          <li className='py-4 text-3xl cursor-pointer hover:text-[#a9b5f7] duration-300'>
            <Link onClick={handleNav} to="/crew"><span>02</span> CREW</Link>
          </li>
          <li className='py-4 text-3xl cursor-pointer hover:text-[#a9b5f7] duration-300'>
            <Link onClick={handleNav} to="/technology"><span>03</span> TECHNOLOGY</Link>
          </li>
        </ul>
      </div>


    </nav>
  )
}

export default Navbar