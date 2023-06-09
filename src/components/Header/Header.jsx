import React from 'react';
import { NavLink } from 'react-router-dom';
import s  from './Header.module.css';

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src='https://roboriseit.com/wp-content/uploads/2018/11/your-logo-300x163.jpg'></img>
            <div className={s.loginBlock}>
                {props.isAuth 
                ?<div>{props.login}-<button onClick={props.logout}>Log out</button></div> 
                :<NavLink to='login' className={ (navData) => navData.isActive ? s.active : s.item }>Login</NavLink>}
           </div>
        </header>
    )
}

export default Header;  