import React from 'react';

const ExperienceSection = ({title, content}) => {
    return (
        <div className='section'>
            <h1 className='section-title'>{title}</h1>
            {content.map((experienceItem) => {
                return (
                    <div>
                        <h2 className='experience-position'>{experienceItem.position}</h2>
                        <h3 className='experience-date'>{experienceItem.dateFrom} - {experienceItem.dateTo}</h3>
                        <ul className='experience-list'>
                            {experienceItem.descriptionPoints.map((point) => {
                                return <li>{point}</li>
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};
export default ExperienceSection;
