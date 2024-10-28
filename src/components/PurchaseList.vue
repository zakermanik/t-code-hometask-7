<script setup lang="ts">
import type { Purchase } from '@/types/shop-list';

interface Props {
  purchaseList: Purchase[]
}
const props = defineProps<Props>()

const emits = defineEmits<{
  (e: 'delete', id: number): void
}>()

function handleDelete(id: number) {
  emits('delete', id)
}
</script>

<template>
  <div
    class="flex bg-[#f5f5dc] p-5 flex-col text-[32px] items-center gap-5 rounded-[10px] w-full"
  >
    <PurchaseListItem 
      v-for="p in props.purchaseList"
      :key="p.id"
      :id="p.id"
      :name="p.product.name"
      :price="p.product.price"
      :count="p.count"
      @delete="handleDelete"
    />
  </div>
</template>
