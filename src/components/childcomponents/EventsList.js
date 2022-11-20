import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import '../../css/EventsList.css'


function EventsList({eventsList, setSelectedMarker, setShowPopup}) {

    const handleClick = (event, cellValues) => {

        eventsList.forEach(elementObj => {
            if(elementObj.id === cellValues.id) {
                setSelectedMarker(elementObj)
                setShowPopup(true)
            }
        });
    }
    
    const columns = [
      { field: 'Title', width: 200 },
    //   { field: 'Host', width: 150},
      {
        field: "Find",
        renderCell: (cellValues) => {
          return (
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Find
            </Button>
          );
        },
        width: 150
      }
    
    
    ];
    
    let events = eventsList.map((eventObj) => {
        return {id: eventObj.id, Title: eventObj.title}
    })

    return (
        <div className='eventsList'>
          <DataGrid
            rows={events}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </div>
    );
}

export default EventsList