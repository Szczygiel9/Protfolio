import React from 'react';
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import Description from "./Description";
import {connect} from "react-redux";

const MainContent = props => {
    return (
        <div className='main-content'>
            <Description/>
            <ExperienceSection
                title={props.experienceTitle}
                content={props.experienceItems}/>
            <SkillsSection
                title={props.skillsTitle}
                content={props.skillsContent}/>
            <SkillsSection
                title={props.educationTitle}
                content={props.educationContent}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        experienceTitle: state.experienceTitle,
        experienceItems: state.experienceItems,
        skillsTitle: state.skillsTitle,
        skillsContent: state.skillsContent,
        educationTitle: state.educationTitle,
        educationContent: state.educationContent
    };
};

export default connect(mapStateToProps)(MainContent);
