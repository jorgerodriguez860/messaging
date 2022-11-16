import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Map, { Popup, Marker } from 'react-map-gl';
import mapPin from '../../images/mappin.png'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import Button from '@mui/material/Button';
import '../../css/CreateEvents.css'

let coordinates = {
  'Nashville': [[-86.917648, 36.011851], [-86.542364, 36.284438]],
  'Richmond': [[-77.655329, 37.403857], [-77.270649, 37.655558]],
  'Atlanta': [[-84.582367, 33.636082], [-84.119568, 33.945897]]
}

let markerCoordinates = {
  'Nashville': {lat: 36.16, lng: -86.78},
  'Richmond': {lat: 37.536919, lng: -77.434132},
  'Atlanta': {lat: 33.766452, lng: -84.397659}
}

export default function CreateEvent() {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('signedIn') !== 'true' || localStorage.getItem('host') === 'false' || localStorage.getItem('username') === null) {
      navigate('/signin')
    } 

  }, [])
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [marker, setMarker] = useState({lat: 33.766452, lng: -84.397659});
  const [eventType, setEventType] = useState('Party');
  const [date, setDate] = useState(dayjs(new Date().toJSON()));
  const [city, setCity] = useState('Atlanta');

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  const dragEnd = (e) => {
    setMarker(e.lngLat)
  }

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setMarker(markerCoordinates[e.target.value])

  };

  const createEvent = async (e) => {
    e.preventDefault()

    if(title.length==0 || description.length==0){
      alert('Fill out every form!')
    }
    else {
      await fetch('/createevent', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({year: date.$y, month: date.$M+1, day: date.$D, hour: date.$H, minute: date.$m, type: eventType, title: title, description: description, city: city, latitude: marker.lat, longitude: marker.lng, user_id: localStorage.getItem('username')})
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ',data);
  
        if(data.created == true) {
          alert("Event Created")
          navigate('/searchevents')
        }
  
      })
    }

    
  }
  
  if(localStorage.getItem('signedIn') !== true || localStorage.getItem('host') === false){

    return (
      <>
        <h2>Create Event</h2>
        <div className='inputGrid'>
          
        
          <div className='inputItem'>
              <TextField
                id="outlined-required"
                label="Event Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{width : 260}}
              />
          </div>

          <div className='inputItem'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>

                <DateTimePicker
                  label="Date&Time picker"
                  value={date}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>

          <div className='inputItem'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={eventType}
                  label="Event Type"
                  onChange={handleEventTypeChange}
                >
                  <MenuItem value='Party'>Party</MenuItem>
                  <MenuItem value='Celebration'>Celebration</MenuItem>
                  <MenuItem value='Relaxation'>Relaxation</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className='inputItem'>
            <Box sx={{ minWidth: 120 }}>  
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="Event Type"
                  onChange={handleCityChange}
                >
                  <MenuItem value='Atlanta'>Atlanta, GA</MenuItem>
                  <MenuItem value='Richmond'>Richmond, VA</MenuItem>
                  <MenuItem value='Nashville'>Nashville, TN</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div className='inputDescription'>
              <TextField
                id="outlined-required"
                label="Event Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{width : 260}}
              />
        </div>

        <h3>Drag the pin to set the event location</h3>
        <Map
          reuseMaps={true}
          initialViewState={{
            longitude: -86.7816016,
            latitude: 36.1626638,
            zoom: 0
          }}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          style={{width: 800, height: 600}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          maxBounds={coordinates[city]}
          >

            <Marker draggable={true} longitude={marker.lng} latitude={marker.lat} anchor="bottom" onDragEnd={(e) => dragEnd(e)}>
                <img src={mapPin} height='30px'/>
            </Marker>
        </Map>
        <div className='submitButtonContainer'>
          <Button variant="contained" type='submit' onClick={createEvent}>Submit</Button>
        </div>
      </>
    )
  }
}