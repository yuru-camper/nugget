export default {
    namespaced: true,
    
    state: {
        video_count: 0,
        comment: '',
        videos: [
            {
                videoID: '',
                userID: 'tsibo',
                category: '自然科学',
                tags: ['物理', '定義', 'レオロジー', '非ニュートン流体', 'cat'],
                src: require('../../assets/猫は液体なのか.mp4'),
                title: '猫は液体なのか？物理学の盲点',
                image: 'https://cdn.vuetifyjs.com/images/john.jpg',
                name: '働きすぎたT細胞',
                text: '形あるものはやがて崩れる。それは猫も例外ではない。暑い夏の昼下がり。風鈴と蝉が、北風と太陽のように争っている。童話の通り、勝ったのは太陽の方だ。僕は滝にならんと流れ出る汗を抑えようと図書館に涼みに出かける。悲しいかな、僕の家にはクーラーがないのだ。ふと見やると三色の毛むくじゃらが日陰に溶けていた。猫だ！普段は凛として人間など興味ないような態度をとる彼らも、この暑さにはだらけてしまうらしい。働かなくても食えるなんて羨ましいなあ、なんて溶けた頭で考えていると、突然、ひらめいた。「猫は液体なのではないだろうか」。このとんでもない疑問が、僕の夏休みのテーマになった。',
                n_likes: 1234,
                n_comments: 1234,
                n_views: 1234,
                this_audience: {
                    looked: false,
                    liked: false,
                    followed: false,
                }
            },
            {
                videoID: '',
                userID: 'tsibo',
                category: '自然科学',
                tags: ['数学', '定義', '基礎数学', 'zfc'],
                src: require('../../assets/動画.mp4'),
                title: '0は自然数ということにしたい',
                image: 'https://cdn.vuetifyjs.com/images/john.jpg',
                name: '働かないB細胞',
                text: '自然数ってなんじゃらほい。',
                n_likes: 4321,
                n_comments: 4321,
                n_views: 4321,
                this_audience: {
                    looked: false,
                    liked: false,
                    followed: false,
                }
            }
        ],
        followed: false,
        comments: [
            {
                image: 'https://cdn.vuetifyjs.com/images/john.jpg',
                name: '食べられそうなラー油',
                comment: '辛そうで辛くない、ちょっと辛いコメント',
                id: 'karame'
            },
            {
                image: 'https://cdn.vuetifyjs.com/images/john.jpg',
                name: '食べられそうなラー油',
                comment: '辛そうで辛くない、ちょっと辛いコメント',
                id: 'karame'
            }
        ],
        recommend_thumbs: [
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
            }
        ]
    },
    mutations: {
        next_slide(state) {
            state.video_count++
            state.video_count %= state.videos.length
        },
        prev_slide(state) {
            if (state.video_count > 0) {
                state.video_count--
                state.video_count %= state.videos.length - 1
            } else if (state.video_count <= 0) {
                state.video_count = state.videos.length - 1
            }
        },
        toggle_follow(state) {
            state.videos[state.video_count].this_audience.followed = !state.videos[state.video_count].this_audience.followed
        },
        post_comment(state, comment) {
            state.comment = comment
        },
        click_like(state) {
            let liked = state.videos[state.video_count].this_audience.liked
            state.videos[state.video_count].this_audience.liked = !liked
            
            if (liked) {
                state.videos[state.video_count].n_likes--
            } else {
                state.videos[state.video_count].n_likes++
            }
        }
    }
}