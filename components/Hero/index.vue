<template>
  <!-- Hero -->
  <div class="mx-auto container relative z-20 lg:px-0 px-4">
    <div
      class="
        flex
        lg:flex-row
        flex-col-reverse
        items-center
        justify-between
        lg:mt-24
      "
    >
      <div class="lg:w-1/2 lg:pt-0 pt-16">
        <h1
          class="
            text-6xl
            lg:block
            hidden
            leading-115
            border-l-8 border-color-green
            pl-12
          "
        >
          Craving for<br />
          <span class="2xl:text-8xl text-7xl font-bold text-color-green">
            Delicious &amp; Healthy Food?
          </span>
        </h1>
        <h1
          class="
            text-3xl
            lg:hidden
            block
            leading-8
            border-l-8 border-color-green
            pl-2
            xl:mt-0
            mt-8
          "
        >
          Craving for<br />
          <span class="text-4xl font-bold text-color-green">
            Delicious &amp; Healthy Food?
          </span>
        </h1>
        <h1
          class="
            lg:text-2xl
            text-lg
            lg:leading-8
            leading-6
            mt-6
            border-l-8 border-color-green
            lg:pl-12
            pl-2
            py-2
          "
        >
          Vorta Bahar is here to cater you with more than 100 types of Desi
          bhortas! We cook all type of foods and also accept customized orders.
          Call right now @
          <a href="tel:01751491243" class="text-color-green">01751491243</a> or
          follow our
          <a
            href="https://www.facebook.com/byRubydaRakhee"
            target="_blank"
            rel="noopener"
            class="text-color-green"
            >facebook page.</a
          >
        </h1>
        <div class="flex items-center justify-center mt-12">
          <NuxtLink to="/menu">
            <button
              class="
                xl:py-5
                py-2
                xl:px-16
                px-6
                bg-color-green
                2xl:text-3xl
                lg:text-xl
                text-base
                font-semibold
                leading-loose
                text-white
                focus:outline-none
                hover:opacity-90
                border-2 border-color-green
                b-r-10
                mr-10
              "
            >
              View Menu
            </button>
          </NuxtLink>
          <!-- <button
            class="
              xl:py-5
              py-2
              xl:px-16
              px-6
              border-color-green
              2xl:text-3xl
              lg:text-xl
              text-base
              font-semibold
              leading-loose
              text-color-green
              focus:outline-none
              button-transparent
              border-2 border-color-green
              b-r-10
            "
          >
            Book A Table
          </button> -->
        </div>
        <div
          class="
            2xl:mt-24
            mt-12
            items-center
            2xl:pl-16
            xl:pl-16
            lg:pl-12
            md:pl-0
            sm:pl-0
            pl-16
            md:flex
            hidden
          "
        >
          <a
            href="https://www.facebook.com/byRubydaRakhee"
            class="cursor-pointer"
          >
            <div
              class="
                w-12
                h-12
                fb-hover
                flex
                items-center
                justify-center
                shadow-xl
                rounded-full
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="32"
                viewBox="0 0 20 32"
                fill="white"
              >
                <path
                  d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z"
                  stroke="#0F0F0F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div class="flex mt-12 items-center justify-center md:hidden">
          <a
            href="https://www.facebook.com/byRubydaRakhee"
            class="cursor-pointer"
            target="_blank"
            rel="noopener"
          >
            <div
              class="
                w-12
                h-12
                fb-hover
                flex
                items-center
                justify-center
                shadow-xl
                rounded-full
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="32"
                viewBox="0 0 20 32"
                fill="white"
              >
                <path
                  d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z"
                  stroke="#0F0F0F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div class="lg:w-1/2 height-main-hero xl:block hidden">
        <img
          loading="lazy"
          src="../../assets/images/food-photo.png"
          class="w-full"
        />
      </div>
      <div class="xl:w-1/2 xl:hidden block">
        <img
          loading="lazy"
          src="../../assets/images/food-photo.png"
          class="object-cover"
        />
      </div>
    </div>
  </div>
</template>
