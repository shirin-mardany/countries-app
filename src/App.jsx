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
          bgcolor: "#152024",
          px: "50px",
          // border: "3px solid #6c5bb1",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country-page/:alpha2Code" element={<CountryPage />} />
        </Routes>
      </Box>
    </>
  );
}
