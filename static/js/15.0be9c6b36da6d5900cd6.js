webpackJsonp([15],{AAkk:function(t,e){},Lvrc:function(t,e){},ignk:function(t,e,s){"use strict";Boolean,Boolean,Boolean;var i={name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("table",{staticClass:"vux-table",class:{"vux-table-bordered":this.fullBordered,"vux-table-no-cell-bordered":!this.cellBordered,"vux-table-no-content-bordered":!this.contentBordered}},[this._t("default")],2)},staticRenderFns:[]};var n=s("VU/8")(i,a,!1,function(t){s("AAkk")},null,null);e.a=n.exports},kUp6:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("ignk");var i=s("KXXb"),a=(i.a,{data:function(){return{topTitle:"添加收益地址",isSecurity:!1,DataList:[{title:"云算一号2期",coin:"BTC",address:"sdflkal2329suf34kkjfak"},{title:"云算一号2期",coin:"BTC",address:"sdflkal2329suf34kkjfak"},{title:"云算一号2期",coin:"BTC",address:"sdflkal2329suf34kkjfak"}]}},components:{security:i.a},methods:{isShow:function(){0==this.isSecurity?this.isSecurity=!0:this.isSecurity=!1},closeSecurity:function(){this.isSecurity=!1},ChangeAddress:function(){this.$router.push("/changeAddress")}}}),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address"},[s("div",{staticClass:"listBtu"},[s("div",{staticClass:"addressMain"},t._l(t.DataList,function(e){return s("cell-box",{key:e.index},[s("ul",[s("li",{staticClass:"addressTitle fontSize32"},[t._v(t._s(e.title))]),t._v(" "),s("li",{staticClass:"fontSize30"},[s("div",{staticClass:"fontCss"},[t._v("币种：")]),t._v(" "),s("span",[t._v(t._s(e.coin))])]),t._v(" "),s("li",{staticClass:"fontSize30"},[s("div",{staticClass:"fontCss"},[t._v("地址：")]),t._v(" "),s("span",[t._v(t._s(e.address))])])]),t._v(" "),s("div",{staticClass:"editor",on:{click:t.ChangeAddress}},[t._v("编辑")])])}),1),t._v(" "),s("div",{staticClass:"XBut"},[s("x-button",{staticClass:"butCss",attrs:{type:"warn",text:"添加"},nativeOn:{click:function(e){return t.isShow(e)}}})],1)]),t._v(" "),s("div",[s("security",{attrs:{isSecurity:t.isSecurity},on:{closeSecurity:t.closeSecurity}})],1)])},staticRenderFns:[]};var r=s("VU/8")(a,n,!1,function(t){s("Lvrc")},"data-v-1d27c77c",null);e.default=r.exports}});
//# sourceMappingURL=15.0be9c6b36da6d5900cd6.js.map