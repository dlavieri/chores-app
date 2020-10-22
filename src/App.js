import React, { useState, createRef } from 'react';
import AnimateReorder from './components/AnimateReorder/AnimateReorder';
import ListItem from './components/ListItem/ListItem';
import List from './components/List/List';
import AddBtn from './components/AddBtn/AddBtn';
import Modal from './components/Modal/Modal';
import defaultChores from './default';

import reorderContext from './contexts/reorderContext';
import modalContext from './contexts/modalContext';
import './App.css';

function App() {
  function sortChores(arr) {
    let activeArr = arr.filter(chore => chore.active === true);
    let inactiveArr = arr.filter(chore => chore.active === false);
    return [...activeArr, ...inactiveArr];
  }
  const [ chores, setChores ] = useState(sortChores(defaultChores))
  const [ modalOpen, setModalOpen ] = useState(false);

  const handleToggleModal = () => setModalOpen(!modalOpen);

  const handleAdd = () => {
    let add = {_id: '005', type: 'new'}
    let arr = chores.slice();
    arr.unshift(add);
    setChores(arr);
  }

  return (
    <div className="app">
      <reorderContext.Provider value={[chores, setChores]} >
        <modalContext.Provider value={[modalOpen, setModalOpen]}>
          <List>
            <AnimateReorder>
              {chores.map(chore => <ListItem key={chore._id} id={chore._id} ref={createRef()} chore={chore} />)}
            </AnimateReorder>
          </List>
          <AddBtn handleModal={handleToggleModal} modalOpen={modalOpen}/>
          {modalOpen && <Modal open={modalOpen} />}
        </modalContext.Provider>
      </reorderContext.Provider>
    </div>
  );
}

export default App;
