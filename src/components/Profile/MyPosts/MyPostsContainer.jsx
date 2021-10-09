import React from 'react';
import { addPostActionCreator } from "../../../redux/profilePage-reducer.js"
import { updateNewPostChangeActionCreator } from "../../../redux/profilePage-reducer.js";
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {
    
    return <StoreContext.Consumer>
        { store => {
                let addPost = () => {
                    store.dispatch( addPostActionCreator() );
                }
            
                let onPostChange = (text) => {
                    let action = updateNewPostChangeActionCreator(text);
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange} 
                        addPost={addPost} 
                        posts={store.getState().profilePage.posts} 
                        newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
}

export default MyPostsContainer;