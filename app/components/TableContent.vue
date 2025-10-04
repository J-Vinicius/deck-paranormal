<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

defineProps<{
  heads: string[];
  rows: string[][];
}>();
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead v-for="head in heads" :key="head"> {{ head }} </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow v-for="(row, i) in rows" :key="i">
        <TableCell v-for="(cell, j) in row" :key="j">
          {{ cell }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
