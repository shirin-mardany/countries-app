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
  console.log("country", country);

  //find border countries data -----------------
  const borderCountries = country?.borders?.map((borderCode) =>
    data.find((c) => c.alpha3Code === borderCode)
  ); //it's an array of objects
  console.log("borderCountries", borderCountries);

  // create btn for ech border country-------------
  const borderButtons = borderCountries?.map((borderCountry) => (
    <Button
      key={borderCountry.alpha3Code}
      variant="outlined"
      onClick={() => navigate(`/country-page/${borderCountry.alpha3Code}`)}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
        "&:hover": {
          bgcolor: "background.paper",
          borderColor: "text.primary",
        },
        mr: 1,
      }}
    >
      {borderCountry.name}
    </Button>
  ));

  // thems----------------------
  const infoLablStyle = {
    fontWeight: {xs:200,md:900},
    textTransform: "capitalize",
    lineHeight: 2,
    color: "text.primary",
  };

  const infoValueStyle = {
    fontWeight: 200,
    marginLeft: 4,
    color: "text.secondary",
  };

  const cardContentStyle = {
    width: { xs: "100%", md: "55%" },
    height: { md: "100%" },
    color: "text.primary",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    bgcolor: "background.default",
    pl: { md: 13 },
  };

  const cardMediaStyle = {
    width: { xs: "100%", md: "45%" },
    height: { xs: "220px", md: "100%" },
    objectFit: "cover",
    mb: { xs: 2, md: 0 },
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
  };
  return (
    <Stack
      sx={{
        width: "100%",
        height: { md: "60vh" },
        alignItems: "center",
        justifyContent: "space-between",
        pt: { xs: 0, md: 4 },
        flexDirection: "column",
      }}
    >
      {/* back btn --------- */}
      <Box
        sx={{
          width: "100%",
          height: "10%",
          display: "flex",
          justifyContent: "flex-start",
          mb: { xs: 7, md: 0 }, //===
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            width: { xs: "120px", md: "150px" },
            height: { xs: "40px", md: "50px" },
            bgcolor: "background.paper",
            color: "text.primary",
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
          flexDirection: { xs: "column", sm: "row" },
          color: "text.primary",
          border: "none",
          boxShadow: "none",
          bgcolor: "background.default",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            ...cardMediaStyle,
          }}
          image={country?.flags?.svg || country?.flags?.png}
          alt={country?.name}
        />
        <CardContent
          sx={{
            ...cardContentStyle,
          }}
        >
          {/* name -------- */}
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontSize: { xs: "1.5rem" },
              mb: { xs: 3 },
              fontWeight: { xs: 700, md: 900 },
            }}
          >
            {country?.name}
          </Typography>
          {/* info box-------- */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { md: "space-between" },
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "80%",
              }}
            >
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
                width: "50%",
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
