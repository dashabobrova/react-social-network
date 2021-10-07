import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator } from "../../../redux/profilePage-reducer.js"
import { updateNewPostChangeActionCreator } from "../../../redux/profilePage-reducer.js";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likesCount}/>)

    //создаем ссылку на элемент; в <textarea ref={newPostElement}></textarea> - привязываем
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch( addPostActionCreator() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostChangeActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} 
                                value={props.newPostText}/>
                </div>
                <div>
                <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;