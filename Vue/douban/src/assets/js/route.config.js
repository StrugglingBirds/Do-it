import Home from '../../components/home.vue'
import News from '../../components/newsList.vue'
import Movies from '../../components/movies.vue'

const routes = [
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
  }
]
export default routes
