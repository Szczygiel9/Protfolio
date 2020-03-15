import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {changeLanguage} from "../actions/dataActions";

const Header = props => {
    return (
        <div className='nav'>
            <NavLink exact activeClassName='active-link' to="/">O mnie</NavLink>
            <NavLink activeClassName='active-link' to="/projects">Projekty warte wspomnienia</NavLink>
            <button onClick={() => {
                props.changeLanguage();
            }} className='language-switcher'>PL | EN
            </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguage: () => dispatch(changeLanguage())
    };
};

export default connect(null, mapDispatchToProps)(Header);
