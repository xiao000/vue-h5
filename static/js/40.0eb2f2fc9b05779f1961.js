webpackJsonp([40],{"0Ez0":function(a,t){},q28K:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{list:{add_time:"0",addr:"",affair_name:"",affair_type:"",amount:"0.00000000",chain:"",coin_type:"",goods_name:"",property_record_id:"",provide_num:""}}},filters:{formatDate:function(a){var t=new Date(1e3*a),s=t.getFullYear(),i=t.getMonth()+1;i=i<10?"0"+i:i;var e=t.getDate();e=e<10?"0"+e:e;var l=t.getHours();l=l<10?"0"+l:l;var _=t.getMinutes();_=_<10?"0"+_:_;var n=t.getSeconds();return s+"-"+i+"-"+e+" "+l+":"+_+":"+(n=n<10?"0"+n:n)},uppercase:function(a){return a?a.toUpperCase():""}},mounted:function(){this.getData()},methods:{getData:function(){var a=this,t={sign:a.$store.state.user.sign,access_token:a.$store.state.user.token,property_record_id:a.$route.params.id};a.$request({method:"POST",url:a.$baseURL+"/wallet/balance-record-detail",data:a.$qs.stringify(t)}).then(function(t){a.list=t.data}).catch(function(a){console.log(a)})}}},e={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"walletDetail"},[s("div",{staticClass:"title"},[1==a.list.affair_type||2==a.list.affair_type||3==a.list.affair_type?[a._v("\n      "+a._s(a.list.goods_name)+"\n    ")]:a._e(),a._v(" "),4==a.list.affair_type||5==a.list.affair_type||6==a.list.affair_type||7==a.list.affair_type||8==a.list.affair_type||9==a.list.affair_type?[a._v("\n      "+a._s(a.list.affair_name)+"\n    ")]:a._e()],2),a._v(" "),s("div",[s("span",{staticClass:"label"},[a._v("ID")]),s("span",{staticClass:"dataVal"},[a._v(a._s(a.list.property_record_id))])]),a._v(" "),s("div",[s("span",{staticClass:"label"},[a._v("事项")]),s("span",{staticClass:"dataVal"},[1==a.list.affair_type||2==a.list.affair_type||3==a.list.affair_type?[a._v(a._s(a.list.goods_name)+"\n      ")]:a._e(),a._v(" "),4==a.list.affair_type||5==a.list.affair_type||6==a.list.affair_type||7==a.list.affair_type||8==a.list.affair_type||9==a.list.affair_type?[a._v(a._s(a.list.affair_name)+"\n      ")]:a._e()],2)]),a._v(" "),s("div",[s("span",{staticClass:"label"},[a._v("时间")]),s("span",{staticClass:"dataVal"},[a._v(a._s(a._f("formatDate")(a.list.add_time)))])]),a._v(" "),s("div",[s("span",{staticClass:"label"},[a._v("数量")]),s("span",{staticClass:"dataVal"},[a._v(a._s(a.list.provide_num)+" "+a._s(a._f("uppercase")(a.list.coin_type)))])]),a._v(" "),5==a.list.affair_type?s("div",[s("span",{staticClass:"label"},[a._v("提币")]),s("span",{staticClass:"dataVal"},[a._v(a._s(a.list.amount)+" "+a._s(a._f("uppercase")(a.list.coin_type)))])]):a._e(),a._v(" "),s("div",[s("span",{staticClass:"label"},[a._v("状态")]),s("span",{staticClass:"dataVal"},[1==a.list.pay_status?[s("i",{staticStyle:{color:"#F55033"}},[a._v("待支付")])]:2==a.list.pay_status?[a._v("\n        待确认到账\n      ")]:3==a.list.pay_status?[a._v("\n        支付成功\n      ")]:4==a.list.pay_status?[s("i",{staticStyle:{"#color":"FF0000"}},[a._v("支付失败")])]:5==a.list.pay_status?[a._v("\n        已取消\n      ")]:a._e()],2)]),a._v(" "),5==a.list.affair_type?[s("div",[s("span",{staticClass:"label"},[a._v("地址")]),s("span",{staticClass:"dataVal"},[a._v(a._s(a.list.addr))])]),a._v(" "),s("div",[s("span",{staticClass:"label"},[a._v("币链")]),s("span",{staticClass:"dataVal"},[a._v(a._s(a.list.chain))])])]:a._e()],2)},staticRenderFns:[]};var l=s("VU/8")(i,e,!1,function(a){s("0Ez0")},"data-v-48af663a",null);t.default=l.exports}});
//# sourceMappingURL=40.0eb2f2fc9b05779f1961.js.map