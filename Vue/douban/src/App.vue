<template>
  <div id="app">
    <header-home v-if="hasHeader"></header-home>
    <div id="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Event from './components/headers/Event'
import headerHome from './components/headers/headerHome'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hasHeader: true
    }
  },
  components: {
    'header-home': headerHome
  },
  mounted () {
    const _this = this
    Event.$on('hasHeader', function (bool) {
      _this.hasHeader = bool
    })
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
#view {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
