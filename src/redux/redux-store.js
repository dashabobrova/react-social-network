import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsPageReducer from './dialogsPade-reducer';
import profilePageReducer from './profilePage-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './usersPage-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;