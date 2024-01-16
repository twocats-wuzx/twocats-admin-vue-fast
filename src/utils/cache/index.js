import { SessionStorage, Storage } from '@/utils/storage'
import CacheConstant from './cache-constant'

class Cache {
    // token 的保存和获取
    getToken = () => {
        return localStorage.getItem(CacheConstant.TokenKey) 
    }
    setToken = (token) => {
        localStorage.setItem(CacheConstant.TokenKey, token)
    }

    // 刷新token的保存和获取
    getRefreshToken = () => {
        return localStorage.getItem(CacheConstant.RefreshTokenKey)
    }
    setRefreshToken = (refreshToken) => {
        localStorage.setItem(CacheConstant.RefreshTokenKey, refreshToken)
    }

    // 页面语言的保存和获取
    getLanguage = () => {
		return Storage.getItem(CacheConstant.LanguageKey) || 'zh-CN'
	}
	setLanguage = (value) => {
		Storage.setItem(CacheConstant.LanguageKey, value)
	}

    // 组件大小的保存和获取
    getComponentSize = () => {
		return Storage.getItem(CacheConstant.ComponentSizeKey) || 'default'
	}
	setComponentSize = (value) => {
		Storage.setItem(CacheConstant.ComponentSizeKey, value)
	}
}


export default new Cache()