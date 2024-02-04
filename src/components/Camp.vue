<template>
  <section
    class="border-2 border-green-400 2xl:mx-auto max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
  >
    <div
      class="overflow-hidden flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"
    >
      <CampSite
        BackgroundImage="bg-bg-img-1"
        title="Putuk truno Camp"
        subtitle="Prigen"
        peopleJoined="50+ joined"
      />
      <CampSite subtitle="Azzedine" />
    </div>
  </section>
</template>

<script setup>
import CampSite from '../Chunks/CampSite.vue'
</script>
