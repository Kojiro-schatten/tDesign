import React from 'react'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Hero } from '../hero/Hero'
import { SideBar } from '../side/SideBar'

const Link = require('react-router-dom').Link

export const HeroPage = () => {
  return (
    <div>
      <Header />
      <Link to="/about">LINK TO ABOUT</Link>
      <Hero />
      <SideBar />
      <Footer />
    </div>
  )
}
