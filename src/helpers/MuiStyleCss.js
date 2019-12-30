const Basictheme = [
  {
    palette: {
      primary: {
        light: "#757ce8",
        main: "#FFC400",
        dark: "#002884",
        contrastText: "#FFC400"
      },
      secondary: {
        light: "#ff7961",
        main: "#D50000",
        dark: "#ba000d",
        contrastText: "#000"
      },
      default: {
        light: "#ff5252",
        main: "#ff1744",
        dark: "#d50000",
        contrastText: "#ffebee"
      },
      typography: {
        useNextVariants: true
      }
    }
  }
];

const style = [
  {
    form: {
      textAlign: "center",
      margin: 10
    },
    image: {
      margin: "20px auto 20px auto",
      height: "100px"
    },
    pageTitle: {
      margin: "10px auto 10px auto"
    },
    textField: {
      margin: "10px auto 10px auto"
    },
    button: {
      marginTop: "10px"
    },
    progress: {
      position: "absolute"
    }
  }
];
export { style, Basictheme };
