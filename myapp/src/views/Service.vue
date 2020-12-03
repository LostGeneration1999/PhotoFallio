<template>
    <v-container>
        <v-row class="text-center">
            <v-col v-for="service in services" :key="service.title" cols="12" sm="10" md="6" lg="6" xl="3" class="border text-center" >
                    <v-card :href="service.github" target="_blank" class="mb-2">
                        <v-img :src="service.imageurl" height="300px"></v-img>
                        <v-card-title class="headline text-center">{{service.title}}</v-card-title>
                        <v-divider class="mx-3"/>
                        <v-card-text>
                            {{service.description}}
                        </v-card-text>
                        <v-card-actions>
                            <div v-if="service.weburl">
                                <v-btn color="deep-purple lighten-2" text :href="service.weburl" target="_blank">{{service.title}}へ！</v-btn>
                            </div>
                        </v-card-actions>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { get, download } from '../plugins/auth'

export default {
    data() {
        return {
            services: []
        }
    },
    mounted() {
            const room = 'service';
            get(room).then((data) => {
                const get_list = [];
                data.forEach(function(doc){
                    let docdata = doc.data()
                    download(`tmp/${docdata.title}`)
                    .then((imageurl) => {
                        docdata['imageurl'] = imageurl;
                        get_list.push(docdata);
                    }); })
                this.services = get_list;
            })
    }
}
</script>