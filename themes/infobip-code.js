const theme /*: PrismTheme */ = {
    plain: {
      color: "#3a4251",
      backgroundColor: "#efe8e3"
    },
    styles: [
        {
          types: ["prolog"],
          style: {
            color: "rgb(0, 0, 128)"
          }
        },
        {
          types: ["comment"],
          style: {
            color: "rgb(106, 153, 85)"
          }
        },
        {
          types: ["builtin", "tag", "changed", "punctuation", "keyword"],
          style: {
            color: "rgb(86, 156, 214)"
          }
        },
        {
          types: ["number", "inserted"],
          style: {
            color: "rgb(144, 186, 122)"
          }
        },
        {
          types: ["constant"],
          style: {
            color: "rgb(100, 102, 149)"
          }
        },
        {
          types: ["attr-name", "variable"],
          style: {
            color: "rgb(156, 220, 254)"
          }
        },
        {
          types: ["deleted", "string"],
          style: {
            color: "rgb(206, 145, 120)"
          }
        },
        {
          types: ["selector"],
          style: {
            color: "rgb(215, 186, 125)"
          }
        },
        {
          types: ["operator"],
          style: {
            color: "rgb(165, 165, 165)"
          }
        },
        {
          types: ["function"],
          style: {
            color: "rgb(183, 183, 113)"
          }
        },
        {
          types: ["class-name"],
          style: {
            color: "rgb(78, 201, 176)"
          }
        },
        {
          types: ["char"],
          style: {
            color: "rgb(209, 105, 105)"
          }
        }
      ]
  };
  
  module.exports = theme;