import React from 'react'

export default function GenericNavbar() {
    return ( 
        <>
        <nav className="nav">
            <a href="/" className="site-title">Home</a>
            <h3>*this is generic navbar</h3>
            <ul className="categories">
                <a href="/searchevents">Search Events</a>
                <a href="/login">Login</a>
                <a href="/Register">Register</a>
            </ul>
        </nav>
    </>
    )
}