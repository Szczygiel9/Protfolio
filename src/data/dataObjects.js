import {engTitles, plTitles} from "./titles";
import {engEducation, plEducation} from "./educationData";
import {engExperienceItems, plExperienceItems} from "./experienceItems";
import {engSidebarData, plSidebarData} from "./sidebarData";
import {engSummary, plSummary} from "./Summary";
import {engSkills, plSkills} from "./skills";

export const plData = {
    currentLang: "pl",
    aboutTitle: plTitles.about,
    projectsTitle: plTitles.projects,
    sidebarData: plSidebarData,
    summary: plSummary,
    experienceTitle: plTitles.experience,
    experienceItems: plExperienceItems,
    skillsTitle: plTitles.skills,
    skillsContent: plSkills,
    educationTitle: plTitles.education,
    educationContent: plEducation
};

export const engData = {
    currentLang: "eng",
    aboutTitle: engTitles.about,
    projectsTitle: engTitles.projects,
    sidebarData: engSidebarData,
    summary: engSummary,
    experienceTitle: engTitles.experience,
    experienceItems: engExperienceItems,
    skillsTitle: engTitles.skills,
    skillsContent: engSkills,
    educationTitle: engTitles.education,
    educationContent: engEducation
};
