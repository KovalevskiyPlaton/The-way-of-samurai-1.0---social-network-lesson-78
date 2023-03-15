import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLenghtCreator, requared } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const maxLenghtCreator10 = maxLenghtCreator(10)

const MyPosts = (props) => {
    let postsElements = props.posts.map(p=><Post key={p.id} message = {p.message} likesCount={p.likesCount}/>)

    //let newPostElement = React.createRef();

    let onaddPost = (values)=>{
       props.addPost(values.newPostText);
       //props.dispatch(addPostActionCreator());
       //newPostElement.current.value='';
       //props.updateNewPostText('');
    }
    
    return (
                <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onaddPost}/>
                <div className={s.posts}> 
                {postsElements}
                    {/*<Post message = {postData[0].message} likesCount={postData[0].likesCount}/>
                    <Post message = {postData[1].message} likesCount={postData[1].likesCount}/>*/}
            </div>
            </div>
    )
}

const addNewPostForm = (props)=>{
        return (
            <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea}
                    validate={[requared, maxLenghtCreator10]} placeholder={'Enter text here'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            </form>
        )

}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddnewPostForm'})(addNewPostForm)

export default MyPosts;