<template>
  <div id="app">
    <header-home></header-home>
    <div id="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerHome from './components/headers/headerHome'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'header-home': headerHome
  }
}
</script>

<style>

</style>
