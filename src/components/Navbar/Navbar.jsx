import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <Stack
      // mt={"20px"}
      sx={{
        px: "80px",
        width: "100%",
        height: "60px",
        bgcolor: "#44626c",
        // borderRadius: "10px",
        //   border: "3px solid #25bc76",
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
        <Typography gutterBottom variant="h5" component="div">
          Mode
        </Typography>
      </Box>
    </Stack>
  );
}
