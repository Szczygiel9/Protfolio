import React from 'react';
import TimelineItem from "./TimelineItem";

const Timeline = ({items}) => {
    return (
        <div className='timeline'>
            {
                items.map(function (itemData) {
                    return (
                        <TimelineItem itemData={itemData}/>
                    )
                })
            }
        </div>
    );
};
export default Timeline;
