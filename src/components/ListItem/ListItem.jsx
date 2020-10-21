import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import ImgBubble from '../ImgBubble/ImgBubble'
import ItemData from '../ItemData/ItemData';
import ToggleBtn from '../ToggleBtn/ToggleBtn'
import './ListItem.css';
import reorderContext from '../../contexts/reorderContext';

const ListItem = forwardRef(({ chore }, ref) => {

    const [ chores, setChores ] = useContext(reorderContext);

    const handleCompleteChore = (id) => {
        let arr = chores.slice();
        let completed;
        for (let i=0; i < arr.length; i++) {
            if (arr[i]._id === id) {
                completed = arr.splice(i,1)[0];
                completed.active = false;
                break;
            }
        }
        arr.push(completed)
        setChores(arr)
    }

    const itemClass = classNames({
        'list-item': true,
        'active': chore.active,
        'inactive': !chore.active
    });
    return (
        <li className={itemClass} ref={ref}>
            <ImgBubble img={chore.img} type={chore.type} />
            <ItemData type={chore.type} location={chore.location} category={chore.category} />
            <ToggleBtn handleCompleteChore={handleCompleteChore} id={chore._id}/>
        </li>
    )
});

export default ListItem;