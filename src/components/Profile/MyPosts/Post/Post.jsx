import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://cdn.pixabay.com/photo/2017/05/06/18/12/avatar-2290470_960_720.jpg" alt=""/>
        <p>{props.message}</p>
    <p className={s.likeCount}>{props.likes}</p>
        <div className={s.like}>Like</div>
        </div>
    )
}

export default Post