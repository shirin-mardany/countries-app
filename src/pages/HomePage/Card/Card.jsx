import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function CountryCard({
  name,
  capital,
  region,
  population,
  img,
}) {

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
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>population:</span>
          <span
            style={{
              fontWeight: 200,
              marginLeft: 4,
              color: "text.primary",
            }}
          >
            {population}
          </span>
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>region:</span>
          <span
            style={{
              fontWeight: 200,
              marginLeft: 4,
              color: "text.primary",
            }}
          >
            {region}
          </span>
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>capital:</span>
          <span
            style={{
              fontWeight: 200,
              marginLeft: 4,
              color: "text.primary",
            }}
          >
            {capital || "No capital"}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
