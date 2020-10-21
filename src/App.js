import React, { useState, createRef } from 'react';
import AnimateReorder from './components/AnimateReorder/AnimateReorder';
import ListItem from './components/ListItem/ListItem';
import List from './components/List/List';
import defaultChores from './default';
import reorderContext from './contexts/reorderContext';
import './App.css';

function App() {
  function sortChores(arr) {
    let activeArr = arr.filter(chore => chore.active === true);
    let inactiveArr = arr.filter(chore => chore.active === false);
    return [...activeArr, ...inactiveArr];
  }
  const [ chores, setChores ] = useState(sortChores(defaultChores))

  const handleClick = () => {
    let arr = chores.slice();
    let curr = arr.shift();
    curr.active = false;
    arr.push(curr);
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
      <reorderContext.Provider value={[chores, setChores]} >
        <List>
          <AnimateReorder>
            {chores.map(chore => <ListItem key={chore._id} id={chore._id} ref={createRef()} chore={chore} />)}
          </AnimateReorder>
        </List>
        <button onClick={handleClick}>Click me to reverse</button>
        <button onClick={handleAdd}>Click to add</button>
      </reorderContext.Provider>
    </div>
  );
}

export default App;
