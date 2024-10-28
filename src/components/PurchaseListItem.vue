<script setup lang="ts">
interface Props {
  id: number
  name: string
  price: number
  count: number
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (e: 'delete', id: number): void
}>()
</script>
<template>
  <div class="border-2 border-black text-[20px] rounded-xl w-full justify-between flex px-5">
    <span>{{ props.name }}</span>
    <span>{{ props.count }} шт.</span>
    <span>{{ props.price }} руб.</span>
    <span> - {{ props.price * props.count }} руб.</span>
    <span @click="emits('delete', props.id)" class="px-2 border border-black cursor-pointer">X</span>
  </div>
</template>

