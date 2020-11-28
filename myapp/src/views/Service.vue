<template>
    <div>
        <div v-for="service in services" :key="service.title">
            <img :src="service.imageurl">
        </div>
    </div>
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
                    download(docdata.title)
                    .then((imageurl) => {
                        docdata['imageurl'] = imageurl;
                        get_list.push(docdata);
                    }); })
                this.services = get_list;
            })
    }
}
</script>