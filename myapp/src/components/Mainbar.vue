<template>
  <v-card class="overflow-hidden">
    <v-row>
      <v-app-bar absolute color="#6A76AB" dark shrink-on-scroll fade-img-on-scroll prominent
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-3">
        <template v-slot:img="{ props }">
          <div v-if="user==true">
            <v-img v-bind="props"
              gradient="to top right, rgba(115,200,101,.7), rgba(32,72,25,.7)"></v-img>
          </div>
          <div v-if="user==false">
            <v-img v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
          </div>
        </template>

        
        <v-toolbar-title>Wired PortFallio</v-toolbar-title>
        <v-spacer></v-spacer>

        <div v-if="user==true">
            <div v-for="item in items_logouted" :key="item.title">
              <v-btn prepend-icon="mdi-lock"  :to="item.path" />
            </div>
        </div>
        <div v-else>
            <div v-for="item in items_logined" :key="item.title">
              <v-btn prepend-icon="mdi-lock" :to="item.path" />
            </div>
        </div>

        <template v-slot:extension>
          <v-tabs align-with-title>
              <v-tab v-for="page in myPages" :key="page.id" :to="page.path">
                  {{ page.name }}
              </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      
      <v-container style="height: 225px;"></v-container>
    </v-row>
  </v-card>
</template>

<style scoped>

.menu-btn {
  text-align: right;
}
</style>

<script>

export default {
    // myPage
    data () {
      return {
        drawer: null,
        currentId: 1,
        items_logouted: [
                { id: 0, name: 'Signin', path: '/signin' },
                { id: 1, name: 'Register', path: '/register'}
            ],
        items_logined: [
                { id: 0, name: 'Signout', path: '/signout'},
                { id: 1, name: 'Register', path: '/register'}
            ],
        myPages: [
                { id: 1, name: 'Home', path: '/'},
                { id: 2, name: 'Service', path: '/service' },
                { id: 3, name: 'Profile', path: '/profile' },
            ]
        }
    },
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
}
</script>