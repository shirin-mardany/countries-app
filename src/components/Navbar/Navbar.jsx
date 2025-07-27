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
        px: "80px",
        width: "100%",
        height: "60px",
        bgcolor: "hsl(209, 23%, 22%)",
        color: " hsl(0, 0%, 100%)",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography gutterBottom variant="h5" component="div">
          Where in the world?
        </Typography>
      </Box>
      <Box>
        <LightModeIcon />
        <DarkModeIcon />
        <Typography gutterBottom variant="h5" component="div">
          Mode
        </Typography>
      </Box>
    </Stack>
  );
}
