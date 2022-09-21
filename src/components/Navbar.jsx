import React from 'react'
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='p-8 flex justify-center items-center'>
      <Link to="/">
        <img className='mr-48' src={Logo} alt="logo"/>
      </Link>
      <div className='w-[25%] h-[2PX] bg-slate-600'></div>
      <ul className='text-white flex w-[30%] py-8'>
        <li>
          <Link to="/"><span>00</span> HOME</Link>
        </li>
        <li>
          <Link to="destination"><span>01</span> DESTINATION</Link>
        </li>
        <li>
          <Link to="/"><span>02</span> CREW</Link>
        </li>
        <li>
          <Link to="/"><span>03</span> TECHNOLOGY</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar