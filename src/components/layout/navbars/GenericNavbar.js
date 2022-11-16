import React from 'react'

export default function GenericNavbar() {
    return ( 
        <>
        <nav className="nav">
            <a href="/" className="site-title">Home</a>
            <h3>*this is generic navbar</h3>
            <ul className="categories">
                <a href="/searchevents">Search Events</a>
                <a href="/signin">Sign In</a>
                <a href="/signup">Sign Up</a>
            </ul>
        </nav>
    </>
    )
}