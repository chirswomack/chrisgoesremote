import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="w-90 center pv3">
    <div className="dib">
      <Link to="/">
        <figure className="ma0">
          <img src={logo} alt="Chris Goes Remote" className="navbarBrand" />
        </figure>
      </Link>
    </div>
  </nav>
)

export default Navbar
