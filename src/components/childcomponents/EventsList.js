import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';



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
      { field: 'Title', width: 250 },
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
              Find on Map
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
        <div style={{ height: 600, width: 400 }}>
          <DataGrid
            rows={events}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
    );
}

export default EventsList