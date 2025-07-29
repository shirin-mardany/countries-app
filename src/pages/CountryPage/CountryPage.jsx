import React from "react";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";

//mui >>
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// helper >>
import { formatPopulation } from "../../utils/helpers";
// _______________________________________________________

export default function CountryPage() {
  //parameters-------
  const { alpha3Code } = useParams();

  //navigation-------------
  const navigate = useNavigate();

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
  // useTheme --------------
  const theme = useTheme();
  // info list ----------
  const infoItems = [
    {
      label: "Native Name",
      value: country?.nativeName || "null",
    },
    {
      label: "Population",
      value: formatPopulation(country?.population),
    },
    {
      label: "Region",
      value: country?.region || "null",
    },
    {
      label: "Sub Region",
      value: country?.subregion || "null",
    },
    {
      label: "Capital",
      value: country?.capital || "null",
    },
    {
      label: "Top Level Domain",
      value: country?.topLevelDomain?.join(", ") || "null",
    },
    {
      label: "Currencies",
      value: country?.currencies?.map((c) => c.name).join(", ") || "null",
    },
    {
      label: "Languages",
      value: country?.languages?.map((l) => l.name).join(", ") || "null",
    },
  ];

  // info handler ---------
const InfoItem = ({ label, value }) => {   return (
  <Box sx={infoWrapperStyle}>
    <Typography component="span" sx={infoLabelStyle(theme)}>
      {label}:
    </Typography>
    <Typography component="span" sx={infoValueStyle(theme)}>
      {value}
    </Typography>
  </Box>
  );
  }
  
  //To display in two columns
  const leftColumnItems = infoItems.slice(0, 5);
  const rightColumnItems = infoItems.slice(5);
  
  // mui thems----------------------
const infoWrapperStyle = {
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  gap: 1,
  mb: 1.5,
  lineHeight: 1.8,
  width: "100%",
  overflow: "hidden",
};

const infoLabelStyle = (theme) => ({
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "capitalize",
  color: theme.palette.text.primary,
  minWidth: "110px",
  fontSize: theme.typography.fontSize16,
});

const infoValueStyle = (theme) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize14,
  flex: 1,
  minWidth: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
// -------
  const cardContentStyle = {
    width: { xs: "100%", md: "50%" },
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
    width: { xs: "100%", md: "50%" },
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
          mb: { xs: 7, md: 0 },
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
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              {leftColumnItems.map((item) => (
                <InfoItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              {rightColumnItems.map((item) => (
                <InfoItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
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
