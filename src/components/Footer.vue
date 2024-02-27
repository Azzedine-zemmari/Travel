<template>
  <section class="max-w-[1440px] mx-auto p-4 lg:p-6 flex flex-wrap gap-12 md:gap-24 lg:gap-36">
    <div>
      <img src="../assets/hilink-logo.svg" alt="travel ap logo" width="74" height="29" />
    </div>
    <div v-for="FL in FOOTER_LINKS" class="flex flex-col gap-3">
      <h2 class="font-[700] leading-[120%] text-[22px]">{{ FL.title }}</h2>
      <ul v-for="F in FL.links">
        <li class="text-[16px] font-[400] hover:text-[18px]">{{ F }}</li>
      </ul>
    </div>
    <div>
      <h2 class="font-[700] leading-[120%] text-[22px]">{{ FOOTER_CONTACT_INFO.title }}</h2>
      <ul>
        <li class="text-[16px] font-[400]" v-for="Po in FOOTER_CONTACT_INFO.links">
          {{ Po.label }}: {{ Po.value }}
        </li>
      </ul>
    </div>
    <div>
      <h2>{{ SOCIALS.title }}</h2>
      <ul class="flex flex-row gap-3">
        <li class='' v-for="SOC in SOCIALS.links">
          <img :src="SOC" alt="">
        </li>
      </ul>
    </div>
    
  </section>
  <div class="flex flex-col justify-center items-center">
    <div class="border border-t-2 w-1/2 mx-auto border-gray-10 overflow-visible"></div>
    <p class="mt-2 text-[16px] font-[400]">Created By <strong>Azzedine <span class="text-green-50">Zemmari</span></strong></p>
  </div>
</template>
<script setup>
import {  FOOTER_LINKS , FOOTER_CONTACT_INFO , SOCIALS } from '@/constants/index'
</script>
