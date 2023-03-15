import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus'
const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
           { <div>
            <img src='https://st2.depositphotos.com/1008657/6828/i/950/depositphotos_68287145-stock-photo-little-rabbit-on-green-grass.jpg' alt='' className={s.rabbitPict}></img>
            </div>}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
               <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
             </div>
        </div>
    )
}

export default ProfileInfo;