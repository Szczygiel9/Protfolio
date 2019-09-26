import React from 'react';
import ExperienceSection from "./ExperienceSection";
import ExperienceItems from "../data/ExperienceItems";
import SkillsSection from "./SkillsSection";
import Description from "./Description";

const MainContent = () => {
    return (
        <div className='main-content'>
            <Description/>
            <ExperienceSection
                title={"Doświadczenie zawodowe"}
                content={ExperienceItems}/>
            <SkillsSection
                title={"Umiejętności"}
                content={["Lorep ipsum", "Lorep ipsum", "Lorep ipsum"]}/>
        </div>
    );
};
export default MainContent
