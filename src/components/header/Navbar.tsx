import React, { useState, useEffect } from 'react'
import './Navbar.scss'
const Link = require('react-router-dom').Link

type Props = {
  className?: string
}

export const Navbar = (props: Props) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleShow)
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  })
  return (
    <div className={`nav-container ${show && 'nav-container-black'}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <div>HELLO</div>
      <img
        className="nav-avater"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}
