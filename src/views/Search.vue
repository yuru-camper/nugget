<template>
    <div class="search">
        <div class="search-wrapper">
            <InputBar placeholder="検索"></InputBar>
            <div class="tags">
                <div v-for="(name, i) in choicedTags" :key="i" class="tag">
                    <Chip :name="name"></Chip>
                </div>
            </div>
            <div class="no-tags" v-show="!choicedTags.length">
                タグが選択されていません
            </div>
        </div>
        <div class="thumbnail-wrapper">
            <div class="recommend">
                <div class="category">おすすめ</div>
                <div class="thumbnails">
                    <div v-for="(t, i) in thumbSrc" :key="i" class="item">
                        <Thumbnail :src="t.src" :title="t.title"></Thumbnail>
                    </div>
                </div>
            </div>
            <div class="popular">
                <div class="category">人気</div>
                <div class="thumbnails">
                    <div v-for="(t, i) in thumbSrc" :key="i" class="item">
                        <Thumbnail :src="t.src" :title="t.title"></Thumbnail>
                    </div>
                </div>
            </div>
            <div class="trending">
                <div class="category">急上昇</div>
                <div class="thumbnails">
                    <div v-for="(t, i) in thumbSrc" :key="i" class="item">
                        <Thumbnail :src="t.src" :title="t.title"></Thumbnail>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    .search-wrapper {
        height: 60px;
        padding: 15px 0;
        background-color: #FAFAFA;
        border-bottom: solid thin #ccc;

        .input-bar {
            width: 310px;
            margin-left: 3vw;
        }

        .tags {
            margin: 8px 0 0;
            overflow-x: scroll;
            display: flex;

            .tag {
                margin: 0 2px;
                display: inline-block;

                &:first-child {
                    margin-left: calc(3vw - 2px);
                }
            }
        }

        .no-tags {
            margin: 5px 0 0 3vw;
            font-size: 12px;
            color: #888;
        }

    }
    
    .thumbnail-wrapper {
        
        > div {
            margin-top: 20px;
            
            .category {
                margin-left: 3vw;
                margin-bottom: 5px;
            }
        }
    }

</style>


<script>
    import Thumbnail from '@/components/Thumbnail.vue'
    import InputBar from '@/components/InputBar.vue'
    import Chip from '@/components/Chip.vue'

    export default {
        name: 'home_sp',
        components: {
            Thumbnail,
            InputBar,
            Chip
        },
        data() {
            return {
                choicedTags: [
                    '量子力学', 'シュレディンガー方程式', 'クーパー対', 'aaaaaaaaaaaa'
                ],
                test: [],
                thumbSrc: [{
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
                ]
            }
        }
    }

</script>
