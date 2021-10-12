import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "52db46d3-a6ab-4df4-9548-c8459fc02b06"
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    }
};

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
};


