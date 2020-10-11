import React from 'react';
import './ItemData.css';

const ItemData = ({type, location, category}) => {

    return (
        <div className="list-item-data">
            <div className="data-type">{type}</div>
            <div className="data-location">{location}</div>
        </div>
    )
}

export default ItemData;
