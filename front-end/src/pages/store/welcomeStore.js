import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const MainPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        border={1}
        borderColor="black"
        borderRadius={8}
        p={4}
        textAlign="center"
      >
        <Typography variant="h4" gutterBottom>
          Welcome to the main store
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginRight: 2 }} href="/store/consumable">
          Consumables
        </Button>
        <Button variant="contained" color="secondary" sx={{ marginRight: 2 }} href="/store/chemical">
          Chemicals
        </Button>
        <Button variant="outlined" href="/adminHome">
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default MainPage;
