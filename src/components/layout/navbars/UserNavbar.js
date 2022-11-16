import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserNavbar() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="site-title">Home</NavLink>

        <h3>*this is generic navbar</h3>

        <ul className="categories">
          <NavLink to="/searchevents">Search Events</NavLink>
          <NavLink to="/myevents">My Events</NavLink>
          <NavLink to="/myprofile">My Profile</NavLink>
          <p>Sign Out</p>
        </ul>
      </nav>
    </>
  )
}