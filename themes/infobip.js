import base from 'mdx-deck/themes'

const background = '#efe8e3'
const textColor = '#000'
const blue = '#2d5dd7'
const linkColor = '#d11414'

export default {
  ...base,
  font: 'Roboto, Helvetica, Arial, sans-serif',
  colors: {
    text: textColor,
    background: background,
    link: linkColor
  },
  css: {
    textAlign: 'left',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '32px',
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  }
}