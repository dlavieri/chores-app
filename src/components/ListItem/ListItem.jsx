import React, { forwardRef } from 'react';
import './ListItem.css';

const ListItem = forwardRef(({ chore }, ref) => (
    <li className="list-item" ref={ref}>
        <div className="list-item-info">
            <div className="list-item-type">{chore.type}</div>
        </div>
    </li>
));

export default ListItem;