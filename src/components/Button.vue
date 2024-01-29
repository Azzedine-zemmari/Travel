<template>
    <button
      :style="{
        'padding-left': props.px + 'px',
        'padding-right': props.px + 'px',
        'padding-top': props.py + 'px',
        'padding-bottom': props.py + 'px',
        'background-color': props.bgColor,
        'color': props.textColor
      }"
      class="flex items-center gap-3 justify-center rounded-full"
    >
    <img v-if="props.icon" :src="props.icon" alt="icon" class="w-5 h-5" />
    <span   >{{ props.text }}</span>
    </button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps(['text', 'icon', 'bgColor', 'textColor', 'px', 'py']);
  </script>
  