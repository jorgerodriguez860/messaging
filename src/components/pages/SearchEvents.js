import React, { useState, useEffect } from 'react';
import Map, { Popup, Marker } from 'react-map-gl';
import { useNavigate } from 'react-router-dom'
import mapPin from '../../images/mappin.png'
import Button from '@mui/material/Button';

import MapSearch from '../childComponents/MapSearch'
import MoreInfoDialog from '../childComponents/MoreInfoDialog';
import EventsList from '../childComponents/EventsList';
import '../../css/SearchEvents.css'
import HostNavbar from '../layout/navbars/HostNavbar';
import UserNavbar from '../layout/navbars/UserNavbar';


let coordinates = {
  'Nashville': [[-86.917648, 36.011851], [-86.542364, 36.284438]],
  'Richmond': [[-77.655329, 37.403857], [-77.270649, 37.655558]],
  'Atlanta': [[-84.582367, 33.636082], [-84.119568, 33.945897]]
}

function SearchEvents() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState({})
  const [eventsList, setEventsList] = useState([])
  const [city, setCity] = useState('Nashville');
  const [open, setOpen] = useState(false);
  


  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('eventsHubInfo') == null) {
      navigate('/signin')
    }

  }, [])
  


  const openPopUp = (e, eventObj) => {
    e.originalEvent.stopPropagation();
    setSelectedMarker(eventObj)
    setShowPopup(true)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddEvent = async () => {
        
    await fetch('/addparticipant', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event_id: String(selectedMarker.id), user_id: JSON.parse(localStorage.getItem('eventsHubInfo')).username})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('data: ',data);

      if(data.status == 'added') {
        alert("Event Added")
      }
      else if(data.status == 'exists') {
        alert("Event Already Added")
      }
      else if(data.status == 'not added') {
        alert("Event Not Added")
      }
    })

  }

  if(localStorage.getItem('eventsHubInfo') != null){

    return (

      <>
        {JSON.parse(localStorage.getItem('eventsHubInfo')).host
        ? <HostNavbar />
        : <UserNavbar />
        }
        <MapSearch setEventsList={setEventsList} city={city} setCity={setCity} />

        <MoreInfoDialog open={open} selectedMarker={selectedMarker} setOpen={setOpen}/>

        <div className='mapListFlex'>
          <div>
            <Map
              reuseMaps={true}
              initialViewState={{
                longitude: -86.7816016,
                latitude: 36.1626638,
                zoom: 0
              }}
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              style={{width: 600, height: 600}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              maxBounds={coordinates[city]}>


                {eventsList.map((eventObj) => {
                      return (
                        <Marker key={eventObj.id} longitude={eventObj.longitude} latitude={eventObj.latitude} anchor="bottom" onClick={(e) => openPopUp(e, eventObj)}>
                            <img src={mapPin} height='30px'/>
                        </Marker>
                      ) 
                    })}

                {showPopup && 
                  (<Popup 
                    focusAfterOpen={true}
                    longitude={selectedMarker.longitude}
                    latitude={selectedMarker.latitude}
                    onClose={() => setShowPopup(false)}>
                    <h3>Title: {selectedMarker.title}</h3>

                    <h5>Date: {selectedMarker.month-1}-{selectedMarker.day}-{selectedMarker.year}</h5>
                    <h5>Time: {selectedMarker.hour}:{selectedMarker.minute}</h5>
                    <p>Host: {selectedMarker.user_id}</p>
                    <Button variant='contained' onClick={handleClickOpen}>More Info</Button>
                    <Button variant='contained' color='error' onClick={handleAddEvent} >Add Event</Button>

                </Popup>)}
                
            </Map>
          </div>
          <div>
            <EventsList eventsList={eventsList} setSelectedMarker={setSelectedMarker} setShowPopup={setShowPopup} />
          </div>
          
        </div>
      </>
      
    )
  }
  else {
    
  }
}

export default SearchEvents;