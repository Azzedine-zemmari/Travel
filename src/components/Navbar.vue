<template>
<nav class=" flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
<a href="/">
    <img src="../assets/hilink-logo.svg" alt="travel app logo" width="74" height="29">
</a>
<ul class="hidden h-full gap-12 lg:flex">
    <li v-for="link in NAV_LINKS" :key="link.key">
        <a :href="link.href" class="text-[16px] font-[400] text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">{{ link.label }}</a>
      </li>
</ul>
<div class=" hidden lg:flex lg:items-center lg:justify-center">
<Button 
text="Log in"
bgColor="black"
textColor="white"
px="24"
py="14"
icon="./src/assets/user.svg"
/>
</div>
</nav>    
</template>
<script setup>
import {NAV_LINKS} from '../constants/index'
import Button from './Button.vue';
</script>