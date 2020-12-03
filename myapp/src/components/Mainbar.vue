<template>
  <header>
      <v-app-bar app absolute color="#6A76AB" dark fade-img-on-scroll prominent shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-3">
        <template v-slot:img="{ props }">
          <div v-if="user==true">
            <v-img v-bind="props"
              gradient="to top right, rgba(115,200,101,.7), rgba(32,72,25,.7)"></v-img>
          </div>
          <div v-if="user==false">
            <v-img v-bind="props"
              gradient="to top right, rgba(40,45,201,.7), rgba(25,32,72,.7)"></v-img>
          </div>
        </template>
        
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title><span style="color:yellow">Wired PortFallio</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs align-with-title>
                <v-tab v-for="page in myPages" :key="page.id" :to="page.path">
                    {{ page.name }}
                </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group v-if="user==false">
            <v-list-item v-for="page in signin" :key="page.id" :to="page.path">
              <v-list-item-title>{{ page.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group v-if="user==true">
            <v-list-item v-for="page in signout" :key="page.id" :to="page.path">
              <v-list-item-title>{{ page.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
</template>

<style scoped>
.menu-btn {
  text-align: right;
}
</style>

<script>
import store from '../plugins/auth_check'

export default {
    // myPage
    data () {
      return {
        currentId: 1,
        drawer: false,
        myPages: [
                { id: 1, name: 'Home', path: '/'},
                { id: 2, name: 'Skill', path: '/service' },
                { id: 3, name: 'Profile', path: '/profile' },
            ],
        signin: [
                { id: 1, name: 'Signin', path: '/signin' },
        ],
        signout: [
                { id: 1, name: 'Signout', path: '/signout' },
                { id: 2, name: 'Register', path: '/register', },
                { id: 3, name: 'Album Register', path: '/album', },
            ]
        }
    },
    computed: {
        user() {
            return store.getters.status;
        }
    },
}
</script>

