import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'

import 'virtual:svg-icons-register'

import { router } from './router'
import { i18n } from './i18n'

import App from './App.vue'
import '@/assets/icons/iconfont/iconfont'
import 'element-plus/dist/index.css'
import '@/style/index.scss'

const app = createApp(App)

// 注册，自定义指令
app.use(router)
app.use(i18n)
app.use(createPinia())
app.use(ElementPlus)

app.mount('#app')
