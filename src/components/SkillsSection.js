import React from 'react';

const SkillsSection = ({title, content}) => {
    return (
        <div className='section'>
            <h1 className='section-title'>{title}</h1>
            <div>
                <ul>
                    {
                        content.map((item) => {
                                return <li>{item}</li>
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    );
};
export default SkillsSection;
