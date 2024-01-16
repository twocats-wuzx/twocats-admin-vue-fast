import { defineStore } from 'pinia'
import cache from '@/utils/cache'


export const useAppStore = defineStore('appStore', {
    state: () => ({
        language: cache.getLanguage(),
        componentSize: cache.getComponentSize()
    }),
    actions: {
        setLanguage(language) {
            this.language = language
            cache.setLanguage(language)
        },
        setComponentSize(componentSize) {
            this.componentSize = componentSize
            cache.setComponentSize(componentSize)
        }
    }
})