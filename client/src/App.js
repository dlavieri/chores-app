import React, { useState, createRef } from 'react';
import AnimateReorder from './components/AnimateReorder/AnimateReorder';
import ListItem from './components/ListItem/ListItem';
import List from './components/List/List';
import AddBtn from './components/AddBtn/AddBtn';
import NewChoreForm from './components/NewChoreForm/NewChoreForm';
import defaultChores from './default';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
import Header from './components/Header/Header';
import Body from './components/Layouts/Body';
import Head from './components/Layouts/Head';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

import reorderContext from './contexts/reorderContext';
import modalContext from './contexts/modalContext';
import loginModalContext from './contexts/loginModalContext';
import signupModalContext from './contexts/signupModalContext';

import './App.css';

function App() {
  function sortChores(arr) {
    let activeArr = arr.filter(chore => chore._active === true);
    let inactiveArr = arr.filter(chore => chore._active === false);
    return [...activeArr, ...inactiveArr];
  }
  const [ chores, setChores ] = useState(sortChores(defaultChores))
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ loginOpen, setLoginOpen ] = useState(false);
  const [ signupOpen, setSignupOpen ] = useState(false);

  const handleToggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="app">
      <reorderContext.Provider value={[chores, setChores]} >
        <modalContext.Provider value={[modalOpen, setModalOpen]}>
          <loginModalContext.Provider value={[loginOpen, setLoginOpen]}>
            <signupModalContext.Provider value={[signupOpen, setSignupOpen]}>
              <Head>
                <Header/>
              </Head>
              <Body>
                <List>
                  <AnimateReorder>
                    {chores.map(chore => <ListItem key={chore._id} id={chore._id} ref={createRef()} chore={chore} />)}
                  </AnimateReorder>
                </List>
                <AddBtn handleModal={handleToggleModal} modalOpen={modalOpen}/>
              </Body>
              <NewChoreForm />
              <LoginForm />
              <SignupForm />
            </signupModalContext.Provider>
          </loginModalContext.Provider>
        </modalContext.Provider>
      </reorderContext.Provider>
    </div>
  );
}

export default App;
