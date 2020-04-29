<template>
    <div class="my-page">
        <div class="user-info">
            <div class="top">
                <AvatarImage></AvatarImage>
                <router-link to="/edit-profile">
                    <TextButton name="プロフィールを変更"></TextButton>
                </router-link>
            </div>
            <div class="middle">
                <div class="user-name">
                    {{ $store.state.mypage.name }}
                </div>
                <div class="user-id">
                    @{{ $store.state.mypage.id }}
                </div>
            </div>
            <div class="bottom">
                <div class="bio">
                    {{ $store.state.mypage.bio }}
                </div>
                <IconButton icon="mdi-chevron-down"></IconButton>
            </div>
        </div>
        <div class="switch-bar">
            <div v-for="(c, i) in $store.state.mypage.contents" :key="i" :class="{'show': $store.state.mypage.show_content == c}" @click="click_content(c)">
                {{ c }}
            </div>
        </div>
        <div class="contents ntf-wrapper" v-if="is_notifications">
            <div class="ntf" v-for="(n, i) in $store.state.mypage.notif" :key="i">
                <div class="left">
                    <AvatarImage :src="n.image"></AvatarImage>
                </div>
                <div class="right">
                    <div class="top">
                        <div class="ntfor">{{ n.name}}</div>
                        <div class="date">{{ n.date }}</div>
                    </div>
                    <div class="text">{{ n.content }}</div>
                </div>
            </div>
        </div>
        <div class="contents thumbnail-wrapper" v-else>
            <div class="thumbnails">
                <div v-for="(t, i) in $store.state.mypage.thumbSrc" :key="i" class="item">
                    <Thumbnail :src="t.src" :title="t.title"></Thumbnail>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    .my-page {
        .user-info {
            padding: 15vw 5vw 0;
            background-color: #fafafa;

            .top {
                height: 22vw;
                margin-bottom: 3vw;
                display: flex;
                align-items: center;

                .avatar-image {
                    width: 22vw;
                }

                a {
                    margin-left: auto;
                    color: #888;

                    .text-button {
                        padding: 1vw 5vw;
                        font-size: 3.4vw;
                    }
                }
            }

            .middle {
                margin-bottom: 3vw;

                .user-name {
                    font-size: 5vw;
                    margin-bottom: 0.2vw;
                }

                .user-id {
                    font-size: 3.4vw;
                    color: #888888;
                }
            }

            .bottom {
                text-align: center;

                .bio {
                    text-align: left;
                    font-size: 3.6vw;
                }

                .icon-button {
                    margin: auto;
                    color: #888;
                }
            }
        }

        .switch-bar {
            font-size: 15px;
            padding: 5px 0 4px;
            color: #888;
            display: flex;
            justify-content: space-evenly;
            border-bottom: solid thin #ccc;
            border-top: solid thin #ccc;
            
            .show {
                color: $normal-color;
                font-weight: 400;
            }
        }
        
        .contents {
            &.ntf-wrapper {
                margin: 0 4vw;
                padding: 5vw 0;
                

                .ntf {
                    display: flex;
                    border-bottom: solid thin #ccc;
                    padding: 5vw 0;

                    .avatar-image {
                        width: 10vw;
                    }

                    .right {
                        margin-left: 2vw;
                        width: calc(100vw - 4vw * 2 - 2vw);
                        
                        .top {
                            margin-bottom: 1.5vw;
                            width: 100%;
                            display: flex;
                            
                            .ntfor {
                                font-size: 3.4vw;
                                color: $normal-color;
                            }
                            
                            .date {
                                font-size: 3.4vw;
                                color: $light-color;
                                margin-left: auto;
                            }
                        }

                        .text {
                            font-size: 4vw;
                        }
                    }
                }
            }
            
            &.thumbnail-wrapper {
                padding: 5vw 0;

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
        }
    }

</style>


<script>
    import AvatarImage from '@/components/AvatarImage.vue'
    import TextButton from '@/components/TextButton.vue'
    import IconButton from '@/components/IconButton.vue'
    import Thumbnail from '@/components/Thumbnail.vue'

    export default {
        components: {
            AvatarImage,
            TextButton,
            IconButton,
            Thumbnail
        },
        computed: {
            is_notifications() {
                return this.$store.state.mypage.show_content === '通知'
            }
        },
        methods: {
            click_content(content_name) {
                this.$store.commit('mypage/switch_content', content_name)
            }
        }
    }

</script>
