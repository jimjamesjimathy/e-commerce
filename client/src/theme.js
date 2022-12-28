export const shades = {
  blue: {
    100: "#e9f4fe",
    200: "#d3eafd",
    300: "#bcdffb",
    400: "#a6d5fa",
    500: "#90caf9",
    600: "#73a2c7",
    700: "#567995",
    800: "#3a5164",
    900: "#1d2832",
  },
  green: {
    100: "#edfae7",
    200: "#daf5d0",
    300: "#c8f0b8",
    400: "#b5eba1",
    500: "#a3e689",
    600: "#82b86e",
    700: "#628a52",
    800: "#415c37",
    900: "#212e1b",
  },
  yellow: {
    100: "#fef8ec",
    200: "#fdf1d8",
    300: "#fce9c5",
    400: "#fbe2b1",
    500: "#fadb9e",
    600: "#c8af7e",
    700: "#96835f",
    800: "#64583f",
    900: "#322c20",
  },
  red: {
    100: "#fdcccc",
    200: "#fb9999",
    300: "#f96666",
    400: "#f73333",
    500: "#f50000",
    600: "#c40000",
    700: "#930000",
    800: "#620000",
    900: "#310000",
  },
  grey: {
    100: "#f5f5f5",
    200: "#ebebeb",
    300: "#e0e0e0",
    400: "#d6d6d6",
    500: "#cccccc",
    600: "#a3a3a3",
    700: "#7a7a7a",
    800: "#525252",
    900: "#292929",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            background: {
              main: shades.blue[900],
              mainTwo: shades.blue[800],
              mainThree: shades.red[800],
            },
            icon: {
              main: shades.red[600],
              light: shades.red[300],
            },
            text: {
              main: shades.yellow[500],
              light: shades.red[300],
            },
            accent: {
              main: shades.blue[700],
            },
          }
        : {
            // palette values for light mode
            background: {
              main: shades.blue[100],
              mainTwo: shades.blue[200],
              mainThree: shades.blue[700],
            },
            icon: {
              main: shades.grey[400],
              light: shades.red[100],
            },
            text: {
              main: shades.grey[700],
              light: shades.grey[900],
            },
            accent: {
              main: shades.red[200],
            },
          }),
    },
    typography: {
      fontFamily: ["Comfortaa", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Shadows Into Light", "cursive"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Shadows Into Light", "cursive"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Shadows Into Light", "cursive"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Shadows Into Light", "cursive"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Shadows Into Light", "cursive"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Shadows Into Light", "cursive"].join(","),
        fontSize: 14,
      },
    },
  };
};
