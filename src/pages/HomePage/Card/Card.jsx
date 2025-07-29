import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";

export default function CountryCard({
  name,
  capital,
  region,
  population,
  img,
}) {
  // useTheme --------------
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: 270,
        height: 340,
        bgcolor: "background.paper",
      }}
    >
      {/* --- card img --- */}
      <CardMedia
        sx={{
          height: "50%",
          width: "100%",
        }}
        image={img}
        title={name}
      />
      {/* --- card content --- */}
      <CardContent
        sx={{
          height: "50%",
          width: "100%",
          color: "text.primary",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "text.primary",
          }}
        >
          {name}
        </Typography>

        <Typography variant="body2">
          <span style={{ fontWeight: theme.typography.fontWeightMedium }}>
            Population:
          </span>
          <span
            style={{
              fontWeight: theme.typography.fontWeightLight,
              marginLeft: 4,
              color: theme.palette.text.secondary,
            }}
          >
            {population}
          </span>
        </Typography>

        <Typography variant="body2">
          <span style={{ fontWeight: theme.typography.fontWeightMedium }}>
            region:
          </span>
          <span
            style={{
              fontWeight: theme.typography.fontWeightLight,
              marginLeft: 4,
              color: theme.palette.text.secondary,
            }}
          >
            {region}
          </span>
        </Typography>

        <Typography variant="body2">
          <span style={{ fontWeight: theme.typography.fontWeightMedium }}>
            capital:
          </span>
          <span
            style={{
              fontWeight: theme.typography.fontWeightLight,
              marginLeft: 4,
              color: theme.palette.text.secondary,
            }}
          >
            {capital || "No capital"}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
