
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "hsl(0, 0%, 100%)" },
    background: {
      default: "hsl(0, 0%, 98%)",
      paper: "hsl(0, 0%, 100%)",
    },
    text: {
      primary: "hsl(200, 15%, 8%)",
      secondary: "hsl(0, 0%, 52%)",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "hsl(209, 23%, 22%)" },
    background: {
      default: "hsl(207, 26%, 17%)",
      paper: "hsl(209, 23%, 22%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsla(0, 0%, 61%, 1.00)",
    },
  },
});


const fontThem = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    fontSize14: "14px",
    fontSize16: "16px",
  },
});
const getTheme = (mode) => {
  const palette = mode === "light" ? lightTheme.palette : darkTheme.palette;

  return createTheme({
    palette,
    typography: fontThem.typography,
  });
};
 
export { getTheme };