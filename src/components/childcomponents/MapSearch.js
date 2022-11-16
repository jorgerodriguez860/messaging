import React, {useState, useEffect} from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import '../../css/MapSearch.css'

function MapSearch({setEventsList, city, setCity}) {

    
    const [date, setDate] = useState(dayjs(new Date().toJSON()));

    //UseEffect Hook
    useEffect(() => {

        const apiCall = async() => {

        await fetch(`/mapevents?city=${city}&year=${date.$y}&month=${date.$M+1}&day=${date.$D}`)
        .then((response) => response.json())
        .then((data) => {
            setEventsList(data)
            console.log(data)
        })
    }

    apiCall()

  }, [date, city])

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleDateChange = (newValue) => {
        setDate(newValue);
    };

  return (
    <div className='mapSearchFlex'>
    {/* City Select */}
        <Box sx={{ maxWidth: 300 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="City"
            onChange={handleCityChange}
            >
            <MenuItem value='Richmond'>Richmond, VA</MenuItem>
            <MenuItem value='Atlanta'>Atlanta, GA</MenuItem>
            <MenuItem value='Nashville'>Nashville, TN</MenuItem>
            </Select>
            </FormControl>
        </Box>

      {/* Date Select */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
          label="Date"
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
          />                    
      </LocalizationProvider>


    </div>
  )
}

export default MapSearch