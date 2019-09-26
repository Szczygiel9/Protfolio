import React from 'react';

const TimelineItem = ({itemData}) => {
    return (
        <div className='timeline-container right-timeline-item'>
            <div className='timeline-item-content'>
                <h2>{itemData.date}</h2>
                <p>{itemData.description}</p>
            </div>
        </div>
    )
};
export default TimelineItem;
