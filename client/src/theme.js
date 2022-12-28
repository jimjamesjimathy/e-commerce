export const shades = {
  blue: {
    100: "#d9e1e4",
    200: "#b3c2c8",
    300: "#8da4ad",
    400: "#678591",
    500: "#416776",
    600: "#34525e",
    700: "#273e47",
    800: "#1a292f",
    900: "#0d1518",
  },
  orange: {
    100: "#f7eae2",
    200: "#f0d5c5",
    300: "#e8bfa7",
    400: "#e1aa8a",
    500: "#d9956d",
    600: "#ae7757",
    700: "#825941",
    800: "#573c2c",
    900: "#2b1e16",
  },
  yellow: {
    100: "#f8eddd",
    200: "#f1dbbb",
    300: "#ebc899",
    400: "#e4b677",
    500: "#dda455",
    600: "#b18344",
    700: "#856233",
    800: "#584222",
    900: "#2c2111",
  },
  red: {
    100: "#edd3d8",
    200: "#dba7b1",
    300: "#c87c89",
    400: "#b65062",
    500: "#a4243b",
    600: "#831d2f",
    700: "#621623",
    800: "#420e18",
    900: "#21070c",
  },
  grey: {
    100: "#f7f4eb",
    200: "#efe9d7",
    300: "#e8dfc3",
    400: "#e0d4af",
    500: "#d8c99b",
    600: "#ada17c",
    700: "#82795d",
    800: "#56503e",
    900: "#2b281f",
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
              mainThree: shades.red[500],
            },
            icon: {
              main: shades.red[600],
              light: shades.red[300],
            },
            text: {
              main: shades.yellow[500],
              light: shades.red[300],
              button: shades.blue[900],
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
              button: shades.grey[100],
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
