import React from 'react';

const Item = ({title, content}) => {
    return (
        <div className='Item'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};
export default Item;