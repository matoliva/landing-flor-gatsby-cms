import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import { useWindowSize } from '../../utils/hooks'
import { breakpoints } from '../../style/theme'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindowSize();
  const data = useStaticQuery(query)
  const items = data.site.siteMetadata.navbarLinks
  const Component = width > breakpoints.tablet ? NavbarDesktop : NavbarMobile

  return (
    <Component 
      items={items} 
      open={isOpen} 
      setOpen={setIsOpen} 
    />
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        navbarLinks {
          label
          to
        }
      }
    }
  }
`

export default Navbar
