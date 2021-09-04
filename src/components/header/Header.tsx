import React from 'react'
const Link = require('react-router-dom').Link

export const Header: React.FC = () => {
  return (
    <div>
      <div className="header-left">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}
