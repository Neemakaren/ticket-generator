import React from 'react'
import LogoImg from "../assets/images/logo-full.svg"

const Header = () => {
  return (
    <header className='my-6'>
        <img src={LogoImg} alt="" className='w-32 xl:w-36'/>
    </header>
  )
}

export default Header