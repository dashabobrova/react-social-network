import { combineReducers, createStore } from 'redux';
import dialogsPageReducer from './dialogsPade-reducer';
import profilePageReducer from './profilePage-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;