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
                bio: '「素人質問で申し訳ない」の対偶は「お灸をすえる玄人回答」'
            }
        }
    }

</script>
