import React from 'react'
import './App.css';
import NavBar from './components/Navbar/Navbar.jsx';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsConatainer';
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

const App = ()=>{
  
  return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <NavBar/>
      <div className='app-wrapper-content'>
          <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />}/> 
          <Route path="/profile/" element={<ProfileContainer/>}/>
          <Route path="/profile/:userId/" element={<ProfileContainer/>}/>
          <Route path="/users/*" element={<UsersContainer/>}/>
          <Route path="/music/*" element= {<Music/>}/>
          <Route path="/news/*" element={<News/>}/>
          <Route path="/settings/*" element={<Settings/>}/>
          *<Route path="/login/*" element={<LoginPage/>}/>
          </Routes>
          
      </div>
      </div>
 )
}

export default App;
