<template>
  <div id='app'>
    <v-app>
      <MainBar :my-pages="pages"
               @input="currentId=$event"></MainBar>
      <main>
        <!-- my-page -->
        <h1>{{ pages[currentId-1].name }}</h1>
        <v-footer>Design by hoge.</v-footer>
      </main>
    </v-app>
  </div>
</template>

<script>
import MainBar from './components/Mainbar'
import Signin from './components/Signin'
import Home from './views/Home'
import Service from './views/Service'
import Profile from './views/Profile'

export default {
    components: { MainBar },
    data() {
        return {
            currentId: 1,
            pages: [
                { id: 1, name: 'Home', content: Home },
                { id: 2, name: 'Service', content: Service },
                { id: 3, name: 'Profile', content: Profile },
                { id: 4, name: 'Signin', content: Signin }
            ]
        }
    },
    computed: {
      active() {
        return this.value === this.id ? 'active' : false
      }
    }
}
</script>

<style scope>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 30px;
  }
</style>
