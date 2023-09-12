import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function ActionAreaCard() {
  return (
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} padding={8}>

    <Grid item xs={4}> 
    <Card sx={{ maxWidth: 345 , flexGrow: 1 }}>
      <CardActionArea  href = "#Lab1">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            FAO Laboratory
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
            Ground Floor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 

    <Grid item xs={4}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea  href = "#Lab2">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Molecular Biology Laboratory 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1st Floor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>


    <Grid item xs={4}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea  href = "#Lab3">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Micro Biology Laboratory
          </Typography>
          <Typography variant="body2" color="text.secondary">
            1st Floor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={4}> 
    <Card sx={{ maxWidth: 345 , flexGrow: 1 }}>
      <CardActionArea  href = "#Lab1">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tissue Culture Laboratory
          </Typography>
          <Typography variant="body2" color="text.secondary"> 
            1st Floor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 

    <Grid item xs={4}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea  href = "#Lab2">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Expression Laboratory
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2nd Floor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>


    <Grid item xs={4}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea  href = "#Lab3">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HPLC Room
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2nd Floor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>

    <Grid item xs={4}> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea  href = "#Lab3">
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Freezer Room
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ground Floor
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>


  </Grid>
  );
}
