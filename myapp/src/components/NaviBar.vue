<template>
    <v-navigation-drawer 
        v-model="drawer"
        absolute
        temporary>
        <v-list dense>
            <div v-if="user==true">
                <v-list-item
                v-for="item in items_logined"
                :key="item.title"
                link>
                    <v-btn :to="item.path" block>
                        {{ item.name }}
                    </v-btn>
                </v-list-item>
            </div>
            <div v-else>
                <v-list-item
                v-for="item in items_logouted"
                :key="item.title"
                link>
                    <v-btn :to="item.path" block>
                        {{ item.name }}
                    </v-btn>
                </v-list-item>
            </div>
        
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data () {
        return {
            items_logined: [
                { id: 0, name: 'Signout', path: '/signout'},
                { id: 1, name: 'Register', path: '/register'}
            ],
            items_logouted: [
                { id: 0, name: 'Signin', path: '/signin' },
                { id: 1, name: 'Register', path: '/register'}
            ]
        }
    },
    props: {
        drawer: null,
    },
    computed: {
        user() {
            return this.$store.getters.user;
        }
    },
}
</script>