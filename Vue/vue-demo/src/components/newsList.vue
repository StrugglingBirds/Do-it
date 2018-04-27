<template>
  <div id="news" class="newsList">
    <ul class="cards">
      <li v-for="(cardItem, index) in cards" :key="index"><router-link :to="cardItem.path">{{cardItem.text}}</router-link></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "news",
    data () {
      return {
        cards: [
          {
            path: '',
            text: '影院热映'
          },
          {
            path: '',
            text: '来聊五块钱'
          },
          {
            path: '',
            text: '豆瓣时间'
          },
          {
            path: '',
            text: '使用豆瓣App'
          }
        ],
        newsList: []
      }
    },
    created () {
      axios({
        method: 'get',
        url: '../assets/json/data.json'
      }).then(function (res) {
        console.log(res)
      })
    }
  }
</script>

<style scoped>
.newsList {
  box-sizing: border-box;
  width: 100%;
  margin-top: .4rem;
  padding: 0 .36rem;
}
.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cards li {
  margin-top: .12rem;
  width: 3.22rem;
  height: .88rem;
  line-height: .88rem;
  text-align: center;
  background: #f6f6f6;
  font-size: .3rem;
}
.cards li a {
  color: #494949;
}
</style>
