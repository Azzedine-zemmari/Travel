<template>
<div class="flex flex-col gap-5 items-start justify-between">
          <img :src="picture" width="90"  class="bg-green-50 p-6 rounded-full" alt="" />
          <h1 class="text-[22px] font-[600]  leading-[100%] lg:text-[40px] lg:font-[700]">
            {{ header }}
          </h1>
          <p class="text-[18px] font-[400] text-gray-30 mt-5">
           {{ text }}
          </p>
        </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(['picture','header','text'])
</script>