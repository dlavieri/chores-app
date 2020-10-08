import React, { useState, createRef } from 'react';
import AnimateReorder from './components/AnimateReorder/AnimateReorder';
import ListItem from './components/ListItem/ListItem';
import List from './components/List/List';

const defaultChores = [
  {_id: '001', type: 'monstera'},
  {_id: '002', type: 'cat'},
  {_id: '003', type: 'philodendron'},
  {_id: '004', type: 'mantis'},
];

function App() {
  const [ chores, setChores ] = useState(defaultChores)

  const handleClick = () => {
    let arr = chores.slice();
    arr.push(arr.shift());
    setChores(arr);
  }

  const handleAdd = () => {
    let add = {_id: '005', type: 'new'}
    let arr = chores.slice();
    arr.unshift(add);
    setChores(arr);
  }

  return (
    <div className="app">
      <List>
        <AnimateReorder>
          {chores.map(chore => <ListItem key={chore._id} id={chore._id} ref={createRef()} chore={chore} />)}
        </AnimateReorder>
      </List>
      <button onClick={handleClick}>Click me to reverse</button>
      <button onClick={handleAdd}>Click to add</button>
    </div>
  );
}

export default App;
