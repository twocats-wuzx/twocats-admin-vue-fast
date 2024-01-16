import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/store/modules/user'

import { i18n } from '@/i18n'

NProgress.configure({ showSpinner: false })

/**
 * @description: 常量路由数组
 */
const constantRoutes = [

	{
		path: '/login',
		component: () => import('../views/login/index.vue')
	},
	{
		path: '/404',
		component: () => import('../views/404.vue')
	}
]

/**
 * @description: 常量菜单路由数组
 */
export const constantMenu = [
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

/**
 * @description: 将路由对象暴露出去，使用hash模式的历史记录，暴露常量路由数组
 */
export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes
})

/**
 * @description: 路由白名单，不需要权限的路由
 */
const whiteList = ['/login']

/**
 * @description: 加载vue组件
 */
const layoutModules = import.meta.glob('/src/views/**/*.vue')

/**
 * @description: 获取扁平化路由，将多级路由转换成一级路由
 * @param routes 路由数组
 * @param breadcrumb 面包屑路由数组
 */
export const getKeepAliveRoutes = (routes, breadcrumb) => {
    const routerList = []
    routes.forEach((route) => {
        if (route.meta.title) {
            breadcrumb.push(route.meta.title)
        }
        if (route.children && route.children.length > 0) {
            routerList.push(...getKeepAliveRoutes(route.children, breadcrumb))
        }else {
            route.meta.breadcrumb.push(...breadcrumb)
        }
        breadcrumb.pop()
    })
    return routerList
}


/**
 * @deprecated: 通过路径动态获取的组件
 * @param path 路由路径
 */
const getDynamicComponent = (path) => {
    return () => import(`../views/${path}.vue`)
}

/**
 * @description: 路由跳转前的操作
 *  1. 开启顶部进度条
 *  2. 判断用户Token是否存在
 *      存在：判断是否跳转登录页，
 *          如果跳转登录页将其导航到首页
 *          否则拉取用户信息，拉取菜单，拉取权限，拉取字典，将多级路由转换为一级路由
 *      不存在：判断是否在白名单中，如果不在白名单中将其导航到登录页
 */
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const userStore = useUserStore()

    if(userStore.token) {
        if(to.path === '/login') {
            next({ path: '/' })
        }else {
            next()
        }
    }else {
        if(whiteList.includes(to.path)) {
            next()
        }else {
            next(`/login?redirect=${to.path}`)
        }
    }
})

/**
 * @description: 路由跳转完成后，让顶部进度条执行完成
 */
router.afterEach(() => {
    NProgress.done()
})
