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
        width: 240,
        height: 250,
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          population: {population}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          region: {region}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          capital: {capital}
        </Typography>
      </CardContent>
      {/* --- card actions --- */}
      {/* <CardActions>
        <Button
          size="small"
          sx={{
            color: "#bc6c25",
            fontWeight: "bold",
            border: "2px solid #bc6c25",
            borderRadius: 3,
          }}
        >
          {capital}
        </Button>
      </CardActions> */}
    </Card>
  );
}
