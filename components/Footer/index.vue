<template>
  <div
    class="bg-color-green py-16 flex flex-col items-center justify-center f-f-l"
  >
    <div>
      <span class="justify-between px-4 text-2xl text-white"
        >ভর্তা বাহার ও ফুড কেটারীং
      </span>
    </div>
    <div class="flex items-center py-4">
      <a
        class="cursor-pointer"
        href="https://www.facebook.com/byRubydaRakhee"
        target="_blank"
        rel="noopener"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="20"
          viewBox="0 0 13 20"
          fill="none"
        >
          <path
            d="M1 8V12H4V19H8V12H11L12 8H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V8H1Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <!-- <a class="cursor-pointer" href="#">
        <div class="px-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
          >
            <path
              d="M21 1.01001C20 1.50001 19.02 1.69901 18 2.00001C16.879 0.735013 15.217 0.665013 13.62 1.26301C12.023 1.86101 10.977 3.32301 11 5.00001V6.00001C7.755 6.08301 4.865 4.60501 3 2.00001C3 2.00001 -1.182 9.43301 7 13C5.128 14.247 3.261 15.088 1 15C4.308 16.803 7.913 17.423 11.034 16.517C14.614 15.477 17.556 12.794 18.685 8.77501C19.0218 7.55268 19.189 6.28987 19.182 5.02201C19.18 4.77301 20.692 2.25001 21 1.00901V1.01001Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </a>
      <a class="cursor-pointer" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-instagram"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
      </a> -->
    </div>
    <div>
      <ul class="flex">
        <NuxtLink to="/">
          <li
            class="
              lg:text-lg
              text-sm
              leading-5
              lg:mr-10
              mr-2
              text-white
              flex flex-col
              items-end
              justify-end
              font-normal
              cursor-pointer
            "
          >
            Home
          </li>
        </NuxtLink>
        <NuxtLink to="/menu">
          <li
            class="
              lg:text-lg
              text-sm
              leading-5
              lg:mr-10
              mr-2
              text-white
              relative
              font-normal
              cursor-pointer
            "
          >
            Menu
          </li>
        </NuxtLink>
        <NuxtLink to="/contact">
          <li
            class="
              lg:text-lg
              text-sm
              leading-5
              lg:mr-10
              mr-2
              text-white
              flex flex-col
              items-end
              justify-end
              font-normal
              cursor-pointer
            "
          >
            Contact
          </li>
        </NuxtLink>
      </ul>
    </div>
    <div class="pt-10 flex lg:items-start items-center">
      <p class="lg:text-base text-xs text-white leading-5">
        &copy; 2021 Vorta Bahar, All rights reserved
      </p>
    </div>
  </div>
</template>
