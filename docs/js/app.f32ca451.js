(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2337:function(t,e,n){"use strict";n("db62")},4251:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row  listcard",attrs:{id:"listcard"}},[n("nav",{staticClass:"navbar navbar-expand-md justify-content-between navbar-dark fixed-top bg-dark"},[n("a",{staticClass:"navbar-brand",attrs:{routerLink:"/"}},[t._v("Usuarios GitHub"),n("span",{staticClass:"text-orange"},[t._v("APP")]),t.searcherStatus?n("span",{staticClass:"success"},[t._v(" Success: "+t._s(t.searcherStatus.success))]):t._e(),t.searcherStatus?n("span",{staticClass:"error"},[t._v(" Fails: "+t._s(t.searcherStatus.fails))]):t._e()]),n("form",{staticClass:"form-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nickname,expression:"nickname"}],attrs:{type:"text",name:"gh-username",placeholder:"Search for a GitHub username......"},domProps:{value:t.nickname},on:{keydown:function(e){return e.type.indexOf("key")||13===e.keyCode?t.submit(e):null},input:function(e){e.target.composing||(t.nickname=e.target.value)}}}),n("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"},on:{click:t.submit}},[t._v("Search")])])]),t._l(t.info,(function(e){return n("div",{staticClass:"card text-align card"},[n("img",{staticClass:"img-fluid card-image",attrs:{src:e.avatar_url,alt:"Card image cap"}}),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-text"},[t._v(t._s(e.login))]),n("router-link",{staticClass:"btn",attrs:{to:{path:"/single/"+e.login+"/false"}}},[t._v("User Detail")])],1)])}))],2)},o=[],c=n("bc3a"),u=n.n(c),l={name:"Home",data:function(){return{info:null,nickname:"",searcherStatus:null}},mounted:function(){var t=this;this.searcherStatus=this.$store.state.searcher,u.a.get("https://api.github.com/users").then((function(e){return t.info=e.data})).catch((function(t){return console.log(t)}))},methods:{submit:function(){var t=this.nickname,e="/single/"+t+"/true";this.$router.push(e)}}},f=l,d=(n("dbc2"),n("2877")),p=Object(d["a"])(f,i,o,!1,null,null,null),h=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row  listcard",attrs:{id:"listcard"}},[n("div",{staticClass:"card text-align card"},[t.info.avatar_url?n("img",{staticClass:"img-fluid card-image",attrs:{src:t.info.avatar_url,alt:"Card image cap"}}):t._e(),n("div",{staticClass:"card-body"},[t.info.login?n("h4",{staticClass:"card-text"},[t._v(t._s(t.info.login))]):t._e(),t.info.followers?n("p",{staticClass:"card-text-p"},[t._v(t._s(t.info.followers)+" "),n("span",[t._v("Follower")])]):t._e(),t.info.following?n("p",{staticClass:"card-text-p"},[t._v(t._s(t.info.following)+" "),n("span",[t._v(" Following")])]):t._e(),n("router-link",{staticClass:"btn",attrs:{to:{path:"/"}}},[t._v("Back")])],1)])])])},v=[],b=(n("96cf"),n("1da1")),g={name:"SingleUser",data:function(){return{info:{login:!1},profile:null,searcher:!1}},mounted:function(){var t=this;this.profile=this.$route.params.id,this.searcher="true"==this.$route.params.searcher,u.a.get("https://api.github.com/users/".concat(this.profile)).then((function(e){return t.info=e.data})).then(this.submit).catch(this.fail)},methods:{submit:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.searcher&&t.info.login&&t.$store.state.searcher.success++;case 1:case"end":return e.stop()}}),e)})))()},fail:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.state.searcher.fails++,t.info.login="Usuario no encontrado";case 2:case"end":return e.stop()}}),e)})))()}}},_=g,w=(n("2337"),Object(d["a"])(_,m,v,!1,null,null,null)),y=w.exports,C={name:"app",components:{SingleUser:y,Home:h},data:function(){return{username:""}}},x=C,k=(n("5c0b"),Object(d["a"])(x,a,s,!1,null,null,null)),O=k.exports,S=n("8c4f");r["a"].use(S["a"]);var j=[{path:"/",name:"home",component:h},{path:"/single/:id/:searcher",name:"detail",component:y}],P=new S["a"]({mode:"history",base:"/",routes:j}),$=P,U=n("2f62");r["a"].use(U["a"]);var H=new U["a"].Store({state:{searcher:{success:0,fails:0}},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:$,store:H,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},db62:function(t,e,n){},dbc2:function(t,e,n){"use strict";n("4251")}});
//# sourceMappingURL=app.f32ca451.js.map