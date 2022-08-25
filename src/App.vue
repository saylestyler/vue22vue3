<template>
  <p>this shows a working vue 3 composable that accomplishes same functionality as the smart widgets vue 2 reward mixin</p>
  <p>resizing the screen will trigger breakpoint size rerendering</p>
  <p>refreshing the page will give a random size attr to an image</p>
  <RewardCard />
</template>

<script>
import RewardCard from './components/RewardCard.vue'

export default {
  name: 'App',
  components: {
   RewardCard
  },
  setup() {

    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
