import React from 'react'
import s from './../Users.module.css'
import userPhoto from './../../../assets/images/user.png'
import { NavLink } from 'react-router-dom'

const User = ({user, followingProgress, toggleFollow}) => {
    return <div key={user.id} className={s.wrapper}>
        <div className={s.leftSide}>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.avatar} alt='img' />
            </NavLink>
            {user.followed ?
                <button disabled={followingProgress.some(id => id === user.id)}
                    onClick={() => {
                        toggleFollow(user.id)
                    }} >Unfollow</button>
                : <button disabled={followingProgress.some(id => id === user.id)}
                    onClick={() => {
                        toggleFollow(user.id)
                    }} >Follow</button>}
        </div>
        <div className={s.content}>
            <div className={s.userName_status}>
                <p>{user.name}</p>
                <p>{user.status}</p>
            </div>
            {/* <div className={s.location}><p>{user.location.city}</p>
                        <p>{user.location.country}</p></div> */}
        </div>
    </div>
}


export default User