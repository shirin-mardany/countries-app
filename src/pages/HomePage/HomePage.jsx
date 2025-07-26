import React, { useEffect, useState } from "react";
import data from "../../data/data.json";

//helpers
import { formatPopulation } from "../../utils/helpers";
import CountryCard from "./Card/Card";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
export default function HomePage() {
  //states-------------
  //state for countries data
  const [countries, setCountries] = useState([]);
  //state for rch data
  // const [serch, setSerch] = useState();

  //state for region
  // const [region, setRegion] = useState("All");

  //useEffect----------------------
  useEffect(() => {
    //sorting countries data by name
    const sortedCountries = [...data].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    // console.log(sortedCountries);
    setCountries(sortedCountries);
  }, []);

  //map countries data to display
  const countryList = countries?.map((country) => (
    <Link
      key={country.alpha2Code}
      to={`/country-page/${country.alpha2Code}`}
      style={{ textDecoration: "none" }}
    >
      <CountryCard
        key={country.alpha2Code}
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
      <Stack
        justifyContent={"space-evenly"}
        sx={{
          width: "100%",
          height: "100px",

          // border: "3px solid #b225bc",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        header
      </Stack>
      {/* <Box sx={{ width: { xs: "90%", sm: "40%" } }}></Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
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
