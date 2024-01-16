/**
 * 调用浏览器的本地存储
 * @method setItem 设置本地存储
 * @method getItem 获取本地存储
 * @method removeItem 删除本地存储
 * @method clear 清空本地存储
 */
export const Storage = {
    /**
     * 设置浏览器的本地存储
     * @param {string} key 储存数据的key
     * @param {object} value 需要存储的数据，将使用JSON.stringify转换为字符串进行保存
     * @returns 
     */
    setItem(key, value) {
        if (value == undefined) {
            return
        }
        window.localStorage.setItem(key, JSON.stringify(value))
    },

    /**
     * 获取浏览器的本地存储
     * @param {string} key 储存数据的key
     * @returns
     * 如果获取到的数据为undefined，将返回undefined，否则返回JSON.parse后的数据
     */
    getItem(key) {
        const value = window.localStorage.getItem(key)
        if (value == undefined) {
            return
        }
        return JSON.parse(value)
    },

    /**
     * 删除浏览器的本地存储
     * @param {string} key 储存数据的key
     */
    removeItem(key) {
        window.localStorage.removeItem(key)
    },

    /**
     * 清空浏览器的本地存储
     */
    clear() {
        window.localStorage.clear()
    }
}


/**
 * window.sessionStorage的封装 进行数据的临时缓存（会话级别）
 * @method setItem 设置本地存储
 * @method getItem 获取本地存储
 * @method removeItem 删除本地存储
 * @method clear 清空本地存储
 */
export const SessionStorage = {
    /**
     * 设置浏览器的临时存储
     * @param {string} key 储存数据的key
     * @param {object} value 需要存储的数据，将使用JSON.stringify转换为字符串进行保存
     * @returns 
     */
    setItem(key, value) {
        if (value == undefined) {
            return
        }
        window.localStorage.setItem(key, JSON.stringify(value))
    },

    /**
     * 获取浏览器的临时存储
     * @param {string} key 储存数据的key
     * @returns
     * 如果获取到的数据为undefined，将返回undefined，否则返回JSON.parse后的数据
     */
    getItem(key) {
        const value = window.localStorage.getItem(key)
        if (value == undefined) {
            return
        }
        return JSON.parse(value)
    },

    /**
     * 删除浏览器的临时存储
     * @param {string} key 储存数据的key
     */
    removeItem(key) {
        window.localStorage.removeItem(key)
    },

    /**
     * 清空浏览器的临时存储
     */
    clear() {
        window.localStorage.clear()
    }
}