<script setup lang="ts">
import { useHead } from "#imports";
import { computed, onMounted } from "vue";
import { useCardStore } from "~/stores/cards";
import { useRoute } from "vue-router";
import {
  ArrowLeft,
  Circle,
  Hand,
  Hourglass,
  Move,
  Shield,
  Target,
} from "lucide-vue-next";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const route = useRoute();
const slug = route.params.slug;

const cardStore = useCardStore();

onMounted(() => {
  cardStore.loadFromLocalStorage();
});

// busca o card pelo name (igual ao slug)
const card = computed(() => cardStore.cards.find((c) => c.name === slug));

// atualiza o <title>
onMounted(() => {
  useHead({
    title: card.value?.name || "Nova Carta",
  });
});

type CardKey = keyof RitualCard; // RitualCard é a interface do seu card

const stats: { icon: any; label: string; key: CardKey }[] = [
  { icon: Hand, label: "Execução", key: "execution" },
  { icon: Move, label: "Alcance", key: "range" },
  { icon: Target, label: "Alvo", key: "target" },
  { icon: Circle, label: "Área", key: "area" },
  { icon: Hourglass, label: "Duração", key: "duration" },
  { icon: Shield, label: "Resistência", key: "resistance" },
];

// computed que filtra apenas os stats que têm valor
const filteredStats = computed(() => {
  if (!card.value) return [];
  return stats.filter((stat) => {
    const value = card.value![stat.key];
    return value !== undefined && value !== null && value !== "";
  });
});
</script>

<template>
  <div class="my-2">
    <NuxtLink to="/">
      <ArrowLeft />
    </NuxtLink>
  </div>
  <div v-if="card" class="flex flex-col gap-4">
    <header class="py-2 flex justify-between">
      <div>
        <h1 class="text-2xl font-bold">{{ card.name }}</h1>
        <small class="text-muted-foreground">{{ card.circle }}ª Cirulo</small>
      </div>
      <NuxtImg
        :src="`/images/elements/${card.element.toLocaleLowerCase()}.png`"
        :alt="card.element"
        class="size-14"
      />
    </header>
    <ul class="flex items-center justify-between p-2">
      <li
        v-for="stat in filteredStats"
        :key="stat.key"
        class="flex flex-col items-center"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <component :is="stat.icon" class="text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ stat.label }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {{ card[stat.key] }}
      </li>
    </ul>
    <p class="grow">{{ card.description }}</p>
    <div v-if="card.discente" class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-bold text-muted-foreground">Discente</h3>
        <p>{{ card.discente.description }}</p>
        <small>{{ card.discente.preReq }}</small>
      </div>
      <span class="text-xl font-semibold">+{{ card.discente.custoPE }}PE</span>
    </div>
    <div v-if="card.verdadeira" class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-bold text-muted-foreground">Verdadeira</h3>
        <p>{{ card.verdadeira.description }}</p>
        <small>{{ card.verdadeira.preReq }}</small>
      </div>
      <span class="text-xl font-semibold"
        >+{{ card.verdadeira.custoPE }}PE</span
      >
    </div>
    <small class="mt-auto text-muted-foreground">{{ card.fonte }}</small>
  </div>
  <p v-else>Ritual não encontrado.</p>
</template>
