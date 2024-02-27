<template>
  <section
    class="2xl:mx-auto max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"
  >
    <div
      class="hide-scrollbar overflow-x-auto flex h-[340px] w-full items-start justify-start gap-8 lg:h-[400px] xl:h-[640px]"
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
    <div class="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
      <div
        class="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl"
      >
        <h2
          class="text-[24px] font-[400] capitalize text-white md:text-[32px] md:font-[400] 2xl:text-[64px] 2xl:font-[400] 2xl:leading-[120%]"
        >
          <strong>Feeling Lost</strong> And Not Knowing The Way?
        </h2>
        <p class="text-[14px] font-[400] xl:text-[16px] xl:font-[400] mt-5 text-white text-left">
          Starting from the anxiety of the climbers when visiting a new climbing location, the
          possibility of getting lost is very large. That's why we are here for those of you who
          want to start an adventure
        </p>
        <img
          src="../../public/quote.svg"
          class="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0"
          alt=""
        />
      </div>
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
