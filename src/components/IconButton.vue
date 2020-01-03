<template>
    <div class="icon-button">
        <span class="mdi" :class="icon"></span>
        <span class="text">{{ name }}</span>
        <span class="text">{{ value }}</span>
    </div>
</template>


<style>
    .icon-button {
        text-align: center;
        display: inline-block;
    }

    .icon-button .mdi {
        display: block;
        font-size: 30px;
    }

    .icon-button .text {
        letter-spacing: 0.08em;
    }

</style>


<script>
    export default {
        props: {
            icon: {
                type: String,
                require: true,
                default: 'mdi-thumb-up-outline'
            },
            name: {
                type: String,
                require: false
            },
            value: {
                type: Number,
                require: false
            }
        }
    }

</script>
