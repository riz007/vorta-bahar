<template>
  <div>
    <DishOfTheDay />
    <HomeMenu />
    <Services />
    <AboutUs />
    <Testimonials />
  </div>
</template>

<script>
import DishOfTheDay from '../components/DishOfTheDay'
import HomeMenu from '../components/HomeMenu'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Testimonials from '../components/Testimonials'

export default {
  name: 'FoodiesHome',
  components: {
    DishOfTheDay,
    HomeMenu,
    Services,
    AboutUs,
    Testimonials,
  },
}
</script>
