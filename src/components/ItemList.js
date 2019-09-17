import React from 'react';
import Item from "./Item";

const ItemList = ({projects}) => {
    return (
        <div className='ItemList'>
            {
                projects.map(
                    function (project) {
                        return (
                            <Item title={project.title} content={project.content}/>
                        )
                    }
                )
            }
        </div>
    );
};
export default ItemList;