<template>
  <section
    class="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
  >
    <div
      class="absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60"
    />
    <!-- left -->
    <div class="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <img
        src="../assets/camp.svg"
        alt="camp image"
        width="50"
        height="50"
        class="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
      <h1
        class="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[120%]"
      >
        Putuk Truno Camp Area
      </h1>
      <p class="text-[16px] font-[400] mt-6 text-gray-30 xl:max-w-[520px]">
        We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible
        beauty of nature. We can help you on an adventure around the world in just one app
      </p>
      <div class="my-11 flex flex-wrap gap-2 md:gap-5">
        <div class="flex items-center gap-0 md:gap-2">
          <img
            v-for="index in 5"
            :key="index"
            src="../assets/star.svg"
            alt="Star"
            width="26"
            height="26"
          />
          <p class="text-[16px] font-[700] lg:text-[20px] lg:font-[700] text-blue-70">
            198k
            <span class="text-[16px] font-[400] lg:text-[20px] lg:font-[400] ml-1 underline"
              >Excellent Reviews</span
            >
          </p>
        </div>
      </div>
      <div class="flex flex-col w-full gap-3 sm:flex-row">
        <Button
          text="Download App"
          bg-color="green"
          text-color="white"
          px="24"
          py="14"
          opacity="0.7"
        />
        <Button
          text="How we work ?"
          bg-color="white"
          text-color="black"
          px="24"
          py="14"
          icon="./src/assets/play.svg"
        />
      </div>
    </div>
    <div class="relative flex-1 items-start">
      <div class="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
        <div class="flex flex-col">
          <div class="flex items-center justify-between">
            <p class="text-[16px] font-[400] text-gray-20">Location</p>
            <img src="../assets/close.svg" alt="close" width='24' height="24">
          </div>
          <p class="text-[20px] font-[700] text-white">Casablanca City</p>
        </div>

        <div class="flex items-center justify-between">
        <div class="flex flex-col">
            <p class="text-[16px] font-[400] block text-gray-20">Distance</p>
            <p class="text-[20px] font-[700] text-white">122.21 m</p>
        </div>
        <div class="flex flex-col">
            <p class="text-[16px] font-[400] block text-gray-20">Elevation</p>
            <p class="text-[20px] font-[700] text-white">2.040 km</p>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Button from './Button.vue'
</script>
