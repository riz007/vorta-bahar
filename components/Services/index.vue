<template>
  <div class="mx-auto container mt-40 xl:px-0 px-4">
    <div class="flex items-center justify-center">
      <hr class="w-2.5 h-16 bg-color-green" />
      <h1 class="text-4xl font-bold text-color-black pl-7">
        Services<span class="text-2xl font-normal"> We Provide</span>
      </h1>
    </div>
    <div class="items-center justify-center mt-16 xl:flex hidden">
      <div
        v-for="(service, idx) in services"
        :key="idx"
        class="card-width card-shadow cursor-pointer mr-7"
      >
        <div class="relative">
          <img loading="lazy" :src="service.image" class="h-96 w-full" />
          <div class="bg-white w-full">
            <p class="text-center text-2xl text-color-black py-8 font-bold">
              {{ service.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="block items-center justify-center mt-16 xl:hidden px-4">
      <div
        v-for="(service, idx) in services"
        :key="idx"
        class="card-shadow cursor-pointer mb-8"
      >
        <div class="relative">
          <img
            loading="lazy"
            :src="service.image"
            class="xl:h-96 h-full w-full"
          />
          <div class="bg-white w-full">
            <p class="text-center text-2xl text-color-black py-8 font-bold">
              {{ service.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile -->
  </div>
</template>

<script>
import menu1 from '../../assets/images/menu1.jpg'
import menu2 from '../../assets/images/menu2.jpg'
import menu3 from '../../assets/images/menu3.jpg'

export default {
  data() {
    return {
      services: [
        {
          service: '01',
          image: menu1,
          title: '100 types of bhorta',
        },
        {
          service: '02',
          image: menu3,
          title: 'Healthy, well cooked foods',
        },
        {
          service: '03',
          image: menu2,
          title: 'Customized orders',
        },
      ],
    }
  },
}
</script>
