<script lang="ts" setup>
import { createReusableTemplate, useMediaQuery } from "@vueuse/core";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Info } from "lucide-vue-next";

// Reuse `form` section
const [UseTemplate, Content] = createReusableTemplate();
const [UseTrigger, Trigger] = createReusableTemplate();
const isDesktop = useMediaQuery("(min-width: 768px)");

const isOpen = ref(false);

defineProps<{
    title: string;
    desc?: string | "";
}>()
</script>

<template>
  <UseTemplate>
    <slot />
  </UseTemplate>

  <UseTrigger>
      <Info class="size-4 ml-auto text-muted-foreground" />
  </UseTrigger>

  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <Trigger />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ title }}</DialogTitle>
        <DialogDescription>
            {{ desc }}
        </DialogDescription>
      </DialogHeader>
      <Content />
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Trigger />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-left">
        <DrawerTitle>{{ title }}</DrawerTitle>
        <DrawerDescription>{{ desc }}</DrawerDescription>
      </DrawerHeader>
      <main class="px-4">
        <Content />
      </main>
      <DrawerFooter class="pt-4">
        <DrawerClose as-child>
          <Button variant="outline"> Fechar </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>
