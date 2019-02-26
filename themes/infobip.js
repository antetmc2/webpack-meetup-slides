import base from 'mdx-deck/themes'

const orange = '#ffe2ce'
const black = '#000'
const blue = '#2d5dd7'
const red = '#f00'

export default {
  ...base,
  font: 'Roboto, Helvetica, Arial, sans-serif',
  colors: {
    text: black,
    background: orange,
    link: red
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