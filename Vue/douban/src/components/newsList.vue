<template>
  <div id="news" class="newsList">
    <!--<button @click="getData">获取数据</button>-->
    <ul class="cards">
      <li v-for="(cardItem, index) in cards" :key="index"><router-link :to="cardItem.path">{{cardItem.text}}</router-link></li>
    </ul>
    <div class="content">
      <div class="listItem" v-for="item in newsList" :key="item.id">
        <a :href="item.target.uri">
          <div class="itemleft">
            <header class="title">{{item.title}}</header>
            <p>{{item.target.desc}}</p>
            <span class="author">by {{item.target.author.name}}</span>
          </div>
          <div class="itemright" v-if="item.target.cover_url"><img :src="item.target.cover_url" alt=""></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'news',
  data () {
    return {
      cards: [
        {
          path: '/movies',
          text: '影院热映'
        },
        {
          path: 'https://m.douban.com/music/newwestern',
          text: '欧美新碟榜'
        },
        {
          path: 'https://m.douban.com/time/?dt_time_source=douban-msite_shortcut',
          text: '豆瓣时间'
        },
        {
          path: 'https://itunes.apple.com/cn/app/dou-ban/id907002334',
          text: '使用豆瓣App'
        }
      ],
      newsList: []
    }
  },
  methods: {
    getData () {
      // const _this = this
      // 获取电影列表数据

      axios.get('/api/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1').then(function (res) {
        // var result = JSON.parse(res.request.response)
        // _this.newsList = result.recommend_feeds
        console.log(res)
      })
    }
  },
  created () {
    let _this = this
    // 获取消息列表页面数据
    axios.get('/api/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1').then(function (res) {
      var result = res.data.recommend_feeds
      _this.newsList = result
      console.log(res)
    })
    // 获取电影列表数据
    axios.get('/api/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&for_mobile=1&callback=?', {
      start: 0,
      count: 18,
      loc_id: '108288'
    }).then(function (res) {
      var result = res.data.subject_collection_items
      // _this.newsList = result.recommend_feeds
      console.log(result)
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
.listItem {
  width: 100%;
  padding: .5rem .36rem .5rem 0;
  border-bottom: 1px solid #e3e3e3;
  font-size: .32rem;
}
.listItem a {
  display: flex;
  justify-content: space-between;
}
.listItem .itemleft .title {
  margin-bottom: .12rem;
  color: #494949;
  font-size: .34rem;
}
.listItem .itemleft p {
  margin-bottom: .15rem;
  display: -webkit-box;
  font-size: .24rem;
  color: #aaa;
  line-height: 1.5;
  text-align: justify;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.listItem .itemleft .author {
  font-size: .24rem;
  color: #ccc;
}
.listItem .itemright {
  margin-left: .5rem;
  margin-top: .1rem;
}
.listItem .itemright img {
  width: 1.7rem;
  height: 1.7rem;
}
</style>
