import React from 'react'
import '../../css/HomePage.css'
import backGroundimage from '../../images/homePageImages/blueHomePage.jpg'
import bussinessImage from '../../images/homePageImages/corporate-businessman-giving-presentation-large-audience.jpg'
import restaurantImage from '../../images/homePageImages/romantic-couple-restaurant.jpg'
import partyImage from '../../images/homePageImages/people-celebrating-party.jpg'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';

import HostNavbar from '../layout/navbars/HostNavbar'
import UserNavbar from '../layout/navbars/UserNavbar'
import PublicNavbar from '../layout/navbars/PublicNavbar'

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const Home = () => {
  return (
    <>
      <div className='navbar'><PublicNavbar /></div> 
    <div className='main-container'>
          <div className='everything-but-footer'>

            <img className="blue-background-image" src={backGroundimage} alt="blue-background"/>

              <div className='signup-message'>
                  <h1>Plan your next event with us <Button variant="contained">Sign up now</Button> </h1>
              </div>

            <div className='card-container'>
              <div className='card'>
                <img  className='card-image' src={restaurantImage} alt="restaurantImage"/>
                  <p className='card-text'>Plan your next evening out.</p>
              </div>

              <div className='card'>
                <img  className='card-image' src={bussinessImage} alt="bussinessImage"/>
                  <p className='card-text'>Plan your next corporate meeting.</p>
              </div>

              <div className='card'>
                <img  className='card-image' src={partyImage} alt="partyImage"/>
                  <p className='card-text'>Plan your next get together.</p>
              </div>
            </div> 
            <div className='footer-container'>
               <React.Fragment>
              <CssBaseline />
              <AppBar position='relative' className='footer' color="inherit" sx={{ top: 'auto', bottom: 0}}>
                <Toolbar  className='footer'  >
                  <div className='footer-text-container'>
                      <a className='footer-text' href="https://www.freepik.com/free-photo/corporate-businessman-giving-presentation-large-audience_15440962.htm#query=lecture&position=0&from_view=search&track=sph#position=0&query=lecture">Image by rawpixel.com on Freepik</a>
                      <a className='footer-text' href="https://www.freepik.com/free-photo/backside-photo-romantic-black-couple-sitting-restaurant-wearing-elegant-clothes_26965149.htm#query=date&position=2&from_view=search&track=sph#position=2&query=date">Image by prostooleh on Freepik</a>
                      <a className='footer-text' href="https://www.freepik.com/free-photo/people-celebrating-party_2765342.htm#query=party&position=6&from_view=search&track=sph">Image by rawpixel.com on Freepik </a>
                      <a className='footer-text' href="https://www.freepik.com/free-vector/abstract-blue-geometric-shapes-background_6166980.htm#query=back%20ground&position=0&from_view=search&track=sph">Image by Harryarts on Freepik</a> 
                  </div>
                </Toolbar>
              </AppBar>
              </React.Fragment> 
            </div>
          </div>
        </div>
    </>
  )
}

export default Home


