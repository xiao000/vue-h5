webpackJsonp([47],{EZwG:function(t,a){},sD6M:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("yHa3"),i=s.n(e),n={data:function(){return{topTitle:"设置",srcIcon:i.a,dataList:{phone:"",email:""}}},mounted:function(){this.getSelf()},methods:{getSelf:function(){var t=this,a={sign:t.$store.state.user.sign,access_token:t.$store.state.user.token};t.$request({method:"POST",url:t.$baseURL+"/personal/user-detail",data:t.$qs.stringify(a)}).then(function(a){if(""!=a.data.phone&&(t.dataList.phone=a.data.phone.replace(/(\d{3})(\d{4})(\d{4})/,"$1****$3")),""!=a.data.email&&String(a.data.email).indexOf("@")>0){var s=a.data.email.split("@"),e="";if(s[0].length>4){e=s[0].substr(0,3);for(var i=0;i<s[0].length-4;i++)e+="*"}else{e=s[0].substr(0,1);for(var n=0;n<s[0].length-1;n++)e+="*"}return t.dataList.email=e+"@"+s[1],t.dataList.email}}).catch(function(t){console.log(t)})},logout:function(){var t=this;t.$store.dispatch("UserLogout").then(function(){t.$router.push({path:"/"})})}}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"setUp"},[s("div",{staticClass:"cell"},[s("group",{attrs:{title:"基础信息"}},[""!=t.dataList.phone?[s("cell",{staticClass:"fontSize28",attrs:{title:"手机"}},[s("div",{staticClass:"badge-value"},[s("span",{staticClass:"hasData"},[t._v(t._s(t.dataList.phone))])])])]:[s("cell",{staticClass:"fontSize28",attrs:{title:"手机","is-link":!0,link:"/setUp/phone"}},[s("div",{staticClass:"badge-value"},[s("span",[s("img",{attrs:{src:t.srcIcon,alt:""}}),t._v("未绑定")])])])],t._v(" "),""!=t.dataList.email?[s("cell",{staticClass:"fontSize28",attrs:{title:"邮箱"}},[s("div",{staticClass:"badge-value"},[s("span",{staticClass:"hasData"},[t._v(t._s(t.dataList.email))])])])]:[s("cell",{staticClass:"fontSize28",attrs:{title:"邮箱","is-link":!0,link:"/setUp/email"}},[s("div",{staticClass:"badge-value"},[s("span",[s("img",{attrs:{src:t.srcIcon,alt:""}}),t._v("未绑定")])])])],t._v(" "),s("cell",{staticClass:"fontSize28",attrs:{title:"登录密码","is-link":!0,link:"/upDataLoginPwd"}},[s("div",{staticClass:"badge-value"})])],2)],1),t._v(" "),s("div",{staticClass:"but"},[s("x-button",{attrs:{type:"warn"},nativeOn:{click:function(a){return t.logout(a)}}},[t._v("退出登录")])],1)])},staticRenderFns:[]};var r=s("VU/8")(n,l,!1,function(t){s("EZwG")},null,null);a.default=r.exports}});
//# sourceMappingURL=47.b96edb1cdaf351c8de9e.js.map