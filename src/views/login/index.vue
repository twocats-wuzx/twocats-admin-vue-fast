<template>
    <div class="login-container">
        <div class="login-intro">
			<h1>{{ $t('app.title') }}</h1>
			<div class="desc">
				{{ $t('app.description') }}
			</div>
			<!-- <div class="login-bg"><img src="@/assets/login.png" /></div> -->
		</div>
		<div class="login-form">
			<account v-if="loginType === 'account'"></account>
			<mobile v-if="loginType === 'mobile'"></mobile>
			<div class="login-more">
				<el-button type="info" link @click="loginSwitch('account')">{{ $t('app.accountSignIn') }}</el-button>
				<el-button type="info" link @click="loginSwitch('mobile')">{{ $t('app.mobileSignIn') }}</el-button>
			</div>
		</div>
    </div>  
</template>

<script setup>
import { ref } from 'vue'
import Account from './Account.vue'

const loginType = ref('account')
const loginSwitch = (type) => {
	loginType.value = type
}
</script>