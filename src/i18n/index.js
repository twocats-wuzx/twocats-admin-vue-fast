import { createI18n } from 'vue-i18n'
import cache from '@/utils/cache'

import element_zh_cn from 'element-plus/es/locale/lang/zh-cn'
import element_en from 'element-plus/es/locale/lang/en'

const zh_cn = import.meta.glob('./lang/**/zh-CN.js', { eager: true })
const en_us = import.meta.glob('./lang/**/en-US.js', { eager: true })

export const loadLang = (modules) => {
    const messages = {}

    Object.keys(modules).forEach(module => {
        Object.assign(messages, { ...modules[module].default })
    })
    return messages
}

export const messages = {
    'zh-CN': {
        langName: '中文',
        ...loadLang(zh_cn),
        el: {
            ...element_zh_cn
        }
    },
    'en-US': {
        langName: 'English',
        ...loadLang(en_us),
        el: {
            ...element_en
        }
    }
}

function getLanguage() {
    return cache.getLanguage()
}

export const i18n = createI18n({
    legacy: false,
    locale: getLanguage(),
    messages
})