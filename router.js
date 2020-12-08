import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'
import VueAnalytics from 'vue-analytics'

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'web.home', component: page('web/blog.vue') },
  { path: '/blog', name: 'web.blog', component: page('web/blog.vue') },
  { path: '/about', name: 'web.about', component: page('web/about.vue') },
  { path: '/ideas', name: 'web.ideas', component: page('web/ideas.vue') },
  { path: '/side-projects', name: 'web.projects', component: page('web/projects.vue') },
  { path: '/curriculum', name: 'curriculum', component: page('web/curriculum.vue') },
  { path: '/:slug', name: 'blog.post', component: page('blog/post.vue') },
]

const router = new Router({
  routes,
  scrollBehavior,
  mode: 'history'
});

Vue.use(VueAnalytics, {
  id: 'UA-45112924-2',
  router,
  debug: {
    sendHitTask: process.env.APP_ENV === 'production'
  }
})

export function createRouter() {
  return router;
}
