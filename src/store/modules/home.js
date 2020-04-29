export default {
    namespaced: true,
    
    state: {
        video_count: 0,
        comment: '',
        videos: [
            {
                id: '',
                src: require('../../assets/猫は液体なのか.mp4'),
                title: '猫は液体なのか？物理学の盲点',
                image: 'https://cdn.vuetifyjs.com/images/john.jpg',
                name: '働きすぎたT細胞',
                n_likes: 1234,
                n_comments: 1234,
                this_audience: {
                    looked: false,
                    liked: false,
                    followed: false,
                }
            },
            {
                id: '',
                src: require('../../assets/動画.mp4'),
                title: '0は自然数ということにしたい',
                image: 'https://cdn.vuetifyjs.com/images/john.jpg',
                name: '働きすぎたT細胞',
                n_likes: 4321,
                n_comments: 4321,
                this_audience: {
                    looked: false,
                    liked: false,
                    followed: false,
                }
            }
        ],
        comments: [
            {
                image: 'https://cdn.vuetifyjs.com/images/john.jpg',
                name: '食べられそうなラー油',
                comment: '辛そうで辛くない、ちょっと辛いコメント'
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