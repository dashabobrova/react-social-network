import { UsersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 20, // устанавливаем сами, исходя из UI
    totalUsersCount: 0, // это призодит с сервака
    currentPage: 1, // изменяется при клике
    isFetching: false, // для лоадера(получаются ли сейчас данные?)
    followingInProgress: [] // для disable кнопки
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
           return {
               ...state,
                // копия только того, что нужно (user, на котором произошел action)
               users: state.users.map (u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
               })
           }
        case UNFOLLOW: 
           return {
               ...state,
               // копия только того, что нужно (user, на котором произошел action)
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
           }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_USERS_TOTAL_COUNT: 
            return {
                ...state,
                totalUsersCount: action.count,
            } 
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS: 
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default: 
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

// Санки
export const getUsers = (currentPage, pageSize) => (dispatch) => {
        dispatch(toggleIsFetching(true));
        
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            });
    }


export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    UsersAPI.follow(userId)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
}


export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));

    UsersAPI.unfollow(userId)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
}

export default usersReducer;
