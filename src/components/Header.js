import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='nav'>
            <NavLink exact activeClassName='active-link' to="/">O mnie</NavLink>
            <NavLink activeClassName='active-link' to="/projects">Projekty warte wspomnienia</NavLink>
            <button className='language-switcher'>PL | EN</button>
        </div>
    );
};
export default Header;
