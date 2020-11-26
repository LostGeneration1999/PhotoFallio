import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Service from './views/Service.vue'
import Signin from './components/Signin'
import Signout from './components/Signout'
import Register from './components/Register'

// Pluginの適用
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/profile', component: Profile},
        // propsにより'id'としてService.vueに渡す
        {path: '/service/:id', component: Service, props: true },
        {path: '/signin', component: Signin},
        {path: '/signout', component: Signout},
        {path: '/register', component: Register}
    ]
});