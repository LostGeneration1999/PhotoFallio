<template>
    <v-card>
        <div>
            <v-form>
                <v-text-field require label="制作物のタイトル" v-model="formdata.title" />
                <v-text-field require label="GithubのURL" v-model="formdata.github" />
                <v-text-field label="制作物ののURL（あれば）" v-model="formdata.weburl" />
                <v-autocomplete v-model="formdata.tech" :items="['JavaScript', 'Python']"
                                chips label="使用した技術" full-width hide-details hide-no-data
                                hide-selected multiple single-line />
                <v-textarea require label="開発目的" v-model="formdata.purpose" />
                <v-textarea require label="工夫箇所" v-model="formdata.desc" />
                <v-btn @click="submit">Submit</v-btn>
            </v-form>
        </div>
    </v-card>
</template>

<script>
import { post } from '@/plugins/auth'

export default {
    data() {
        return {
            redirect: "/",
            formdata: {
                title: "",
                github: "",
                weburl: "",
                tech: [],
                purpose: "",
                desc: "",
                imageurl: ""
            }
        }
    },
    methods: {
        submit() {
            post(this.formdata).then(() => {
                console.log('正常にデータ格納できました')
                this.$router.push(this.redirect);
            })
        }
    }
}
</script>