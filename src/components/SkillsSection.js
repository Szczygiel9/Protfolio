import React from 'react';

const SkillsSection = ({title, content}) => {
    return (
        <div className='section'>
            <p className='section-title'>{title}</p>
            <div>
                <ul className='experience-list'>
                    {
                        content.map((item, index) => {
                                return <li key={index}>{item}</li>
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    );
};
export default SkillsSection;
