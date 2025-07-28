import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import CountryPage from './pages/CountryPage/CountryPage';
import Navbar from './components/Navbar/Navbar';
import { Box, CssBaseline } from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          // minWidth: "0",
          maxWidth: "100%",
          bgcolor: "hsl(207, 26%, 17%)",
          px: { xs: 2, sm: 3, md: 9 },
          py: { xs: 4, sm: 3, md: 4 },
          // border: "3px solid #6c5bb1",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country-page/:alpha3Code" element={<CountryPage />} />
        </Routes>
      </Box>
    </>
  );
}
