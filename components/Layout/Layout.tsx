import React from 'react'
import NavBar from '../Navbar/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer>this is a footer</footer>
    </div>
  )
}

export default Layout
