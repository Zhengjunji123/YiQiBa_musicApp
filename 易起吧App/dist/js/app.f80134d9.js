(function(e){function n(n){for(var a,u,s=n[0],i=n[1],r=n[2],l=0,f=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,r||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,u=1;u<t.length;u++){var s=t[u];0!==o[s]&&(a=!1)}a&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},u={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-050b2acf":"5d734bd1","chunk-0ced19da":"bc7f60cc","chunk-1235d3b2":"2dcabe79","chunk-1b3e3094":"444f5003","chunk-22011380":"7193c874","chunk-27a683e6":"eb3f4163","chunk-2a68ca43":"26bff192","chunk-37b8682a":"f8ce5784","chunk-44d3daa2":"519fab3f","chunk-4da4b6bc":"ca4226c3","chunk-5f73c160":"0d6c7bb7","chunk-7c729cf6":"6615388c","chunk-7e79d13c":"62dff5aa","chunk-a23e7dce":"36034410","chunk-b743202e":"da63307b","chunk-e6e346ea":"7c6f9807"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-050b2acf":1,"chunk-0ced19da":1,"chunk-1b3e3094":1,"chunk-22011380":1,"chunk-27a683e6":1,"chunk-2a68ca43":1,"chunk-37b8682a":1,"chunk-44d3daa2":1,"chunk-4da4b6bc":1,"chunk-5f73c160":1,"chunk-7c729cf6":1,"chunk-7e79d13c":1,"chunk-a23e7dce":1,"chunk-b743202e":1,"chunk-e6e346ea":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-050b2acf":"01b2511b","chunk-0ced19da":"4a218bff","chunk-1235d3b2":"31d6cfe0","chunk-1b3e3094":"42cccd6b","chunk-22011380":"452af15f","chunk-27a683e6":"ac6c5096","chunk-2a68ca43":"fcafc6f5","chunk-37b8682a":"b566262d","chunk-44d3daa2":"aea2bc69","chunk-4da4b6bc":"de38cc5b","chunk-5f73c160":"ff505a75","chunk-7c729cf6":"e1058356","chunk-7e79d13c":"81ce6a8f","chunk-a23e7dce":"25bd30aa","chunk-b743202e":"f603d8d5","chunk-e6e346ea":"ada5f016"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var r=c[s],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===a||l===o))return n()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){r=f[s],l=r.getAttribute("data-href");if(l===a||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var a=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete u[e],d.parentNode.removeChild(d),t(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){u[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=c);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var f=new Error;r=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+u+")",f.name="ChunkLoadError",f.type=a,f.request=u,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var f=0;f<r.length;f++)n(r[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"30c0":function(e,n,t){"use strict";t("541e")},"494c":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.music.isFlash,expression:"music.isFlash"}],staticClass:"myFlash"},[t("img",{attrs:{src:e.music.imgUrl},on:{click:function(n){return e.goPages("Song",e.music.id)}}}),t("div",{staticClass:"delis"},[t("p",[e._v(e._s(e.music.name))]),t("p",[e._v("相信 这就是音乐的力量")])]),t("span",{staticClass:"iconfont",class:e.music.isPlay?"icon-pause":"icon-bofangjian",on:{click:e.control}}),t("van-cell",{on:{click:e.showPopup}},[[t("span",{staticClass:"iconfont icon-bofangliebiao"})]],2),t("audio",{ref:"myAudio",attrs:{src:e.music.url}}),t("van-popup",{model:{value:e.show,callback:function(n){e.show=n},expression:"show"}},[t("van-icon",{attrs:{name:"cross"},on:{click:e.ff_show}}),t("div",{staticClass:"bodys"},[t("ul",e._l(e.newQueue,(function(n,a){return t("li",{key:a,staticClass:"danSong"},[t("span",[e._v(e._s(a-0+1))]),t("div",{staticClass:"gequ",on:{click:function(n){return e.ff_queueIndex(a)}}},[t("p",[e._v(e._s(n.songName))]),t("p",[t("span",[e._v("独家")]),t("span",[e._v(e._s(n.autName))]),t("span",[e._v("-"+e._s(n.songBrief))])])]),t("span",{staticClass:"iconfont icon-iconfontlajitong",on:{click:function(t){return e.rovemItem(a,n.songName)}}})])})),0)])],1)],1)},u=[],o=(t("a434"),t("d3b7"),t("3ca3"),t("ddb0"),{name:"Flash",data:function(){return{icons:"icon-bofangjian",duration:0,isCanplay:!0,show:!1,newQueue:[]}},created:function(){console.log("这",JSON.parse(sessionStorage.getItem("queue"))),this.newQueue=JSON.parse(sessionStorage.getItem("queue"))},methods:{control:function(){this.ff_isPlay(!this.music.isPlay),console.log(this.music.isPlay,"Flash"),this.music.isPlay?this.play():this.pause()},play:function(){this.$refs.myAudio.play()},pause:function(){this.$refs.myAudio.pause()},goPages:function(e,n){this.show=!1,this.$router.push({name:e,query:{id:n}})},ff_isPlay:function(e){this.$store.dispatch("gaiPaly",e)},ff_myAudio:function(e){this.$store.dispatch("gaiAudio",e)},ff_queueIndex:function(e){var n=this;console.log("flash中的序号",e),this.$store.dispatch("gaiIndex",e).then((function(e){console.log(e[n.queueIndex]),e[n.queueIndex]&&n.ff_songs(e[n.queueIndex].songId,e[n.queueIndex].songName,e[n.queueIndex].songUrl)}))},ff_songs:function(e,n,t){var a=this;this.axios({url:"/song/url",method:"GET",params:{id:e}}).then((function(u){if(console.log(u),200==u.data.code){var o={};o.name=n,o.url=u.data.data[0].url,o.imgUrl=t,o.id=e,o.isFlash=!0,o.isPlay=!0,a.musicObj=o,a.$store.dispatch("gaiMusic",a.musicObj)}})).catch((function(e){console.log(e)}))},showPopup:function(){if(this.newQueue){this.show=!0;var e=JSON.parse(sessionStorage.getItem("queue"));e&&(this.newQueue=this.queue)}else this.$toast("请添加歌曲到播放队列")},ff_show:function(){this.show=!1},ff_a:function(){this.control(),this.ff_queueIndex(1)},rovemItem:function(e,n){var t=this;this.$dialog.confirm({message:"确认将“".concat(n,"”移除")}).then((function(){t.queue.splice(e,1);window.sessionStorage.setItem("queue",JSON.stringify(t.queue)),t.$toast("移除成功"),t.queue.length<=0&&(t.show=!1)})).catch((function(){}))}},computed:{music:function(){return this.$store.state.song},queue:function(){return this.$store.state.queue},queueIndex:function(){return this.$store.state.queueIndex}},watch:{music:function(e,n){var t=this;if(e.num++,1==e.num){var a=function(){return new Promise((function(e,n){e()}))};Promise.all([a]).then((function(n){console.log(111),t.$refs.myAudio.oncanplay=function(){console.log("121"),t.ff_myAudio(t.$refs.myAudio),t.play()},setTimeout((function(){t.$refs.myAudio.removeEventListener("ended",t.ff_a),t.$refs.myAudio.addEventListener("ended",t.ff_a)}),1e3),e.num=0}))}console.log("false中的music对象",e),e.isFlash&&console.log("出现了",e.isFlash)},queue:function(e){this.newQueue=e}}}),c=o,s=(t("30c0"),t("2877")),i=Object(s["a"])(c,a,u,!1,null,"8af0950c",null);n["a"]=i.exports},"541e":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("99af"),t("fb6a"),t("66b9");var a=t("b650"),u=(t("5246"),t("6b41")),o=(t("c3a6"),t("ad06")),c=(t("4056"),t("44bf")),s=(t("38d5"),t("772a")),i=(t("be7f"),t("565f")),r=(t("8a58"),t("e41f")),l=(t("0653"),t("34e9")),f=(t("c194"),t("7744")),d=(t("e7e5"),t("d399")),h=(t("537a"),t("ac28")),m=(t("a52c"),t("2ed4")),g=(t("7844"),t("5596")),p=(t("4b0a"),t("2bb1")),b=(t("66cf"),t("343b")),v=(t("da3c"),t("0b33")),k=(t("bda7"),t("5e46")),y=(t("9cb7"),t("66fd")),w=(t("93ac"),t("bb33")),I=(t("ef6f"),t("82a8")),q=(t("591c"),t("7713")),_=(t("f06a"),t("20fb")),x=(t("4467"),t("c36e")),S=(t("3c32"),t("417e")),P=(t("a909"),t("3acc")),A=(t("be39"),t("efa0")),O=(t("3df5"),t("2830")),N=(t("0ec5"),t("21ab")),$=(t("d356"),t("48bd")),F=(t("0500"),t("4feb")),j=(t("b000"),t("1a23")),C=(t("869a"),t("6869")),E=(t("db2c"),t("1125")),M=(t("acb7"),t("67bb")),L=(t("f1dc"),t("6e47")),T=(t("e930"),t("8f80")),J=(t("5f1a"),t("a3e2")),Q=(t("e17f"),t("2241")),R=(t("ac1e"),t("543e")),U=(t("2b28"),t("9ed2")),B=(t("afd4"),t("ca19")),D=(t("414a"),t("7a82")),H=(t("9e6b"),t("c41f")),G=(t("8fec"),t("7bd9")),K=(t("1075"),t("f600")),V=(t("5fe4"),t("8ad4")),z=(t("5852"),t("d961")),W=(t("ab71"),t("58e6")),X=(t("0cc8"),t("3104")),Y=(t("a44c"),t("e27c")),Z=(t("4ddd"),t("9f14")),ee=(t("0209"),t("7d5e")),ne=(t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("2b0e")),te=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view"),t("Flash")],1)},ae=[],ue=(t("a342"),t("494c")),oe={name:"App",data:function(){return{Pages:[]}},computed:{},components:{Flash:ue["a"]}},ce=oe,se=(t("7c55"),t("2877")),ie=Object(se["a"])(ce,te,ae,!1,null,null,null),re=ie.exports,le=(t("d3b7"),t("8c4f"));ne["a"].use(le["a"]);var fe=[{path:"/login",name:"Login",component:function(){return t.e("chunk-5f73c160").then(t.bind(null,"a55b"))}},{path:"/phonelogin",name:"Phonelogin",component:function(){return t.e("chunk-7c729cf6").then(t.bind(null,"5cbd"))}},{path:"/passlogin",name:"Passlogin",component:function(){return t.e("chunk-44d3daa2").then(t.bind(null,"971d"))}},{path:"/recom",name:"Recom",component:function(){return t.e("chunk-1b3e3094").then(t.bind(null,"e87c"))}},{path:"/fm",name:"Fm",component:function(){return t.e("chunk-1235d3b2").then(t.bind(null,"ef6e"))}},{path:"/song",name:"Song",component:function(){return t.e("chunk-7e79d13c").then(t.bind(null,"8dc3"))}},{path:"/playlist",name:"Playlist",component:function(){return t.e("chunk-b743202e").then(t.bind(null,"2059"))}},{path:"/ranking",name:"Ranking",component:function(){return t.e("chunk-2a68ca43").then(t.bind(null,"4320"))}},{path:"/seek",name:"Seek",component:function(){return t.e("chunk-22011380").then(t.bind(null,"4f1d"))}},{path:"/detailsMv",name:"DetailsMv",component:function(){return t.e("chunk-37b8682a").then(t.bind(null,"f522"))}},{path:"/menu",name:"Menu",component:function(){return t.e("chunk-0ced19da").then(t.bind(null,"9a0b"))}},{path:"/songlist",name:"Songlist",component:function(){return t.e("chunk-27a683e6").then(t.bind(null,"3af7"))}},{path:"/main",name:"Main",component:function(){return t.e("chunk-050b2acf").then(t.bind(null,"cd56"))},children:[{path:"/me",name:"Me",component:function(){return t.e("chunk-a23e7dce").then(t.bind(null,"0a99"))}},{path:"/find",name:"Find",component:function(){return t.e("chunk-4da4b6bc").then(t.bind(null,"3afa"))}},{path:"/video",name:"Video",component:function(){return t.e("chunk-e6e346ea").then(t.bind(null,"81a8"))}}]},{path:"*",redirect:function(e){return{name:"Login"}}}],de=new le["a"]({routes:fe}),he=de,me=(t("4160"),t("159b"),t("2f62"));ne["a"].use(me["a"]);var ge=new me["a"].Store({state:{song:{isFlash:!1,myAudio:null,name:null,url:null,imgUrl:null,id:null,icons:"icon-pause"},queue:[],queueIndex:0,lyric:{C_pos:0,lineNo:0},SirenRecom:[]},mutations:{gaiSirenRecom:function(e,n){e.SirenRecom=n,console.log("find的新歌推荐",e.SirenRecom)},gaiMusic:function(e,n){var t={};t=n,t.num=0,t.duration=0,t.timeDisplay=0,t.currentTimes="",t.myAudio=null,e.song=t,window.sessionStorage.setItem("song",JSON.stringify(e.song)),console.log("音乐对象",e.song)},gaiPaly:function(e,n){e.song.isPlay=n,console.log("公共的isPlay",n)},gaiAudio:function(e,n){function t(e){var n=document.createElement("div");n.appendChild(e.cloneNode(!0));var t=n.innerHTML;return n=e=null,t}e.song.myAudio=n;var a=t(n);e.song.myAudioStr=a,window.sessionStorage.setItem("song",JSON.stringify(e.song)),console.log(e.song.myAudio,"音乐播放器")},gaiIsflash:function(e,n){e.song.isFlash=n,console.log("公共的isFlash",e.song.isFlash)},gaiQueue:function(e,n){var t=JSON.parse(sessionStorage.getItem("queue"));console.log(t,n),console.log(1231),sessionStorage.setItem("queue",JSON.stringify(n)),e.queue=n},gaiIndex:function(e,n){console.log("之前的播放序号",n,e.queueIndex),e.queueIndex=e.queueIndex+n,e.queueIndex=e.queueIndex<0?e.queue.length-1:e.queueIndex,e.queueIndex=e.queueIndex>e.queue.length-1?0:e.queueIndex,console.log("公共数据index",n,e.queueIndex)}},actions:{gaiPaly:function(e,n){var t=e.commit,a=e.state;console.log(a.SirenRecom),a.SirenRecom.forEach((function(e){e.forEach((function(e){e.id==a.song.id?e.isItemPlay=!n:e.isItemPlay=!0}))})),t("gaiPaly",n)},gaiAudio:function(e,n){var t=e.commit,a=e.state;t("gaiAudio",n),a.song.duration=n.duration},gaiIsflash:function(e,n){var t=e.commit,a=e.state;t("gaiIsflash",n),console.log("公共的isFlash_02",a)},gaiLyric:function(e,n){var t=e.state;t.lyric.lineNo=t.lyric.lineNo+n},gaiQueue:function(e,n){var t=e.commit,a=(e.dispatch,e.state);return t("gaiQueue",n),t("gaiIsflash",!0),t("gaiPaly",!0),console.log(a.song.isFlash,"这"),a.queue},gaiMusic:function(e,n){var t=e.commit;e.state;t("gaiMusic",n)},gaiIndex:function(e,n){var t=e.commit,a=e.state;return console.log("公共数据index",n),t("gaiIndex",n),a.queue}},modules:{}}),pe=(t("499a"),t("bc3a")),be=t.n(pe),ve=t("2106"),ke=t.n(ve);ne["a"].use(a["a"]).use(u["a"]).use(o["a"]).use(c["a"]).use(s["a"]).use(i["a"]).use(r["a"]).use(f["a"],l["a"]).use(d["a"]).use(h["a"]).use(m["a"]).use(g["a"]).use(p["a"]).use(b["a"]).use(v["a"]).use(k["a"]).use(y["a"]).use(w["a"]).use(I["a"]).use(q["a"]).use(_["a"]).use(x["a"]).use(S["a"]).use(P["a"]).use(A["a"]).use(O["a"]).use(N["a"]).use($["a"]).use(F["a"]).use(j["a"]).use(C["a"]).use(E["a"]).use(M["a"]).use(L["a"]).use(T["a"]).use(J["a"]).use(Q["a"]).use(R["a"]).use(U["a"]).use(B["a"]).use(D["a"]).use(H["a"]).use(G["a"]).use(K["a"]).use(V["a"]).use(z["a"]).use(W["a"]).use(X["a"]).use(Y["a"]).use(Z["a"]).use(ee["a"]),be.a.interceptors.request.use((function(e){if("post"==e.method){var n="";for(var t in e.data)n+="".concat(t,"=").concat(e.data[t],"&");e.data=n.slice(0,-1)}return e})),be.a.defaults.baseURL="http://127.0.0.1:3000",ne["a"].prototype.useId=window.localStorage.getItem("useId"),ne["a"].config.productionTip=!1,ne["a"].use(ke.a,be.a),ne["a"].prototype.$store=ge.state,new ne["a"]({router:he,store:ge,render:function(e){return e(re)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";t("2395")},a342:function(e,n,t){}});
//# sourceMappingURL=app.f80134d9.js.map