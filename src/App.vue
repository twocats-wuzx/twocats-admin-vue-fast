<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { computed, nextTick, onMounted } from 'vue';
import { useTitle } from '@vueuse/core'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/store/modules/app'
import { messages } from '@/i18n'

const appStore = useAppStore()
const { t } = useI18n()
const locale = computed(() => messages[appStore.language].el)
const size = computed(() => appStore.componentSize)

useTitle(t('app.title'))

onMounted(() => {
  nextTick(() => {
    const { body } = document
    const WIDTH = 992

    if (body.offsetWidth < WIDTH) {
      console.log('collapse')
      // appStore.toggleCollapse(true)
    }
  })
})

</script>