module.exports = {
  siteTitle: 'Afassy Brahim | Software Engineer',
  siteDescription:
    'Afassy Brahim is a software engineer based in Morocco who specializes in developing high-quality websites and applications (mobile, desktop).',
  siteKeywords:
    'Afassy Brahim, Brahim, afassy, brahimafa, software engineer, back-end, mobile,desktop, c#, java, nodejs,engineer, web developer, javascript, Morocco',
  siteUrl: 'https://brahimafassy.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-xxxxxxxx-x',
  googleVerification: 'x',
  name: 'Afassy Brahim',
  location: 'Agadir, Morocco',
  email: 'brahimafassy@gmail.com',
  github: 'https://github.com/brahimafa',
  twitterHandle: '@afa_Toshi',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/brahimafa',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/brahimafassy',
    },
    {
      name: 'Codepen',
      url: '#',
    },
    {
      name: 'Instagram',
      url: '#',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/#',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
