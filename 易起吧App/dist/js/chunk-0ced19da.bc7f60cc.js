(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ced19da"],{2359:function(t,a,n){},"4de4":function(t,a,n){"use strict";var i=n("23e7"),e=n("b727").filter,s=n("1dde"),o=n("ae40"),r=s("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},"9a0b":function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"myMenu"},[n("van-nav-bar",{attrs:{border:!1},scopedSlots:t._u([{key:"left",fn:function(){return[n("span",{staticClass:"iconfont icon-arrow-fine-up-copy",on:{click:t.goBack}},[t._v("歌单广场")])]},proxy:!0}])}),n("van-tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.titList,(function(a,i){return n("van-tab",{key:i,attrs:{title:a}},[n("div",{staticClass:"corcen"},t._l(t.menuList,(function(a,i){return n("div",{key:i,staticClass:"listItem",on:{click:function(n){return t.goPaths("Playlist",a.id)}}},[n("div",{staticClass:"itemImg"},[n("van-skeleton",{attrs:{round:!0,"avatar-shape":"square",avatar:"","avatar-size":"110px",row:3,loading:t.loading}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.coverImgUrl,expression:"val.coverImgUrl"}]})]),n("p",{staticClass:"Itembos"},[n("span",{staticClass:"iconfont icon-sanjiaoxing"}),n("span",{},[t._v(t._s(t._f("ff_wang")(a.playCount)))])])],1),n("van-skeleton",{attrs:{title:"","row-width":"100%",row:1,loading:t.loading}},[n("p",{staticClass:"itemText"},[t._v(t._s(a.name))])])],1)})),0)])})),1)],1)},e=[],s=(n("4de4"),n("d81d"),n("2359"),{name:"Menu",data:function(){return{menuList:[],titList:["全部","华语","欧美","古风","流行"],active:0,cat:null,loading:!0}},created:function(){this.ff_songList()},methods:{goBack:function(){this.$router.go(-1)},ff_songList:function(){var t=this;this.loading=!0,this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),this.cat=this.titList.filter((function(a,n){return t.active==n})),console.log(this.cat[0]),this.axios({url:"/top/playlist",params:{limit:30,cat:this.cat[0]}}).then((function(a){200==a.data.code&&(t.menuList=[],a.data.playlists.map((function(a){t.menuList.push(a)})),t.$toast.clear(),setTimeout((function(){t.loading=!1}),500),console.log(t.menuList))})).catch((function(t){console.log(t)}))},goPaths:function(t,a){this.$router.push({name:t,query:{id:a}})}},watch:{active:function(t,a){this.ff_songList()}},filters:{ff_wang:function(t,a){var n=null;return n=t/1e4,n>=1?(n="".concat(Math.floor(n),"万"),n):t}}}),o=s,r=n("2877"),c=Object(r["a"])(o,i,e,!1,null,"6be58dfb",null);a["default"]=c.exports},d81d:function(t,a,n){"use strict";var i=n("23e7"),e=n("b727").map,s=n("1dde"),o=n("ae40"),r=s("map"),c=o("map");i({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-0ced19da.bc7f60cc.js.map