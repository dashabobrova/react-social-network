const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
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
                    //добавление к users новых (тоже приходят массивом, поэтому spread)
                    // users: [...state.users, ...action.users] - тогда выводится 2 раза
                users: [...action.users]
            }
        default: 
            return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;
