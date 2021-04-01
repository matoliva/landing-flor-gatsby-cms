import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import { useIsDesktop } from '../../utils/hooks'
import { theme } from '../../style/theme'

const desktopSize = theme.breakpoints.large;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useIsDesktop(desktopSize)
  const data = useStaticQuery(query)
  const items = data.site.siteMetadata.navbarLinks
  const Component = isDesktop ? NavbarDesktop : NavbarMobile

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
