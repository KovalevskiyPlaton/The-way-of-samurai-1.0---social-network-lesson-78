//import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



const  mapStateToProps =(state)=>{
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const  mapDispatchToProps=(dispatch)=>{
  return{
        addPost:(newPostText)=>{
        dispatch(addPostActionCreator(newPostText));
      } 
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
//t-code:17 33
export default MyPostContainer;