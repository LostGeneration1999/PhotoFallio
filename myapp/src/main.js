import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import store from './plugins/auth_check'

Vue.config.productionTip = false
Vue.use(Vuetify)
export default new Vuetify({ })

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGE_SENDING
}

firebase.initializeApp(config);

new Vue({
  vuetify: new Vuetify(),
  store,
  router,
  render: h => h(App),
}).$mount('#app')
