import React from 'react';
import s from "./Header.module.css"
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.logo} src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png' alt='img' />
      {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div> :
        <NavLink to='/login' className={s.login}>Login</NavLink>}
    </header>
  )
}

export default Header