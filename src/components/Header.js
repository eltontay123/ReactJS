import React from 'react'
import Logo from '../images/Path.png'
import '../styles/header.css'

export default function Header() {
  return (
    <nav>
        <img className='logo' src={Logo} alt='globe'></img>
        <span className='title'>my travel journal.</span>
    </nav>
  )
}
