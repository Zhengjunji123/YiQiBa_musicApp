(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27a683e6"],{"15df":function(s,t,n){},"3af7":function(s,t,n){"use strict";n.r(t);var a=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"mySonglist"},[n("div",{staticClass:"imgs01"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.artist.picUrl,expression:"artist.picUrl"}]})]),n("van-nav-bar",{attrs:{border:!1},scopedSlots:s._u([{key:"left",fn:function(){return[n("div",[n("span",{staticClass:"iconfont icon-arrow-fine-up-copy",on:{click:function(t){return t.stopPropagation(),s.goBack(t)}}},[s._v("歌手")])])]},proxy:!0},{key:"right",fn:function(){return[n("div",[n("span",{staticClass:"iconfont icon-fangda",on:{click:function(t){return s.goPack("Seek")}}}),n("span",{staticClass:"iconfont icon-sandian"})])]},proxy:!0}])}),n("div",{staticClass:"singes"},[n("div",{staticClass:"img02"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.artist.picUrl,expression:"artist.picUrl"}]}),n("p",{staticClass:"p1"},[n("span",{staticClass:"iconfont icon-sanjiaoxing"}),n("span",{staticClass:"ren"},[s._v(s._s(s._f("ff_score")(s.scores)))])])]),n("div",{staticClass:"singesBody"},[n("p",[n("span",{staticClass:"iconfont icon-arrow-right"},[s._v(s._s(s.artist.name))])]),n("p",[s._v(s._s(s.artist.briefDesc))])])]),n("div",{staticClass:"box"},[n("div",{staticClass:"boxHeard"},[n("span",{staticClass:"iconfont icon-bofangjian1",on:{click:s.ff_queue}}),n("div",{staticClass:"heardBodys"},[n("span",[s._v("播放全部")]),n("span",[s._v("(共"+s._s(s.hotSongss.length)+"首)")])])]),n("div",[n("ul",s._l(s.hotSongss,(function(t,a){return n("li",{key:a,staticClass:"boxItem",on:{click:function(n){return s.ff_songs(t.songId,t.songName,t.songUrl,t.autName,!0)}}},[n("span",[s._v(s._s(a+1))]),n("div",{staticClass:"itemBody"},[n("p",[s._v(s._s(t.songName))]),n("p",{staticClass:"cen"},[n("span",{staticClass:"x1 xx"},[s._v("独家")]),n("span",{staticClass:"x2 xx"},[s._v("SQ")]),n("span",[s._v(s._s(t.autName))])])]),n("span",{staticClass:"iconfont icon-sandian"})])})),0)])])],1)},i=[],o=(n("4160"),n("a15b"),n("fb6a"),n("a434"),n("b0c0"),n("159b"),n("15df"),{name:"Songlist",data:function(){return{ids:null,scores:null,artist:{},hotSongss:[]}},created:function(){this.ids=this.$route.query.id,this.scores=this.$route.query.score,console.log(this.scores),this.$toast.loading({message:"加载中",forbidClick:!0,loadingType:"spinner"}),this.ff_singer()},computed:{queue:function(){return this.$store.state.queue},music:function(){return this.$store.state.song},queueIndex:function(){return this.$store.state.queueIndex}},methods:{ff_singer:function(){var s=this;this.axios({url:"/artists",params:{id:this.ids}}).then((function(t){200==t.data.code&&(console.log(t.data.hotSongs),t.data.hotSongs.forEach((function(t){var n=[];console.log(t.ar),t.ar.forEach((function(s){n.push(s.name)}));var a=n.join("/");console.log(a),s.hotSongss.push({songName:t.name,songId:t.id,songUrl:t.al.picUrl,autName:a,songBrief:""})})),s.artist=t.data.artist)})).catch((function(s){console.log(s)}))},goBack:function(){this.$router.go(-1)},ff_songs:function(s,t,n,a){var i=this,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],e=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";console.log(s,t,n),this.axios({url:"/song/url",method:"GET",params:{id:s}}).then((function(c){if(console.log(c),200==c.data.code){var r={};if(r.name=t,r.url=c.data.data[0].url,r.imgUrl=n,r.id=s,r.isFlash=!0,r.isPlay=!0,i.musicObj=r,i.$store.dispatch("gaiMusic",i.musicObj),o){var u=!0;if(i.queue.forEach((function(o,c){o.songId==s&&(u=!1,i.queue.splice(c,1),i.queue.unshift({songId:s,songName:t,songUrl:n,autName:a,songBrief:e}))})),u){i.queue.unshift({songId:s,songName:t,songUrl:n,autName:a,songBrief:e});var l=i.queue.slice(0,30);i.$store.dispatch("gaiQueue",l)}sessionStorage.setItem("queue",JSON.stringify(i.queue)),i.isSingle=!1}}})).catch((function(s){console.log(s)}))},ff_queue:function(){var s=this;this.$toast("已加载到播放队列");for(var t=[],n=0;n<30;n++)t.push(this.hotSongss[n]);this.$store.dispatch("gaiQueue",t).then((function(t){s.ff_songs(t[s.queueIndex].songId,t[s.queueIndex].songName,t[s.queueIndex].songUrl)}))},goPack:function(s){this.$router.push({name:s})}},filters:{ff_score:function(s){var t="".concat(Math.floor(s/1e4),"万");return t}}}),e=o,c=n("2877"),r=Object(c["a"])(e,a,i,!1,null,"10ad8043",null);t["default"]=r.exports},a15b:function(s,t,n){"use strict";var a=n("23e7"),i=n("44ad"),o=n("fc6a"),e=n("a640"),c=[].join,r=i!=Object,u=e("join",",");a({target:"Array",proto:!0,forced:r||!u},{join:function(s){return c.call(o(this),void 0===s?",":s)}})},b0c0:function(s,t,n){var a=n("83ab"),i=n("9bf2").f,o=Function.prototype,e=o.toString,c=/^\s*function ([^ (]*)/,r="name";a&&!(r in o)&&i(o,r,{configurable:!0,get:function(){try{return e.call(this).match(c)[1]}catch(s){return""}}})}}]);
//# sourceMappingURL=chunk-27a683e6.eb3f4163.js.map