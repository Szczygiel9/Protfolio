import React from 'react';
import SidebarData from "../data/SidebarData";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='image'></div>
            <div className='sidebar-content'>
                <div className='under-lined'>{SidebarData.personalData.title}</div>
                <div className='sidebar-section'>
                    <div>{SidebarData.personalData.name}</div>
                    <div>{SidebarData.personalData.email}</div>
                </div>

                <div className='under-lined'>Media</div>
                <div className='sidebar-section'>
                    <div>
                        {SidebarData.mediaData.linkedin.fieldName}
                        <a className='link'
                           href={SidebarData.mediaData.linkedin.link}>{SidebarData.mediaData.linkedin.displayValue}</a>
                    </div>
                    <div>
                        {SidebarData.mediaData.github.fieldName} <a className='link'
                                                                    href={SidebarData.mediaData.github.link}>{SidebarData.mediaData.github.displayValue}</a>
                    </div>
                </div>

                <div className='under-lined'>{SidebarData.langData.title}</div>
                <div className='sidebar-section'>{SidebarData.langData.value}</div>
            </div>
        </div>
    );
};
export default Sidebar;
