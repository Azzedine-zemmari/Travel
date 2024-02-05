<template>
  <div class="max-w-[1440px] mt-20 flex flex-wrap relative">
    <!-- left -->
    <div class="lg:w-1/2 w-screen">
      <img
        src="../assets/feature-bg.png"
        class="hidden lg:h-full lg:flex object-cover object-center"
        alt="featerbg"
      />
      <div class="hidden absolute -left-9 top-0 rotate-12 lg:flex">
        <img src="../assets/phone.png" width="500" height="300" alt="" />
      </div>
    </div>
    <div class="lg:w-1/2 flex flex-col  justify-center items-center lg:items-start  w-screen">
      <div class="flex flex-col">
        <img src="../assets/camp.svg" width="62" height="62" class="" alt="" />
        <h4
          class="-mt-5 z-0 text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%]"
        >
          Our Features
        </h4>
      </div>
      <div class="grid grid-cols-1 grid-rows-4 mt-4 px-4  lg:gap-7 lg:grid-rows-2 lg:grid-cols-2">
        <Feature
        picture=../assets/map.svg
        header="Real Maps Can Be Offline"
        text=" We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location"
        />
        <Feature
        picture="../assets/map.svg"
        header="Set An Adventure Schedule"
        text=" Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion"
        />
        <Feature
        picture="../assets/map.svg"
        header="Technology Using Augment Reality"
        text=" Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection"
        />
        <Feature
        picture="../assets/map.svg"
        header="Many New Locations Every Month"
        text=" Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing"
        />  
      </div>
    </div>
  </div>
</template>
<script setup>
import Feature from '../Chunks/feater.vue'
</script>
