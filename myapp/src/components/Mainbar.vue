<template>
<div>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Wired PortFallio</v-toolbar-title>
      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs align-with-title>
            <v-tab v-for="page in myPages" :key="page.id">
                <button @click="$emit('input', page.id)">{{ page.name }}</button>
            </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    
      <v-container style="height: 300px;"></v-container>
</div>
</template>

<script>

export default {
    // myPage
    props: {
        myPages: Array,
    },
    methods: {
        tablink(){
            console.log(this.id);
            this.$emit('myclick', this.id);
        }
    }
}
</script>