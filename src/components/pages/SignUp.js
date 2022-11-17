// SignUp template provided by Material UI
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PublicNavbar from '../layout/navbars/PublicNavbar';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from 'react';

const theme = createTheme();

export default function SignUp() {

  const [city, setCity] = useState('');
  const [host, setHost] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {

    if(localStorage.getItem('eventsHubInfo') != null) {
      navigate('/searchevents')
    }

  }, [])

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChange = (e) => {
    setHost(e.target.checked)
  };

  const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

    console.log({
      Username: data.get('Username'),
      password: data.get('password'),
      FirstName: data.get('firstName'),
      LastName: data.get('lastName'),
      city: data.get('City'),
    })

    if(city === null){
      setCity('Atlanta ')
    }
    else{
      await fetch('/createusers', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({host: host, username: data.get('Username'), password: data.get('password'), fname: data.get('firstName'), lname: data.get('lastName'), location: city})
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ',data);
        if(data.created === true) {
          alert("User Created")
        }
      })
    }
    console.log({
      Username: data.get('Username'),
      password: data.get('password'),
      FirstName: data.get('firstName'),
      LastName: data.get('lastName'),
      city: data.get('City'),
    });
  };

  if(localStorage.getItem('eventsHubInfo') === null ) {
    return (
      <>
      <PublicNavbar />

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{ m: 0, minWidth: 400 }}>
                      <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={city}
                        label="City"
                        onChange={handleChangeCity}
                      >
                        <MenuItem value={'Atlanta'}>Atlanta </MenuItem>
                        <MenuItem value={'Nashville'}>Nashville</MenuItem>
                        <MenuItem value={'Richmond'}>Richmond</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                  {/* Modify the id, name, and autoComplete to relate to our project */}
                  <TextField
                    required
                    fullWidth
                    id="Username"
                    label="Username"
                    name="Username"
                    autoComplete="Username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    // Modify the value to relate to our project
                    control={<Checkbox  value="host" onChange={(e)=>handleChange(e)}  color="primary" />}
                    label="I want to be a host and create events."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      </>
    );
  }
}