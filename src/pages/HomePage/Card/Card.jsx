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
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>population:</span>
          <Typography
            component="span"
            sx={{
              fontWeight: 200,
              marginLeft: 0.5,
              color: "text.secondary",
            }}
          >
            {population}
          </Typography>
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>region:</span>
          <Typography
            component="span"
            sx={{
              fontWeight: 200,
              marginLeft: 0.5,
              color: "text.secondary",
            }}
          >
            {region}
          </Typography>
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>capital:</span>
          <Typography
            component="span"
            sx={{
              fontWeight: 200,
              marginLeft: 0.5,
              color: "text.secondary",
            }}
          >
            {capital || "No capital"}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
