<template>
    <div class="video">
        <video src="../assets/猫は液体なのか.mp4" v-toggleplay="play" controls playsinline webkit-playsinline autoplay muted></video>
        <div class="overlay" v-show="!play">
            <IconButton icon="mdi-play"></IconButton>
        </div>
        <div class="control-panel" @click="play=!play"></div>
    </div>
</template>


<style lang="scss">
    .video {
        position: relative;
        
        video {
            display: block;
            z-index: -100;
        }
        
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            height: calc(100vw * 4 / 3 - 23vw);
            width: 100vw;
            background-color: rgba(50, 50, 50, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            
            .icon-button {
                color: rgba(255, 255, 255, 0.9);
                
                .mdi {
                    font-size: 15vw;
                }
            }
        }
        
        .control-panel {
            position: absolute;
            top: 0;
            left: 20vw;
            height: calc(100vw * 4 / 3);
            width: 60vw;
        }
    }
</style>


<script>
    import IconButton from '@/components/IconButton.vue'
    
    export default {
        components: {
            IconButton
        },
        data() {
            return {
                play: true
            }
        },
        directives: {
            toggleplay(el, binding) {
                binding.value ? el.play() : el.pause();
            }
        },
        computed: {
            btnstate(){
                return this.play ? "■" : "▸";
            }
        }
    }
</script>