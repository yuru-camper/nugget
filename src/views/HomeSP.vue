<template>
    <div class="home-sp container">
        <div class="slide-wrapper">
            <VideoShow :src="info[count%2].src"></VideoShow>
            <div class="icon-wrapper">
                <IconButton class="like" :icon="like.icon" :value="info[count%2].n_likes" @click="clickEval"></IconButton>
                <IconButton class="comment" :icon="comments.icon" :value="info[count%2].n_comments"></IconButton>
                <IconButton class="share" :icon="share.icon" :name="share.name"></IconButton>
            </div>
        </div>
        <div class="slide-info-wrapper">
            <div class="title">{{ info[count].title }}</div>
            <div class="account-info">
                <AvatarImage :src="info[count].image"></AvatarImage>
                <div class="account-name">{{ info[count].name }}</div>
                <TextButton :class="{'with-color': isntFollow}" @tbClick='toggleFollow' :name="fbText"></TextButton>
            </div>
        </div>
        <div class="thumbnail-wrapper">
            <div class="wrapper-name">おすすめ</div>
            <div class="thumbnails">
                <div v-for="(t, i) in thumbSrc" :key="i" class="item">
                    <Thumbnail :src="t.src" :title="t.title"></Thumbnail>
                </div>
            </div>
        </div>
        <div class="comment-wrapper">
            <div class="wrapper-name">コメント</div>
            <InputBar placeholder="コメントを投稿" name="comment"></InputBar>
            <div class="comment" v-for="(ci, i) in commentInfo" :key="i">
                <div class="left">
                    <AvatarImage :src="ci.commentatorImage"></AvatarImage>
                </div>
                <div class="right">
                    <div class="commentator">{{ ci.commentatorName}}</div>
                    <div class="text">{{ ci.comment }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @media screen and (max-width: 767px) {
        .slide-wrapper {
            width: 100vw;
            margin-bottom: 10px;
            display: inline-block;
            text-align: center;

            .icon-wrapper {
                font-size: 3.4vw;
                margin: 3.4vw 0 2vw;
                color: #888;

                .icon-button {
                    width: 25vw;
                    vertical-align: top;

                    &.share .mdi {
                        margin-bottom: -0.6vw;
                    }
                    
                    &.comment {
                        margin-top: 0.1vw;
                    }
                }
            }
        }

        .slide-info-wrapper {
            width: 94vw;
            height: 100px;
            margin: 0 3vw;
            display: inline-block;
            border-bottom: solid 1px #ccc;

            .title {
                font-size: 20px;
                margin-bottom: 10px;
                letter-spacing: 0.06em;
            }

            .account-info {
                img {
                    width: 40px;
                    margin-right: 10px;
                    border-radius: 50%;
                    float: left;
                }

                .account-name {
                    font-size: 12px;
                    letter-spacing: 0.03em;
                    float: left;
                }

                .text-button {
                    width: 110px;
                    font-size: 12px;
                    padding: 4px 5px;
                    float: right;
                    margin-top: 7px;
                }

                .with-color {
                    color: #fdfdfd;
                }
            }
        }
        
        .thumbnail-wrapper {
            padding: 5vw 0;
            
            .wrapper-name {
                font-size: 15px;
                margin: 0 0 3vw 3vw;
            }
            
            .thumbnails {
                overflow-x: scroll;
                display: flex;
                
                .thumbnail {
                    margin-left: 1vw;
                }

                .item {
                    &:nth-child(1) {
                        margin-left: 5vw;
                    }
                    
                    &:last-child {
                        padding-right: 5vw;
                    }
                }
            }
        }
        
        .comment-wrapper {
            margin: 0 3vw;
            padding: 5vw 0;
            border-top: solid thin #ccc;
            
            .wrapper-name {
                margin-bottom: 3vw;
            }
            
            .input-bar {
                width: 310px;
                margin: 0 auto 7vw;
                
                input {
                    padding: 3vw;
                    width: calc(100% - 3vw * 2);
                    background: none;
                    border: solid thin $border;
                    -webkit-appearance: none;
                }
            }
            
            .comment {
                display: flex;
                
                .avatar-image {
                    width: 35px;
                }
                
                .right {
                    margin-left: 2vw;
                    
                    .commentator {
                        font-size: 12px;
                        color: #888;
                        margin-bottom: 1.5vw;
                    }
                    
                    .text {
                        font-size: 15px;
                    }
                }
            }
        }
    }
</style>


<script>
    // @ is an alias to /src
    import IconButton from '@/components/IconButton.vue'
    import TextButton from '@/components/TextButton.vue'
    import AvatarImage from '@/components/AvatarImage.vue'
    import Thumbnail from '@/components/Thumbnail.vue'
    import InputBar from '@/components/InputBar.vue'
    import VideoShow from '@/components/VideoShow.vue'

    export default {
        name: 'home_sp',
        components: {
            IconButton,
            TextButton,
            AvatarImage,
            Thumbnail,
            InputBar,
            VideoShow
        },
        data() {
            return {
                info: this.$store.state.homeSlides,
                like: {
                    icon: 'mdi-thumb-up-outline'
                },
                share: {
                    icon: 'mdi-link',
                    name: '共有'
                },
                comments: {
                    icon: 'mdi-comment-processing-outline'
                },
                isntFollow: true,
                fbText: 'フォローする',
                thumbSrc: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
                        title: 'ここにはスライドのタイトルが入ります'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
                        title: 'ここにはスライドのタイトルが入ります'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
                        title: 'ここにはスライドのタイトルが入ります'
                    },
                ],
                commentInfo: [
                    {
                        commentatorImage: "https://cdn.vuetifyjs.com/images/john.jpg",
                        commentatorName: '食べられそうなラー油',
                        comment: '辛そうで辛くない、ちょっと辛いコメント'
                    }
                ]
            }
        },
        computed: {
            count() {
                return this.$store.state.slideCount
            }
        },
        methods: {
            toggleFollow() {
                this.isntFollow = !this.isntFollow

                if (this.isntFollow) {
                    this.fbText = 'フォローする'
                } else {
                    this.fbText = 'フォロー中'
                }
            }
        }
    }

</script>
