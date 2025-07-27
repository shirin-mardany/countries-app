import React from "react";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
//helpers
import { formatPopulation } from "../../utils/helpers";
//mui >>
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// _______________________________________________________
export default function CountryPage() {
  //parameters-------
  const { alpha3Code } = useParams();

  //navigation-------------
  const navigate = useNavigate(); //back to home

  //find the country data based on alpha3Code ------------
  const country = data.find((c) => c.alpha3Code === alpha3Code);
  console.log(country);

  //find border countries data -----------------
  const borderCountries = country?.borders?.map((borderCode) =>
    data.find((c) => c.alpha3Code === borderCode)
  ); //it's an array of objects
  console.log(borderCountries);

  // create btn for ech border country-------------
  const borderButtons = borderCountries?.map((borderCountry) => (
    <Button
      key={borderCountry.alpha3Code}
      variant="outlined"
      onClick={() => navigate(`/country-page/${borderCountry.alpha3Code}`)}
      sx={{
        bgcolor: "hsl(209, 23%, 22%)",
        color: "white",
        borderColor: "hsl(209, 23%, 22%)",
        "&:hover": {
          bgcolor: "hsl(209, 23%, 22%)",
          borderColor: "hsl(209, 23%, 22%)",
        },
        mr: 1,
      }}
    >
      {borderCountry.name}
    </Button>
  ));

  // thems----------------------
  const infoLablStyle = {
    fontWeight: 200,
    textTransform: "capitalize",
    lineHeight: 2,
  };

  const infoValueStyle = {
    fontWeight: 200,
    marginLeft: 4,
    color: " hsla(0, 0%, 100%, 0.708)",
  };
  return (
    <Stack
      sx={{
        whiteSpace: "nowrap",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        // color: "white",
        alignItems: "center",
        justifyContent: "space-between",
        py: { xs: 5, md: 4 },
        flexDirection: "column",
        // gap: 8,
      }}
    >
      {/* back btn --------- */}
      <Box
        sx={{
          width: "100%",
          height: "10%",
          // bgcolor:
          //   "hsl(207.88732394366195, 58.67768595041321%, 76.27450980392156%)",
          display: "flex",
          justifyContent: "flex-start",
          color: "white",
          mb: { xs: 3, md: 0 }, //===
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            width: { xs: "120px", md: "150px" },
            height: { xs: "40px", md: "50px" },
            bgcolor: "hsl(209, 23%, 22%)",
            color: "white",
          }}
        >
          <ArrowBackIcon sx={{ mr: 2 }} />
          back
        </Button>
      </Box>
      {/* card box -------- */}

      <Card
        sx={{
          width: "100%",
          height: { xs: "100%", md: "80%" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, //===
          // alignItems: "center", // ===
          // justifyContent: "space-between",//===
          bgcolor: "hsl(207, 26%, 17%)",
          border: "none",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "327px", md: "50%" }, //===
            // width: { xs: "100%", md: "50%" },
            // height: { xs: "30%", md: "100%" },
            height: { xs: "200px", md: "100%" }, //===
            objectFit: "cover",
            bgcolor: "hsl(209, 23%, 22%)",
            mb: { xs: 4, md: 0 },
          }}
          image={country?.flags?.svg || country?.flags?.png}
          alt={country?.name}
        />
        <CardContent
          sx={{
            p: 0,
            width: { xs: "100%", md: "50%" },
            height: { xs: "50%", md: "100%" },
            // bgcolor: "hsl(209, 23%, 22%)",
            color: " hsl(0, 0%, 100%)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "space-between", md: "space-evenly" },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80%",

              // bgcolor:
              //   "hsl(207.85714285714286, 81.3953488372093%, 66.27450980392156%)",
            }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {country?.name}
            </Typography>
            <Typography variant="body2">
              <span
                style={{
                  ...infoLablStyle,
                }}
              >
                native Name:
              </span>
              <span
                style={{
                  ...infoValueStyle,
                }}
              >
                {country?.nativeName || "null"}
              </span>
            </Typography>

            <Typography variant="body2">
              <span
                style={{
                  ...infoLablStyle,
                }}
              >
                population:
              </span>
              <span
                style={{
                  ...infoValueStyle,
                }}
              >
                {formatPopulation(country?.population)}
              </span>
            </Typography>
            <Typography variant="body2">
              <span
                style={{
                  ...infoLablStyle,
                }}
              >
                region:
              </span>
              <span
                style={{
                  ...infoValueStyle,
                }}
              >
                {country?.region}
              </span>
            </Typography>
            <Typography variant="body2">
              <span
                style={{
                  ...infoLablStyle,
                }}
              >
                sub Region:
              </span>
              <span
                style={{
                  ...infoValueStyle,
                }}
              >
                {country?.subregion}
              </span>
            </Typography>
            <Typography variant="body2">
              <span
                style={{
                  ...infoLablStyle,
                }}
              >
                capital:
              </span>
              <span
                style={{
                  ...infoValueStyle,
                }}
              >
                {country?.capital || "null"}
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 4, md: 0 }, //===
              width: "100%",
              height: "80%",
            }}
          >
            <Typography variant="body2">
              <span
                style={{
                  ...infoLablStyle,
                }}
              >
                topLevelDomain:
              </span>
              <span
                style={{
                  ...infoValueStyle,
                }}
              >
                {/* is array >join with = " ,  " */}
                {country?.topLevelDomain?.join(", ") || "null"}
              </span>
            </Typography>
            <Typography variant="body2">
              <span
                style={{
                  ...infoLablStyle,
                }}
              >
                currencies:
              </span>
              <span
                style={{
                  ...infoValueStyle,
                }}
              >
                {/* is array > map names > join with ", " */}
                {country?.currencies?.map((c) => c.name).join(", ") || "null"}
              </span>
            </Typography>
            <Typography variant="body2">
              <span
                style={{
                  ...infoLablStyle,
                }}
              >
                languages:
              </span>
              <span
                style={{
                  ...infoValueStyle,
                }}
              >
                {/* is array > map names > join with ", " */}
                {country?.languages?.map((l) => l.name).join(", ") || "null"}
              </span>
            </Typography>
          </Box>
          {/* border btn --------- */}
          <Box>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ mt: 4 }}
            >
              Border Countries:
            </Typography>
            {borderCountries?.length > 0 ? (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {borderButtons}
              </Box>
            ) : (
              <Typography
                variant="body2"
                sx={{ color: "hsla(0, 0%, 100%, 0.708)" }}
              >
                No border countries
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}
