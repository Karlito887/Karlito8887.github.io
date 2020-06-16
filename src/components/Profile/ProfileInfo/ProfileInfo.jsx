import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../../assets/images/preloader/Preloader'
import userDefaultPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfilestatuWithHooks'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <img className={s.img} src="https://cdn.pixabay.com/photo/2020/04/05/21/02/panoramic-5007742_960_720.jpg" alt='img' />

            {/* <img className={s.avatarBig} src="https://cdn.pixabay.com/photo/2017/05/06/18/12/avatar-2290470_960_720.jpg" alt="" /> */}
            <img className={s.avatarBig} src={!props.profile.photos.large ? userDefaultPhoto : props.profile.photos.large} alt="" />
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                <span>Обо мне:{props.profile.aboutMe}</span>
                <span>Имя: {props.profile.fullName}</span>
            </div>
        </div>
    )
}
export default ProfileInfo