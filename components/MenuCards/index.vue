<template>
  <div>
    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">ভর্তা</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(bhorta.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ bhorta[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                ----------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ----------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ bhorta[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">ভাজি</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(bhaji.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ bhaji[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ bhaji[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">শাক</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(saag.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ saag[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ saag[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">ডাল</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(daal.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ daal[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ daal[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">মাংস</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(meat.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ meat[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ meat[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">মাছ</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(fish.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ fish[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ fish[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">সেট মেন্যু</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(set_menu.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ set_menu[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ set_menu[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">ডেজার্ট</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(dessert.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ dessert[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ dessert[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">অফিস ডেলিভারী</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(office_delivery.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ office_delivery[idx].day }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                {{ office_delivery[idx].menu }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">সকালের নাস্তা</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(breakfast_package.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ breakfast_package[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ breakfast_package[idx].price }}
              </p>
            </div>
            <div>
              <p class="xl:text-lg text-sm xl:pr-16 pt-4">
                {{ breakfast_package[idx].menu }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">অন্যান্য</h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(others.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ others[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ others[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto container xl:px-0 px-4 mt-36">
      <div class="flex items-center justify-center">
        <hr class="w-2.5 h-16 bg-color-green" />
        <h1 class="text-3xl font-bold text-color-black pl-7">
          বিকালের স্ন্যাক্স/নাশতা
        </h1>
      </div>
      <div class="mt-16">
        <div
          v-for="idx in Math.ceil(snacks.length / 2)"
          :key="idx"
          class="xl:flex items-center justify-center w-full xl:pb-9"
        >
          <div
            v-for="col in 1"
            :key="col"
            class="xl:w-2/5 xl:py-0 py-4 xl:mr-14"
          >
            <div class="w-full flex items-center justify-between">
              <h1 class="xl:text-2xl text-xl font-semibold">
                {{ snacks[idx].name }}
              </h1>
              <p class="px-5 text-color-green xl:block hidden">
                --------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:hidden
                  block
                "
              >
                -----------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:block
                  lg:hidden
                  hidden
                "
              >
                ------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:block
                  sm:hidden
                  lg:hidden
                  hidden
                "
              >
                -----------------------------------------------------------------------------------------
              </p>
              <p
                class="
                  px-5
                  text-color-green
                  xl:hidden
                  md:hidden
                  sm:hidden
                  lg:block
                  hidden
                "
              >
                ------------------------------------------------------------------------------------------------------------------------------------------
              </p>
              <p class="xl:text-2xl text-xl font-semibold">
                ৳{{ snacks[idx].price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/mixins/menu.js'
export default {
  mixins: [Menu],
}
</script>
