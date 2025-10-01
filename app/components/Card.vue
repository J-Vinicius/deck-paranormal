<script setup lang="ts">
import { type RitualCard } from "@/shared/types.js";
import { Trash } from "lucide-vue-next";
defineProps<{
  card: RitualCard;
}>();
</script>

<template>
  <NuxtLink
    :to="`/ritual/${card.name}`"
    class="p-2 bg-card flex flex-col items-center border"
  >
    <NuxtImg
      v-if="card.element"
      :src="`/images/elements/${card.element.toLocaleLowerCase()}.png`"
      :alt="card.element"
      class="p-4"
    />
    <header class="size-full flex flex-col">
      <h2 class="font-bold flex-1">{{ card.name }}</h2>
      <small class="text-muted-foreground">{{ card.circle }}ª Circulo</small>
    </header>
    
  </NuxtLink>
</template>
