import axios, { AxiosResponse } from 'axios'
import qs from 'qs'
import { ElMessage } from 'element-plus'
import { ElMessageBox } from 'element-plus/es'

import cache from '@/utils/cache'

// axios实例
const service = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 60000,
	headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

// 请求拦截器
service.interceptors.request.use(
	(config) => {
		const userStore = cache.get('userStore')
		// 请求头添加token
		if (cache.get('token')) {
			config.headers['Authorization'] = cache.get('token')
		}
		return config
	}
)