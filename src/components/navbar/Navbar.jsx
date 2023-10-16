import React from 'react'
import NavbarLeft from './navbatItem/NavbarLeft'
import NavbarRight from './navbatItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        <NavbarLeft/>
        <NavbarRight/>
    </div>
  )
}

export default Navbar