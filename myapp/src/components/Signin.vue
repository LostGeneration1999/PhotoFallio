<template>
  <v-card class="mx-auto mt-5" width="70%">
    <v-card-text>
      <v-form class="signin-button">
            <v-text-field prepend-icon="mdi-account-circle" type="text" label="Email" v-model="email" />
            <v-text-field prepend-icon="mdi-lock" append-icon="mdi-eye-off" type="password" label="Password" v-model="password" />
            <v-btn @click="signIn">Login</v-btn>
      </v-form>
    </v-card-text>
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

.signin-button {
  text-align: center
}

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