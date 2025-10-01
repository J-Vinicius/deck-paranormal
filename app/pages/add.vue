<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  actions,
  areas,
  durations,
  elements,
  ranges,
  resistances,
} from "@/shared/constants";
import { Item } from "@/components/form";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { useCardStore } from "~/stores/cards";
import { toast } from "vue-sonner";
import { ArrowLeft, BrushCleaning, Check } from "lucide-vue-next";

const stats = [
  { title: "Execução", list: actions, key: "execution" as const },
  { title: "Alcance", list: ranges, key: "range" as const },
  { title: "Área", list: areas, key: "area" as const },
  { title: "Duração", list: durations, key: "duration" as const },
  { title: "Resistência", list: resistances, key: "resistance" as const },
];

const cardStore = useCardStore();

const initialCard = {
  name: "",
  element: "",
  reference: {
    title: "",
    image: "",
  },
  circle: 1,
  execution: "",
  range: "",
  area: "",
  duration: "",
  resistance: "",
  target: "",
  description: "",
  discente: { description: "", custoPE: 3, preReq: "" },
  verdadeira: { description: "", custoPE: 5, preReq: "" },
  fonte: "",
};

const card = reactive({ ...initialCard });

function onSubmit() {
  cardStore.addCard({ ...card }); // espalha a reactive em objeto plano
  console.log("Ritual salvo!");
  toast("Ritual Salvo!", {
    description: `Ritual: ${card.name} de ${card.circle}ª Circulo do Elemento ${card.element}`,
  });
  router.push("/");
}

function resetCard() {
  Object.assign(card, initialCard); // sobrescreve os valores
}
</script>

<template>
  <h2 class="text-xl font-bold mb-4">Nova Carta</h2>
  <form class="space-y-2" @submit="onSubmit">
    <FormField name="New Card" v-slot="{ componentField }">
      <div class="sm:flex flex-row justify-between gap-2">
        <Item label="Nome do Ritual">
          <Input
            v-model="card.name"
            placeholder="Ritual"
            v-bind="componentField"
          />
        </Item>
        <Item label="Circulo">
          <NumberField
            v-model="card.circle"
            id="circle"
            :default-value="1"
            :min="1"
            :max="4"
          >
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
        </Item>
        <Item label="Elemento">
          <Select v-model="card.element" :default-value="elements[1]">
            <SelectTrigger class="w-full">
              <SelectValue :placeholder="`Selecione o elemento`">
                <template #default="{ selected }: any">
                  <span v-if="selected">
                    <NuxtImg
                      :src="`/images/elements/${selected.toLocaleLowerCase()}.png`"
                      :alt="selected"
                      class="size-4 inline"
                    />
                    {{ selected }}
                  </span>
                </template>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  v-for="element in elements"
                  :key="element"
                  :value="element"
                >
                  <NuxtImg
                    :src="`/images/elements/${element.toLocaleLowerCase()}.png`"
                    :alt="element"
                    class="size-6"
                  />
                  {{ element }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Item>
      </div>
      <ul class="sm:grid sm:grid-cols-3 md:grid-cols-6 gap-2">
        <Item
          v-for="stat in stats"
          :key="stat.title"
          :label="stat.title"
          class="w-full"
        >
          <Select v-model="card[stat.key]">
            <SelectTrigger class="w-full">
              <SelectValue :placeholder="`${stat.title}`" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  v-for="option in stat.list"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Item>
        <Item label="Alvo">
          <Input placeholder="Alvo" v-model="card.target" />
        </Item>
      </ul>
      <Item label="Descrição">
        <Textarea
          placeholder="Descrição do que o ritual faz"
          v-model="card.description"
        />
      </Item>
      <div class="sm:flex gap-2">
        <Item label="Discente">
          <Textarea
            placeholder="Descrição de Forma Discente"
            v-model="card.discente.description"
          />
          <NumberField
            v-model="card.discente.custoPE"
            id="pe"
            :default-value="3"
            :min="1"
            :max="16"
          >
            <Label>Custo de PE adicional</Label>
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
          <Label>Pre-Requisito</Label>
          <Input
            placeholder="Xª Circulo e Afinidade"
            v-model="card.discente.preReq"
          />
        </Item>
        <Item label="Verdadeira">
          <Textarea
            placeholder="Descrição de Forma Verdadeira"
            v-model="card.verdadeira.description"
          />
          <NumberField
            v-model="card.verdadeira.custoPE"
            id="pe"
            :default-value="5"
            :min="1"
            :max="16"
          >
            <Label>Custo de PE adicional</Label>
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
          <Label>Pre-Requisito</Label>
          <Input
            placeholder="Xª Circulo e Afinidade"
            v-model="card.verdadeira.preReq"
          />
        </Item>
      </div>
      <Item label="Fonte">
        <Input
          placeholder="Fonte: Livro de Regras, Homebrew, etc"
          v-model="card.fonte"
        />
      </Item>
    </FormField>
    <div class="flex justify-between">
      <Button
        @click.prevent="router.push('/')"
        variant="outline"
        class="place-self-end"
      >
        <ArrowLeft />
        Voltar
      </Button>
      <Button
        @click.prevent="resetCard"
        variant="destructive"
        class="place-self-end"
      >
        <BrushCleaning />
        Limpar
      </Button>
      <Button type="submit" @click.prevent="onSubmit" class="place-self-end">
        <Check />
        Confirmar
      </Button>
    </div>
  </form>
</template>
