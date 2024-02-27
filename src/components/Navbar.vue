<template>
  <nav
    class="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5"
  >
    <a href="/">
      <img src="../../public/hilink-logo.svg" alt="travel ap logo" width="74" height="29" />
    </a>
    <ul class="hidden h-full gap-12 lg:flex">
      <li v-for="link in NAV_LINKS" :key="link.key">
        <a
          :href="link.href"
          class="text-[16px] font-[400] text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >{{ link.label }}</a
        >
      </li>
    </ul>
    <div class="hidden lg:flex lg:items-center lg:justify-center">
      <Button
        text="Log in"
        bgColor="black"
        textColor="white"
        px="24"
        py="14"
        icon="../../public/user.svg"
      />
    </div>
    <img
      @click="handleMenu"
      src="../../public/menu.svg"
      alt="menu of travelling app"
      width="32"
      height="32"
      class="inline-block cursor-pointer lg:hidden"
    />
  </nav>
  <!-- small Menu  -->
  <!-- <div v-if="Menu" class="float-right mr-16 max-w-[200px] shadow-md lg:hidden">
    <ul class="flex flex-col rounded-lg bg-slate-100">
      <li v-for="link in NAV_LINKS" :key="link.key">
        <a
          :href="link.href"
          class="text-[16px] font-[400] text-gray-50 px-4 py-2 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:bg-green-600 hover:text-white hover:rounded-md hover:font-bold"
          >{{ link.label }}</a
        >
      </li>
    </ul>
  </div> -->
</template>
<script setup>
import { NAV_LINKS } from '../constants/index'
import Button from './Button.vue'
import { ref } from 'vue'
let Menu = ref(false)
const handleMenu = () => {
  Menu.value = !Menu.value
}
</script>
