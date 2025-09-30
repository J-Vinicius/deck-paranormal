<script setup lang="ts">
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '../ui/form';

defineProps<{
  label: string;
}>()
</script>

<template>
  <FormItem class="w-full">
    <FormLabel>{{ label }}</FormLabel>
    <FormControl>
      <slot />
    </FormControl>
    <FormDescription />
    <FormMessage />
  </FormItem>
</template>
