<template>
    <v-card class="mx-auto mt-5" width="70%">
        <v-card-text>
            <v-form class="send-button">
                <v-text-field require label="ID（アルファベットで簡潔に）" v-model="id" />
                <img v-if="uploadImageUrl" height="300px" :src="this.uploadImageUrl" />
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
import { registerAlbum, upload } from '@/plugins/auth'

export default {
    data() {
        return {
            redirect: "/",
            input_image: null,
            uploadImageUrl: "",
            id: "",
            }   
        },
    methods: {
        submit() {
            if (this.input_image != null && this.id != '') {
                upload(this.input_image, `album/${this.id}`).then(() => {
                        registerAlbum(this.id).then(() => {
                            console.log('正常にデータベースに格納できました');
                            this.$router.push(this.redirect);
                        })
                })
            }else{
                alert('IDと画像を用意してください');
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