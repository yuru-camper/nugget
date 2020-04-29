<template>
    <div class="icon-button" @click="click">
        <span class="mdi" :class="icon"></span>
        <span class="text">{{ name }}</span>
        <span class="text">{{ value }}</span>
    </div>
</template>


<style lang="scss">
    .icon-button {
        text-align: center;
        display: inline-block;
        
        .mdi {
            display: block;
            font-size: 7.5vw;
            color: $light-color;
        }
        
        .text {
            letter-spacing: 0.08em;
            color: $light-color;
        }
        
        &.with-color {
            .mdi {
                color: $brand-color;
            }

            .text {
                letter-spacing: 0.08em;
            }
        }
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
        },
        methods: {
            click() {
                this.$emit('ib_click')
            }
        }
    }

</script>
