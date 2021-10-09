import dialogsPageReducer from "./dialogsPade-reducer";
import profilePageReducer from "./profilePage-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my firs post', likesCount: 20},
                {id: 2, message: 'Blah', likesCount: 20},
                {id: 2, message: 'DaDaDA', likesCount: 20},
            ],
            newPostText: 'it-kamasutra'
        },
        
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'Yo!'},
                {id: 5, message: 'Yo!'}
            ],
    
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],

            newMessageBody: ''
        },
    
        sitebar: {}
    },
    _callSubscriber(){
        console.log('state changed');
    },

    getState(){
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sitebar = sidebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store=store;