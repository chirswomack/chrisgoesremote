import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'

import '../styles/lib/index.css'

const Layout = ({ children }) => (
  <div>
    <Helmet title="Chris Goes Remote" />
    <Navbar />
    <div className="cooper">{children}</div>
  </div>
)

export default Layout