import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar(props) {
    return (
       <nav className='navBar'> 
        <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="poke-logo" />
        </Link>

        <Link to="/">Home</Link>

        <Link to="/pokemon">All Pokemon</Link>

        <Link to="/pokemon/new">Add New Pokemon</Link>
       </nav>
    );
}

export default NavBar;