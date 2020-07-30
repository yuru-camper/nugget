export default {
    namespaced: true,

    state: {
        search_tag: '',
        search_flag: false,
        keywords: '',
        now_category: 'おすすめ',
        categories: [
            'おすすめ',
            '社会科学',
            '自然科学',
            '哲学・心理学',
            '言語',
            '工学',
            '歴史・地理',
            '文学',
            '芸術・美術'
        ],
        choiced_tags: [
            '心理学', '教育学', 'ディープラーニング', '社会学', '理学', '英語', '哲学', '経済学', '工学'
        ],
        history: [
            '心理学', '教育学', 'ディープラーニング', '社会学', '理学', '英語', '哲学', '経済学', '工学'
        ],
        pred_words: [
            'apple',
            'gorilla',
            'rap',
            'りんご'
        ],
        recommends: [
            {
                head: 'おすすめ',
                thumbSrc: [
                    {
                        src: require('@/assets/thumbs/sonshi.jpg'),
                        title: '孫氏はぶっちゃけどこがすごい！？'
                    },
                    {
                        src: require('../../assets/thumbs/yousho.png'),
                        title: '幼少期の自然体験と科学への関心'
                    },
                    {
                        src: require('../../assets/thumbs/saigo.jpg'),
                        title: '教えて！西郷さん'
                    },
                ]
            },
            {
                head: '人気',
                thumbSrc: [
                    {
                        src: require('../../assets/thumbs/flow.png'),
                        title: 'ここにはスライドのタイトルが入ります'
                     },
                    {
                        src: require('../../assets/thumbs/shizensu.png'),
                        title: 'ここにはスライドのタイトルが入ります'
                    },
                    {
                        src: require('../../assets/thumbs/napo.jpg'),
                        title: 'ここにはスライドのタイトルが入ります'
                    },
               ]
             },
            {
                head: '急上昇',
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
                ]
             }
        ]
    },
    mutations: {
        search_by_tag(state, clicked_tag) {
            state.search_tag = clicked_tag
        },
        cancel_search(state) {
            state.keywords = ''
            state.search_flag = false
        },
        will_search(state) {
            state.search_flag = true
        },
        switch_category(state, category) {
            state.now_category = category
        },
        input_keywords(state, keywords) {
            state.keywords = keywords
        }
    }
}
