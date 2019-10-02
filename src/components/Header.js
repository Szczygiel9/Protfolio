import React from 'react';
import {NavLink} from "react-router-dom";
import State from "../data/State";

const Header = () => {
    return (
        <div className='nav'>
            <NavLink exact activeClassName='ActiveLink' to="/">O mnie</NavLink>
            <NavLink activeClassName='ActiveLink' to="/projects">Repozytoria warte wspomnienia</NavLink>
            <button onClick={State.flipState} className='language-switcher'>PL | EN</button>
        </div>
    );
};
export default Header;
