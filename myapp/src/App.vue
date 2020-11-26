<template>
  <div id='app'>
    <v-app>
      <NaviBar :drawer="drawer"/>
      <MainBar :my-pages="pages"
               @input="currentId=$event"></MainBar>
      <main>
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
        <router-view/>
      </main>
      <v-footer>Design by hoge.</v-footer>
    </v-app>
  </div>
</template>

<script>
import MainBar from './components/Mainbar'
import NaviBar from './components/NaviBar'

export default {
    components: { MainBar, NaviBar },
    data() {
        return {
            drawer: null,
            currentId: 1,
            pages: [
                { id: 1, name: 'Home', path: '/'},
                { id: 2, name: 'Service', path: '/service' },
                { id: 3, name: 'Profile', path: '/profile' },
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

  .v-footer {
  margin-top: auto;
}
</style>
