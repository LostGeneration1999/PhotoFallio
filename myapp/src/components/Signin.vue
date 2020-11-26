<template>
  <v-card>
    <div class="signin">
        <h2>Sign in</h2>
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="signIn">Signin</button>
        <h3>{{ user }}</h3>
    </div>
  </v-card>
</template>

<script>
import { login } from '@/plugins/auth'

export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: '',
      redirect: '/',
    }
  },
  computed: {
      user() {
          return this.$store.getters.user;
      }
  },
  methods: {
    signIn() {
        login(this.email, this.password)    
        .then(() => {
            this.$store.commit('onUserStatusChanged', true);
            this.$router.push(this.redirect);
        })
        .catch(() => {
            alert('ログインできませんでした');
        })
    },
  },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>