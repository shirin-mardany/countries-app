import React, { useEffect, useState } from "react";
import data from "../../data/data.json";

//helpers
import { formatPopulation } from "../../utils/helpers";
import CountryCard from "./Card/Card";
import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
export default function HomePage() {
  //states-------------
  //state for countries data
  const [countries, setCountries] = useState([]);
  //state for serch countries-------
  const [serch, setSerch] = useState("");

  //state for region
  const [region, setRegion] = useState(" Filter by Region");

  //create an array of regions without repetitions ---------
  const regions = [
    " Filter by Region",
    ...Array.from(new Set(data.map((c) => c.region))),
  ];

  //useEffect----------------------
  useEffect(() => {
    //sorting countries data by name
    const sortedCountries = [...data].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    // console.log(sortedCountries);
    setCountries(sortedCountries);
  }, []);
  // filter + countries's name + lowercase + region ------------
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(serch.toLowerCase()) &&
      (region === " Filter by Region" || country.region === region)
  );

  //map countries data to display-------------
  const countryList = filteredCountries?.map((country) => (
    <Link
      key={country.alpha3Code}
      to={`/country-page/${country.alpha3Code}`}
      style={{ textDecoration: "none" }}
    >
      <CountryCard
        key={country.alpha3Code}
        name={country.name}
        capital={country.capital}
        region={country.region}
        population={formatPopulation(country.population)}
        img={country.flags.svg || country.flags.png}
      />
    </Link>
  ));

  // _____________________________________________________
  return (
    <>
      {/* header stack--------- */}
      <Stack
        sx={{
          width: "100%",
          // height: "100px",
          // bgcolor: "hsl(209, 23%, 22%)",
          // border: "1px solid #257bbc",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* serch input --------- */}
        {/* <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "35%" },
            maxWidth: "50%",
          }}
        >
          <SearchIcon
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#bdbdbd",
              fontSize: "1.7rem",
              pointerEvents: "none",
            }}
          />
          <input
            type="search"
            placeholder="Search for a country..."
            value={serch}
            onChange={(e) => setSerch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px 12px 48px",
              background: "hsl(209, 23%, 22%)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </Box> */}
        {/* ---------------------------- */}
        <TextField
          label="Search for a country ..."
          variant="standard"
          type="search"
          value={serch}
          onChange={(e) => setSerch(e.target.value)}
          InputLabelProps={{
            shrink: !!serch,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#bdbdbd" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            // border: "1px solid #257bbc",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
            borderRadius: "8px",
            bgcolor: "hsl(209, 23%, 22%)",
            pl: "30px",
            pb: "12px",
            width: { xs: "100%", md: "40%" },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
              marginLeft: "62px",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#bdbdbdb6", // رنگ طوسی برای label در حالت فوکس
            },
            "& .MuiInput-underline:before": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
          }}
        />

        {/* select box -------- */}
        <FormControl
          sx={{
            width: { xs: "100%", md: "25%" },
            mt: 2,
            mb: 2,
            bgcolor:
              "hsl(94.94117647058825, 75.22123893805312%, 44.31372549019608%)",
          }}
        >
          {/* <InputLabel id="region-select-label" sx={{ color: "white" }}>
            Filter by Region
          </InputLabel> */}
          <Select
            labelId="region-select-label"
            id="region-select"
            value={region}
            label="Filter by Region"
            onChange={(e) => setRegion(e.target.value)}
            sx={{ color: "white" }}
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region} sx={{ color: "black" }}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      {/* -------------------------------- */}
      {/* <TextField
          label="Search for a country ..."
          variant="standard"
          type="search"
          value={serch}
          onChange={(e) => setSerch(e.target.value)}
          InputLabelProps={{
            shrink: !!serch, // فقط زمانی لیبل بره بالا که چیزی نوشته شده
      
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#bdbdbd",fontSize:"2rem" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            pl: "2%",
            // placeholder: "Search for a country ...",
            bgcolor: "hsl(209, 23%, 22%)",
            color: "white",
            height: "70%",
            width: { xs: "100%", md: "40%" },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
              marginLeft: "15%",
            },
            "& .MuiInput-underline:before": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "none",
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
          }}
        />  */}
      {/* body box --------------- */}
      <Box
        sx={{
          // border: "3px solid #48bc25",

          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        {countryList}
      </Box>
    </>
  );
}
