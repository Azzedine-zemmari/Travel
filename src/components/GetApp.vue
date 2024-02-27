<template>
<section class="mt-44 flex items-center justify-center w-full flex-col pb-[100px]">
      <div class=" mx-auto max-w-[1440px] relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div class="flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 class="text-[40px] font-[700] leading-[120%] lg:text-[64px] xl:max-w-[320px]">Get for free now!</h2>
          <p class="text-[16px] font-[400] text-gray-10">Available on iOS and Android</p>
          <div class="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              bg-color="white"
              text-color="green"
              text="App Store"
              px="20"
              py="10"
              >
              <img src="../assets/apple.svg" alt="">
            </Button>
              <Button 
              text="Play Store"
              px="20"
              py="10"
            >
            <img src="../assets/android.svg" alt="">
          </Button>
          </div>
        </div>

        <div class="flex flex-1 items-center justify-end">
          <img src="../assets/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
</template>
<script setup>
import Button from './Button.vue';
</script>
