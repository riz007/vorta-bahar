<template>
  <div>
    <div class="mx-auto container z-40 lg:mt-40 mt-20 lg:px-0 px-4">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-orange" />
        <h1 class="text-4xl font-bold text-color-black pl-7">
          <span class="text-2xl font-normal">Take a look at our </span>Menu
        </h1>
      </div>
      <div class="lg:flex items-center justify-center mt-24 h-full">
        <div class="lg:w-1/4 relative">
          <img
            loading="lazy"
            src="https://cdn.tuk.dev/assets/templates/foodies/bg-menu.png"
            class="absolute left-0 top-0 z-0 -mt-7 lg:block hidden"
          />
          <img
            loading="lazy"
            :src="itemOne"
            class="w-full h-full relative z-10 lg:pl-7 lg:my-0 my-4"
          />
          <img
            loading="lazy"
            :src="itemTwo"
            class="w-full h-full lg:pt-7 lg:my-0 my-4"
          />
        </div>
        <div class="lg:w-1/3 lg:mx-8">
          <img
            loading="lazy"
            :src="itemThree"
            class="w-full h-full lg:-pt-4 lg:my-0 my-4"
          />
          <img
            loading="lazy"
            :src="itemFour"
            class="w-full h-full lg:pt-3 lg:my-0 my-4"
          />
        </div>
        <div class="lg:w-1/4">
          <img
            loading="lazy"
            :src="itemFive"
            class="w-full h-full lg:my-0 my-4 xl:block hidden"
          />
          <img
            loading="lazy"
            :src="itemSix"
            class="w-full h-full lg:my-0 my-4 xl:hidden block"
          />
          <div class="relative">
            <img
              loading="lazy"
              :src="itemSeven"
              class="
                w-full
                h-full
                lg:pt-7
                relative
                z-10
                lg:pr-7 lg:pb-7 lg:my-0
                my-4
              "
            />
            <img
              loading="lazy"
              src="https://cdn.tuk.dev/assets/templates/foodies/bg-menu.png"
              class="
                lg:block
                hidden
                absolute
                right-0
                bottom-0
                z-0
                2xl:h-72
                h-48
                lg:my-0
                my-4
              "
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center xl:mt-36 mt-12">
      <NuxtLink to="/menu">
        <button
          class="
            py-2.5
            lg:px-11
            px-6
            lg:text-3xl
            text-base
            font-semibold
            leading-loose
            text-color-orange
            focus:outline-none
            button-transparent
            border-2 border-color-orange
            b-r-10
            lg:mr-10
          "
        >
          Browse Menu
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import image1 from '../../assets/images/image_1.jpg'
import image2 from '../../assets/images/image_2.jpg'
import image3 from '../../assets/images/image_3.jpg'
import image4 from '../../assets/images/image_4.jpg'
import image5 from '../../assets/images/image_5.jpg'
import image6 from '../../assets/images/image_6.jpg'
import image7 from '../../assets/images/image_7.jpg'

export default {
  data() {
    return {
      itemOne: image1,
      itemTwo: image2,
      itemThree: image3,
      itemFour: image4,
      itemFive: image5,
      itemSix: image6,
      itemSeven: image7,
    }
  },
}
</script>
