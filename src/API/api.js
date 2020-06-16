import Axios from "axios"


const instanse = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '81460db4-8a7d-4603-a041-58a4c469e24d'
    }
})

export const userAPI = {
    requestUsers(currentPage = 1, pageSize = 100) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    async toggleFollow(userId) {
        const isFollow = await instanse.get(`follow/${userId}`)
        return isFollow.data ? instanse.delete(`follow/${userId}`).then(response => response.data) :
        instanse.post(`follow/${userId}`).then(response => response.data)
    },
    // unfollow(userId) {
    //     return instanse.delete(`follow/${userId}`).then(response => response.data)
    // },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instanse.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instanse.put('profile/status', {status: status})
    }
}

export const authAPI = {
    me() {
        return  instanse.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return  instanse.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return  instanse.delete(`auth/login`)
    },
}