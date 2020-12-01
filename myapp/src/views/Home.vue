<template>
    <v-container id="container-full">
        <v-layout >
            <v-flex xs12>
                <v-img src="https://www.symph.co/static/img/banner-illus.svg"></v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    methods: {
        toProfile(){
            this.$router.push({ path: '/profile' })
        }
    }
}
</script>