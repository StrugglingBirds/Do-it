<template>
  <div id="headerHome" class="headerHome">
    <div class="logo">
      <router-link to="/news"></router-link>
    </div>
    <div class="navRight">
      <ul class="navlist">
        <li v-for="(navItem, index) in navgator" :key="index">
          <router-link :to="navItem.path" :style="navItem.style">{{navItem.text}}</router-link>
        </li>
      </ul>
      <span class="search" @click="search"></span>
    </div>
  </div>
</template>

<script>
import Event from './Event'
export default {
  name: 'header-home',
  data () {
    return {
      navgator: [
        {
          text: '电影',
          path: '/movie',
          style: 'color: #2384E8'
        },
        {
          text: '图书',
          path: '/book',
          style: 'color: #9F7860'
        },
        {
          text: '广播',
          path: '/book',
          style: 'color: #E4A813'
        },
        {
          text: '小组',
          path: '/book',
          style: 'color: #2AB8CC'
        }
      ]
    }
  },
  methods: {
    search () {
      Event.$emit('hasHeader', false)
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped>
.headerHome {
  width: 100%;
  height: .96rem;
  box-sizing: border-box;
  padding: 0 .36rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
}
.logo {
  width: .92rem;
  height: .44rem;
  background: url("../../assets/imgs/logo.png") no-repeat center;
  background-size: 100% 100%;
}
.logo a {
  display: block;
  width: 100%;
  height: 100%;
}
.navRight {
  display: flex;
  justify-content: space-around;
  width: 70%;
}
.navlist {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  font-size: .3rem;
  width: 80%;
}
.search {
  display: block;
  margin-top: .06rem;
  width: .49rem;
  height: .36rem;
  background: transparent url("../../assets/imgs/search.png") no-repeat center;
  background-size: cover;
  border: none;
  box-shadow: none;
  outline: none;
}
</style>
