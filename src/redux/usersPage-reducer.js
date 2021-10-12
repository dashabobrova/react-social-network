const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 20, // устанавливаем сами, исходя из UI
    totalUsersCount: 0, // это призодит с сервака
    currentPage: 1, // изменяется при клике
    isFetching: false, // для лоадера(получаются ли сейчас данные?)
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
           return {
               ...state,
                // копия только того, что нужно (user, на котором произошел action)
               users: state.users.map (u => {
                    if(u.id === action.userId){
                        return {...u, fallowed: true}
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
                        return {...u, fallowed: false}
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
        default: 
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;
