import React from 'react';
import './Header.sass';

import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            
            <div className="left">
                <NavLink to="/">
                <div className="logo">NLF
                <span className="worm">Rides</span>
                </div>
                </NavLink>                
            </div>

            <div className="middle">
                <ul className="menu">
                    <li className="menu-item"><NavLink to="/signup">Form</NavLink></li>
                    <li className="menu-item"><NavLink to="/rides">Rides</NavLink></li>                  
                </ul>
            </div>

        </div>
    )
}

export default Header;