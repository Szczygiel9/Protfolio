import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='nav'>
            <NavLink exact activeClassName='ActiveLink' to="/">O mnie</NavLink>
            <NavLink activeClassName='ActiveLink' to="/projects">Repozytoria warte wspomnienia</NavLink>
            <button className='language-switcher'>PL | EN</button>
        </div>
    );
};
export default Header;
