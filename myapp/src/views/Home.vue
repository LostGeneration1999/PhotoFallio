<template>
    <div>
        <h3>Home</h3>
        <button @click='toProfile'>My Profile</button>
    </div>
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