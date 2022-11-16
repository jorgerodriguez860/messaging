import React from 'react'
import { NavLink } from 'react-router-dom'

export default function GenericNavbar() {
    return (
        <>
            <nav className="nav">
                <NavLink to="/" className="site-title">Home</NavLink>

                <h3>*this is generic navbar</h3>

                <ul className="categories">
                    <NavLink to="/searchevents">Search Events</NavLink>
                    <NavLink to="/signin">Sign In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </ul>
            </nav>
        </>
    )
}