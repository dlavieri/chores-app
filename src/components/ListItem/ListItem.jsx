import React, { forwardRef } from 'react';
import classNames from 'classnames';
import ImgBubble from '../ImgBubble/ImgBubble'
import ItemData from '../ItemData/ItemData';
import ToggleBtn from '../ToggleBtn/ToggleBtn'
import './ListItem.css';

const ListItem = forwardRef(({ chore }, ref) => {

    const itemClass = classNames({
        'list-item': true,
        'active': chore.active,
        'inactive': !chore.active
    });
    return (
        <li className={itemClass} ref={ref}>
            <ImgBubble img={chore.img} type={chore.type} />
            <ItemData type={chore.type} location={chore.location} category={chore.category} />
            <ToggleBtn />
        </li>
    )
});

export default ListItem;