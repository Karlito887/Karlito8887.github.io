import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialogs__item}>
            <img className={s.avatar} src="https://cdn.pixabay.com/photo/2017/05/06/18/12/avatar-2290470_960_720.jpg" alt="" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default Dialog