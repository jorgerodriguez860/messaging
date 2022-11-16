import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HostNavbar() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="site-title">Home</NavLink>

        <h3>*this is host navbar</h3>

        <ul className="categories">
          <NavLink to="/searchevents">Search Events</NavLink>
          <NavLink to="/eventsimattending">Events I'm Attending</NavLink>
          <NavLink to="/createevents">Create Events</NavLink>
          <NavLink to="/eventsicreated">Events I Created</NavLink>
          <NavLink to="/myprofile">My Profile</NavLink>
          <p>Sign Out</p>
        </ul>
      </nav>
    </>
  )
}
