(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f32251e5"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},3494:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o=(a("034f"),a("2877")),i={},c=Object(o["a"])(i,r,s,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("data-list")],1)},f=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-overlay",{attrs:{show:t.overlay,rounded:"sm"}},[a("div",{attrs:{id:"app"}},[a("div",{staticClass:"view"},[a("b-button",{staticClass:"text-capitalize",class:["all"===t.data_type?"selected":""],on:{click:function(e){return t.change_source("all")}}},[t._v("All")]),a("b-button",{staticClass:"text-capitalize",class:["current"===t.data_type?"selected":""],on:{click:function(e){return t.change_source("current")}}},[t._v("Current")]),a("b-button",{staticClass:"text-capitalize",class:["history"===t.data_type?"selected":""],on:{click:function(e){return t.change_source("history")}}},[t._v("History")]),a("b-button",{staticClass:"text-capitalize",on:{click:t.getData}},[t._v("Load Data")]),a("h6",{staticClass:"tweet_date"},[t._v("Last Load : "+t._s(t.nowdate))])],1),"all"!=t.data_type&&"current"!=t.data_type||t.hasitems(t.jsondata.current)?t._e():a("div",[a("h3",{staticClass:"tweet_title list_title"},[t._v("Current")]),a("div",{staticClass:"tweet"},[t._v(" No data! ")])]),"all"!=t.data_type&&"current"!=t.data_type||!t.hasitems(t.jsondata.current)?t._e():a("div",[a("h3",{staticClass:"tweet_title list_title"},[t._v("Current")]),t._l(t.jsondata.current,(function(e){return a("div",{key:e.id,staticClass:"tweet"},[a("div",{staticClass:"box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:""}})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(e.service_name))]),t._v(" "),a("small",[t._v(t._s(e.service))])]),a("p",[t._v(t._s(e.summary))])])])])])])}))],2),"all"!=t.data_type&&"history"!=t.data_type||t.hasitems(t.jsondata.archive)?t._e():a("div",[a("h3",{staticClass:"tweet_title list_title"},[t._v("History")]),a("div",{staticClass:"tweet"},[t._v(" No data! ")])]),"all"!=t.data_type&&"history"!=t.data_type||!t.hasitems(t.jsondata.archive)?t._e():a("div",[a("h3",{staticClass:"tweet_title list_title"},[t._v("History")]),t._l(t.jsondata.archive,(function(e){return a("div",{key:e.id,staticClass:"tweet"},[a("div",{staticClass:"box"},[a("article",{staticClass:"media"},[a("b-row",[a("b-col",{staticClass:"content",attrs:{cols:"10"}},[a("p",[a("strong",[t._v(t._s(e.service_name))])]),a("p",[t._v("Service : "+t._s(e.service))]),a("p",[t._v("Date : "+t._s(t.$moment(e.date,"X").format("YYYY-MM-DD HH:mm:ss Z"))+" ")]),a("p",[t._v(t._s(e.summary))])]),a("b-col",{staticClass:"padding-left-0",attrs:{cols:"2"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:e.date,expression:"item.date"}],staticClass:"text-capitalize"},[a("b-icon",{attrs:{icon:"zoom-in"}})],1),a("b-modal",{attrs:{id:e.date,size:"md",scrollable:"","hide-header":"","ok-only":"",centered:"","header-bg-variant":"dark","header-text-variant":"light"}},[a("span",{attrs:{id:"modalhtml"},domProps:{innerHTML:t._s(e.description)}})])],1)],1)],1)])])}))],2),a("div",[a("a",{directives:[{name:"show",rawName:"v-show",value:t.visible_scroll,expression:"visible_scroll"}],staticClass:"ScrollOnTop btn btn-light",on:{click:t.ScrollOnTop}},[a("b-icon-arrow-up")],1)])])])},p=[],h=a("1da1"),m=(a("96cf"),a("d4ec")),_=a("bee2"),b=a("bc3a"),y=a.n(b),g="https://status.aws.amazon.com/data.json";y.a.defaults.headers.get["Content-Type"]="application/json;charset=utf-8";var w=function(){function t(){Object(m["a"])(this,t)}return Object(_["a"])(t,null,[{key:"get_data",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={url:g,method:"GET",Headers:{}},t.next=3,C(e);case 3:return this.data=t.sent,this.archive=this.data.archive.reverse(),this.current=this.data.current.reverse(),this.data_length=this.archive.length,console.log(this.archive),console.log(this.data_length),t.abrupt("return",{archive:this.archive,current:this.current});case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),t}();function C(t){return new Promise((function(e,a){y()(t).then((function(t){console.log("promise:",t.data),e(t.data)})).catch((function(t){console.log("network error:"+t),a("err")}))}))}var j={name:"DataList",components:{},data:function(){return{jsondata:{},data_type:"all",overlay:!1,nowdate:"",visible_scroll:!1}},mounted:function(){this.getData(),window.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollListener)},methods:{getData:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.toggle_overlay(!0),e.next=3,w.get_data();case 3:t.jsondata=e.sent,t.nowdate=t.date(),console.log("component:",t.jsondata),t.toggle_overlay(!1);case 7:case"end":return e.stop()}}),e)})))()},date:function(){return this.$moment().format("YYYY-MM-DD HH:mm:ss Z")},change_source:function(t){this.data_type=t,console.log(this.data_type)},hasitems:function(t){try{return t.length>0}catch(e){return!1}},toggle_overlay:function(t){this.overlay=t},ScrollOnTop:function(){window.scroll(0,0)},scrollListener:function(t){this.visible_scroll=window.pageYOffset>150}}},x=j,O=(a("c1f4"),Object(o["a"])(x,v,p,!1,null,null,null)),k=O.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Filter ")])},D=[],H={},P=H,T=Object(o["a"])(P,L,D,!1,null,null,null),E=(T.exports,{name:"Home",components:{DataList:k}}),S=E,M=Object(o["a"])(S,d,f,!1,null,null,null),Y=M.exports;n["default"].use(u["a"]);var z=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],$=new u["a"]({mode:"history",base:"",routes:z}),N=$,R=a("2f62");n["default"].use(R["a"]);var A=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J=a("5f5b"),Z=a("b1e0"),q=(a("f9e3"),a("2dd8"),a("a0d8"),a("2ead")),F=a.n(q);n["default"].config.productionTip=!1,n["default"].use(J["a"]),n["default"].use(Z["a"]),n["default"].use(F.a),new n["default"]({router:N,store:A,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,a){},a0d8:function(t,e,a){},c1f4:function(t,e,a){"use strict";a("3494")}});
//# sourceMappingURL=app.0cd28d52.js.map