
import '../../css/MyEvents.css'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


//////////////////

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HostNavbar from '../layout/navbars/HostNavbar';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//////

export default function EventsICreated() {

  const[eventsList, setEventsList] = useState([])
  const[deleteEvent, setDeleteEvent] = useState(1)
  const navigate = useNavigate();

  useEffect(() => {
    
    const apiCall = async () => {

      await fetch(`/eventsicreated?user=${JSON.parse(localStorage.getItem('eventsHubInfo')).username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setEventsList(data)
      })
    }

    if(localStorage.getItem('eventsHubInfo') === null || JSON.parse(localStorage.getItem('eventsHubInfo')).host === false) {
      navigate('/signin')
    }
    else {
      apiCall()
    }

  }, [deleteEvent])

  const deleteEventClick = async (id) => {
    await fetch(`/deleteeventicreated/${id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('data: ',data);
    })
    setDeleteEvent(deleteEvent+1)
  }
  
  if(localStorage.getItem('eventsHubInfo') !== null && JSON.parse(localStorage.getItem('eventsHubInfo')).host === true) {

    return (
      <>
        <HostNavbar />
        <div className='events-container'>
          <div className='events-title'><h1>Events I Created</h1></div>
          {eventsList.map((eventObj, index) => {
            return (
              <Card key={index} className='card-container' sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography className='card-title-and-delete' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <h1>{eventObj.title}</h1> <Button style={{width:'5px',height:'20px', color:'grey' }}color="inherit" variant="contained" onClick={() => deleteEventClick(eventObj.id)}>Delete</Button>
                  </Typography>
                  <Typography variant="h5"  component="div">
                  <div className='sub-text-container'>
                    <h5 className='sub-text-description' ><div className='sub-text-title'>What</div></h5>
                    <p className='sub-text-description' > {eventObj.description}</p>
                    </div>
                  </Typography>
                  <Typography variant="h5"  component="div">
                  <div className='sub-text-container'>
                    <h5 className='sub-text-description' ><div className='sub-text-title'>Where</div></h5>
                    <p className='sub-text-description' > {eventObj.latitude.toFixed(2)}, {eventObj.longitude.toFixed(2)}, {eventObj.city}</p>
                    </div>
                  </Typography>
                  <Typography variant="h5"  component="div">
                  <div className='sub-text-container'>
                    <h5 className='sub-text-description' ><div className='sub-text-title'>When</div></h5>
                    <p className='sub-text-description' >{eventObj.hour}:{eventObj.minute} {eventObj.month}/{eventObj.day}/{eventObj.year} </p>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            )
            
          })}
        
      </div>
      </>
    )
  }
}