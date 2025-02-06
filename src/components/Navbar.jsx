import React from 'react'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav className='flex border space-x-8 items-center pl-3 py-4' >
        <img src={logo} className='w-8' alt='logo'/>
        <a href='/' className='text-blue-500 font-bold text-2xl'>Movies</a>
        <a href='/watch-list' className='text-blue-500 font-bold text-2xl'>WatchList</a>
    </nav>
  )
}

export default Navbar
