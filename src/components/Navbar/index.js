import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import { useIsDesktop } from '../../utils/useIsDesktop'
import { theme } from '../../style/theme'

const desktopSize = theme.breakpoints.large;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(query)
  const isDesktop = useIsDesktop(desktopSize)
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








































/* 
const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

const App = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(!open))
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
} */