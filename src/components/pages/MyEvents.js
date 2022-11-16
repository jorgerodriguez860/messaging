
import '../../css/MyEvents.css'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


//////////////////

import * as React from 'react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//////

export default function MyEvents() {

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <>
      <div className='events-container'>
    <div className='events-title'><h1>Events</h1></div>
    <Card className='card-container' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography className='card-title-and-delete' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>Title</h1> <Button style={{width:'5px',height:'20px', color:'grey' }}color="inherit" variant="contained">Delete</Button>
        </Typography>
        <Typography variant="h5"  component="div">
        <div className='sub-text-container'>
          <p className='sub-text-description' ><div className='sub-text-title'>What</div></p>
          <p className='sub-text-description' > This is the discription</p>
          </div>
        </Typography>
        <Typography variant="h5"  component="div">
        <div className='sub-text-container'>
          <p className='sub-text-description' ><div className='sub-text-title'>Where</div></p>
          <p className='sub-text-description' > This is the discription</p>
          </div>
        </Typography>
        <Typography variant="h5"  component="div">
        <div className='sub-text-container'>
          <p className='sub-text-description' ><div className='sub-text-title'>When</div></p>
          <p className='sub-text-description' > This is the discription</p>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    <Card className='card-container' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography className='card-title-and-delete' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>Title</h1> <Button style={{width:'5px',height:'20px', color:'grey' }}color="inherit" variant="contained">Delete</Button>
        </Typography>
        <Typography variant="h5"  component="div">
        <div className='sub-text-container'>
          <p className='sub-text-description' ><div className='sub-text-title'>What</div></p>
          <p className='sub-text-description' > this is the discription</p>
          </div>
        </Typography>
        <Typography variant="h5"  component="div">
        <div className='sub-text-container'>
          <p className='sub-text-description' ><div className='sub-text-title'>Where</div></p>
          <p className='sub-text-description' > this is the discription</p>
          </div>
        </Typography>
        <Typography variant="h5"  component="div">
        <div className='sub-text-container'>
          <p className='sub-text-description' ><div className='sub-text-title'>When</div></p>
          <p className='sub-text-description' > this is the discription</p>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </div>
    </>
  )
}