import React from 'react'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Hero } from '../hero/Hero'
import { SideBar } from '../side/SideBar'

export const HeroPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SideBar />
      <Footer />
    </div>
  )
}
