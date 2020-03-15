import React from 'react';
import {connect} from "react-redux";

const Sidebar = props => {
    return (
        <div className='sidebar'>
            <div className='image'></div>
            <div className='sidebar-content'>
                <div className='under-lined'>{props.sidebarData.personalData.title}</div>
                <div className='sidebar-section'>
                    <div>{props.sidebarData.personalData.name}</div>
                    <div>{props.sidebarData.personalData.email}</div>
                </div>

                <div className='under-lined'>Media</div>
                <div className='sidebar-section'>
                    <div>
                        {props.sidebarData.mediaData.linkedin.fieldName}
                        <a className='link'
                           href={props.sidebarData.mediaData.linkedin.link}>{props.sidebarData.mediaData.linkedin.displayValue}</a>
                    </div>
                    <div>
                        {props.sidebarData.mediaData.github.fieldName} <a className='link'
                                                                          href={props.sidebarData.mediaData.github.link}>{props.sidebarData.mediaData.github.displayValue}</a>
                    </div>
                </div>

                <div className='under-lined'>{props.sidebarData.langData.title}</div>
                <div className='sidebar-section'>{props.sidebarData.langData.value}</div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        sidebarData: state.sidebarData
    };
};

export default connect(mapStateToProps)(Sidebar);
