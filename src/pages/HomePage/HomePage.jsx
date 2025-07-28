import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

//helpers
import { formatPopulation } from "../../utils/helpers";
import CountryCard from "./Card/Card";
// mui
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
// _____________________________________________________________________
export default function HomePage() {
  //state for countries data---------
  const [countries, setCountries] = useState([]);
  //state for serch countries-------
  const [serch, setSerch] = useState("");

  //state for region
  const [region, setRegion] = useState("");

  //create an array of regions without repetitions ---------
  const regions = Array.from(new Set(data.map((c) => c.region))).sort((a, b) =>
    a.localeCompare(b)
  );

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
      (region === "" || country.region === region)
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
          // border: " 1px solid red",
          width: "100%",
          display: "flex",
          alignItems: { xs: "start", md: "center" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* serch input --------- */}

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
              marginLeft: "72px",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#bdbdbdb6",
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
            width: { xs: "60%", md: "25%" },
            mt: { xs:5 ,md:0},
            mb: 2,
          }}
        >
          <Select
            value={region}
            displayEmpty
            onChange={(e) => setRegion(e.target.value)}
            renderValue={(selected) =>
              selected ? selected : "Filter by Region"
            }
            sx={{
              color: "hsl(0, 0%, 100%)",
              bgcolor: "hsl(209, 23%, 22%)",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "hsl(209, 23%, 22%)",
                  color: "hsl(0, 0%, 100%)",
                  boxShadow: "none",
                  border: "none",
                },
              },
            }}
          >
            <MenuItem
              // key="all"
              value=""
              sx={{
                color: "hsl(0, 0%, 100%)",
                bgcolor: "hsl(209, 23%, 22%)",
              }}
            >
              All Countries
            </MenuItem>
            {regions.map((region) => (
              <MenuItem
                key={region}
                value={region}
                sx={{
                  color: "hsl(0, 0%, 100%)",
                  bgcolor: "hsl(209, 23%, 22%)",
                }}
              >
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      {/* body box --------------- */}
      <Box
        sx={{
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
