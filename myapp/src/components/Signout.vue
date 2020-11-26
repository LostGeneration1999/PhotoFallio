<template>
  <div class="signin">
    <h2>Sign out</h2>
    <button @click="signOut">Signout</button>
  </div>
</template>

<script>
import { logout } from '@/plugins/auth'

export default {
  name: 'Signout',
  data () {
    return {
      email: '',
      password: '',
      redirect: '/signin',
    }
  },
  computed: {
      user() {
          return this.$store.getters.user;
      }
  },
  methods: {
    signOut() {  
        logout()
        .then(() => {
            this.$store.commit('onUserStatusChanged', false);
            this.$router.push(this.redirect);
        })
        .catch(() => {
            alert('ログアウトできませんでした');
        })
    },
  },
}
</script>
