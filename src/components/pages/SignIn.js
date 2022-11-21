import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PublicNavbar from '../layout/navbars/PublicNavbar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const theme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false)

  
  useEffect(() => {

    if(sessionStorage.getItem('eventsHubInfo') != null) {
      navigate('/searchevents')
    }

  }, [])


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: formData.get('username'), password: formData.get('password')})
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      if(data.signedIn === true) {
        sessionStorage.setItem('eventsHubInfo', JSON.stringify({username: data.username, host: data.host, signedIn: data.signedIn, id: data.id, city: data.city}))

        navigate('/searchevents')

      }
      else{
        setOpen(true)
        navigate('/signin')
      }

    })
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

  if(sessionStorage.getItem('eventsHubInfo') === null ) {
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
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                {/* Modify the id, name, and autoComplete to relate to our project */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={'error'} sx={{ width: '100%' }}>
            Invalid Credentials.
          </Alert>
        </Snackbar>
      </>
    );
  }
  
}