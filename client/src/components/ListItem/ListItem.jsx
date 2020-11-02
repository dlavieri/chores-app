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
                completed._active = false;
                break;
            }
        }
        arr.push(completed)
        setChores(arr)
    }

    const itemClass = classNames({
        'list-item': true,
        'active': chore._active,
        'inactive': !chore._active
    });
    return (
        <li className={itemClass} ref={ref}>
            <ImgBubble img={chore._img} type={chore._type} />
            <ItemData type={chore._type} location={chore._location} category={chore._category} />
            <ToggleBtn handleCompleteChore={handleCompleteChore} id={chore._id}/>
        </li>
    )
});

export default ListItem;