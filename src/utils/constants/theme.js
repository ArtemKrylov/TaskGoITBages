export const theme = Object.freeze({
  colors: {
    white: '#EBD8FF',
    black: '#373737',
    accent: '#5CD3A8',
    accent2: '#471CA9',
    accent3: '#f72585',
    violet: '#5736A3',
    darkBlue: '#03045e',
  },
  gradients: {
    userCard:
      'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);',
  },
  media: {
    tablet: `@media screen and (min-width: 768px)`,
    desktop: `@media screen and (min-width: 1200px)`,
  },
  shadows: {
    card: ` -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)`,
    textAccent: `1px 1px #f72585`,
    textAccent2: `1px 1px #03045e`,
    button: `0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)`,
    line: `0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`,
    elipse:
      '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;',
  },
  cubic: `250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  borderRadius: {
    card: '20px',
    button: '10px',
  },
  visuallyHidden: `position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);`,
  flexCenterAndGap: (gap = 0) =>
    `display:flex; align-items: center; justify-content: center; gap:${gap}px;`,
  flexCenter: `display:flex; align-items: center; justify-content: center;`,
  textInherit: `font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;`,
  text: (fs, lh, ls) => `font-size: ${fs}px;
  line-height: calc(${lh}px / ${fs}px);`,
});
