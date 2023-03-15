import React from 'react'
import s from './Post.module.css'
const Post = (props) => {
   
    
    return (
        <div className={s.item}>
            <img src= 'https://fb.ru/media/i/5/8/0/9/7/4/i/580974.jpg' alt=''></img>
            {props.message}
            <div>
                <span>like</span> {props.likesCount} 
            </div>
        </div>

    )
}

export default Post;