<template>
    <div class="edit-profile">
        <div class="top">
            <div class="cancel" @click="click_cancel">
                キャンセル
            </div>
            <div class="title">
                プロフィールを変更
            </div>
            <div class="save" @click="click_save">
                保存
            </div>
        </div>
        <div class="edit">
            <div class="open">
                <div class="image content">
                    <div class="user-image">
                        <AvatarImage></AvatarImage>
                    </div>
                    <div class="input">
<!--                        <input type="file">-->
                    </div>
                </div>
                <div class="content">
                    <input class="name" type="text" @keyup="keyup_name" :value="name">
                </div>
                <div class="content">
                    <textarea class="bio" rows="3" placeholder="自己紹介" @keyup="keyup_bio" :value="bio"></textarea>
                </div>
            </div>
            <div class="private">
                <div class="content">
                    <input class="mail" type="email" @keyup="keyup_mail" :value="mail">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @media screen and (max-width: 767px) {
        .edit-profile {
            .top {
                padding: 3.6vw 3vw 3vw;
                display: flex;
                justify-content: center;
                font-size: 4vw;
                background: $tabbar;
                border-bottom: solid thin $border;
                color: $normal-color;

                .cancel {
                    width: 25vw;
                    text-align: left;
                    color: $light-color;
                }

                .title {
                    width: calc(100vw - (25vw + 3vw) * 2);
                    text-align: center;
                }

                .save {
                    width: 25vw;
                    text-align: right;
                }
            }

            .edit {
                margin: 0 3vw;
                font-size: 5vw;

                .content {
                    width: calc(100vw - 3vw * 2);

                    &.image {
                        margin: 10vw 0 7vw;
                    }

                    .user-image {
                        text-align: center;
                        img {
                            width: 22vw;
                        }
                    }

                    input,
                    textarea {
                        border: none;
                        border-bottom: solid thin $border;
                        width: calc(100% - 3vw * 2);
                        font-size: 4.5vw;
                        padding: 3.6vw 3vw 3vw;
                        margin-bottom: 0.3vw;
                    }
                }
            }
        }

    }

    @media screen and (min-width: 768px) {
        .edit-profile {
            width: calc(65vw - 150px);
            max-width: 900px;
            margin: auto;

            .top {
                position: relative;
                margin-bottom: 80px;

                .cancel,
                .save {
                    position: absolute;
                    top: 2px;
                    font-size: 18px;
                    cursor: pointer;
                }

                .cancel {
                    left: 0;
                }

                .save {
                    right: 0;
                }

                .title {
                    text-align: center;
                    font-size: 22px;
                }
            }

            .edit {
                margin: auto;

                input,
                textarea {
                    width: 400px;
                    padding: 12px 12px;
                    font-size: 18px;
                    color: $normal-color;
                    border: solid thin $normal-color;
                    border-radius: 5px;
                    display: block;
                    margin: 0 auto 30px;
                }

                .open {
                    .avatar-image {
                        width: 120px;
                        margin: 0 auto 50px;
                        display: block;
                    }
                }
            }
        }
    }

</style>


<script>
    import AvatarImage from '@/components/AvatarImage.vue'

    export default {
        components: {
            AvatarImage
        },
        data() {
            return {
                name: this.$store.state.userInfo.name,
                bio: this.$store.state.userInfo.bio,
                mail: this.$store.state.userInfo.mail_address,
            }
        },
        methods: {
            click_cancel() {
                this.$router.go(-1)
            },
            click_save() {
                this.$store.state.userInfo.name = this.name
                this.$store.state.userInfo.bio = this.bio
                this.$store.state.userInfo.mail = this.mail
                this.$router.go(-1)
            },
            keyup_name() {
                this.name = document.getElementsByClassName('name')[0].value
            },
            keyup_bio() {
                this.bio = document.getElementsByClassName('bio')[0].value
            },
            keyup_mail() {
                this.mail = document.getElementsByClassName('mail')[0].value
            }
        }
    }

</script>
