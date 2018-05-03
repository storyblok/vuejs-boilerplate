// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import Page from './components/Page.vue'
import Teaser from './components/Teaser.vue'

Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.use(StoryblokVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
