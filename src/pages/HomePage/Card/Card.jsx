import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

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
        // borderRadius: 1,

        bgcolor: "#f4f1de",
      }}
    >
      {/* --- card img --- */}
      <CardMedia
        sx={{
          height: "50%",
          width: "100%",
          //   borderRadius: 3,
        }}
        image={img}
        title={name}
      />
      {/* --- card content --- */}
      <CardContent
        sx={{
          height: "50%",
          width: "100%",
          bgcolor: "hsl(209, 23%, 22%)",
          color: " hsl(0, 0%, 100%)",
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
              color: " hsla(0, 0%, 100%, 0.708)",
            }}
          >
            {population}
          </span>
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>region::</span>
          <span
            style={{
              fontWeight: 200,
              marginLeft: 4,
              color: " hsla(0, 0%, 100%, 0.708)",
            }}
          >
            {region}
          </span>
        </Typography>
        <Typography variant="body2">
          <span style={{ fontWeight: 500 }}>capital::</span>
          <span
            style={{
              fontWeight: 200,
              marginLeft: 4,
              color: " hsla(0, 0%, 100%, 0.708)",
            }}
          >
            {capital || "No capital"}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
