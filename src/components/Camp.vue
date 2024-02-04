<template>
  <section
    class="2xl:mx-auto max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
  >
    <div
      class=" hide-scrollbar overflow-x-auto flex h-[340px] w-full items-start justify-start gap-8  lg:h-[400px] xl:h-[640px]"
    >
      <CampSite
        BackgroundImage="bg-bg-img-1"
        title="Putuk truno Camp"
        subtitle="Prigen"
        peopleJoined="50+ joined"
      />
      <CampSite 
      BackgroundImage="bg-bg-img-2"
      title="Putuk truno Camp"
      subtitle="Prigen"
      peopleJoined="50+ joined"
      />
    </div>
  </section>
</template>

<script setup>
import CampSite from '../Chunks/CampSite.vue'
</script>
<style scoped>

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

</style>