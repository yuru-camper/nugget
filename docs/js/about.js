(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0220":function(t,s,e){"use strict";var a=e("16b9"),c=e.n(a);c.a},"16b9":function(t,s,e){},2766:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"trend"},[e("div",{staticClass:"search-wrapper"},[e("InputBar",{attrs:{placeholder:"検索",name:"keywords"}}),e("div",{staticClass:"categories"},t._l(t.categories,(function(s,a){return e("div",{key:a,on:{click:function(e){return t.clickCategory(s)}}},[e("div",{staticClass:"category"},[e("div",{staticClass:"item",class:{choiced:t.nowCategory===s}},[t._v(" "+t._s(s)+" ")])])])})),0)],1),"おすすめ"===t.nowCategory?e("div",{staticClass:"tag-wrapper"},[e("div",{staticClass:"wrapper-name"},[t._v(" タグ ")]),e("div",{staticClass:"tags"},t._l(t.choicedTags,(function(s,a){return e("div",{key:a,staticClass:"tag",on:{click:function(e){return t.clickTag(s)}}},[e("router-link",{attrs:{to:"/tagged-screen"}},[e("Chip",{attrs:{name:s}})],1)],1)})),0)]):t._e(),e("div",{staticClass:"thumbnail-wrapper"},t._l(t.recommends,(function(s,a){return e("div",{key:a},[e("div",{staticClass:"recommend-name"},[t._v(" "+t._s(s.head)+" ")]),e("div",{staticClass:"thumbnails"},t._l(s.thumbSrc,(function(t,s){return e("div",{key:s,staticClass:"item"},[e("Thumbnail",{attrs:{src:t.src,title:t.title}})],1)})),0)])})),0)])},c=[],i=e("2a5a"),r=e("dc96"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"chip"},[e("div",{staticClass:"text"},[t._v(" "+t._s(t.name)+" ")])])},o=[],l={props:{name:{type:String,require:!0,default:"tag"}}},d=l,u=(e("6f7c"),e("2877")),m=Object(u["a"])(d,n,o,!1,null,null,null),p=m.exports,g={name:"trend",components:{Thumbnail:i["a"],InputBar:r["a"],Chip:p},data:function(){return{keywords:"",categories:["おすすめ","社会科学","自然科学","哲学・心理学","言語","工学","歴史・地理","文学","芸術美術"],nowCategory:"おすすめ",choicedTags:["心理学","教育学","ディープラーニング","社会学","理学","英語","哲学","経済学","工学"],recommends:[{head:"おすすめ",thumbSrc:[{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"},{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"},{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"}]},{head:"人気",thumbSrc:[{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"},{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"},{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"}]},{head:"急上昇",thumbSrc:[{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"},{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"},{src:"https://cdn.vuetifyjs.com/images/cards/store.jpg",title:"ここにはスライドのタイトルが入ります"}]}]}},methods:{clickCategory:function(t){this.nowCategory=t},clickTag:function(t){this.$store.commit("searchByTag",t)}}},h=g,v=(e("0220"),Object(u["a"])(h,a,c,!1,null,null,null));s["default"]=v.exports},"6f7c":function(t,s,e){"use strict";var a=e("dbaf"),c=e.n(a);c.a},dbaf:function(t,s,e){}}]);