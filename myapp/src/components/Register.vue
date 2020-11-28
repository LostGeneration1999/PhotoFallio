<template>
    <v-card class="mx-auto mt-5" width="70%">
        <v-card-text>
            <v-form class="send-button">
                <v-text-field require label="制作物のタイトル（アルファベットで簡潔に）" v-model="formdata.title" />
                <v-text-field require label="GithubのURL" v-model="formdata.github" />
                <v-text-field label="制作物ののURL（あれば）" v-model="formdata.weburl" />
                <v-textarea require label="開発" v-model="formdata.desc" />
                <img v-if="uploadImageUrl" :src="this.uploadImageUrl" />
                <v-file-input
                    v-model="input_image"
                    accept="image/*"
                    show-size
                    label="画像ファイルをアップロードしてください"
                    prepend-icon="mdi-image"
                    @change="onImagePicked"
                ></v-file-input>
                <v-btn @click="submit">Submit</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import { post, upload } from '@/plugins/auth'

export default {
    data() {
        return {
            redirect: "/",
            input_image: null,
            uploadImageUrl: "",
            formdata: { title: '', github: '', weburl: '', desc: '', }
        }
    },
    methods: {
        submit() {
            if (this.input_image != null && this.formdata.title != '') {
                upload(this.input_image, this.formdata.title).then(() => {
                        post(this.formdata).then(() => {
                            console.log('正常にデータベースに格納できました');
                            this.$router.push(this.redirect);
                        })
                })
            }else{
                alert('タイトルと画像を用意してください');
            }
        },
        onImagePicked(file) {
            if (file !== undefined && file !== null) {
                if (file.name.lastIndexOf('.') <= 0) {
                return
                }
                const fr = new FileReader()
                fr.readAsDataURL(file)
                fr.addEventListener('load', () => {
                this.uploadImageUrl = fr.result
                })
            } else {
                this.uploadImageUrl = ''
            }
        }
    }
}
</script>

<style scoped>

.send-button {
  text-align: center
}

</style>
