<script setup lang="ts">
import Search from "@/components/Search.vue";
import { Plus } from "lucide-vue-next";

import { useCardStore } from "@/stores/cards";
const cardStore = useCardStore();

const searchQuery = ref("");

const filteredCards = computed(() => {
  if (!searchQuery.value.trim()) {
    return cardStore.cards;
  }

  const query = searchQuery.value.toLowerCase();

  return cardStore.cards.filter((card) => {
    return (
      card.name.toLowerCase().includes(query) ||
      card.circle.toString().includes(query)
    );
  });
});

onMounted(() => {
  cardStore.loadFromLocalStorage();
});
</script>

<template>
  <Search v-model="searchQuery" />

  <ul class="grid gap-2 grid-cols-2 md:grid-cols-3">
    <NuxtLink
      :to="`/ritual/${card.name}`"
      v-for="(card, i) in filteredCards"
      :key="i"
      class="p-2 bg-card flex flex-col items-center border"
    >
      <NuxtImg
        v-if="card.element"
        :src="`/images/elements/${card.element.toLocaleLowerCase()}.png`"
        :alt="card.element"
      />
      <NuxtImg v-else :src="card.reference.image" :alt="card.reference.title" />
      <header class="size-full flex flex-col">
        <h2 class="font-bold flex-1">{{ card.name }}</h2>
        <small class="text-muted-foreground">{{ card.circle }}ª Circulo</small>
      </header>
    </NuxtLink>
  </ul>

  <div
    v-if="filteredCards.length === 0"
    class="text-center text-muted-foreground py-8"
  >
    Nenhum card encontrado
  </div>

  <NuxtLink
    to="/add"
    class="bg-primary text-accent hover:animate-pulse absolute bottom-4 right-4 p-2 rounded-full"
  >
    <Plus />
  </NuxtLink>
</template>
