<template>
    <div class="thumbnail">
        <img :src="src">
        <div class="title">
            {{ title }}
        </div>
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
