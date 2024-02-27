<template>
  <div class="max-w-[1440px] mx-auto mt-20 flex  flex-col lg:flex-row lg:space-x-12 relative">
    <!-- left -->
    <div class="lg:w-1/3 md:w-1/2 w-screen">
      <img
        src="../../public/feature-bg.png" 
        class="hidden lg:h-full lg:ml-10 lg:w-full lg:flex lg:object-cover"
        alt="featerbg"
      />
      <div class="hidden absolute md:w-[400px] lg:w-[500px] lg:-left-9 top-0 rotate-12 lg:flex">
        <img src="../../public/phone.png"  alt="" />
      </div>
    </div>
    <div class="lg:w-2/3 md:w-full flex flex-col justify-center items-center lg:items-start    w-screen">
      <div class="flex flex-col">
        <img src="../../public/camp.svg" width="62" height="62" class="" alt="" />
        <h4
          class="-mt-5 z-0 text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%]"
        >
          Our Features
        </h4>
      </div>
      <div class="grid grid-cols-1 grid-rows-4 mt-4 px-4 gap-5  lg:gap-7 lg:grid-rows-2 lg:grid-cols-2">
        <Feature
        v-for="f in FEATURES"
        :picture='f.icon'
        :header='f.title'
        :text="f.description"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Feature from '../Chunks/feater.vue'
import { FEATURES } from '@/constants';
</script>
