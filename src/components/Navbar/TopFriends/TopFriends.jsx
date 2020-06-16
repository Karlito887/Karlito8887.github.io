import React, { useDebugValue } from "react"
import s from "./../Navbar.module.css"
import Friend from "./Friend/Friend"


const TopFriends = (props) => {

    let friendsItem = props.sideBar.friends.map( (f) => <Friend name={f.name} /> )
    return (
        <div className={s.top_friends}>
            <h3>Friends</h3>
            <div className={s.top_friends_box}>
                {friendsItem}
            </div>
        </div>
    )
}

export default TopFriends