const Basictheme = [
  {
    palette: {
      primary: {
        light: "#757ce8",
        main: "#ffc107",
        dark: "#ffca28",
        contrastText: "#212121"
      },
      secondary: {
        light: "#ff7961",
        main: "#76ff03",
        dark: "#aeea00",
        contrastText: "#000"
      },
      default: {
        light: "#ff5252",
        main: "#ff1744",
        dark: "#d50000",
        contrastText: "#ffebee"
      },
      tertiary: {
        light: "#ef5350",
        main: "#f44336",
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
    card: {
      display: "flex",
      margin: 10,
      position: "relative"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    cover: {
      width: 150
    },
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
    },
    paper: {
      padding: 20
    },
    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
        "& button": {
          position: "absolute",
          top: "90%",
          left: "70%"
        }
      },
      "& .profile-image": {
        width: 200,
        height: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%"
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle"
        },
        "& a": {
          color: "#00bcd4"
        }
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0"
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer"
        }
      }
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px"
      }
    }
  }
];
export { style, Basictheme };
