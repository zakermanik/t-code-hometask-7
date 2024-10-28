<script setup lang="ts">
import { ROUTER_NAMES } from '@/shared/router/routes';
import { computed } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const buttonText = computed(() => {
  if (route.name === ROUTER_NAMES.SHOP)
    return 'Перейти к странице ToDos'
  else
    return 'Перейти к странице Магазина'
})

function handleGoTo() {
  if (route.name === ROUTER_NAMES.SHOP)
    router.push({ name: ROUTER_NAMES.TODO })
  else
    router.push({ name: ROUTER_NAMES.SHOP })
}
</script>

<template>
  <button
    class="page-button"
    @click="handleGoTo"
  >
    {{ buttonText }}
  </button>
  <RouterView />
</template>

<style scoped>
.page-button {
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 16px;
  padding: 10px;
  background-color: #e6dfbe;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
</style>
