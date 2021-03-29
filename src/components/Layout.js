import React from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const TemplateWrapper = ({ children }) => (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
)

export default TemplateWrapper
