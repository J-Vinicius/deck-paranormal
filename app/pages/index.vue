<script setup lang="ts">
import Search from "@/components/Search.vue";
import { Plus } from "lucide-vue-next";
import { useStorage } from "@vueuse/core";

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

const open = useStorage("show-welcome", true); // default true

function updateOpen(value: boolean) {
  open.value = value;
}
</script>

<template>
  <client-only>
    <ResponsiveDialogDrawer
      :open="open"
      @update:open="updateOpen"
      title="Aviso"
      desc="Bem-vindo!"
      styled="text-foreground size-10 absolute bottom-1 left-1 p-2 bg-card rounded-full"
    >
      <p>
        Este é um projeto de fã não oficial para Ordem Paranormal. Todos os
        direitos sobre o sistema Ordem Paranormal pertencem aos seus criadores.
      </p>
      <small>Desenvolvido com ❤️ para a comunidade de Ordem Paranormal.</small>
    </ResponsiveDialogDrawer>
  </client-only>
  <Search v-model="searchQuery" />

  <ul class="grid gap-2 grid-cols-2 md:grid-cols-3">
    <Card v-for="(card, i) in filteredCards" :key="i" :card="card" />
  </ul>

  <div
    v-if="filteredCards.length === 0"
    class="text-center text-muted-foreground py-8"
  >
    Nenhum card encontrado!
  </div>

  <NuxtLink
    to="/add"
    class="bg-primary text-accent hover:animate-pulse absolute bottom-4 right-4 p-2 rounded-full"
  >
    <Plus class="size-6" />
  </NuxtLink>
</template>
