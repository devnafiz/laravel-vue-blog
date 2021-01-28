/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes';

//vueX
// Support vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './store/index'
const store = new Vuex.Store(
    storeData
)

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('admin-main', require('./components/admin/adminMaster.vue').default);

//V-form
import { Form, HasError, AlertError } from 'vform'
window.Form=Form;


//sweet alert
import Swal from 'sweetalert2'
window.Swal=Swal;

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
  
});

//support moment js
import moment from 'moment'

Vue.filter('timeformat',(arg) =>{
  return moment(arg).format("MMM Do YY")
})

window.toast=toast


Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


const router = new VueRouter({
  routes ,
  mode:'hash',
  // short for `routes: routes`
});



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
});
