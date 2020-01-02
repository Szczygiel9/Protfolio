import React from 'react';
import ExperienceSection from "./ExperienceSection";
import ExperienceItems from "../data/ExperienceItems";
import Skills from "../data/Skills";
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
                content={Skills}/>
            <SkillsSection
                title={"Wykształcenie"}
                content={["2015-2019 Politechnika Lubelska, informatyka, tytuł: inżynier"]}/>
        </div>
    );
};
export default MainContent
