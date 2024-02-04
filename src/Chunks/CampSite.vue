<template>
  <div
    class="h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl"
    :class="props.BackgroundImage"
  >
    <div
      class="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-2 border-blue-400"
    >
      <div class="flex items-center justify-center gap-4">
        <div class="rounded-full bg-green-50 p-4">
          <img src="../assets/folded-map.svg" alt="map" width="28" height="28" />
        </div>
        <div class="flex flex-col gap-1">
          <h4 class="text-[18px] font-[700] text-white">{{ props.title }}</h4>
          <p class="text-[14px] font-[400] text-white">{{ props.subtitle }}</p>
        </div>
      </div>
      <div class="flex items-center justify-center ">
        <span v-for="PEOPLE in PEOPLE_URL" class="flex -space-x-4 overflow-hidden">
          <img class="inline-block h-10 w-10 rounded-full" :src="PEOPLE" :key="index" alt="person" width="52" height="52">
        </span>
        <p class="text-[16px] font-[700]">{{ props.peopleJoined }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { PEOPLE_URL } from "../constants/index";
const props = defineProps(['BackgroundImage', 'title', 'subtitle', 'peopleJoined'])
</script>
