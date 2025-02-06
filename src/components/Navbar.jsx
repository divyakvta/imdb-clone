import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex border space-x-8 items-center pl-3 py-4' >
        <img src={logo} className='w-8' alt='logo'/>
        <Link to='/' className='text-blue-500 font-bold text-2xl'>Movies</Link>
        <Link to='/watch-list' className='text-blue-500 font-bold text-2xl'>WatchList</Link>
    </nav>
  )
}

export default Navbar
