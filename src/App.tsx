import React from 'react'
import { HeroPage } from './components/pages/HeroPage'
import { AboutPage } from './components/pages/AboutPage'
import { Navbar } from './components/header/Navbar'
const BrowserRouter = require('react-router-dom').BrowserRouter
const Route = require('react-router-dom').Route

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* ここでのHeroは後々/heroに行かせる？？ */}
        <HeroPage />
        {/* <AboutPage /> */}
        <Route exact path="/home" component={HeroPage} />
        <Route exact path="/about" component={AboutPage} />
      </BrowserRouter>
    </div>
  )
}

export default App
