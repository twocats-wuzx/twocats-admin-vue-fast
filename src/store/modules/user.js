import { defineStore } from 'pinia'
import cache from '@/utils/cache'

export const useUserStore = defineStore('appStore', {
    state: () => ({
        token: cache.getToken(),
        refreshToken: cache.getRefreshToken()
    }),
    actions: {
        setToken(token) {
            this.token = token
            cache.setToken(token)
        },
        setRefreshToken(refreshToken) {
            this.refreshToken = refreshToken
            cache.setRefreshToken(refreshToken)
        }
    }
})