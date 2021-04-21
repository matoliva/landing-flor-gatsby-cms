export const breakpoints = {
  mobileS: '240',
  mobileM: '375',
  mobileL: '410',
  tablet: '768',
  laptop: '1024',
  desktop: '1265'
}

export const theme = {
  colors: {
    primary: "#FFF",
    secondary: "#161616",
    font: "#444",
  },
  size: {
    s: '10px',
    m: '12px',
    l: '14px',
    xl: '16px',
    xxl: '24px'
  },
  fonts: {},
  /* breakpoints: { // (max-width)
    huge: 1365,  // tablets in landscape, small monitors
    large: 1024, // tablets in portrait,
    medium: 768, // smartphones in landscape
    small: 420,  // smartphones in portrait
  }, */
  
  device: {
    mobileS: /* `(min-width: ${breakpoints.mobileS}) and */ `(min-width: ${breakpoints.mobileS})`,
    mobileM: /* `(min-width: ${breakpoints.mobileM}) and  */`(min-width: ${breakpoints.mobileM})`,
    mobileL: /* `(min-width: ${breakpoints.mobileL}) and  */`(min-width: ${breakpoints.mobileL})`,
    tablet: /* `(min-width: ${breakpoints.tablet}) and  */`(min-width: ${breakpoints.tablet})`,
    laptop: /* `(min-width: ${breakpoints.laptop}) and  */`(min-width: ${breakpoints.laptop})`,
    laptopL: /* `(min-width: ${breakpoints.laptopL}) and  */`(min-width: ${breakpoints.laptopL})`,
    desktop: /* `(min-width: ${breakpoints.desktop}) and  */`(min-width: ${breakpoints.desktop})`,
    desktopL: `(min-width: ${breakpoints.desktopL})`
  }
};
