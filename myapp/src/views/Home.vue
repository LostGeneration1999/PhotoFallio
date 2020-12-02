<template>
    <v-container id="container-full">
        <v-row class="text-center">
            <v-col v-for="image in album" :key="image.id" cols="12" sm="10" md="6" lg="6" xl="3" class="border text-center" >
                <v-img :src="image.imageurl" height="300px"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { get, download } from '../plugins/auth'

export default {
    data() {
        return {
            album: []
        }
    },
    mounted() {
        const room = 'album';
            get(room).then((data) => {
                const get_list = [];
                data.forEach(function(doc){
                    let docdata = doc.data()
                    download(`album/${docdata.id}`)
                    .then((imageurl) => {
                        docdata['imageurl'] = imageurl;
                        get_list.push(docdata);
                    }); })
                this.album = get_list;
            })
    },
}
</script>

