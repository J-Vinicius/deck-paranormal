<script setup lang="ts">
import Search from "@/components/Search.vue";
import { Plus } from "lucide-vue-next";

import { useCardStore } from "@/stores/cards";
const cardStore = useCardStore();

onMounted(() => {
  cardStore.loadFromLocalStorage(); // carrega os cards salvos
});
</script>

<template>
  <Search />
  <ul class="grid gap-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
    <NuxtLink
      :to="`/ritual/${card.name}`"
      v-for="(card, i) in cardStore.cards"
      :key="i"
      class="p-2 bg-card border aspect-square"
    >
      <NuxtImg :src="card.reference.image" :alt="card.reference.image" />
      <h2 class="text-lg font-bold">{{ card.name }}</h2>
      <small class="text-muted-foreground">{{ card.circle }}ª Circulo</small>
    </NuxtLink>
  </ul>
  <NuxtLink
    to="/add"
    class="bg-primary text-accent hover:animate-pulse absolute bottom-4 right-4 p-2 rounded-full"
  >
    <Plus />
  </NuxtLink>
</template>
