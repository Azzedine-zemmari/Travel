<template>
  <Navbar></Navbar>
  <main class="relative overflow-hidden">
    <MainPart></MainPart>
  </main>
  <Footer></Footer>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import MainPart from './MainPart.vue'
</script>
