<template>
    <div class="edit-profile">
        <div class="top">
            <div class="cancel">
                <router-link to="/mypage">キャンセル</router-link>
            </div>
            <div class="title">
                プロフィールを変更
            </div>
            <div class="save">
                保存
            </div>
        </div>
        <div class="edit">
            <div class="open">
                <div class="image content">
                    <div class="left">
                        画像
                    </div>
                    <div class="right">

                    </div>
                </div>
                <div class="name content">
                    <div class="left">
                        名前
                    </div>
                    <div class="right">
                        <InputBar :value="openValue.name"></InputBar>
                    </div>
                </div>
                <div class="bio content">
                    <div class="left">
                        自己紹介
                    </div>
                    <div class="right">
                        <InputBar :value="openValue.bio"></InputBar>
                    </div>
                </div>
            </div>
            <div class="private">
                <div class="mail content">
                    <div class="left">
                        メール
                    </div>
                    <div class="right">
                        <InputBar :value="privateValue.mail"></InputBar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    .edit-profile {
        .top {
            padding: 10px 3vw;
            display: flex;
            justify-content: center;
            font-size: 15px;
            background-color: #fafafa;
            border-bottom: solid thin #ccc;

            .cancel {
                width: 25vw;
                text-align: left;
                
                a {
                    text-decoration: none;
                    color: #888;
                }
            }

            .title {
                width: calc(100vw - 25vw * 2 - 3vw * 2);
                text-align: center;
            }

            .save {
                margin-left: auto;
                width: 25vw;
                text-align: right;
            }
        }

        .edit {
            margin: 0 3vw;
            font-size: 12px;

            .content {
                width: 100%;
                padding: 5px 0;
                display: flex;
                border-bottom: solid thin #ccc;

                .left {
                    width: 20vw;
                    margin-right: 3vw;
                    margin-top: 8px;
                }

                .right {
                    .input-bar {
                        input {
                            width: calc(100vw - 3vw * 2 - 20vw - 3vw);
                        }
                    }
                }
            }
        }
    }

</style>


<script>
    import InputBar from '@/components/InputBar.vue'

    export default {
        components: {
            InputBar
        },
        data() {
            return {
                openValue: {
                    name: '名前',
                    bio: '自己紹介文',
                },
                privateValue: {
                    mail: 'メールアドレス'
                }
            }
        }
    }

</script>
