import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';



const NavBar = () => {
    
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to= '/profile' className={ (navData) => navData.isActive ? s.active : s.item }>Profile</NavLink>
                <div> 
                    <NavLink to= '/dialogs' className={ (navData) => navData.isActive ? s.active : s.item }>Messasges</NavLink>
                </div>
                <div > 
                    <NavLink to='/users' className={ (navData) => navData.isActive ? s.active : s.item }>Users</NavLink>
                </div>
            </div>
            <div> 
                <NavLink to= '/news' className={ (navData) => navData.isActive ? s.active : s.item }>News</NavLink>
                <div >   
                    <NavLink to='/music' className={ (navData) => navData.isActive ? s.active : s.item }>Music</NavLink>
                </div>
                <div > 
                    <NavLink to='/settings' className={ (navData) => navData.isActive ? s.active : s.item }>Settings</NavLink>
                </div>
                
            </div>
        </nav>
    )
}

export default NavBar;