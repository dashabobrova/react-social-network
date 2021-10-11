import { addPostActionCreator } from "../../../redux/profilePage-reducer.js"
import { updateNewPostChangeActionCreator } from "../../../redux/profilePage-reducer.js";
import MyPosts from './MyPosts';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch( addPostActionCreator() );
        },
        onPostChange: (text) => {
            let action = updateNewPostChangeActionCreator(text);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;