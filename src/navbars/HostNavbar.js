import React from 'react'

export default function HostNavbar() {
  return (
    <>
        <nav className="nav">
            <a href="/" className="site-title">Home</a>
            <h3>*this is host navbar</h3>
        <ul className="categories">
            <a href="/searchevents">Search Events</a>
            <a href="/eventsimattending">Events I'm Attending</a>
            <a href="/createevents">Create Events</a>
            <a href="/eventsicreated">Events I Created</a>
            <a href="/myprofile">My Profile</a>
            <a href="/logout">Logout</a>
        </ul>
        </nav>
    </>
  )
}
