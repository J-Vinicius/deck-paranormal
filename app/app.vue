<script setup lang="ts">
useHead({
  title: "Deck Paranormal",
  meta: [
    {
      name: "description",
      content: "Um site para criar cartas de rituais de Ordem Paranormal",
    },
  ],
});
</script>

<template>
  <main :class="`max-w-4xl p-4 space-y-2 md:mx-auto h-svh relative`">
    <NuxtPage />
  </main>
</template>
