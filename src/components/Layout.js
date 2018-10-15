import React from 'react'
import Helmet from 'react-helmet'
import Navbar from './Navbar'

import '../styles/lib/index.css'

const Layout = ({ children }) => (
  <div>
    <Helmet title="Chris Goes Remote">
      <link rel="stylesheet" href="https://unpkg.com/tachyons-typography@3.0.5/css/tachyons-typography.min.css" />
    </Helmet>
    <Navbar />
    <div className="cooper">{children}</div>
  </div>
)

export default Layout