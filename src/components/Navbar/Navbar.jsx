import { Box, Stack, Typography } from "@mui/material";
// import React, {useState } from "react";
// icon mode 
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Navbar() {
  //state for dark mode 
  // const [darkMode, setDarkMode] = useState(false);
  
  

  return (
    <Stack
      sx={{
        px: { xs: 2, sm: 3, md: 10 },
        width: "100%",
        height: "80px",
        bgcolor: "hsl(209, 23%, 22%)",
        color: " hsl(0, 0%, 100%)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* <Box sx={{width:"100%",bgcolor:"pink", display: "flex", justifyContent: "space-between", alignItems: "center" }}> */}
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
        
          fontSize: { xs: "1rem", md: "1.5rem" },
          fontWeight: 600,
          letterSpacing: "1px",
        }}
      >
        Where in the world?
      </Typography>
      {/* </Box> */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <LightModeIcon />
        {/* <DarkModeIcon /> */}
        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: "0.8rem", md: "1rem" },fontWeight:200 }}>
          Mode
        </Typography>
      </Box>
    </Stack>
  );
}
