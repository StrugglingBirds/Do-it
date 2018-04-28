import Home from '../../components/home.vue'
import News from '../../components/newsList.vue'
import Movies from '../../components/movies.vue'
import Search from '../../components/search.vue'

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/movies',
    component: Movies
  },
  {
    name: '搜索',
    path: '/search',
    component: Search
  }
]
export default routes
