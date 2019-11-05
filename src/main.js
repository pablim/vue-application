import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

// tem que vir entre chaves, porque não é default
import { routes } from './routes';


// importando o arquivo `Transform.js`.
import './directives/Transform';

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes, 
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
