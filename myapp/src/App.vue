<template>
  <div id='app'>
    <v-app>
      <MainBar></MainBar>
      <main>
        <router-view/>
      </main>
      <v-footer>Design by hoge.</v-footer>
    </v-app>
  </div>
</template>

<script>
import MainBar from './components/Mainbar'

export default {
    components: { MainBar },
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
