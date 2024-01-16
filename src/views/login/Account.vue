<template>
    <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" @keyup.enter="onLogin">
		<div class="login-title">{{ $t('app.signIn') }}</div>
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" :prefix-icon="User" :placeholder="$t('app.username')"></el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input v-model="loginForm.password" :prefix-icon="Lock" show-password :placeholder="$t('app.password')"></el-input>
		</el-form-item>
		<el-form-item prop="captcha" class="login-captcha">
			<el-input v-model="loginForm.captcha" :placeholder="$t('app.captcha')" :prefix-icon="Key"></el-input>
			<img :src="captchaBase64" @click="onCaptcha" />
		</el-form-item>
		<el-form-item class="login-button">
			<el-button type="primary" @click="onLogin()">{{ $t('app.signIn') }}</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const loginFormRef = ref()
const captchaBase64 = ref()

const loginForm = reactive({
    username: '',
    password: '',
    key: '',
    captcha: ''
})

const loginRules = ref({
    username: [
        { required: true, message: t('validate.required'), trigger: 'blur' },
        { min: 3, max: 20, message: t('validate.login.username'), trigger: 'blur' }
    ],
    password: [
        { required: true, message: t('validate.required'), trigger: 'blur' },
        { min: 6, max: 20, message: t('validate.login.password'), trigger: 'blur' }
    ],
    captcha: [
        { required: true, message: t('validate.required'), trigger: 'blur' }
    ]
})

const onCaptcha = async () => {

}

const onLogin = () => {
	
}

</script>

<style lang="scss" scoped>
.login-title {
	display: flex;
	justify-content: center;
	margin-bottom: 35px;
	font-size: 24px;
	color: #444;
	letter-spacing: 4px;
}
.login-captcha {
	:deep(.el-input) {
		width: 200px;
	}
}
.login-captcha img {
	width: 150px;
	height: 40px;
	margin: 5px 0 0 10px;
	cursor: pointer;
}
.login-button {
	:deep(.el-button--primary) {
		margin-top: 10px;
		width: 100%;
		height: 45px;
		font-size: 18px;
		letter-spacing: 8px;
	}
}
</style> 