<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";
import type { Product,Purchase, Category} from "@/types/shop-list"
import _ from "lodash";

const count = ref<number>(1);
const currentCategory = ref<number | null>(null);
const categories: Category[] = [
  { id: 1, name: "Чехол" },
  { id: 2, name: "Наушники" },
  { id: 3, name: "Смартфоны" },
];
const currentProduct = ref<Product | null>(null);
const products = ref<Product[]>([
  { id: 1, name: "Чехол на Samsung", price: 200, category: 1 },
  { id: 2, name: "Чехол на Vivo", price: 200, category: 1 },
  { id: 3, name: "Наушники TFN Saibot ZX-6 blue", price: 10000, category: 2 },
  {
    id: 4,
    name: "Наушники Audio-Technica ATH-M40x",
    price: 14100,
    category: 2,
  },
  { id: 5, name: "Samsung Galaxy A13", price: 30000, category: 3 },
  { id: 6, name: "Google Pixel 3 3XL", price: 60400, category: 3 },
]);
const purchaseList = ref<Purchase[]>([]);
const filteredProductList = _.cloneDeep(products);

const summ = computed<number>(() => {
  return purchaseList.value.reduce((total: number, purchase: Purchase) => {
    return total + purchase.product.price * purchase.count
  }, 0)
});

function changeCategory(categoryID: number) {
  products.value = filteredProductList.value?.filter(
    (p) => p.category === categoryID,
  );
  if(currentProduct.value?.category !== categoryID)
    currentProduct.value = null
}
function updateSumm() {
  if (currentProduct.value && count.value) 
    purchaseList.value.push({ id: Date.now(), product: currentProduct.value, count: count.value });
}

function handleDelete(id: number) {
  const index: number = purchaseList.value.findIndex((purchase: Purchase) => purchase.id === id)
  if(index !== -1) {
    purchaseList.value.splice(index, 1)
  }
}

watchEffect(() => {
  if (currentProduct.value || currentCategory.value) count.value = 1;
});
</script>

<template>
  <div class="flex flex-col gap-3 w-[700px]">
    <div
      class="flex bg-[#f5f5dc] p-5 flex-col text-[32px] items-center gap-5 rounded-[10px] w-full"
    >
      <h1>Магазин</h1>
      <el-select 
        v-model="currentCategory" 
        clearable
        @change="changeCategory"
      >
        <el-option
          v-for="c in categories"
          :key="c.id"
          :value="c.id"
          :label="c.name"
        />
      </el-select>
      <el-select clearable v-model="currentProduct" value-key="id">
        <el-option
          v-for="p in products"
          :key="p.id"
          :value="p"
          :label="p.name"
        />
      </el-select>
      <el-input
        clearable
        v-model.number="count"
        type="number"
        min="1"
        max="100"
        class="w-1/2 text-base"
      />
    </div>
    <div
      class="flex bg-[#f5f5dc] p-5 flex-col text-[32px] items-center gap-5 rounded-[10px] w-full"
      v-if="purchaseList.length" 
    >
      <PurchaseList
        @delete="handleDelete" 
        :purchase-list="purchaseList"/>
    </div>
    <div v-else>
      Корзина пуста
    </div>
    <div class="flex gap-2.5 self-start bg-[#f5f5dc] p-5 rounded-[10px] w-full">
      <el-button @click="updateSumm">Добавить</el-button>
      <span>Итого:</span>
      <span>{{ summ }} руб.</span>
    </div>
  </div>
</template>
