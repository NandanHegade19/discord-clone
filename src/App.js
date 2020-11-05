import React, { useEffect } from 'react';
import './App.css';
import ChatComp from './Components/ChatComp';
import Sidebar from './Components/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import LoginPage from './Components/LoginPage';
import { auth } from './firebase';
import {login, logout} from "./features/userSlice"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          userId: authUser.uid,
          photoURL: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }else{
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {user? (
        <><Sidebar/>
        <ChatComp/></>
      ) : (
        <LoginPage/>
      )}
      
    </div>
  );
}

export default App;
