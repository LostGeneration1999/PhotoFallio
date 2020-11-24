<template>
    <div>
        <h3>Service</h3>
        <router-link to='/service/1'>service</router-link>
        <router-link to='/service/2'>service2</router-link>
        <hr>
        <h1>Service: No. {{ id }}</h1>
    </div>
</template>

<script>
export default {
    props: ['id'],
}
</script>