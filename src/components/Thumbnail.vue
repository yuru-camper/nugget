<template>
    <div class="thumbnail">
        <router-link to="/">
            <img :src="src">
            <div class="title">
                {{ title }}
            </div>
        </router-link>
    </div>
</template>


<style>
    .thumbnail {
        width: 150px;
        float: left;
    }

    .thumbnail img {
        width: 150px;
        height: 200px;
        border-radius: 5px;
        object-fit: cover;
    }

    .thumbnail .title {
        font-size: 15px;
        text-decoration: none;
        color: #4d4d4d;
    }

</style>


<script>
    export default {
        props: {
            src: {
                type: String,
                require: true,
                default: ''
            },
            title: {
                type: String,
                require: true,
                default: 'ここにはスライドのタイトルが入ります'
            }
        }
    }

</script>
