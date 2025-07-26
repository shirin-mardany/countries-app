import { Box } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function CountryPage() {
    const { alpha2Code } = useParams();
  return (
    <Box>
      <h1>{alpha2Code}</h1>
    </Box>
  );
}
