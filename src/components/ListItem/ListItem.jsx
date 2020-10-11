import React, { forwardRef } from 'react';
import ImgBubble from '../ImgBubble/ImgBubble'
import ItemData from '../ItemData/ItemData';
import './ListItem.css';

const ListItem = forwardRef(({ chore }, ref) => (
    <li className="list-item" ref={ref}>
        <ImgBubble img={chore.img} type={chore.type} />
        <ItemData type={chore.type} location={chore.location} category={chore.category} />
    </li>
));

export default ListItem;