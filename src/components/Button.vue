<template>
  <button
    :style="{
      'padding-left': props.px + 'px',
      'padding-right': props.px + 'px',
      'padding-top': props.py + 'px',
      'padding-bottom': props.py + 'px',
      'background-color': props.bgColor,
      color: props.textColor,
      opacity: props.opacity
    }"
    class="flex items-center gap-3 justify-center rounded-full"
  >
  <slot></slot> 
    <span>{{ props.text }}</span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['text', 'bgColor', 'textColor', 'px', 'py', 'opacity'])
</script>
