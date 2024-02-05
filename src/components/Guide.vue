<template>
    <section class="flex items-center justify-center flex-col">
        <div class=" px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24">
            <img src="../assets/camp.svg" width="50" height="50" alt="">
            <p class="text-[18px] font-[400] uppercase -mt-1 mb-3 text-green-50 ">Where here for you</p>
            <div class="flex flex-wrap justify-between gap-5 lg:gap-10">
                <h2
                    class="text-[40px] font-[700] leading-[120%] lg:text-[64px] lg:font-[700] lg:leading-[120%] xl:max-w-[390px]">
                    Guide You to Easy Path</h2>
                <p class="text-[18px] font-[400]  text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already
                    support offline maps when there is no internet connection in the field. Invite your friends, relatives
                    and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
            </div>
        </div>
        <div class="flex items-center justify-center mx-auto max-w-[1440px] relative w-full">
        <img 
          src="../assets/boat.png"
          alt="boat"
          width={1440}
          height={580}
          class="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div class="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <img 
            src="../assets/meter.svg"
            alt="meter"
            width={16}
            height={158}
            class="h-full w-auto"
          />
          <div class="flex items-center justify-between flex-col">
            <div class='flex w-full flex-col'>
              <div class="flex items-center justify-between w-full">
                <p class="regular-16 text-gray-20">Destination</p>
                <p class="bold-16 text-green-50">48 min</p>
              </div>
              <p class="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div class='flex w-full flex-col'>
              <p class="regular-16 text-gray-20">Start track</p>
              <h4 class="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>

    </section></template>
<script setup></script>
