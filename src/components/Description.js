import React from 'react';
import {connect} from "react-redux";

const Description = props => {
    return (
        <div className='section'>
            <p className='summary'>
                {props.summary}
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        summary: state.summary
    };
};

export default connect(mapStateToProps)(Description);
