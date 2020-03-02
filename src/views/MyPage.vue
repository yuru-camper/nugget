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
                    {{ userName }}
                </div>
                <div class="user-id">
                    @{{ userID }}
                </div>
            </div>
            <div class="bottom">
                <div class="bio">
                    {{ bio }}
                </div>
                <IconButton icon="mdi-chevron-down"></IconButton>
            </div>
        </div>
        <div class="switch-bar">
            <div>通知</div>
            <div>投稿</div>
            <div>ジーニアス</div>
            <div>履歴</div>
        </div>
    </div>
</template>


<style lang="scss">
    .my-page {
        .user-info {
            padding: 50px 3vw 0;
            background-color: #fafafa;
            
            .top {
                height: 80px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                
                .avatar-image {
                    width: 80px;
                }
                
                a {
                    margin-left: auto;
                    color: #888;
                    
                    .text-button {
                        padding: 4px 20px;
                        font-size: 12px;
                    }
                }
            }
            
            .middle {
                margin-bottom: 10px;
                
                .user-name {
                    font-size: 17px;
                }
                
                .user-id {
                    font-size: 12px;
                    color: #888888;
                }
            }
            
            .bottom {
                text-align: center;
                
                .bio {
                    text-align: left;
                    font-size: 13px;
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
        }
    }

</style>


<script>
    import AvatarImage from '@/components/AvatarImage.vue'
    import TextButton from '@/components/TextButton.vue'
    import IconButton from '@/components/IconButton.vue'

    export default {
        components: {
            AvatarImage,
            TextButton,
            IconButton
        },
        data() {
            return {
                userName: 'のび太さんのエッジ',
                userID: 'nobitasedge',
                bio: 'プログラミングとかの入門書って絶対入門じゃないよね。「素人質問で申し訳ないのですが」と同じだよねああああああああああああああああああああああああああああああああああああああああああああああああ'
            }
        }
    }

</script>
