webpackJsonp([13],{"71JJ":function(t,i,s){t.exports=s.p+"static/img/yishouwan.08e72fd.png"},"734Y":function(t,i){},FTcw:function(t,i){},"NPM/":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("71JJ"),e=s.n(a),n=s("G/2H"),o=s.n(n),c=s("YASH"),r=s.n(c),l={data:function(){return{Icon:e.a,selected:0,loading:o.a,noConten:r.a,isShow:!0,noDate:!1,page:1,pageSize:10,dataList:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this,i={type:"1",offset:t.page,limit:10};t.$request({method:"POST",url:"/goods/goods-list",data:t.$qs.stringify(i)}).then(function(i){0==i.code?(t.isShow=!1,i.data.forEach(function(t){t.tag=t.tag.split(",")}),1==t.page?t.dataList=i.data:t.dataList=t.dataList.concat(i.data)):t.noDate=!0}).catch(function(t){console.log(t)})},infinite:function(t){var i=this;this.noDate?this.$refs.myscroller.finishInfinite(!0):setTimeout(function(){i.page++,i.getList(),t()},1e3)},refresh:function(){console.log("refresh"),this.page=1,this.noDate=!1,setTimeout(function(){this.getList(),this.$refs.myscroller.finishPullToRefresh()}.bind(this),1500)}}},d={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"productContent"}},[""!=t.dataList?[s("scroller",{ref:"myscroller",attrs:{"on-refresh":t.refresh,"on-infinite":t.infinite}},[s("div",t._l(t.dataList,function(i){return s("div",{key:i.index},[s("cell-box",{attrs:{"is-link":"",link:{name:"productDetails",params:{id:i.goods_id}}}},[s("div",{staticClass:"cellBox"},[s("div",{class:[4==i.shelf_status?"isShowGray":""]},[s("div",{staticClass:"fontSize32 headline"},[t._v("\n                  "+t._s(i.goods_name)+"\n                ")]),t._v(" "),s("div",{staticClass:"fontSize20 label"},t._l(i.tag,function(i){return s("span",{key:i},[t._v(t._s(i))])}),0),t._v(" "),s("div",{staticClass:"cellBoxData"},[s("div",{staticClass:"dataLeft"},[s("div",{staticClass:"bigData"},[t._v(t._s(i.back))]),t._v(" "),s("div",{staticClass:"fontSize24"},[t._v("产出回报率")])]),t._v(" "),s("div",{staticClass:"vux-1px-l",staticStyle:{height:"40px",margin:"auto"}}),t._v(" "),s("div",{staticClass:"dataRight"},[s("span",[s("div",[s("i",{staticClass:"fontSize32",staticStyle:{"font-weight":"bold"}},[t._v(t._s(parseFloat(i.price)))]),s("i",{staticClass:"fontSize28"},[t._v("元/份")])]),t._v(" "),s("div",{staticClass:"fontSize24"},[t._v("单份价格")])]),t._v(" "),s("span",[s("div",[s("i",{staticClass:"fontSize32",staticStyle:{"font-weight":"bold"}},[t._v(t._s(i.contract_cycle))]),s("i",{staticClass:"fontSize28"},[t._v("天")])]),t._v(" "),s("div",{staticClass:"fontSize24"},[t._v("周期")])])])])])]),t._v(" "),1==i.state?[s("div",{staticClass:"yishouwanIcon"},[s("img",{attrs:{src:t.Icon,alt:""}})])]:t._e()],2)],1)}),0)])]:[s("div",{staticClass:"noConten"},[s("img",{attrs:{src:t.noConten,alt:""}}),t._v(" "),s("div",[t._v("暂无数据")])])],t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"loadingImg",attrs:{src:t.loading,alt:""}})],2)},staticRenderFns:[]};var v=s("VU/8")(l,d,!1,function(t){s("734Y")},"data-v-62143bda",null).exports,u={data:function(){return{tabIndex:0,active:0,currentView:"productList",tabs:[{type:"稳健",view:"productList"}]}},components:{productList:v},methods:{toggle:function(t,i){this.active=t,this.currentView=i}}},f={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"product"},[s("div",{staticClass:"tabMain"},[s("tab",{attrs:{"line-width":3,"custom-bar-width":"20px"},model:{value:t.tabIndex,callback:function(i){t.tabIndex=i},expression:"tabIndex"}},[t._l(t.tabs,function(i,a){return[s("tab-item",{key:a,attrs:{selected:t.active==a},on:{"on-item-click":function(s){return t.toggle(a,i.view)}}},[t._v(t._s(i.type))])]})],2)],1),t._v(" "),s(t.currentView,{tag:"component"})],1)},staticRenderFns:[]};var h=s("VU/8")(u,f,!1,function(t){s("FTcw")},"data-v-3aa6c564",null);i.default=h.exports}});
//# sourceMappingURL=13.6f8f3209b13397437363.js.map