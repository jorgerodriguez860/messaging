import React from 'react'

export default function UserNavbar() {
  return (
    <>
    <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <h3>*this is generic navbar</h3>
        <ul className="categories">
            <a href="/searchevents">Search Events</a>
            <a href="/myevents">My Events</a>
            <a href="/myprofile">My Profile</a>
            <a href="/logout">Logout</a>
        </ul>
    </nav>
    </>
  )
}