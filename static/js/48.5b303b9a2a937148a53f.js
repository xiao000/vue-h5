webpackJsonp([48],{"T/ER":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("ZDmO"),r=e.n(a),n={data:function(){return{successImg:r.a,num:3,title:this.$route.params.title,page:this.$route.params.page,RouterUrl:this.$route.params.RouterUrl}},props:{},mounted:function(){var t=this,s=setInterval(function(){t.num<=1?(clearInterval(s),t.$router.push(t.RouterUrl)):t.num--},1e3)}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"success"},[e("div",{staticClass:"succeedMain"},[e("h2",{staticClass:"successTxt fontSize56"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"successImg"},[e("img",{attrs:{src:t.successImg,alt:"成功"}})]),t._v(" "),e("span",{staticClass:"successBase fontSize30"},[e("i",{staticClass:"count"},[t._v(t._s(t.num))]),t._v("秒后进入\n      "),e("router-link",{staticClass:"routerHome",attrs:{to:t.RouterUrl}},[t._v(t._s(t.page))])],1)])])},staticRenderFns:[]};var c=e("VU/8")(n,u,!1,function(t){e("eL++")},"data-v-043f4ba9",null);s.default=c.exports},"eL++":function(t,s){}});
//# sourceMappingURL=48.5b303b9a2a937148a53f.js.map