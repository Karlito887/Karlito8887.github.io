import React from 'react'
import s from "./../../Navbar.module.css"

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img className={s.avatar} src="https://cdn.pixabay.com/photo/2017/05/06/18/12/avatar-2290470_960_720.jpg" alt="" />
            <div className={s.name}>{ props.name }</div>
        </div>
    )
} 

export default Friend 