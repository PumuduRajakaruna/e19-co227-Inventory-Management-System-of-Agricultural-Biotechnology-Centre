import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ThemeProvider, createTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import ImgMolecular from './images/molecularBio.png';
import ImgFAO from './images/FAO.jpg';
import ImgMicro from './images/Microbiology.jpg';
import ImgTissue from './images/tissue.jpg';
import ImgExpression from './images/expression.jpg';
import ImgHPLC from './images/hplc.jpg';
import ImgFreezer from './images/freezer.jpg';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial, sans-serif',
    h5: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#4CAF50',
    },
  },
});

export default function ActionAreaCard() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} justifyContent="center">
        {labData.map((lab, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '2px solid #E0E0E0' }}>
              <CardActionArea href={`#Lab${index + 1}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={lab.image}
                  alt="Lab Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {lab.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {lab.location}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}

const labData = [
  {
    name: 'FAO Laboratory',
    location: 'Ground Floor',
    image: ImgFAO,
  },
  {
    name: 'Molecular Biology Laboratory',
    location: '1st Floor',
    image: ImgMolecular,
  },
  {
    name: 'MicroBiology Laboratory',
    location: '1st Floor',
    image: ImgMicro,
  },
  {
    name: 'Tissue Culture Laboratory',
    location: '1st Floor',
    image: ImgTissue,
  },
  {
    name: 'Expression Laboratory',
    location: '2nd Floor',
    image: ImgExpression,
  },
  {
    name: 'HPLC Room',
    location: '2nd Floor',
    image: ImgHPLC,
  },
  {
    name: 'Freezer Room',
    location: 'Ground Floor',
    image: ImgFreezer,
  },
];
