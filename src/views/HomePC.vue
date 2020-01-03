<template>
    <div class="home">
        <div class="top">
            <div class="slide-wrapper">
                <video src="../assets/猫は液体なのか.mp4" controls></video>
                <div class="icon-wrapper">
                    <IconButton :icon="dislike.icon"></IconButton>
                    <IconButton :icon="like.icon" :value="like.value"></IconButton>
                    <IconButton :icon="share.icon" :name="share.name"></IconButton>
                    <IconButton :icon="comments.icon" :value="comments.value"></IconButton>
                    <IconButton :icon="others.icon"></IconButton>
                </div>
            </div>
            <div class="slide-info-wrapper">
                <div class="title">猫は液体なのか? 物理学の盲点</div>
                <div class="account-info">
                    <AvatarImage></AvatarImage>
                    <div class="account-name">働きすぎたT細胞</div>
                    <TextButton :class="{'with-color': isntFollow}" @tbClick='toggleFollow' :name="tbName"></TextButton>
                </div>
            </div>
            <div class="comment-wrapper">
                <div>
                    <div>
                        <AvatarImage></AvatarImage>
                    </div>
                    <div class="content">
                        <div class="account-name">犬神家の一族</div>
                        <div class="text">だからあの人はあんなことになってしまったのかaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div v-for="(t, i) in thumbSrc" :key="i">
                <Thumbnail :src="t.src" :title="t.title"></Thumbnail>
            </div>
        </div>
    </div>
</template>


<style>
    @media screen and (min-width: 481px) {
        .home .top {
            height: 700px;
        }

        .slide-wrapper {
            width: 450px;
            margin-bottom: 10px;
            display: inline-block;
            text-align: center;
            float: left;
        }

        video {
            width: 450px;
            height: 600px;
            object-fit: cover;
        }

        .slide-wrapper .icon-wrapper {
            font-size: 12px;
            height: 60px;
            margin-top: 12px;
        }

        .slide-wrapper .icon-wrapper .icon-button {
            width: 80px;
            display: inline-block;
            vertical-align: top;
        }

        .slide-wrapper .icon-wrapper .icon-button:nth-child(1) {
            padding-top: 3px;
        }

        .slide-wrapper .icon-wrapper .icon-button:nth-child(3) .mdi {
            margin-bottom: -1px;
        }

        .slide-info-wrapper {
            width: 450px;
            margin-left: 30px;
            padding-bottom: 30px;
            display: inline-block;
            float: left;
            border-bottom: solid 1px #ccc;
        }

        .slide-info-wrapper .title {
            font-size: 25px;
            margin-bottom: 10px;
            letter-spacing: 0.06em;
        }

        .slide-info-wrapper .account-info .avatar-image {
            width: 45px;
            margin-right: 10px;
            float: left;
        }

        .slide-info-wrapper .account-info .account-name {
            font-size: 17px;
            letter-spacing: 0.03em;
            float: left;
        }

        .slide-info-wrapper .account-info .text-button {
            width: 130px;
            font-size: 15px;
            padding: 5px;
            float: right;
        }

        .slide-info-wrapper .account-info .with-color {
            color: #fdfdfd;
        }

        .comment-wrapper {
            width: 450px;
            display: inline-block;
            margin-left: 30px;
        }

        .comment-wrapper .avatar-image {
            width: 35px;
            float: left;
        }

        .comment-wrapper .content {
            padding-left: 45px;
        }

        .comment-wrapper .account-name {
            font-size: 13px;
            color: #888;
            margin-bottom: 5px;
        }

        .home .bottom {
            height: 300px;
        }

        .bottom .thumbnail {
            margin-left: 15px;
        }
    }
</style>


<script>
    // @ is an alias to /src
    import IconButton from '@/components/IconButton.vue'
    import TextButton from '@/components/TextButton.vue'
    import AvatarImage from '@/components/AvatarImage.vue'
    import Thumbnail from '@/components/Thumbnail.vue'

    export default {
        name: 'home-pc',
        components: {
            IconButton,
            TextButton,
            AvatarImage,
            Thumbnail
        },
        data() {
            return {
                dislike: {
                    icon: 'mdi-thumb-down-outline'
                },
                like: {
                    icon: 'mdi-thumb-up-outline',
                    value: 1234
                },
                share: {
                    icon: 'mdi-link',
                    name: '共有'
                },
                comments: {
                    icon: 'mdi-comment-processing-outline',
                    value: 1234
                },
                others: {
                    icon: 'mdi-dots-vertical'
                },
                isntFollow: true,
                tbName: 'フォローする',
                thumbSrc: [{
                        src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg'
                    },
                ]
            }
        },
        methods: {
            toggleFollow: function() {
                this.isntFollow = !this.isntFollow

                if (this.isntFollow) {
                    this.tbName = 'フォローする'
                } else {
                    this.tbName = 'フォロー中'
                }
            }
        }
    }

</script>
