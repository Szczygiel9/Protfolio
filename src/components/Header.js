import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {changeLanguage} from "../actions/dataActions";

const Header = props => {
    return (
        <div className='nav'>
            <NavLink exact activeClassName='active-link' to="/">{props.aboutTitle}</NavLink>
            <NavLink activeClassName='active-link' to="/projects">{props.projectsTitle}</NavLink>
            <button onClick={() => {
                props.changeLanguage();
            }} className='language-switcher'>PL | EN
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        aboutTitle: state.aboutTitle,
        projectsTitle: state.projectsTitle
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguage: () => dispatch(changeLanguage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
