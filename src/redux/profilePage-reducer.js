const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my firs post', likesCount: 20},
        {id: 2, message: 'Blah', likesCount: 20},
        {id: 2, message: 'DaDaDA', likesCount: 20},
    ],
    newPostText: 'it-kamasutra'
};

const profilePageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            console.log(state)
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostChangeActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profilePageReducer;
