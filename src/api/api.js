import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b2ae32e7-9758-4e56-8320-27d69866b4a9'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    newFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status }).then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(values) {
        return instance.post('auth/login', values)
            .then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}