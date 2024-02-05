<template>
  <section class="max-w-[1440px] mx-auto p-4 lg:p-6 flex flex-wrap gap-36">
    <div>
      <img src="../assets/hilink-logo.svg" alt="travel ap logo" width="74" height="29" />
    </div>
    <div v-for="FL in FOOTER_LINKS" class="flex flex-col gap-3">
      <h2 class="font-[700] leading-[120%] text-[22px]">{{ FL.title }}</h2>
      <ul v-for="F in FL.links">
        <li class="text-[16px] font-[400] hover:text-[18px]">{{ F }}</li>
      </ul>
    </div>
    <div v-for="FooterC in FOOTER_CONTACT_INFO">
      <h2>{{ FooterC.title }}</h2>
      <ul v-for="CL in FooterC.links">
        <li>{{ CL.label }}: {{ CL.value }}</li>
      </ul>
    </div>
    <div v-for="SO in SOCIALS">
      <h2>{{ SO.title }}</h2>
      <ul>
        <li>{{ SO.links }}</li>
      </ul>

    </div>

  </section>
</template>
<script setup>
import {FOOTER_LINKS,FOOTER_CONTACT_INFO,SOCIALS} from '@/constants/index'
</script>
