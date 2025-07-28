
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "hsl(0, 0%, 100%)" }, // White (Light Mode Elements)
    background: {
      default: "hsl(0, 0%, 98%)", // Very Light Gray (Light Mode Background)
      paper: "hsl(0, 0%, 100%)", // White (Light Mode Elements)
    },
    text: {
      primary: "hsl(200, 15%, 8%)", // Very Dark Blue (Light Mode Text)
      secondary: "hsl(0, 0%, 52%)", // Dark Gray (Light Mode Input)
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "hsl(209, 23%, 22%)" }, // Dark Blue (Dark Mode Elements)
    background: {
      default: "hsl(207, 26%, 17%)", // Very Dark Blue (Dark Mode Background)
      paper: "hsl(209, 23%, 22%)", // Dark Blue (Dark Mode Elements)
    },
    text: {
      primary: "hsl(0, 0%, 100%)", // White (Dark Mode Text)
    },
  },
});

export const getTheme = (mode) => (mode === "light" ? lightTheme : darkTheme);