<script setup lang="ts">
import { TrashIcon, DocumentDuplicateIcon } from '@heroicons/vue/24/outline'

import { useIncomeStore, type Income } from '@/store/income'

import DEditButton from './DEditButton.vue'

defineProps<{ id: Income['id'] }>()

const incomeStore = useIncomeStore()
</script>
<template>
  <div class="space-x-0.5">
    <DEditButton :action="() => incomeStore.duplicateIncomeItem(id)">
      <DocumentDuplicateIcon
        class="w-5 h-5 transition-colors text-zinc-400 dark:text-zinc-600 group-hover/bt:text-zinc-600 dark:group-hover/bt:text-zinc-400"
      >
      </DocumentDuplicateIcon
    ></DEditButton>
    <DEditButton :action="() => incomeStore.deleteIncomeItem(id)">
      <TrashIcon
        class="w-5 h-5 transition-colors text-zinc-400 group-hover/bt:text-zinc-600 dark:text-zinc-600 dark:group-hover/bt:text-zinc-400"
      >
      </TrashIcon>
    </DEditButton>
  </div>
</template>
