<script setup lang="ts">
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import ResponsiveDialogDrawer from "../ResponsiveDialogDrawer.vue";

const props = withDefaults(
  defineProps<{
    label: string;
    infoShow?: boolean;
    desc?: string;
    info?: string;
  }>(),
  {
    infoShow: false, // default aqui
    desc: "",
    info: "",
  }
);
</script>

<template>
  <FormItem class="w-full mt-auto">
    <FormLabel
      >{{ label }}
      <ResponsiveDialogDrawer v-if="infoShow" :title="label" :desc="desc">
        <slot name="info" />
      </ResponsiveDialogDrawer>
    </FormLabel>

    <FormControl>
      <slot />
    </FormControl>
    <FormDescription />
    <FormMessage />
  </FormItem>
</template>
