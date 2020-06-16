import React from 'react'
import s from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import Preloader from '../../assets/images/preloader/Preloader'
import User from './User.jsx/User'

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged,  ...props}) => {
    return <div>
        {props.isFetching ? <Preloader /> : null}
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
        onPageChanged={onPageChanged} />
        { props.users.map((u) => <User user={u} key={u.id} followingProgress={props.followingProgress}
    toggleFollow={props.toggleFollow}
        ></User>) }
    </div>
}


export default Users 