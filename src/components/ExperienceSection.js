import React from 'react';

const ExperienceSection = ({title, content}) => {
    return (
        <div className='section'>
            <p className='section-title'>{title}</p>
            {content.map((experienceItem, experienceIndex) => {
                return (
                    <div key={experienceIndex}>
                        <p className='experience-position'>{experienceItem.position}</p>
                        <p className='experience-date'>{experienceItem.dateFrom} - {experienceItem.dateTo}</p>
                        <ul className='experience-list'>
                            {experienceItem.descriptionPoints.map((point, index) => {
                                return <li key={index}>{point}</li>
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};
export default ExperienceSection;
