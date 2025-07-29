import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";
import Navbar from "./components/Navbar/Navbar";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { getTheme } from "./styles/theme";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <MuiThemeProvider theme={getTheme(theme)}>
        <CssBaseline />
        <Navbar />
        <Box
          sx={{
            minHeight: "100vh",
            width: "100%",
            maxWidth: "100%",
            minWidth:"300px",
            bgcolor: "background.default",
            px: { xs: 2, sm: 3, md: 9 },
            py: { xs: 4, sm: 3, md: 4 },
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country-page/:alpha3Code" element={<CountryPage />} />
          </Routes>
        </Box>
      </MuiThemeProvider>
    </>
  );
}
