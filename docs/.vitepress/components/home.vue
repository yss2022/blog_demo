<template>
    <div class="home">
        <div class="words">
            <h2>{{ showWords }}</h2>
        </div>
        <musicPlayer />
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import musicPlayer from './musicPlayer.vue';

let showWords = ref('')
const getWords = setInterval(async () => {
    const result = await axios.get('https://v1.hitokoto.cn')
    showWords.value = result.data.hitokoto
}, 3000)

onMounted(() => {

})




</script>

<style scoped lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    .words {
        background-color: #6868685e;
        width: 50%;
        height: 45px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h2 {
        color: rgb(206, 205, 205);
        font-size: 30px;
        font-weight: 900;
    }
}
</style>