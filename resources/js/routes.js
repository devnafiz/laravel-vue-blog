import adminHome from './components/admin/adminHome.vue'
import CategoryList from './components/admin/category/List.vue'
import CategoryNew from './components/admin/category/New.vue'
import CategoryEdit from './components/admin/category/edit.vue'




//import Ex from './components/ExampleComponent.vue'

export const routes = [
  //{ path: '/foo', component: Foo },
  { path: '/home',

   component: adminHome },
   {
     path:'/category-list',
     component:CategoryList

   },

   {
     path:'/category-add',
     component:CategoryNew

   },
   {
     path:'/edit-category/:categoryid',
     component:CategoryEdit

   },
   

];