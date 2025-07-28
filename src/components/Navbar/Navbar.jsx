import { Box, Stack, Typography, IconButton } from "@mui/material";
// icon mode
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
// ___________________________________________________________
export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <Stack
      sx={{
        px: { xs: 2, sm: 3, md: 10 },
        width: "100%",
        height: "80px",
        bgcolor: "background.paper",
        color: "text.primary",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
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
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <IconButton
          title={
            theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
          }
          onClick={toggleTheme}
          sx={{
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: "text.primary",
          }}
        >
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Typography>
      </Box>
    </Stack>
  );
}
